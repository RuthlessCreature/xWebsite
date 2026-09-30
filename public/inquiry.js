(() => {
  const form=document.querySelector("[data-inquiry-form]");
  if(!form) return;

  const submit=form.querySelector("[data-submit]");
  const result=form.querySelector("[data-result]");
  const fileInput=form.querySelector("[data-files]");
  const fileList=form.querySelector("[data-file-list]");
  const originalSubmit=submit?.textContent || "";

  const fmtBytes=(n)=>{
    if(n<1024) return n+" B";
    if(n<1024*1024) return (n/1024).toFixed(1)+" KB";
    return (n/(1024*1024)).toFixed(2)+" MB";
  };

  const renderFiles=()=>{
    if(!fileList||!fileInput) return;
    const files=[...(fileInput.files||[])];
    const total=files.reduce((n,f)=>n+f.size,0);
    fileList.innerHTML=files.length
      ? files.map(f=>`<em>${f.name} · ${fmtBytes(f.size)}</em>`).join("")+`<b>Total · ${fmtBytes(total)}</b>`
      : "";
    fileList.classList.toggle("file-warning",files.length>5||total>4*1024*1024);
  };

  fileInput?.addEventListener("change",renderFiles);

  form.addEventListener("submit",async(event)=>{
    event.preventDefault();
    result.hidden=true;
    result.innerHTML="";

    if(!form.reportValidity()){
      result.hidden=false;
      result.className="inquiry-result error";
      result.textContent=form.dataset.required || "Please complete required fields.";
      return;
    }

    const files=[...(fileInput?.files||[])];
    const total=files.reduce((n,f)=>n+f.size,0);
    if(files.length>5||total>4*1024*1024){
      result.hidden=false;
      result.className="inquiry-result error";
      result.textContent=form.dataset.required || "Please review file limits.";
      return;
    }

    if(submit){
      submit.disabled=true;
      submit.textContent=form.dataset.sending || "Submitting…";
    }

    try{
      const response=await fetch("/api/inquiry",{method:"POST",body:new FormData(form),headers:{"Accept":"application/json"}});
      const data=await response.json();
      if(!response.ok||!data.ok) throw new Error(data.error||"submit_failed");

      const idLabel=form.dataset.idLabel||"Inquiry ID";
      const title=form.dataset.success||"Inquiry created";
      const message=data.emailSent ? (form.dataset.emailed||"Sent.") : (form.dataset.fallback||"Email fallback required.");
      const attachNote=(data.files||[]).length ? `<p class="result-note">${form.dataset.attachNote||""}</p>` : "";
      const emailButton=!data.emailSent&&data.fallbackMailto
        ? `<a class="btn result-primary" href="${data.fallbackMailto}">${form.dataset.openEmail||"Open Email Client"} →</a>`
        : "";
      const copyButton=data.summary
        ? `<button class="btn result-secondary" type="button" data-copy-summary>${form.dataset.copy||"Copy Project Summary"}</button>`
        : "";

      result.className="inquiry-result success";
      result.hidden=false;
      result.innerHTML=`
        <span class="result-kicker">${title}</span>
        <strong>${idLabel}: ${data.inquiryId}</strong>
        <p>${message}</p>
        ${attachNote}
        <div class="result-actions">${emailButton}${copyButton}</div>
      `;

      result.querySelector("[data-copy-summary]")?.addEventListener("click",async(e)=>{
        try{
          await navigator.clipboard.writeText(data.summary||"");
          e.currentTarget.textContent=form.dataset.copied||"Copied";
        }catch{}
      });

      result.scrollIntoView({behavior:"smooth",block:"center"});
    }catch(error){
      result.hidden=false;
      result.className="inquiry-result error";
      result.textContent="Submission failed. Please email Yusuf directly at abd.yusuf.ibrahim.mustafa@gmail.com.";
    }finally{
      if(submit){
        submit.disabled=false;
        submit.textContent=originalSubmit;
      }
    }
  });
})();
