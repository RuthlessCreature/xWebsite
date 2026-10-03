const BASE = "https://xiaodu.tech";

const LANGS = {
  "zh-cn": { asset: "zh-CN", label: "简中" },
  "zh-tw": { asset: "zh-TW", label: "繁中" },
  "en": { asset: "en", label: "EN" },
  "ja": { asset: "ja", label: "日本語" },
  "es": { asset: "es", label: "ES" },
  "pt": { asset: "pt", label: "PT" },
  "ru": { asset: "ru", label: "RU" }
};

const SOLUTIONS = [
  { slug:"robotic-automation", id:"1", image:"https://images.pexels.com/photos/18471441/pexels-photo-18471441/free-photo-of-robots-are-working-in-a-factory-with-a-machine.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"machine-vision", id:"2", image:"https://images.pexels.com/photos/29320998/pexels-photo-29320998/free-photo-of-advanced-robotic-arm-in-mexico-city-laboratory.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"automated-sampling-lab", id:"3", image:"https://images.pexels.com/photos/32778341/pexels-photo-32778341/free-photo-of-advanced-robotic-automation-in-laboratory.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"custom-equipment-integration", id:"4", image:"https://images.pexels.com/photos/34222005/pexels-photo-34222005/free-photo-of-automated-factory-conveyor-system-in-operation.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"industrial-software-data", id:"5", image:"https://images.pexels.com/photos/32845700/pexels-photo-32845700/free-photo-of-engineer-at-control-room-monitoring-screens.jpeg?auto=compress&dpr=1&h=900&w=1600" },
  { slug:"intelligent-workflow-automation", id:"6", image:"https://images.pexels.com/photos/32529341/pexels-photo-32529341/free-photo-of-advanced-control-room-in-el-agustino-lima.jpeg?auto=compress&dpr=1&h=900&w=1600" }
];

const INDUSTRIES = [
  { slug:"mining-bulk-materials", key:"mining", cases:["1","5"], solutions:["3","4","5"] },
  { slug:"precision-manufacturing", key:"manufacturing", cases:["2","4"], solutions:["1","2","4"] },
  { slug:"laboratory-automation", key:"laboratory", cases:["3","1"], solutions:["1","3","5"] },
  { slug:"logistics-warehousing", key:"logistics", cases:["7","8"], solutions:["1","2","5"] },
  { slug:"process-heavy-industry", key:"heavy", cases:["5","6","8"], solutions:["4","5","6"] }
];

const CASES = [
  { slug:"automated-coal-mineral-sampling", id:"1", image:"https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=1600", related:["3","5"], scope:["solution.3.a","solution.3.b","solution.3.c","solution.5.b"] },
  { slug:"robot-machine-tending-inspection", id:"2", image:"https://images.pexels.com/photos/18471441/pexels-photo-18471441/free-photo-of-robots-are-working-in-a-factory-with-a-machine.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","2"], scope:["solution.1.a","solution.1.b","solution.2.b","solution.2.c"] },
  { slug:"laboratory-robotic-automation", id:"3", image:"https://images.pexels.com/photos/32778341/pexels-photo-32778341/free-photo-of-advanced-robotic-automation-in-laboratory.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","3"], scope:["solution.3.b","solution.3.c","solution.1.b","solution.1.c"] },
  { slug:"flexible-robotic-workstation", id:"4", image:"https://images.pexels.com/photos/29320998/pexels-photo-29320998/free-photo-of-advanced-robotic-arm-in-mexico-city-laboratory.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","4"], scope:["solution.1.a","solution.1.b","solution.1.c","solution.4.a"] },
  { slug:"conveyor-robot-retrofit", id:"5", image:"https://images.pexels.com/photos/34222005/pexels-photo-34222005/free-photo-of-automated-factory-conveyor-system-in-operation.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","4"], scope:["solution.4.b","solution.4.c","solution.1.b","solution.1.c"] },
  { slug:"production-equipment-data-platform", id:"6", image:"https://images.pexels.com/photos/32845700/pexels-photo-32845700/free-photo-of-engineer-at-control-room-monitoring-screens.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["5","6"], scope:["solution.5.a","solution.5.b","solution.5.c","solution.6.b"] },
  { slug:"warehouse-vision-handling", id:"7", image:"https://images.pexels.com/photos/36522028/pexels-photo-36522028/free-photo-of-automated-warehouse-robotic-system-with-blue-crates.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["1","2"], scope:["solution.1.a","solution.1.b","solution.2.a","solution.2.c"] },
  { slug:"remote-monitoring-service", id:"8", image:"https://images.pexels.com/photos/32529341/pexels-photo-32529341/free-photo-of-advanced-control-room-in-el-agustino-lima.jpeg?auto=compress&dpr=1&h=900&w=1600", related:["5","6"], scope:["solution.5.a","solution.5.c","solution.6.b","solution.6.c"] }
];

const UI = {
  "zh-cn": {home:"首页", solutions:"解决方案", cases:"项目案例", process:"交付流程", about:"关于我们", contact:"联系我们", scope:"典型交付范围", delivery:"项目如何推进", relatedCases:"相关项目案例", relatedSolutions:"相关解决方案", discuss:"讨论你的项目", ctaTitle:"把现场照片、图纸或需求发给 Yusuf。", ctaText:"先判断能不能做、怎么做、风险在哪里，再进入正式方案。", back:"返回首页", global:"面向海外项目交付", project:"项目案例", solution:"解决方案", contactYusuf:"联系 Yusuf"},
  "zh-tw": {home:"首頁", solutions:"解決方案", cases:"專案案例", process:"交付流程", about:"關於我們", contact:"聯絡我們", scope:"典型交付範圍", delivery:"專案如何推進", relatedCases:"相關專案案例", relatedSolutions:"相關解決方案", discuss:"討論你的專案", ctaTitle:"把現場照片、圖紙或需求發給 Yusuf。", ctaText:"先判斷能不能做、怎麼做、風險在哪裡，再進入正式方案。", back:"返回首頁", global:"面向海外專案交付", project:"專案案例", solution:"解決方案", contactYusuf:"聯絡 Yusuf"},
  "en": {home:"Home", solutions:"Solutions", cases:"Projects", process:"Delivery", about:"About", contact:"Contact", scope:"Typical Delivery Scope", delivery:"How the Project Moves Forward", relatedCases:"Related Project Cases", relatedSolutions:"Related Solutions", discuss:"Discuss Your Project", ctaTitle:"Send Yusuf your site photos, drawings or requirements.", ctaText:"We assess feasibility, approach and risk first, then move into a formal proposal.", back:"Back to Home", global:"Built for International Project Delivery", project:"Project Case", solution:"Solution", contactYusuf:"Contact Yusuf"},
  "ja": {home:"ホーム", solutions:"ソリューション", cases:"プロジェクト事例", process:"導入プロセス", about:"会社情報", contact:"お問い合わせ", scope:"主な納入範囲", delivery:"プロジェクトの進め方", relatedCases:"関連プロジェクト", relatedSolutions:"関連ソリューション", discuss:"プロジェクトを相談", ctaTitle:"現場写真、図面、要件を Yusuf へお送りください。", ctaText:"実現可能性、方法、リスクを整理してから正式提案へ進みます。", back:"ホームへ戻る", global:"海外プロジェクト対応", project:"プロジェクト事例", solution:"ソリューション", contactYusuf:"Yusuf に連絡"},
  "es": {home:"Inicio", solutions:"Soluciones", cases:"Proyectos", process:"Entrega", about:"Nosotros", contact:"Contacto", scope:"Alcance típico de entrega", delivery:"Cómo avanza el proyecto", relatedCases:"Proyectos relacionados", relatedSolutions:"Soluciones relacionadas", discuss:"Hablemos de su proyecto", ctaTitle:"Envíe a Yusuf fotos de planta, planos o requisitos.", ctaText:"Primero evaluamos viabilidad, enfoque y riesgos; después preparamos la propuesta formal.", back:"Volver al inicio", global:"Preparados para proyectos internacionales", project:"Caso de proyecto", solution:"Solución", contactYusuf:"Contactar con Yusuf"},
  "pt": {home:"Início", solutions:"Soluções", cases:"Projetos", process:"Entrega", about:"Sobre nós", contact:"Contato", scope:"Escopo típico de entrega", delivery:"Como o projeto avança", relatedCases:"Projetos relacionados", relatedSolutions:"Soluções relacionadas", discuss:"Fale sobre seu projeto", ctaTitle:"Envie para Yusuf fotos da planta, desenhos ou requisitos.", ctaText:"Primeiro avaliamos viabilidade, abordagem e riscos; depois avançamos para a proposta formal.", back:"Voltar ao início", global:"Preparados para projetos internacionais", project:"Caso de projeto", solution:"Solução", contactYusuf:"Falar com Yusuf"},
  "ru": {home:"Главная", solutions:"Решения", cases:"Проекты", process:"Реализация", about:"О компании", contact:"Контакты", scope:"Типовой объём поставки", delivery:"Как ведётся проект", relatedCases:"Связанные проекты", relatedSolutions:"Связанные решения", discuss:"Обсудить проект", ctaTitle:"Пришлите Yusuf фото площадки, чертежи или требования.", ctaText:"Сначала оцениваем реализуемость, подход и риски, затем готовим формальное предложение.", back:"На главную", global:"Готовы к международным проектам", project:"Проектный кейс", solution:"Решение", contactYusuf:"Связаться с Yusuf"}
};

const INQUIRY_UI = {
  "zh-cn": {
    title:"告诉我们你的项目", intro:"有现场照片、图纸、设备清单或一个还没完全想清楚的需求，都可以先发。我们先判断可行性、边界和主要风险。",
    eyebrow:"PROJECT INQUIRY", basics:"基本信息", project:"项目需求", files:"项目资料", company:"公司名称", name:"联系人", email:"邮箱", phone:"电话 / WhatsApp / 微信", country:"国家 / 地区",
    type:"项目类型", budget:"预算范围", timeline:"期望时间", contact:"首选联系方式", description:"请描述现场、问题、目标和已知约束", upload:"上传现场照片 / PDF / 图纸 / 资料", uploadHint:"最多 5 个文件；自动邮件模式下附件总量不超过 4 MB。STEP/DWG 等大文件可先提交询盘后再邮件发送。",
    consent:"我同意珠海小度智能科技有限公司使用这些信息与我联系并评估项目。", submit:"提交项目询盘", sending:"正在提交…", required:"请填写必填项并同意联系。",
    success:"询盘已生成", emailed:"项目资料已自动发送给 Yusuf。", fallback:"Cloudflare 邮件通道尚未启用。询盘编号已生成，请点下面按钮打开邮件客户端完成发送。",
    openEmail:"打开邮件客户端", copy:"复制项目摘要", copied:"已复制", attachNote:"如果你选择了附件，请在邮件客户端里把这些文件重新附上。",
    id:"询盘编号", direct:"也可以直接联系 Yusuf", projectTypes:["机器人自动化","机器视觉与检测","自动取制样 / 实验室自动化","定制设备 / 产线集成","工业软件 / 数据平台","流程自动化","其他"],
    budgets:["待评估","USD 10k 以下","USD 10k–50k","USD 50k–200k","USD 200k–500k","USD 500k 以上"],
    timelines:["待评估","1个月内","1–3个月","3–6个月","6–12个月","12个月以上"]
  },
  "zh-tw": {
    title:"告訴我們你的專案", intro:"有現場照片、圖紙、設備清單或尚未完全定義的需求，都可以先發。我們先判斷可行性、邊界與主要風險。",
    eyebrow:"PROJECT INQUIRY", basics:"基本資訊", project:"專案需求", files:"專案資料", company:"公司名稱", name:"聯絡人", email:"Email", phone:"電話 / WhatsApp / 微信", country:"國家 / 地區",
    type:"專案類型", budget:"預算範圍", timeline:"期望時間", contact:"首選聯絡方式", description:"請描述現場、問題、目標與已知限制", upload:"上傳現場照片 / PDF / 圖紙 / 資料", uploadHint:"最多 5 個檔案；自動郵件模式下附件總量不超過 4 MB。STEP/DWG 等大檔案可先提交詢盤後再寄送。",
    consent:"我同意珠海小度智能科技有限公司使用這些資訊與我聯絡並評估專案。", submit:"提交專案詢盤", sending:"正在提交…", required:"請填寫必填欄位並同意聯絡。",
    success:"詢盤已建立", emailed:"專案資料已自動寄給 Yusuf。", fallback:"Cloudflare 郵件通道尚未啟用。詢盤編號已建立，請點下方按鈕開啟郵件客戶端完成寄送。",
    openEmail:"開啟郵件客戶端", copy:"複製專案摘要", copied:"已複製", attachNote:"如果你選擇了附件，請在郵件客戶端重新附上這些檔案。",
    id:"詢盤編號", direct:"也可以直接聯絡 Yusuf", projectTypes:["機器人自動化","機器視覺與檢測","自動取製樣 / 實驗室自動化","客製設備 / 產線整合","工業軟體 / 資料平台","流程自動化","其他"],
    budgets:["待評估","USD 10k 以下","USD 10k–50k","USD 50k–200k","USD 200k–500k","USD 500k 以上"],
    timelines:["待評估","1個月內","1–3個月","3–6個月","6–12個月","12個月以上"]
  },
  "en": {
    title:"Tell us about your project", intro:"Send site photos, drawings, an equipment list, or even an early-stage requirement. We will first assess feasibility, boundaries and the main engineering risks.",
    eyebrow:"PROJECT INQUIRY", basics:"Contact Details", project:"Project Requirements", files:"Project Files", company:"Company", name:"Contact Name", email:"Email", phone:"Phone / WhatsApp / WeChat", country:"Country / Region",
    type:"Project Type", budget:"Budget Range", timeline:"Target Timeline", contact:"Preferred Contact", description:"Describe the site, problem, target outcome and known constraints", upload:"Upload site photos / PDF / drawings / project files", uploadHint:"Up to 5 files; automatic email mode supports up to 4 MB total attachments. Large STEP/DWG files can be sent separately after the inquiry is created.",
    consent:"I agree that Zhuhai Xiaodu Intelligent Technology may use this information to contact me and assess the project.", submit:"Submit Project Inquiry", sending:"Submitting…", required:"Please complete the required fields and consent to contact.",
    success:"Inquiry created", emailed:"The project information has been sent to Yusuf automatically.", fallback:"Cloudflare email delivery is not enabled yet. Your inquiry ID has been created; use the button below to send the prepared email.",
    openEmail:"Open Email Client", copy:"Copy Project Summary", copied:"Copied", attachNote:"If you selected files, please attach them again in your email client.",
    id:"Inquiry ID", direct:"You can also contact Yusuf directly", projectTypes:["Robotic Automation","Machine Vision & Inspection","Automated Sampling / Laboratory Automation","Custom Equipment / Line Integration","Industrial Software / Data Platform","Workflow Automation","Other"],
    budgets:["To be assessed","Under USD 10k","USD 10k–50k","USD 50k–200k","USD 200k–500k","Above USD 500k"],
    timelines:["To be assessed","Within 1 month","1–3 months","3–6 months","6–12 months","More than 12 months"]
  },
  "ja": {
    title:"プロジェクトについてお聞かせください", intro:"現場写真、図面、設備リスト、まだ整理途中の要件でも構いません。まず実現可能性、範囲、主要リスクを確認します。",
    eyebrow:"PROJECT INQUIRY", basics:"基本情報", project:"プロジェクト要件", files:"プロジェクト資料", company:"会社名", name:"ご担当者", email:"メール", phone:"電話 / WhatsApp / WeChat", country:"国 / 地域",
    type:"プロジェクト種別", budget:"予算範囲", timeline:"希望時期", contact:"希望連絡方法", description:"現場、課題、目標、既知の制約をご記入ください", upload:"現場写真 / PDF / 図面 / 資料をアップロード", uploadHint:"最大5ファイル。自動メール時の添付合計は4MBまで。大きなSTEP/DWGファイルは問い合わせ作成後に別送できます。",
    consent:"珠海小度智能科技有限公司が本情報を使用して連絡し、プロジェクトを評価することに同意します。", submit:"プロジェクト相談を送信", sending:"送信中…", required:"必須項目と連絡への同意をご確認ください。",
    success:"問い合わせを作成しました", emailed:"プロジェクト情報は Yusuf に自動送信されました。", fallback:"Cloudflareのメール送信はまだ有効化されていません。問い合わせ番号は作成済みです。下のボタンからメールを送信してください。",
    openEmail:"メールを開く", copy:"プロジェクト概要をコピー", copied:"コピー済み", attachNote:"ファイルを選択した場合は、メールソフトで再度添付してください。",
    id:"問い合わせ番号", direct:"Yusuf へ直接ご連絡いただけます", projectTypes:["ロボット自動化","マシンビジョン・検査","自動サンプリング / ラボ自動化","専用設備 / ライン統合","産業ソフトウェア / データ基盤","業務フロー自動化","その他"],
    budgets:["要評価","USD 10k 未満","USD 10k–50k","USD 50k–200k","USD 200k–500k","USD 500k 以上"],
    timelines:["要評価","1か月以内","1–3か月","3–6か月","6–12か月","12か月以上"]
  },
  "es": {
    title:"Cuéntenos su proyecto", intro:"Puede enviar fotos de planta, planos, una lista de equipos o incluso un requisito aún inicial. Primero evaluaremos viabilidad, alcance y riesgos principales.",
    eyebrow:"PROJECT INQUIRY", basics:"Datos de contacto", project:"Requisitos del proyecto", files:"Archivos del proyecto", company:"Empresa", name:"Contacto", email:"Email", phone:"Teléfono / WhatsApp / WeChat", country:"País / Región",
    type:"Tipo de proyecto", budget:"Presupuesto", timeline:"Plazo objetivo", contact:"Contacto preferido", description:"Describa planta, problema, objetivo y restricciones conocidas", upload:"Subir fotos / PDF / planos / archivos", uploadHint:"Hasta 5 archivos; el modo de email automático admite hasta 4 MB en total. Los archivos STEP/DWG grandes pueden enviarse después.",
    consent:"Acepto que Zhuhai Xiaodu Intelligent Technology utilice esta información para contactarme y evaluar el proyecto.", submit:"Enviar consulta", sending:"Enviando…", required:"Complete los campos obligatorios y acepte el contacto.",
    success:"Consulta creada", emailed:"La información del proyecto se ha enviado automáticamente a Yusuf.", fallback:"El envío de correo de Cloudflare aún no está habilitado. Su ID ya fue creado; use el botón para enviar el correo preparado.",
    openEmail:"Abrir correo", copy:"Copiar resumen", copied:"Copiado", attachNote:"Si seleccionó archivos, vuelva a adjuntarlos en su cliente de correo.",
    id:"ID de consulta", direct:"También puede contactar directamente con Yusuf", projectTypes:["Automatización robótica","Visión artificial e inspección","Muestreo / laboratorio automatizado","Equipos especiales / integración de línea","Software industrial / plataforma de datos","Automatización de flujos","Otro"],
    budgets:["Por evaluar","Menos de USD 10k","USD 10k–50k","USD 50k–200k","USD 200k–500k","Más de USD 500k"],
    timelines:["Por evaluar","Dentro de 1 mes","1–3 meses","3–6 meses","6–12 meses","Más de 12 meses"]
  },
  "pt": {
    title:"Conte-nos sobre seu projeto", intro:"Envie fotos da planta, desenhos, lista de equipamentos ou até um requisito ainda inicial. Primeiro avaliamos viabilidade, limites e principais riscos.",
    eyebrow:"PROJECT INQUIRY", basics:"Dados de contato", project:"Requisitos do projeto", files:"Arquivos do projeto", company:"Empresa", name:"Contato", email:"Email", phone:"Telefone / WhatsApp / WeChat", country:"País / Região",
    type:"Tipo de projeto", budget:"Faixa de orçamento", timeline:"Prazo desejado", contact:"Contato preferido", description:"Descreva a planta, problema, objetivo e restrições conhecidas", upload:"Enviar fotos / PDF / desenhos / arquivos", uploadHint:"Até 5 arquivos; o modo de email automático aceita até 4 MB no total. Arquivos STEP/DWG grandes podem ser enviados depois.",
    consent:"Concordo que a Zhuhai Xiaodu Intelligent Technology use estas informações para entrar em contato e avaliar o projeto.", submit:"Enviar consulta", sending:"Enviando…", required:"Preencha os campos obrigatórios e aceite o contato.",
    success:"Consulta criada", emailed:"As informações do projeto foram enviadas automaticamente para Yusuf.", fallback:"O envio de email pelo Cloudflare ainda não está habilitado. Seu ID já foi criado; use o botão abaixo para enviar o email preparado.",
    openEmail:"Abrir email", copy:"Copiar resumo", copied:"Copiado", attachNote:"Se selecionou arquivos, anexe-os novamente no cliente de email.",
    id:"ID da consulta", direct:"Você também pode falar diretamente com Yusuf", projectTypes:["Automação robótica","Visão computacional e inspeção","Amostragem / laboratório automatizado","Equipamentos especiais / integração de linha","Software industrial / plataforma de dados","Automação de fluxo","Outro"],
    budgets:["A avaliar","Abaixo de USD 10k","USD 10k–50k","USD 50k–200k","USD 200k–500k","Acima de USD 500k"],
    timelines:["A avaliar","Dentro de 1 mês","1–3 meses","3–6 meses","6–12 meses","Mais de 12 meses"]
  },
  "ru": {
    title:"Расскажите о вашем проекте", intro:"Можно прислать фото площадки, чертежи, список оборудования или даже предварительные требования. Сначала мы оценим реализуемость, границы и основные риски.",
    eyebrow:"PROJECT INQUIRY", basics:"Контактные данные", project:"Требования проекта", files:"Файлы проекта", company:"Компания", name:"Контактное лицо", email:"Email", phone:"Телефон / WhatsApp / WeChat", country:"Страна / Регион",
    type:"Тип проекта", budget:"Бюджет", timeline:"Желаемый срок", contact:"Предпочтительный канал", description:"Опишите площадку, проблему, цель и известные ограничения", upload:"Загрузить фото / PDF / чертежи / файлы", uploadHint:"До 5 файлов; в режиме автоматической почты общий размер вложений до 4 МБ. Большие STEP/DWG можно отправить отдельно.",
    consent:"Я согласен, что Zhuhai Xiaodu Intelligent Technology использует эти данные для связи со мной и оценки проекта.", submit:"Отправить запрос", sending:"Отправка…", required:"Заполните обязательные поля и подтвердите согласие на связь.",
    success:"Запрос создан", emailed:"Информация по проекту автоматически отправлена Yusuf.", fallback:"Отправка почты Cloudflare пока не включена. Номер запроса создан; используйте кнопку ниже для отправки подготовленного письма.",
    openEmail:"Открыть почту", copy:"Копировать описание", copied:"Скопировано", attachNote:"Если вы выбрали файлы, приложите их повторно в почтовом клиенте.",
    id:"Номер запроса", direct:"Также можно связаться с Yusuf напрямую", projectTypes:["Роботизация","Машинное зрение и контроль","Автоотбор проб / лабораторная автоматизация","Спецоборудование / интеграция линий","Промышленное ПО / платформа данных","Автоматизация процессов","Другое"],
    budgets:["Оценить позже","До USD 10k","USD 10k–50k","USD 50k–200k","USD 200k–500k","Свыше USD 500k"],
    timelines:["Оценить позже","До 1 месяца","1–3 месяца","3–6 месяцев","6–12 месяцев","Более 12 месяцев"]
  }
};

const DETAIL_UI = {
  "zh-cn": {
    industriesTitle:"行业应用", industriesIntro:"按行业查看我们如何把自动化、视觉、控制和软件组合成完整项目。", industryLabel:"行业解决方案", industryCases:"相关行业项目", industrySolutions:"推荐解决方案", industryNames:{mining:"矿业与大宗物料",manufacturing:"精密制造",laboratory:"实验室自动化",logistics:"物流与仓储",heavy:"流程与重工业"},
        challenge:"客户场景与核心问题", architecture:"系统方案", scope:"主要系统组成", acceptance:"验收关注点",
    deliverables:"客户最终拿到什么", fit:"适合什么样的项目", casesTitle:"海外项目案例库", casesIntro:"按行业和应用场景查看项目思路、系统组成和交付方式。",
    solutionsTitle:"解决方案中心", solutionsIntro:"围绕工业现场，把机器人、视觉、自动化设备、控制和软件组合成可交付系统。",
    projectFacts:"项目概览", market:"市场 / 行业", application:"应用场景", deliveryModel:"交付模式", turnkey:"定制工程 + 系统集成",
    keyPoints:["功能和节拍按约定工况验证","异常、联锁和恢复逻辑必须可测试","设备接口与数据记录可追溯","FAT / SAT、培训和技术资料完整交付"],
    clientGets:["完整方案与接口边界","机械 / 电气 / 控制 / 软件协同交付","出厂测试与现场验收支持","技术文档、培训与后续运维接口"],
    faqTitle:"常见项目问题",
    faqs:[
      ["没有完整技术规格书，可以先沟通吗？","可以。现场照片、视频、现有设备清单、目标节拍和主要痛点就足以开始第一轮技术判断。"],
      ["海外项目怎么做前期沟通？","通常先远程澄清需求和接口，再确认方案、交付边界、FAT / SAT 和现场支持方式。"],
      ["能否对接客户现有 PLC、设备或业务系统？","可以，前提是前期明确通讯协议、信号表、数据接口和责任边界。"],
      ["如何减少项目后期扯皮？","在设计前把输入输出、异常工况、验收标准、交付资料和变更机制写清楚。"]
    ]
  },
  "zh-tw": {
    industriesTitle:"產業應用", industriesIntro:"依產業查看我們如何把自動化、視覺、控制與軟體組合成完整專案。", industryLabel:"產業解決方案", industryCases:"相關產業專案", industrySolutions:"推薦解決方案", industryNames:{mining:"礦業與大宗物料",manufacturing:"精密製造",laboratory:"實驗室自動化",logistics:"物流與倉儲",heavy:"流程與重工業"},
        challenge:"客戶場景與核心問題", architecture:"系統方案", scope:"主要系統組成", acceptance:"驗收關注點",
    deliverables:"客戶最終拿到什麼", fit:"適合什麼樣的專案", casesTitle:"海外專案案例庫", casesIntro:"依產業與應用場景查看專案思路、系統組成與交付方式。",
    solutionsTitle:"解決方案中心", solutionsIntro:"圍繞工業現場，把機器人、視覺、自動化設備、控制與軟體組合成可交付系統。",
    projectFacts:"專案概覽", market:"市場 / 產業", application:"應用場景", deliveryModel:"交付模式", turnkey:"客製工程 + 系統整合",
    keyPoints:["功能與節拍依約定工況驗證","異常、聯鎖與恢復邏輯必須可測試","設備介面與資料紀錄可追溯","FAT / SAT、培訓與技術資料完整交付"],
    clientGets:["完整方案與介面邊界","機械 / 電氣 / 控制 / 軟體協同交付","出廠測試與現場驗收支援","技術文件、培訓與後續運維介面"],
    faqTitle:"常見專案問題",
    faqs:[
      ["沒有完整技術規格書，可以先溝通嗎？","可以。現場照片、影片、既有設備清單、目標節拍與主要痛點就足以開始第一輪技術判斷。"],
      ["海外專案怎麼做前期溝通？","通常先遠端澄清需求與介面，再確認方案、交付邊界、FAT / SAT 與現場支援方式。"],
      ["能否對接客戶既有 PLC、設備或業務系統？","可以，前提是前期明確通訊協議、信號表、資料介面與責任邊界。"],
      ["如何減少專案後期爭議？","在設計前把輸入輸出、異常工況、驗收標準、交付資料與變更機制寫清楚。"]
    ]
  },
  "en": {
    industriesTitle:"Industries We Serve", industriesIntro:"See how automation, vision, controls and software are combined for specific industrial environments.", industryLabel:"Industry Solution", industryCases:"Relevant Project Cases", industrySolutions:"Recommended Solutions", industryNames:{mining:"Mining & Bulk Materials",manufacturing:"Precision Manufacturing",laboratory:"Laboratory Automation",logistics:"Logistics & Warehousing",heavy:"Process & Heavy Industry"},
        challenge:"Customer Situation & Core Problem", architecture:"System Approach", scope:"Main System Scope", acceptance:"Acceptance Focus",
    deliverables:"What the Customer Receives", fit:"Where This Approach Fits", casesTitle:"International Project Case Library", casesIntro:"Explore project approaches, system scope and delivery models by industry and application.",
    solutionsTitle:"Solution Center", solutionsIntro:"Robotics, vision, automation equipment, controls and software engineered as one deliverable industrial system.",
    projectFacts:"Project Overview", market:"Market / Industry", application:"Application", deliveryModel:"Delivery Model", turnkey:"Custom Engineering + System Integration",
    keyPoints:["Functions and cycle time verified under agreed operating conditions","Abnormal conditions, interlocks and recovery logic must be testable","Equipment interfaces and critical records remain traceable","FAT / SAT, training and technical documentation are delivered as part of the project"],
    clientGets:["Defined solution architecture and interface boundaries","Coordinated mechanical, electrical, controls and software delivery","Factory testing and site acceptance support","Technical documentation, training and maintainable service interfaces"],
    faqTitle:"Common Project Questions",
    faqs:[
      ["Can we start without a complete technical specification?","Yes. Site photos, videos, an equipment list, target cycle time and the main pain points are enough for an initial engineering assessment."],
      ["How do you handle early-stage communication for overseas projects?","We normally clarify requirements and interfaces remotely first, then agree the solution, delivery boundaries, FAT / SAT and site-support model."],
      ["Can you integrate with our existing PLCs, machines or business systems?","Yes, provided communication protocols, signal lists, data interfaces and ownership boundaries are defined early."],
      ["How do you reduce disputes late in the project?","Inputs, outputs, abnormal conditions, acceptance criteria, deliverables and change control are documented before detailed design."]
    ]
  },
  "ja": {
    industriesTitle:"対応業界", industriesIntro:"業界ごとに、オートメーション、ビジョン、制御、ソフトウェアをどのように組み合わせるかをご覧いただけます。", industryLabel:"業界ソリューション", industryCases:"関連プロジェクト", industrySolutions:"推奨ソリューション", industryNames:{mining:"鉱業・バルク材",manufacturing:"精密製造の自動化",laboratory:"ラボ自動化",logistics:"物流・倉庫",heavy:"プロセス・重工業"},
        challenge:"顧客現場と主要課題", architecture:"システムアプローチ", scope:"主なシステム構成", acceptance:"検収の重点",
    deliverables:"お客様に納入するもの", fit:"適したプロジェクト", casesTitle:"海外プロジェクト事例", casesIntro:"業界・用途別に、プロジェクトの考え方、システム構成、納入方式をご覧いただけます。",
    solutionsTitle:"ソリューションセンター", solutionsIntro:"ロボット、ビジョン、自動化設備、制御、ソフトウェアを一つの産業システムとして設計・納入します。",
    projectFacts:"プロジェクト概要", market:"市場 / 業界", application:"用途", deliveryModel:"納入方式", turnkey:"カスタム設計 + システム統合",
    keyPoints:["合意した稼働条件で機能とタクトを検証","異常、インターロック、復帰ロジックを試験可能にする","設備インターフェースと重要記録を追跡可能にする","FAT / SAT、教育、技術資料をプロジェクト成果物として納入"],
    clientGets:["明確なシステム構成とインターフェース境界","機械・電気・制御・ソフトウェアの一体納入","出荷前試験と現地検収支援","技術資料、教育、保守可能なサービスインターフェース"],
    faqTitle:"よくあるご質問",
    faqs:[
      ["完全な仕様書がなくても相談できますか？","はい。現場写真、動画、既存設備リスト、目標タクト、主な課題があれば初期技術検討を開始できます。"],
      ["海外案件の初期打合せはどう進めますか？","通常は遠隔で要件とインターフェースを整理し、その後に方案、納入範囲、FAT / SAT、現地支援方法を確定します。"],
      ["既存 PLC、設備、業務システムと接続できますか？","可能です。通信プロトコル、信号表、データインターフェース、責任分界を早期に明確にすることが前提です。"],
      ["後工程での認識違いを減らすには？","詳細設計前に入出力、異常条件、検収基準、成果物、変更管理を文書化します。"]
    ]
  },
  "es": {
    industriesTitle:"Industrias que atendemos", industriesIntro:"Vea cómo combinamos automatización, visión, control y software para entornos industriales específicos.", industryLabel:"Solución por industria", industryCases:"Proyectos relacionados", industrySolutions:"Soluciones recomendadas", industryNames:{mining:"Minería y materiales a granel",manufacturing:"Manufactura de precisión",laboratory:"Automatización de laboratorio",logistics:"Logística y almacenes",heavy:"Industria de proceso y pesada"},
        challenge:"Situación del cliente y problema principal", architecture:"Enfoque del sistema", scope:"Alcance principal del sistema", acceptance:"Puntos de aceptación",
    deliverables:"Qué recibe el cliente", fit:"Dónde encaja este enfoque", casesTitle:"Biblioteca de proyectos internacionales", casesIntro:"Consulte enfoques de proyecto, alcance de sistema y modelos de entrega por industria y aplicación.",
    solutionsTitle:"Centro de soluciones", solutionsIntro:"Robótica, visión, equipos de automatización, control y software diseñados como un único sistema industrial entregable.",
    projectFacts:"Resumen del proyecto", market:"Mercado / Industria", application:"Aplicación", deliveryModel:"Modelo de entrega", turnkey:"Ingeniería a medida + Integración de sistemas",
    keyPoints:["Funciones y tiempo de ciclo verificados bajo condiciones acordadas","Las anomalías, interbloqueos y recuperación deben ser verificables","Interfaces de equipos y registros críticos trazables","FAT / SAT, formación y documentación técnica incluidos en la entrega"],
    clientGets:["Arquitectura definida y límites claros de interfaces","Entrega coordinada de mecánica, electricidad, control y software","Pruebas de fábrica y soporte para aceptación en planta","Documentación, formación e interfaces mantenibles"],
    faqTitle:"Preguntas frecuentes",
    faqs:[
      ["¿Podemos empezar sin una especificación técnica completa?","Sí. Fotos, vídeos, lista de equipos, ciclo objetivo y principales problemas son suficientes para una primera evaluación."],
      ["¿Cómo gestionan la comunicación inicial en proyectos internacionales?","Primero aclaramos requisitos e interfaces a distancia y después acordamos solución, límites de entrega, FAT / SAT y soporte en planta."],
      ["¿Pueden integrarse con nuestros PLC, máquinas o sistemas existentes?","Sí, siempre que protocolos, listas de señales, interfaces de datos y responsabilidades se definan desde el principio."],
      ["¿Cómo reducen conflictos al final del proyecto?","Documentamos entradas, salidas, condiciones anómalas, criterios de aceptación, entregables y control de cambios antes del diseño detallado."]
    ]
  },
  "pt": {
    industriesTitle:"Indústrias atendidas", industriesIntro:"Veja como combinamos automação, visão, controle e software para ambientes industriais específicos.", industryLabel:"Solução por indústria", industryCases:"Projetos relacionados", industrySolutions:"Soluções recomendadas", industryNames:{mining:"Mineração e materiais a granel",manufacturing:"Manufatura de precisão",laboratory:"Automação de laboratório",logistics:"Logística e armazenagem",heavy:"Indústria de processo e pesada"},
        challenge:"Situação do cliente e problema principal", architecture:"Abordagem do sistema", scope:"Escopo principal do sistema", acceptance:"Foco de aceitação",
    deliverables:"O que o cliente recebe", fit:"Onde esta abordagem se aplica", casesTitle:"Biblioteca de projetos internacionais", casesIntro:"Veja abordagens, escopo de sistema e modelos de entrega por indústria e aplicação.",
    solutionsTitle:"Centro de soluções", solutionsIntro:"Robótica, visão, equipamentos de automação, controle e software projetados como um único sistema industrial entregável.",
    projectFacts:"Visão geral do projeto", market:"Mercado / Indústria", application:"Aplicação", deliveryModel:"Modelo de entrega", turnkey:"Engenharia personalizada + Integração de sistemas",
    keyPoints:["Funções e tempo de ciclo verificados nas condições acordadas","Falhas, intertravamentos e lógica de recuperação devem ser testáveis","Interfaces e registros críticos devem ser rastreáveis","FAT / SAT, treinamento e documentação técnica fazem parte da entrega"],
    clientGets:["Arquitetura definida e limites claros de interface","Entrega coordenada de mecânica, elétrica, controle e software","Testes de fábrica e suporte à aceitação em campo","Documentação, treinamento e interfaces de manutenção"],
    faqTitle:"Perguntas frequentes",
    faqs:[
      ["Podemos começar sem uma especificação técnica completa?","Sim. Fotos, vídeos, lista de equipamentos, ciclo desejado e principais problemas já permitem uma avaliação inicial."],
      ["Como funciona a comunicação inicial em projetos internacionais?","Primeiro alinhamos requisitos e interfaces remotamente e depois confirmamos solução, limites de entrega, FAT / SAT e suporte em campo."],
      ["Vocês integram com nossos PLCs, máquinas ou sistemas existentes?","Sim, desde que protocolos, listas de sinais, interfaces de dados e responsabilidades sejam definidos cedo."],
      ["Como reduzir conflitos no final do projeto?","Entradas, saídas, condições anormais, critérios de aceitação, entregáveis e controle de mudanças são documentados antes do projeto detalhado."]
    ]
  },
  "ru": {
    industriesTitle:"Отрасли", industriesIntro:"Посмотрите, как мы объединяем автоматизацию, машинное зрение, управление и ПО для конкретных промышленных условий.", industryLabel:"Отраслевое решение", industryCases:"Связанные проекты", industrySolutions:"Рекомендуемые решения", industryNames:{mining:"Горная отрасль и сыпучие материалы",manufacturing:"Точное производство",laboratory:"Лабораторная автоматизация",logistics:"Логистика и склады",heavy:"Процессные и тяжёлые отрасли"},
        challenge:"Ситуация заказчика и ключевая проблема", architecture:"Системный подход", scope:"Основной состав системы", acceptance:"Критерии приёмки",
    deliverables:"Что получает заказчик", fit:"Для каких проектов подходит", casesTitle:"Библиотека международных проектов", casesIntro:"Проектные подходы, состав систем и модели поставки по отраслям и применениям.",
    solutionsTitle:"Центр решений", solutionsIntro:"Роботизация, машинное зрение, автоматизированное оборудование, управление и ПО как единая поставляемая промышленная система.",
    projectFacts:"Обзор проекта", market:"Рынок / Отрасль", application:"Применение", deliveryModel:"Модель поставки", turnkey:"Индивидуальный инжиниринг + Системная интеграция",
    keyPoints:["Функции и такт проверяются в согласованных режимах","Аварийные режимы, блокировки и восстановление должны быть тестируемыми","Интерфейсы оборудования и критические записи должны быть прослеживаемыми","FAT / SAT, обучение и техническая документация входят в комплект поставки"],
    clientGets:["Определённая архитектура и границы интерфейсов","Скоординированная поставка механики, электрики, управления и ПО","Заводские испытания и поддержка приёмки на площадке","Техническая документация, обучение и обслуживаемые интерфейсы"],
    faqTitle:"Частые вопросы",
    faqs:[
      ["Можно начать без полного технического задания?","Да. Фото, видео, перечень оборудования, целевой такт и основные проблемы достаточны для первичной инженерной оценки."],
      ["Как организуется ранняя коммуникация по зарубежным проектам?","Сначала удалённо уточняем требования и интерфейсы, затем согласуем решение, границы поставки, FAT / SAT и поддержку на площадке."],
      ["Можно интегрироваться с нашими PLC, оборудованием и ИТ-системами?","Да, если заранее определены протоколы, таблицы сигналов, интерфейсы данных и зоны ответственности."],
      ["Как снизить споры на поздних стадиях проекта?","До детального проектирования фиксируются входы, выходы, нештатные режимы, критерии приёмки, комплект поставки и порядок изменений."]
    ]
  }
};

function esc(value="") {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

function get(obj, path) {
  return path.split(".").reduce((acc,key) => acc && acc[key], obj);
}

async function loadDict(env, lang) {
  const asset = LANGS[lang]?.asset || "en";
  const url = new URL("/i18n/" + asset + ".json", BASE);
  const res = await env.ASSETS.fetch(url);
  if (!res.ok) throw new Error("translation unavailable");
  return res.json();
}

function languageOptions(current) {
  return Object.entries(LANGS).map(([key,value]) =>
    `<option value="${key}" ${key===current?"selected":""}>${esc(value.label)}</option>`
  ).join("");
}

function alternates(path) {
  const items = Object.keys(LANGS).map(lang =>
    `<link rel="alternate" hreflang="${LANGS[lang].asset}" href="${BASE}/${lang}/${path}">`
  ).join("");
  return items + `<link rel="alternate" hreflang="x-default" href="${BASE}/en/${path}">`;
}

function breadcrumbJsonLd(lang, items) {
  return {
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement": items.map((item,index)=>({
      "@type":"ListItem",
      "position":index+1,
      "name":item.name,
      "item":BASE + item.path
    }))
  };
}

