export const AUTOMATION_GUIDE_SLUG = "industrial-automation-project-checklist";

export const AUTOMATION_GUIDE = {
  en: {
    title: "Industrial Automation Project Checklist",
    description: "A practical industrial automation checklist for process requirements, system interfaces, acceptance testing and project handover.",
    eyebrow: "ENGINEERING RESOURCE",
    intro: "A useful automation brief connects the production problem to measurable requirements, system boundaries and a test plan. Use this checklist to prepare for a discussion with an industrial automation system integrator. Adapt it to the process, site and applicable requirements; it is a planning aid, not a design or safety specification.",
    sections: [
      {
        title: "1. Describe the process, not just the equipment",
        body: "Start with the product and operating conditions. A robot, camera or PLC selection is meaningful only when the work, variation and expected result are understood.",
        checks: ["Product, material, dimensions and known variation", "Current process steps, bottlenecks and manual interventions", "Required throughput or cycle time, including how it will be measured", "Shift pattern, operating modes, environment and foreseeable changeovers"]
      },
      {
        title: "2. Map the system boundary and interfaces",
        body: "List what the project includes and what remains with the plant, machine builder or another supplier. Drawings and interface owners prevent gaps between otherwise complete subsystems.",
        checks: ["Upstream and downstream equipment, material flow and available space", "Mechanical, electrical, control, network and data interfaces", "Signal lists, communications, user accounts and responsibility for configuration", "Utilities, guarding, installation access and site constraints"]
      },
      {
        title: "3. Agree how exceptions are handled",
        body: "Nominal operation is only one part of a production system. Decide what the cell should do when a part is missing, a measurement is uncertain, a device faults or production must recover after a stop.",
        checks: ["Reject, hold, retry and escalation paths for out-of-range results", "Fault indication, restart conditions and manual intervention boundaries", "Product or sample identification and traceability through rework", "Safety functions and safe-state behavior to be defined by qualified project stakeholders"]
      },
      {
        title: "4. Write acceptance tests before detailed design",
        body: "Turn desired performance into observable evidence. The parties should agree the test conditions, measurement method, records and responsibilities before a build makes those choices expensive to change.",
        checks: ["Representative products, recipes and operating cases for testing", "Cycle-time and quality criteria, measurement method and sample basis", "I/O, alarms, interlocks, fault recovery and data-record checks", "Factory and site test scope, sign-off owners, open-item handling and retest rules"]
      },
      {
        title: "5. Plan the handover and operating life",
        body: "A completed installation also needs a maintainable handover. Define the documents, software, training and support that the operating team needs, and clarify ownership and access before commissioning.",
        checks: ["As-built drawings, device lists, backups and version records", "Software, source-code, license and configuration ownership", "Operator and maintenance training, spare parts and service contacts", "Warranty, remote access, cybersecurity responsibilities and change control"]
      }
    ],
    decisionTitle: "Questions to ask an automation integrator",
    questions: [
      "Which assumptions, exclusions and third-party responsibilities are part of the proposal?",
      "How will requirements and changes be traced from the brief to test results?",
      "What must the customer provide, and when must the production site be ready?",
      "What documentation, training and support are included at handover?"
    ],
    faq: [
      { question: "What does an industrial automation system integrator do?", answer: "An industrial automation system integrator coordinates the equipment, controls, software and interfaces needed for a defined production task. The project team agrees the system boundary, operating requirements, abnormal-state behavior and acceptance evidence for the specific site." },
      { question: "What information should I prepare before requesting an automation proposal?", answer: "Prepare the product or material, current process steps, target throughput and measurement method, existing machines and controls, available layout or interface information, site constraints, and expected acceptance criteria. Mark assumptions and unknowns so they can be confirmed during discovery." },
      { question: "How should an automation project define acceptance testing?", answer: "Agree representative products and operating cases, measurable cycle-time and quality criteria, the measurement and sampling method, fault and recovery checks, required records, test locations, sign-off owners and retest rules before detailed design is complete. The applicable standards and scope depend on the project." },
      { question: "Does this checklist certify a machine or prove standards compliance?", answer: "No. It is a planning aid for an initial project discussion, not a design, safety specification, inspection report or certificate. Qualified project stakeholders must determine applicable laws, standards, risk controls and validation evidence for the site and equipment." }
    ],
    noteTitle: "Use standards in the right context",
    note: "Factory, site and integration testing should be agreed for the project and industry. ISA publishes guidance and standards for FAT, SAT and SIT; the applicable edition and scope must be confirmed by the project team. This checklist does not claim compliance with any standard.",
    sourcesTitle: "Further reading",
    sources: [
      { label: "ISA-105 standards for FAT, SAT and SIT", url: "https://www.isa.org/standards-and-publications/isa-standards/isa-105-standards" },
      { label: "CSIA Best Practices and Benchmarks Manual", url: "https://controlsys.org/community-resources/best-practices-manual/" }
    ],
    relatedTitle: "Explore automation capabilities",
    links: [
      { label: "Industrial automation solutions", path: "solutions/" },
      { label: "Robotic automation", path: "solutions/robotic-automation/" },
      { label: "Machine vision and inspection", path: "solutions/machine-vision/" },
      { label: "Custom equipment integration", path: "solutions/custom-equipment-integration/" }
    ],
    sourceNote: "Prepared by Zhuhai Xiaodu Intelligent Technology Co., Ltd. from its published service scope and the linked industry references. Content and source links reviewed: October 8, 2026."
  },
  "zh-cn": {
    title: "工业自动化项目需求与验收清单",
    description: "工业自动化项目实用清单：梳理工艺需求、系统接口、异常处理、验收测试与项目交付。",
    eyebrow: "工程资料",
    intro: "一份有效的自动化项目需求，应把生产问题转化为可衡量的要求、明确的系统边界和可执行的测试计划。可用下面的清单准备与工业自动化系统集成商的前期沟通。具体内容需结合工艺、现场条件和适用要求确认；本文是项目策划参考，不是设计文件或安全规范。",
    sections: [
      {
        title: "1. 先描述工艺，再讨论设备",
        body: "从产品和运行条件开始。只有明确作业内容、变化范围和预期结果后，机器人、相机或 PLC 的选型才有依据。",
        checks: ["产品、物料、尺寸及已知差异", "当前工序、瓶颈和人工介入环节", "目标产能或节拍，以及节拍的测量口径", "班次、运行模式、现场环境和可预见的换型"]
      },
      {
        title: "2. 划定系统范围并梳理接口",
        body: "列明项目包含哪些工作，哪些仍由工厂、设备商或其他供应商负责。明确图纸和接口责任人，可减少多个子系统之间的交付空档。",
        checks: ["上游/下游设备、物料流向和可用空间", "机械、电气、控制、网络和数据接口", "信号表、通信方式、用户账户及配置责任", "公用工程、围护、安全防护、安装通道和现场限制"]
      },
      {
        title: "3. 约定异常状态与恢复方式",
        body: "生产系统不能只定义正常运行。零件缺失、测量不确定、设备故障或停机恢复时，系统应如何处理，都需要提前讨论。",
        checks: ["超差结果的剔除、暂存、重试和升级处理路径", "故障提示、重启条件和人工介入边界", "返工过程中的产品/样品标识与追溯", "安全功能与安全状态由具备相应能力的项目相关方定义"]
      },
      {
        title: "4. 在详细设计前写清验收测试",
        body: "把性能目标转化为可观察的证据。各方应在制造前约定测试条件、测量方法、记录要求和责任分工，避免后期才决定验收口径。",
        checks: ["用于测试的代表性产品、配方和运行工况", "节拍与质量标准、测量方式和抽样口径", "I/O、报警、联锁、故障恢复和数据记录检查", "出厂/现场测试范围、签署人、遗留项处理和复测规则"]
      },
      {
        title: "5. 提前规划交付和后续运维",
        body: "设备安装完成后，还要能持续维护。应定义运行团队需要的文件、软件、培训和支持，并在调试前厘清所有权与访问权限。",
        checks: ["竣工图、设备清单、备份和版本记录", "软件、源代码、许可证和配置的所有权", "操作与维护培训、备件和服务联系人", "保修、远程访问、网络安全责任和变更控制"]
      }
    ],
    decisionTitle: "选择系统集成商时可以问什么",
    questions: [
      "方案包含哪些假设、排除项和第三方责任？",
      "需求和变更如何从项目简报追踪到测试记录？",
      "客户需要提供什么资料，现场需在何时具备哪些条件？",
      "交付时包含哪些文件、培训和后续支持？"
    ],
    faq: [
      { question: "工业自动化系统集成商主要做什么？", answer: "系统集成商围绕明确的生产任务，协调所需设备、控制系统、软件及接口。项目相关方需要结合具体现场确定系统边界、运行要求、异常处理方式和验收证据。" },
      { question: "咨询自动化方案前应准备哪些信息？", answer: "建议准备产品或物料、当前工序、目标产能及测量口径、现有设备和控制系统、布局或接口资料、现场限制及预期验收条件。对暂时未知的信息和假设单独标注，便于前期确认。" },
      { question: "自动化项目应如何定义验收测试？", answer: "在详细设计完成前，约定代表性产品与工况、可测量的节拍和质量标准、测量与抽样方法、故障和恢复检查、所需记录、测试地点、签署人及复测规则。适用标准和范围需按具体项目确定。" },
      { question: "这份清单能否作为设备认证或符合标准的证明？", answer: "不能。这是一份用于项目前期沟通的策划参考，不是设计文件、安全规范、检验报告或认证证书。具备相应能力的项目相关方需结合现场和设备确认适用法规、标准、风险控制及验证证据。" }
    ],
    noteTitle: "结合项目适用标准制定测试",
    note: "出厂、现场和系统集成测试应结合项目与行业约定。ISA 发布了关于 FAT、SAT、SIT 的相关标准与指南；项目团队应确认适用版本和范围。本清单不代表符合任何标准。",
    sourcesTitle: "延伸阅读",
    sources: [
      { label: "ISA-105：FAT、SAT 与 SIT 相关标准", url: "https://www.isa.org/standards-and-publications/isa-standards/isa-105-standards" },
      { label: "CSIA 系统集成最佳实践手册", url: "https://controlsys.org/community-resources/best-practices-manual/" }
    ],
    relatedTitle: "了解自动化能力范围",
    links: [
      { label: "工业自动化解决方案", path: "solutions/" },
      { label: "机器人自动化", path: "solutions/robotic-automation/" },
      { label: "机器视觉与检测", path: "solutions/machine-vision/" },
      { label: "专用设备与系统集成", path: "solutions/custom-equipment-integration/" }
    ],
    sourceNote: "由珠海小度智能科技有限公司依据官网公开服务范围及所链接的行业资料编写。内容及来源链接核对：2026 年 10 月 8 日。"
  }
};
