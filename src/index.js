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
  "zh-cn": {home:"首页", solutions:"解决方案", cases:"项目案例", process:"交付流程", about:"关于我们", contact:"联系我们", scope:"典型交付范围", delivery:"项目如何推进", relatedCases:"相关项目案例", relatedSolutions:"相关解决方案", discuss:"讨论你的项目", ctaTitle:"把现场照片、图纸或需求发给 Nicole。", ctaText:"先判断能不能做、怎么做、风险在哪里，再进入正式方案。", back:"返回首页", global:"面向海外项目交付", project:"项目案例", solution:"解决方案", contactNicole:"联系 Nicole"},
  "zh-tw": {home:"首頁", solutions:"解決方案", cases:"專案案例", process:"交付流程", about:"關於我們", contact:"聯絡我們", scope:"典型交付範圍", delivery:"專案如何推進", relatedCases:"相關專案案例", relatedSolutions:"相關解決方案", discuss:"討論你的專案", ctaTitle:"把現場照片、圖紙或需求發給 Nicole。", ctaText:"先判斷能不能做、怎麼做、風險在哪裡，再進入正式方案。", back:"返回首頁", global:"面向海外專案交付", project:"專案案例", solution:"解決方案", contactNicole:"聯絡 Nicole"},
  "en": {home:"Home", solutions:"Solutions", cases:"Projects", process:"Delivery", about:"About", contact:"Contact", scope:"Typical Delivery Scope", delivery:"How the Project Moves Forward", relatedCases:"Related Project Cases", relatedSolutions:"Related Solutions", discuss:"Discuss Your Project", ctaTitle:"Send Nicole your site photos, drawings or requirements.", ctaText:"We assess feasibility, approach and risk first, then move into a formal proposal.", back:"Back to Home", global:"Built for International Project Delivery", project:"Project Case", solution:"Solution", contactNicole:"Contact Nicole"},
  "ja": {home:"ホーム", solutions:"ソリューション", cases:"プロジェクト事例", process:"導入プロセス", about:"会社情報", contact:"お問い合わせ", scope:"主な納入範囲", delivery:"プロジェクトの進め方", relatedCases:"関連プロジェクト", relatedSolutions:"関連ソリューション", discuss:"プロジェクトを相談", ctaTitle:"現場写真、図面、要件を Nicole へお送りください。", ctaText:"実現可能性、方法、リスクを整理してから正式提案へ進みます。", back:"ホームへ戻る", global:"海外プロジェクト対応", project:"プロジェクト事例", solution:"ソリューション", contactNicole:"Nicole に連絡"},
  "es": {home:"Inicio", solutions:"Soluciones", cases:"Proyectos", process:"Entrega", about:"Nosotros", contact:"Contacto", scope:"Alcance típico de entrega", delivery:"Cómo avanza el proyecto", relatedCases:"Proyectos relacionados", relatedSolutions:"Soluciones relacionadas", discuss:"Hablemos de su proyecto", ctaTitle:"Envíe a Nicole fotos de planta, planos o requisitos.", ctaText:"Primero evaluamos viabilidad, enfoque y riesgos; después preparamos la propuesta formal.", back:"Volver al inicio", global:"Preparados para proyectos internacionales", project:"Caso de proyecto", solution:"Solución", contactNicole:"Contactar con Nicole"},
  "pt": {home:"Início", solutions:"Soluções", cases:"Projetos", process:"Entrega", about:"Sobre nós", contact:"Contato", scope:"Escopo típico de entrega", delivery:"Como o projeto avança", relatedCases:"Projetos relacionados", relatedSolutions:"Soluções relacionadas", discuss:"Fale sobre seu projeto", ctaTitle:"Envie para Nicole fotos da planta, desenhos ou requisitos.", ctaText:"Primeiro avaliamos viabilidade, abordagem e riscos; depois avançamos para a proposta formal.", back:"Voltar ao início", global:"Preparados para projetos internacionais", project:"Caso de projeto", solution:"Solução", contactNicole:"Falar com Nicole"},
  "ru": {home:"Главная", solutions:"Решения", cases:"Проекты", process:"Реализация", about:"О компании", contact:"Контакты", scope:"Типовой объём поставки", delivery:"Как ведётся проект", relatedCases:"Связанные проекты", relatedSolutions:"Связанные решения", discuss:"Обсудить проект", ctaTitle:"Пришлите Nicole фото площадки, чертежи или требования.", ctaText:"Сначала оцениваем реализуемость, подход и риски, затем готовим формальное предложение.", back:"На главную", global:"Готовы к международным проектам", project:"Проектный кейс", solution:"Решение", contactNicole:"Связаться с Nicole"}
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
    industriesTitle:"対応業界", industriesIntro:"業界ごとに、オートメーション、ビジョン、制御、ソフトウェアをどのように組み合わせるかをご覧いただけます。", industryLabel:"業界ソリューション", industryCases:"関連プロジェクト", industrySolutions:"推奨ソリューション", industryNames:{mining:"鉱業・バルク材",manufacturing:"精密製造",laboratory:"ラボ自動化",logistics:"物流・倉庫",heavy:"プロセス・重工業"},
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

function orgJsonLd() {
  return JSON.stringify({
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Zhuhai Xiaodu Intelligent Technology Co., Ltd.",
    "url":BASE,
    "email":"13923387986@163.com",
    "telephone":"+86 139 2338 7986",
    "contactPoint":{"@type":"ContactPoint","name":"Nicole Fan","telephone":"+86 139 2338 7986","email":"13923387986@163.com","contactType":"sales"}
  });
}