function faqJsonLd(du) {
  return {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":du.faqs.map(([q,a])=>({
      "@type":"Question",
      "name":q,
      "acceptedAnswer":{"@type":"Answer","text":a}
    }))
  };
}

function organizationJsonLd() {
  return {
    "@type":"Organization",
    "@id":BASE + "/#organization",
    "name":"Zhuhai Xiaodu Intelligent Technology Co., Ltd.",
    "url":BASE + "/",
    "email":"abd.yusuf.ibrahim.mustafa@gmail.com",
    "telephone":"+86 132 4269 4270",
    "contactPoint":{"@type":"ContactPoint","name":"Yusuf","telephone":"+86 132 4269 4270","email":"abd.yusuf.ibrahim.mustafa@gmail.com","contactType":"sales"}
  };
}

function orgJsonLd() {
  return JSON.stringify({
    "@context":"https://schema.org",
    ...organizationJsonLd()
  });
}

function homeJsonLd(lang, dict) {
  const websiteId=BASE + "/#website";
  const organizationId=BASE + "/#organization";
  return JSON.stringify({
    "@context":"https://schema.org",
    "@graph":[
      organizationJsonLd(),
      {
        "@type":"WebSite",
        "@id":websiteId,
        "url":BASE + "/",
        "name":"Zhuhai Xiaodu Intelligent Technology",
        "alternateName":"珠海小度智能科技有限公司",
        "publisher":{"@id":organizationId}
      },
      {
        "@type":"WebPage",
        "@id":BASE + "/" + lang + "/#webpage",
        "url":BASE + "/" + lang + "/",
        "name":dict.meta.title,
        "inLanguage":LANGS[lang].asset,
        "isPartOf":{"@id":websiteId},
        "about":{"@id":organizationId}
      }
    ]
  });
}

function header(lang, ui, dict) {
  const du=DETAIL_UI[lang];
  return `
  <header class="site-header">
    <div class="header-top"><div class="shell header-top-inner"><span>${esc(ui.global)}</span><div class="header-contact"><a href="tel:+8613242694270">Yusuf · +86 132 4269 4270</a><a href="mailto:abd.yusuf.ibrahim.mustafa@gmail.com">abd.yusuf.ibrahim.mustafa@gmail.com</a></div></div></div>
    <div class="shell nav-shell detail-nav-shell">
      <a class="brand" href="/${lang}/"><span class="brand-mark">XD</span><span class="brand-copy"><strong>${esc(dict.companyName)}</strong><small>Zhuhai Xiaodu Intelligent Technology Co., Ltd.</small></span></a>
      <nav class="detail-nav"><a href="/${lang}/solutions/">${esc(ui.solutions)}</a><a href="/${lang}/cases/">${esc(ui.cases)}</a><a href="/${lang}/industries/">${esc(du?.industriesTitle || "Industries")}</a><a href="/${lang}/#about">${esc(ui.about)}</a></nav>
      <div class="nav-actions"><label class="language-picker"><span>🌐</span><select data-language>${languageOptions(lang)}</select></label><a class="header-cta" href="/${lang}/contact/">${esc(ui.contact)}</a></div>
    </div>
  </header>`;
}