function header(lang, ui, dict) {
  const du=DETAIL_UI[lang];
  return `
  <header class="site-header">
    <div class="header-top"><div class="shell header-top-inner"><span>${esc(ui.global)}</span><div class="header-contact"><a href="tel:+8613923387986">Nicole Fan · +86 139 2338 7986</a><a href="mailto:13923387986@163.com">13923387986@163.com</a></div></div></div>
    <div class="shell nav-shell detail-nav-shell">
      <a class="brand" href="/${lang}/"><span class="brand-mark">XD</span><span class="brand-copy"><strong>${esc(dict.companyName)}</strong><small>Zhuhai Xiaodu Intelligent Technology Co., Ltd.</small></span></a>
      <nav class="detail-nav"><a href="/${lang}/solutions/">${esc(ui.solutions)}</a><a href="/${lang}/cases/">${esc(ui.cases)}</a><a href="/${lang}/industries/">${esc(du?.industriesTitle || "Industries")}</a><a href="/${lang}/#about">${esc(ui.about)}</a></nav>
      <div class="nav-actions"><label class="language-picker"><span>🌐</span><select data-language>${languageOptions(lang)}</select></label><a class="header-cta" href="#contact">${esc(ui.contact)}</a></div>
    </div>
  </header>`;
}

function contact(lang, ui) {
  return `
  <section class="contact-section" id="contact">
    <div class="shell contact-layout">
      <div class="contact-main"><span class="eyebrow light">${esc(ui.discuss)}</span><h2>${esc(ui.ctaTitle)}</h2><p>${esc(ui.ctaText)}</p><div class="contact-actions"><a class="btn btn-light" href="tel:+8613923387986">${esc(ui.contactNicole)}</a><a class="btn btn-outline-light" href="mailto:13923387986@163.com">13923387986@163.com</a></div></div>
      <aside class="contact-person"><span class="contact-label">Business Contact</span><strong>Nicole Fan</strong><a href="tel:+8613923387986">+86 139 2338 7986</a><a href="mailto:13923387986@163.com">13923387986@163.com</a></aside>
    </div>
  </section>`;
}

function shellPage({lang, title, description, canonicalPath, body, dict, ui, schema, image}) {
  const canonical = `${BASE}/${lang}/${canonicalPath}`;
  return `<!doctype html>
<html lang="${esc(LANGS[lang].asset)}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} | Zhuhai Xiaodu Intelligent Technology</title>
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
<footer class="site-footer"><div class="shell footer-layout"><div><strong>${esc(dict.companyName)}</strong><small>Zhuhai Xiaodu Intelligent Technology Co., Ltd.</small></div><div class="footer-contact"><span>Nicole Fan</span><a href="tel:+8613923387986">+86 139 2338 7986</a><a href="mailto:13923387986@163.com">13923387986@163.com</a></div><p>© 2026 Zhuhai Xiaodu Intelligent Technology Co., Ltd.</p></div></footer>
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
  <section class="detail-hero case-study-hero"><div class="detail-hero-image" style="background-image:linear-gradient(90deg,rgba(9,27,40,.93),rgba(9,27,40,.18)),url('${item.image}')"></div><div class="shell detail-hero-inner"><div><a class="breadcrumb" href="/${lang}/cases/">← ${esc(ui.back)}</a><span class="detail-type">${esc(data.market)}</span><h1>${esc(data.title)}</h1><p>${esc(data.text)}</p><div class="hero-actions"><a class="btn btn-primary" href="mailto:13923387986@163.com?subject=${emailSubject}">${esc(ui.discuss)} →</a><a class="btn btn-ghost" href="tel:+8613923387986">Nicole · +86 139 2338 7986</a></div></div></div></section>

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

async function homePage(request, env, lang, dict) {
  const assetReq = new Request(new URL("/index.html", request.url), request);
  const baseRes = await env.ASSETS.fetch(assetReq);
  const ui=UI[lang];
  const links = Object.keys(LANGS).map(code => `<link rel="alternate" hreflang="${LANGS[code].asset}" href="${BASE}/${code}/">`).join("") + `<link rel="canonical" href="${BASE}/${lang}/"><link rel="alternate" hreflang="x-default" href="${BASE}/en/">`;
  return new HTMLRewriter()
    .on("html",{element(e){e.setAttribute("lang",LANGS[lang].asset)}})
    .on("head",{element(e){e.append(links,{html:true});e.append(`<script type="application/ld+json">${orgJsonLd()}</script>`,{html:true})}})
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
    const path=url.pathname;

    if(path==="/") return Response.redirect(BASE+"/zh-cn/",301);
    if(path==="/sitemap.xml") return new Response(sitemap(),{headers:{"content-type":"application/xml; charset=utf-8","cache-control":"public, max-age=3600"}});
    if(path==="/robots.txt") return new Response(`User-agent: *\nAllow: /\nSitemap: ${BASE}/sitemap.xml\n`,{headers:{"content-type":"text/plain; charset=utf-8"}});

    const match=path.match(/^\/(zh-cn|zh-tw|en|ja|es|pt|ru)(?:\/(.*))?$/);
    if(!match) return env.ASSETS.fetch(request);

    const lang=match[1], rest=(match[2]||"").replace(/\/+$/,"");
    const dict=await loadDict(env,lang);

    if(!rest) return homePage(request,env,lang,dict);
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