function contact(lang, ui) {
  return `
  <section class="contact-section" id="contact">
    <div class="shell contact-layout">
      <div class="contact-main"><span class="eyebrow light">${esc(ui.discuss)}</span><h2>${esc(ui.ctaTitle)}</h2><p>${esc(ui.ctaText)}</p><div class="contact-actions"><a class="btn btn-light" href="tel:+8613242694270">${esc(ui.contactYusuf)}</a><a class="btn btn-outline-light" href="mailto:abd.yusuf.ibrahim.mustafa@gmail.com">abd.yusuf.ibrahim.mustafa@gmail.com</a></div></div>
      <aside class="contact-person"><span class="contact-label">Business Contact</span><strong>Yusuf</strong><a href="tel:+8613242694270">+86 132 4269 4270</a><a href="mailto:abd.yusuf.ibrahim.mustafa@gmail.com">abd.yusuf.ibrahim.mustafa@gmail.com</a></aside>
    </div>
  </section>`;
}

function shellPage({lang, title, description, canonicalPath, body, dict, ui, schema, image}) {
  const canonical = `${BASE}/${lang}/${canonicalPath}`;
  return `<!doctype html>
<html lang="${esc(LANGS[lang].asset)}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} | Xiaodu</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${alternates(canonicalPath)}
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:locale" content="${esc(LANGS[lang].asset)}">
${image ? `<meta property="og:image" content="${esc(image)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${esc(image)}">` : `<meta name="twitter:card" content="summary">`}
<link rel="stylesheet" href="/styles.css">
<script type="application/ld+json">${orgJsonLd()}</script>
${schema ? (Array.isArray(schema) ? schema : [schema]).map(x=>`<script type="application/ld+json">${JSON.stringify(x)}</script>`).join("") : ""}
</head>
<body class="detail-page">
${header(lang,ui,dict)}
<main>${body}</main>
${contact(lang,ui)}
<footer class="site-footer"><div class="shell footer-layout"><div><strong>${esc(dict.companyName)}</strong><small>Zhuhai Xiaodu Intelligent Technology Co., Ltd.</small></div><div class="footer-contact"><span>Yusuf</span><a href="tel:+8613242694270">+86 132 4269 4270</a><a href="mailto:abd.yusuf.ibrahim.mustafa@gmail.com">abd.yusuf.ibrahim.mustafa@gmail.com</a></div><p>© 2026 Zhuhai Xiaodu Intelligent Technology Co., Ltd.</p></div></footer>
<script src="/app.js" defer></script>
</body></html>`;
}

function processCards(dict) {
  return ["1","2","3","4","5"].map(id => `<article><span>0${id}</span><strong>${esc(dict.process[id].title)}</strong><p>${esc(dict.process[id].text)}</p></article>`).join("");
}

function solutionPage(lang, dict, item) {
  const ui=UI[lang], data=dict.solution[item.id];
  const related = CASES.filter(c=>c.related.includes(item.id)).slice(0,3);
  const body=`
  <section class="detail-hero"><div class="detail-hero-image" style="background-image:linear-gradient(90deg,rgba(9,27,40,.9),rgba(9,27,40,.28)),url('${item.image}')"></div><div class="shell detail-hero-inner"><div><a class="breadcrumb" href="/${lang}/">← ${esc(ui.back)}</a><span class="detail-type">${esc(ui.solution)}</span><h1>${esc(data.title)}</h1><p>${esc(data.text)}</p><a class="btn btn-primary" href="#contact">${esc(ui.discuss)} →</a></div></div></section>
  <section class="section detail-scope"><div class="shell"><div class="section-head"><div><span class="eyebrow">${esc(ui.scope)}</span><h2>${esc(data.title)}</h2></div><p>${esc(data.text)}</p></div><div class="detail-cap-grid"><article><span>01</span><strong>${esc(data.a)}</strong></article><article><span>02</span><strong>${esc(data.b)}</strong></article><article><span>03</span><strong>${esc(data.c)}</strong></article></div></div></section>
  <section class="section process-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">PROJECT DELIVERY</span><h2>${esc(ui.delivery)}</h2></div><p>${esc(dict.process.desc)}</p></div><div class="process-grid">${processCards(dict)}</div></div></section>
  ${related.length ? `<section class="section cases-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">PROJECTS</span><h2>${esc(ui.relatedCases)}</h2></div></div><div class="detail-related-grid">${related.map(c=>`<a class="case-card" href="/${lang}/cases/${c.slug}/"><img src="${c.image}" alt="" loading="lazy"><div class="case-body"><span class="case-market">${esc(dict.case[c.id].market)}</span><h3>${esc(dict.case[c.id].title)}</h3><p>${esc(dict.case[c.id].text)}</p></div></a>`).join("")}</div></div></section>` : ""}
  `;
  const schema=[
    {"@context":"https://schema.org","@type":"Service","name":data.title,"description":data.text,"provider":{"@type":"Organization","name":"Zhuhai Xiaodu Intelligent Technology Co., Ltd."},"areaServed":"Worldwide"},
    breadcrumbJsonLd(lang,[{name:ui.home,path:`/${lang}/`},{name:ui.solutions,path:`/${lang}/solutions/`},{name:data.title,path:`/${lang}/solutions/${item.slug}/`}])
  ];
  return shellPage({lang,title:data.title,description:data.text,canonicalPath:`solutions/${item.slug}/`,body,dict,ui,schema,image:item.image});
}

function casePage(lang, dict, item) {
  const ui=UI[lang], du=DETAIL_UI[lang], data=dict.case[item.id];
  const scopes=item.scope.map((path,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><strong>${esc(get(dict,path) || "")}</strong></article>`).join("");
  const related=item.related.map(id=>SOLUTIONS.find(s=>s.id===id)).filter(Boolean);
  const solutionNarrative=related.map(s=>`<article><span class="case-step-no">0${s.id}</span><div><strong>${esc(dict.solution[s.id].title)}</strong><p>${esc(dict.solution[s.id].text)}</p></div></article>`).join("");
  const acceptance=du.keyPoints.map((x,i)=>`<li><span>${String(i+1).padStart(2,"0")}</span><strong>${esc(x)}</strong></li>`).join("");
  const deliverables=du.clientGets.map((x,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><strong>${esc(x)}</strong></article>`).join("");
  const faqs=du.faqs.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
  const emailSubject=encodeURIComponent("Project inquiry - "+data.title);
  const body=`
  <section class="detail-hero case-study-hero"><div class="detail-hero-image" style="background-image:linear-gradient(90deg,rgba(9,27,40,.93),rgba(9,27,40,.18)),url('${item.image}')"></div><div class="shell detail-hero-inner"><div><a class="breadcrumb" href="/${lang}/cases/">← ${esc(ui.back)}</a><span class="detail-type">${esc(data.market)}</span><h1>${esc(data.title)}</h1><p>${esc(data.text)}</p><div class="hero-actions"><a class="btn btn-primary" href="mailto:abd.yusuf.ibrahim.mustafa@gmail.com?subject=${emailSubject}">${esc(ui.discuss)} →</a><a class="btn btn-ghost" href="tel:+8613242694270">Yusuf · +86 132 4269 4270</a></div></div></div></section>

  <section class="case-facts"><div class="shell case-facts-grid">
    <div><span>${esc(du.market)}</span><strong>${esc(data.market)}</strong></div>
    <div><span>${esc(du.application)}</span><strong>${esc(data.title)}</strong></div>
    <div><span>${esc(du.deliveryModel)}</span><strong>${esc(du.turnkey)}</strong></div>
  </div></section>

  <section class="section case-story-section"><div class="shell case-story-grid">
    <div class="case-story-copy"><span class="eyebrow">01 · CONTEXT</span><h2>${esc(du.challenge)}</h2><p>${esc(data.text)}</p></div>
    <aside class="case-story-panel"><span class="eyebrow">02 · SYSTEM</span><h3>${esc(du.architecture)}</h3><div class="case-solution-stack">${solutionNarrative}</div></aside>
  </div></section>

  <section class="section detail-scope"><div class="shell"><div class="section-head"><div><span class="eyebrow">03 · SCOPE</span><h2>${esc(du.scope)}</h2></div><p>${esc(data.text)}</p></div><div class="detail-cap-grid detail-cap-grid-four">${scopes}</div></div></section>

  <section class="section acceptance-section"><div class="shell acceptance-layout">
    <div><span class="eyebrow">04 · ACCEPTANCE</span><h2>${esc(du.acceptance)}</h2></div>
    <ol class="acceptance-list">${acceptance}</ol>
  </div></section>

  <section class="section deliverables-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">05 · DELIVERABLES</span><h2>${esc(du.deliverables)}</h2></div><p>${esc(dict.process.desc)}</p></div><div class="detail-cap-grid detail-cap-grid-four">${deliverables}</div></div></section>

  <section class="section process-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">06 · DELIVERY</span><h2>${esc(ui.delivery)}</h2></div><p>${esc(dict.process.desc)}</p></div><div class="process-grid">${processCards(dict)}</div></div></section>

  <section class="section cases-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">SOLUTIONS</span><h2>${esc(ui.relatedSolutions)}</h2></div></div><div class="detail-related-grid">${related.map(s=>`<a class="case-card" href="/${lang}/solutions/${s.slug}/"><img src="${s.image}" alt="" loading="lazy"><div class="case-body"><span class="case-market">${esc(ui.solution)}</span><h3>${esc(dict.solution[s.id].title)}</h3><p>${esc(dict.solution[s.id].text)}</p></div></a>`).join("")}</div></div></section>

  <section class="section faq-section"><div class="shell faq-layout"><div><span class="eyebrow">FAQ</span><h2>${esc(du.faqTitle)}</h2></div><div class="faq-list">${faqs}</div></div></section>
  `;
  const schema=[
    {"@context":"https://schema.org","@type":"Article","headline":data.title,"description":data.text,"image":[item.image],"author":{"@type":"Organization","name":"Zhuhai Xiaodu Intelligent Technology Co., Ltd."},"about":data.market},
    faqJsonLd(du),
    breadcrumbJsonLd(lang,[{name:ui.home,path:`/${lang}/`},{name:ui.cases,path:`/${lang}/cases/`},{name:data.title,path:`/${lang}/cases/${item.slug}/`}])
  ];
  return shellPage({lang,title:data.title,description:data.text,canonicalPath:`cases/${item.slug}/`,body,dict,ui,schema,image:item.image});
}

function casesIndexPage(lang, dict) {
  const ui=UI[lang], du=DETAIL_UI[lang];
  const cards=CASES.map(c=>`<a class="case-card" href="/${lang}/cases/${c.slug}/"><img src="${c.image}" alt="" loading="lazy"><div class="case-body"><span class="case-market">${esc(dict.case[c.id].market)}</span><h3>${esc(dict.case[c.id].title)}</h3><p>${esc(dict.case[c.id].text)}</p></div></a>`).join("");
  const body=`<section class="library-hero"><div class="shell"><span class="eyebrow">PROJECT CASES</span><h1>${esc(du.casesTitle)}</h1><p>${esc(du.casesIntro)}</p></div></section><section class="section cases-section"><div class="shell"><div class="case-grid library-grid">${cards}</div></div></section>`;
  return shellPage({lang,title:du.casesTitle,description:du.casesIntro,canonicalPath:"cases/",body,dict,ui});
}

function solutionsIndexPage(lang, dict) {
  const ui=UI[lang], du=DETAIL_UI[lang];
  const cards=SOLUTIONS.map(s=>`<a class="case-card" href="/${lang}/solutions/${s.slug}/"><img src="${s.image}" alt="" loading="lazy"><div class="case-body"><span class="case-market">${esc(ui.solution)}</span><h3>${esc(dict.solution[s.id].title)}</h3><p>${esc(dict.solution[s.id].text)}</p></div></a>`).join("");
  const body=`<section class="library-hero"><div class="shell"><span class="eyebrow">SOLUTIONS</span><h1>${esc(du.solutionsTitle)}</h1><p>${esc(du.solutionsIntro)}</p></div></section><section class="section cases-section"><div class="shell"><div class="case-grid library-grid">${cards}</div></div></section>`;
  return shellPage({lang,title:du.solutionsTitle,description:du.solutionsIntro,canonicalPath:"solutions/",body,dict,ui});
}

function industriesIndexPage(lang, dict) {
  const ui=UI[lang], du=DETAIL_UI[lang];
  const cards=INDUSTRIES.map((x,i)=>{
    const firstCase=CASES.find(c=>c.id===x.cases[0]);
    const title=du.industryNames[x.key];
    const desc=dict.case[x.cases[0]].text;
    return `<a class="case-card industry-card" href="/${lang}/industries/${x.slug}/"><img src="${firstCase.image}" alt="" loading="lazy"><div class="case-body"><span class="case-market">${esc(du.industryLabel)}</span><h3>${esc(title)}</h3><p>${esc(desc)}</p></div></a>`;
  }).join("");
  const body=`<section class="library-hero"><div class="shell"><span class="eyebrow">INDUSTRIES</span><h1>${esc(du.industriesTitle)}</h1><p>${esc(du.industriesIntro)}</p></div></section><section class="section cases-section"><div class="shell"><div class="case-grid library-grid">${cards}</div></div></section>`;
  return shellPage({lang,title:du.industriesTitle,description:du.industriesIntro,canonicalPath:"industries/",body,dict,ui});
}

function industryPage(lang, dict, item) {
  const ui=UI[lang], du=DETAIL_UI[lang], title=du.industryNames[item.key];
  const caseItems=item.cases.map(id=>CASES.find(c=>c.id===id)).filter(Boolean);
  const solutionItems=item.solutions.map(id=>SOLUTIONS.find(x=>x.id===id)).filter(Boolean);
  const heroImage=caseItems[0]?.image || solutionItems[0]?.image;
  const summary=caseItems.map(c=>dict.case[c.id].text).join(" ");
  const caseCards=caseItems.map(c=>`<a class="case-card" href="/${lang}/cases/${c.slug}/"><img src="${c.image}" alt="" loading="lazy"><div class="case-body"><span class="case-market">${esc(dict.case[c.id].market)}</span><h3>${esc(dict.case[c.id].title)}</h3><p>${esc(dict.case[c.id].text)}</p></div></a>`).join("");
  const solutionCards=solutionItems.map(x=>`<a class="case-card" href="/${lang}/solutions/${x.slug}/"><img src="${x.image}" alt="" loading="lazy"><div class="case-body"><span class="case-market">${esc(ui.solution)}</span><h3>${esc(dict.solution[x.id].title)}</h3><p>${esc(dict.solution[x.id].text)}</p></div></a>`).join("");
  const body=`
  <section class="detail-hero"><div class="detail-hero-image" style="background-image:linear-gradient(90deg,rgba(9,27,40,.93),rgba(9,27,40,.22)),url('${heroImage}')"></div><div class="shell detail-hero-inner"><div><a class="breadcrumb" href="/${lang}/industries/">← ${esc(ui.back)}</a><span class="detail-type">${esc(du.industryLabel)}</span><h1>${esc(title)}</h1><p>${esc(summary)}</p><a class="btn btn-primary" href="#contact">${esc(ui.discuss)} →</a></div></div></section>
  <section class="section cases-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">PROJECTS</span><h2>${esc(du.industryCases)}</h2></div><p>${esc(du.industriesIntro)}</p></div><div class="detail-related-grid">${caseCards}</div></div></section>
  <section class="section process-section"><div class="shell"><div class="section-head"><div><span class="eyebrow">SOLUTIONS</span><h2>${esc(du.industrySolutions)}</h2></div></div><div class="detail-related-grid">${solutionCards}</div></div></section>
  `;
  const schema={"@context":"https://schema.org","@type":"CollectionPage","name":title,"description":summary,"about":title};
  return shellPage({lang,title,description:summary,canonicalPath:`industries/${item.slug}/`,body,dict,ui,schema:[schema,breadcrumbJsonLd(lang,[{name:ui.home,path:`/${lang}/`},{name:du.industriesTitle,path:`/${lang}/industries/`},{name:title,path:`/${lang}/industries/${item.slug}/`}])],image:heroImage});
}

function optionList(values) {
  return values.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("");
}

function inquiryPage(lang, dict) {
  const ui=UI[lang], q=INQUIRY_UI[lang];
  const body=`
  <section class="inquiry-hero"><div class="shell inquiry-hero-grid">
    <div><span class="eyebrow">${esc(q.eyebrow)}</span><h1>${esc(q.title)}</h1><p>${esc(q.intro)}</p></div>
    <aside><span>${esc(q.direct)}</span><strong>Yusuf</strong><a href="tel:+8613242694270">+86 132 4269 4270</a><a href="mailto:abd.yusuf.ibrahim.mustafa@gmail.com">abd.yusuf.ibrahim.mustafa@gmail.com</a></aside>
  </div></section>
  <section class="section inquiry-section"><div class="shell inquiry-layout">
    <form class="inquiry-form" data-inquiry-form
      data-required="${esc(q.required)}" data-sending="${esc(q.sending)}" data-success="${esc(q.success)}"
      data-emailed="${esc(q.emailed)}" data-fallback="${esc(q.fallback)}" data-open-email="${esc(q.openEmail)}"
      data-copy="${esc(q.copy)}" data-copied="${esc(q.copied)}" data-attach-note="${esc(q.attachNote)}" data-id-label="${esc(q.id)}">
      <input type="hidden" name="language" value="${esc(lang)}"><input type="hidden" name="sourcePage" value="/${esc(lang)}/contact/">
      <input class="hp-field" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">

      <fieldset><legend><span>01</span>${esc(q.basics)}</legend><div class="form-grid">
        <label><span>${esc(q.company)} *</span><input name="company" required maxlength="160"></label>
        <label><span>${esc(q.name)} *</span><input name="name" required maxlength="120"></label>
        <label><span>${esc(q.email)} *</span><input name="email" type="email" required maxlength="180"></label>
        <label><span>${esc(q.phone)}</span><input name="phone" maxlength="120"></label>
        <label><span>${esc(q.country)} *</span><input name="country" required maxlength="120"></label>
        <label><span>${esc(q.contact)}</span><select name="preferredContact"><option>Email</option><option>WhatsApp</option><option>Phone</option><option>WeChat</option></select></label>
      </div></fieldset>

      <fieldset><legend><span>02</span>${esc(q.project)}</legend><div class="form-grid">
        <label><span>${esc(q.type)} *</span><select name="projectType" required><option value=""></option>${optionList(q.projectTypes)}</select></label>
        <label><span>${esc(q.budget)}</span><select name="budget">${optionList(q.budgets)}</select></label>
        <label><span>${esc(q.timeline)}</span><select name="timeline">${optionList(q.timelines)}</select></label>
        <label class="form-span-2"><span>${esc(q.description)} *</span><textarea name="description" required minlength="20" maxlength="5000" rows="8"></textarea></label>
      </div></fieldset>

      <fieldset><legend><span>03</span>${esc(q.files)}</legend>
        <label class="file-drop"><input type="file" name="files" multiple data-files accept=".pdf,.jpg,.jpeg,.png,.webp,.zip,.step,.stp,.iges,.igs,.dxf,.dwg,.doc,.docx,.xls,.xlsx"><strong>${esc(q.upload)}</strong><small>${esc(q.uploadHint)}</small><span data-file-list></span></label>
      </fieldset>

      <label class="consent-row"><input type="checkbox" name="consent" value="yes" required><span>${esc(q.consent)}</span></label>
      <button class="btn inquiry-submit" type="submit" data-submit>${esc(q.submit)} <b>→</b></button>
      <div class="inquiry-result" data-result hidden></div>
    </form>

    <aside class="inquiry-side">
      <span class="eyebrow">DIRECT CONTACT</span><h2>Yusuf</h2>
      <a href="tel:+8613242694270">+86 132 4269 4270</a><a href="mailto:abd.yusuf.ibrahim.mustafa@gmail.com">abd.yusuf.ibrahim.mustafa@gmail.com</a>
      <p>Zhuhai Xiaodu Intelligent Technology Co., Ltd.</p>
    </aside>
  </div></section>
  <script src="/inquiry.js" defer></script>`;
  const schema={"@context":"https://schema.org","@type":"ContactPage","name":q.title,"description":q.intro,"mainEntity":{"@type":"Organization","name":"Zhuhai Xiaodu Intelligent Technology Co., Ltd.","email":"abd.yusuf.ibrahim.mustafa@gmail.com","telephone":"+86 132 4269 4270"}};
  return shellPage({lang,title:q.title,description:q.intro,canonicalPath:"contact/",body,dict,ui,schema});
}

function inquiryId() {
  const d=new Date();
  const stamp=`${d.getUTCFullYear()}${String(d.getUTCMonth()+1).padStart(2,"0")}${String(d.getUTCDate()).padStart(2,"0")}`;
  const bytes=new Uint8Array(4); crypto.getRandomValues(bytes);
  const code=[...bytes].map(x=>x.toString(16).padStart(2,"0")).join("").toUpperCase();
  return `XD-${stamp}-${code}`;
}

function safeText(v,max=5000){ return String(v||"").trim().slice(0,max); }

async function handleInquiry(request, env) {
  try {
    const form=await request.formData();
    if(safeText(form.get("website"),200)) return Response.json({ok:true,inquiryId:inquiryId(),emailSent:false,archived:false});

    const id=inquiryId();
    const company=safeText(form.get("company"),160), name=safeText(form.get("name"),120), email=safeText(form.get("email"),180);
    const phone=safeText(form.get("phone"),120), country=safeText(form.get("country"),120), projectType=safeText(form.get("projectType"),160);
    const budget=safeText(form.get("budget"),120), timeline=safeText(form.get("timeline"),120), preferredContact=safeText(form.get("preferredContact"),80);
    const description=safeText(form.get("description"),5000), language=safeText(form.get("language"),20), sourcePage=safeText(form.get("sourcePage"),240);
    const consent=safeText(form.get("consent"),20);

    if(!company||!name||!email||!country||!projectType||description.length<20||consent!=="yes"||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      return Response.json({ok:false,error:"validation_error"},{status:400});
    }

    const rawFiles=form.getAll("files").filter(x=>x && typeof x==="object" && typeof x.arrayBuffer==="function" && x.size>0);
    if(rawFiles.length>5) return Response.json({ok:false,error:"too_many_files"},{status:400});
    const totalBytes=rawFiles.reduce((n,x)=>n+x.size,0);
    if(totalBytes>4*1024*1024) return Response.json({ok:false,error:"files_too_large"},{status:400});

    const fileMeta=rawFiles.map(x=>({name:x.name,size:x.size,type:x.type||"application/octet-stream"}));
    const summary=[
      `Inquiry ID: ${id}`,`Company: ${company}`,`Contact: ${name}`,`Email: ${email}`,`Phone: ${phone||"-"}`,
      `Country/Region: ${country}`,`Preferred contact: ${preferredContact||"-"}`,`Project type: ${projectType}`,
      `Budget: ${budget||"-"}`,`Timeline: ${timeline||"-"}`,`Language: ${language||"-"}`,
      `Files: ${fileMeta.map(x=>x.name).join(", ")||"None"}`,`Source: ${sourcePage||"-"}`,"","Project description:",description
    ].join("\n");

    let archived=false;
    if(env.DB && typeof env.DB.prepare==="function"){
      try{
        await env.DB.prepare(`CREATE TABLE IF NOT EXISTS inquiries (
          id TEXT PRIMARY KEY, created_at TEXT NOT NULL, company TEXT, contact_name TEXT, email TEXT, phone TEXT,
          country TEXT, preferred_contact TEXT, project_type TEXT, budget TEXT, timeline TEXT, language TEXT,
          source_page TEXT, description TEXT, files_json TEXT, email_sent INTEGER DEFAULT 0
        )`).run();
        await env.DB.prepare(`INSERT INTO inquiries
          (id,created_at,company,contact_name,email,phone,country,preferred_contact,project_type,budget,timeline,language,source_page,description,files_json)
          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
          .bind(id,new Date().toISOString(),company,name,email,phone,country,preferredContact,projectType,budget,timeline,language,sourcePage,description,JSON.stringify(fileMeta)).run();
        archived=true;
      }catch(e){ console.error("D1 inquiry archive failed",e); }
    }

    let emailSent=false, messageId=null;
    if(env.EMAIL && typeof env.EMAIL.send==="function"){
      try{
        const attachments=[];
        for(const file of rawFiles){
          attachments.push({content:await file.arrayBuffer(),filename:file.name,type:file.type||"application/octet-stream",disposition:"attachment"});
        }
        const result=await env.EMAIL.send({
          to:"abd.yusuf.ibrahim.mustafa@gmail.com",
          from:{email:"inquiry@xiaodu.tech",name:"Xiaodu Project Inquiry"},
          replyTo:{email,name},
          subject:`[${id}] ${projectType} — ${company} / ${country}`,
          text:summary,
          html:`<h2>New Project Inquiry — ${id}</h2><pre style="white-space:pre-wrap;font-family:Arial,sans-serif">${esc(summary)}</pre>`,
          attachments
        });
        emailSent=true; messageId=result?.messageId||null;
        if(archived&&env.DB) await env.DB.prepare("UPDATE inquiries SET email_sent=1 WHERE id=?").bind(id).run();
      }catch(e){ console.error("Inquiry email failed",e); }
    }

    const subject=encodeURIComponent(`[${id}] Project Inquiry — ${projectType} — ${company}`);
    const body=encodeURIComponent(summary+"\n\nSelected files must be attached manually if this email fallback is used.");
    return Response.json({
      ok:true,inquiryId:id,emailSent,archived,messageId,summary,
      fallbackMailto:`mailto:abd.yusuf.ibrahim.mustafa@gmail.com?subject=${subject}&body=${body}`,
      files:fileMeta
    },{headers:{"cache-control":"no-store"}});
  }catch(e){
    console.error("Inquiry handler failed",e);
    return Response.json({ok:false,error:"server_error"},{status:500,headers:{"cache-control":"no-store"}});
  }
}

async function homePage(request, env, lang, dict) {
  const assetReq = new Request(new URL("/index.html", request.url), request);
  const baseRes = await env.ASSETS.fetch(assetReq);
  const ui=UI[lang];
  const links = Object.keys(LANGS).map(code => `<link rel="alternate" hreflang="${LANGS[code].asset}" href="${BASE}/${code}/">`).join("") + `<link rel="canonical" href="${BASE}/${lang}/"><link rel="alternate" hreflang="x-default" href="${BASE}/en/">`;
  return new HTMLRewriter()
    .on("html",{element(e){e.setAttribute("lang",LANGS[lang].asset)}})
    .on("head",{element(e){e.append(links,{html:true});e.append(`<meta property="og:site_name" content="Zhuhai Xiaodu Intelligent Technology"><script type="application/ld+json">${homeJsonLd(lang,dict)}</script>`,{html:true})}})
    .on("title",{element(e){e.setInnerContent(dict.meta.title)}})
    .on('meta[name="description"]',{element(e){e.setAttribute("content",dict.meta.description)}})
    .on("[data-i18n]",{element(e){const v=get(dict,e.getAttribute("data-i18n"));if(typeof v==="string")e.setInnerContent(v)}})
    .on("[data-route]",{element(e){e.setAttribute("href",`/${lang}/${e.getAttribute("data-route")}/`)}})
    .transform(baseRes);
}

function sitemap() {
  const urls=[];
  for(const lang of Object.keys(LANGS)){
    urls.push(`${BASE}/${lang}/`);
    urls.push(`${BASE}/${lang}/contact/`);
    urls.push(`${BASE}/${lang}/solutions/`);
    urls.push(`${BASE}/${lang}/cases/`);
    urls.push(`${BASE}/${lang}/industries/`);
    for(const i of INDUSTRIES) urls.push(`${BASE}/${lang}/industries/${i.slug}/`);
    for(const s of SOLUTIONS) urls.push(`${BASE}/${lang}/solutions/${s.slug}/`);
    for(const c of CASES) urls.push(`${BASE}/${lang}/cases/${c.slug}/`);
  }
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u=>`<url><loc>${u}</loc><changefreq>monthly</changefreq><priority>${u.split("/").length<=5?"1.0":"0.8"}</priority></url>`).join("")}</urlset>`;
}

export default {
  async fetch(request, env) {
    const url=new URL(request.url);
    if(url.hostname==="www.xiaodu.tech"){
      url.hostname="xiaodu.tech";
      return Response.redirect(url.toString(),308);
    }
    const path=url.pathname;

    if(path==="/__health") return Response.json({
      ok:true,
      service:"xiaodu-intelligent-website",
      domain:url.hostname,
      protocol:url.protocol,
      version:"redirect-loop-fix-20260930"
    },{headers:{"cache-control":"no-store"}});
    if(path==="/api/inquiry" && request.method==="POST") return handleInquiry(request,env);
    if(path==="/"){
      const dict=await loadDict(env,"zh-cn");
      return homePage(request,env,"zh-cn",dict);
    }
    if(path==="/contact" || path==="/contact/" || path==="/inquiry" || path==="/inquiry/") return Response.redirect(`${BASE}/zh-cn/contact/`,301);
    if(path==="/sitemap.xml") return new Response(sitemap(),{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, max-age=3600"}});
    if(path==="/robots.txt") {
      const robots = [
        "User-agent: *", "Allow: /", "Allow: /api/social-image/", "Disallow: /api/", "",
        "User-agent: Googlebot", "User-agent: Googlebot-Image", "User-agent: Bingbot", "User-agent: Slurp", "User-agent: DuckDuckBot", "User-agent: YandexBot", "User-agent: Baiduspider", "Allow: /", "Allow: /api/social-image/", "Disallow: /api/", "",
        "User-agent: OAI-SearchBot", "User-agent: ChatGPT-User", "User-agent: Claude-SearchBot", "User-agent: Claude-User", "User-agent: PerplexityBot", "User-agent: Perplexity-User", "User-agent: Applebot", "Allow: /", "Allow: /api/social-image/", "Disallow: /api/", "",
        "User-agent: GPTBot", "User-agent: ClaudeBot", "User-agent: Applebot-Extended", "Disallow: /", "",
        `Sitemap: ${BASE}/sitemap.xml`, ""
      ].join("\n");
      return new Response(robots,{headers:{"content-type":"text/plain; charset=utf-8","cache-control":"public, max-age=300"}});
    }

    const match=path.match(/^\/(zh-cn|zh-tw|en|ja|es|pt|ru)(?:\/(.*))?$/);
    if(!match) return env.ASSETS.fetch(request);

    const lang=match[1], rest=(match[2]||"").replace(/\/+$/,"");
    const dict=await loadDict(env,lang);

    if(!rest) return homePage(request,env,lang,dict);
    if(rest==="contact") return new Response(inquiryPage(lang,dict),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600"}});
    if(rest==="inquiry") return Response.redirect(`${BASE}/${lang}/contact/`,301);
    if(rest==="cases") return new Response(casesIndexPage(lang,dict),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600"}});
    if(rest==="solutions") return new Response(solutionsIndexPage(lang,dict),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600"}});
    if(rest==="industries") return new Response(industriesIndexPage(lang,dict),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600"}});
    const industryMatch=rest.match(/^industries\/([^/]+)$/);
    if(industryMatch){
      const item=INDUSTRIES.find(x=>x.slug===industryMatch[1]);
      if(item) return new Response(industryPage(lang,dict,item),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600"}});
    }

    const solutionMatch=rest.match(/^solutions\/([^/]+)$/);
    if(solutionMatch){
      const item=SOLUTIONS.find(x=>x.slug===solutionMatch[1]);
      if(item) return new Response(solutionPage(lang,dict,item),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600"}});
    }

    const caseMatch=rest.match(/^cases\/([^/]+)$/);
    if(caseMatch){
      const item=CASES.find(x=>x.slug===caseMatch[1]);
      if(item) return new Response(casePage(lang,dict,item),{headers:{"content-type":"text/html; charset=utf-8","cache-control":"public, max-age=600"}});
    }

    return new Response("Not Found",{status:404,headers:{"content-type":"text/plain; charset=utf-8"}});
  }
};
