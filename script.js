const routes = ["home", "services", "resume", "work", "blog", "tree-life", "contact"];
const app = document.querySelector("#app");
const navLinks = Array.from(document.querySelectorAll("[data-route]"));
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const langToggle = document.querySelector(".lang-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const langLabel = document.querySelector("[data-lang-label]");

const EMAIL = "llucsteven@gmail.com";

const copy = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      resume: "Resume",
      work: "Work",
      blog: "Blog",
      contact: "Contact",
      contactMe: "Contact me",
    },
    home: {
      eyebrow: "Quality Manager | CQV Engineer",
      titlePrefix: "Hi, I'm",
      titleName: "Steven Tolojanahary",
      lead:
        "I help Quality, CQV and production teams turn compliance constraints into practical systems that are easier to run, easier to audit, and harder to break.",
      cvLabel: "Get my CV",
      stats: [
        { value: 4, label: ["Years of", "experience"] },
        { value: 60, prefix: "+", label: ["Audits &", "inspections"] },
        { value: 20, prefix: "+", label: ["Tests &", "calibrations"] },
        { value: 250, prefix: "+", label: ["Projects", "handled"] },
      ],
    },
    services: [
      {
        title: "Quality",
        text: "Embedding agile compliance into production flows so requirements stay close to field reality.",
      },
      {
        title: "Metrology",
        text: "Executing calibration, testing and metrology follow-up with clear evidence and reliable methods.",
      },
      {
        title: "CQV",
        text: "Reducing validation cost through a risk-based CQV approach focused on what can really fail.",
      },
      {
        title: "System Optimization",
        text: "Simplifying workflows, documents and responsibilities so regulated systems are easier to run and audit.",
      },
    ],
    resume: {
      sidebarTitle: "Why work with me?",
      sidebarText: "Build quality systems that protect compliance without slowing down operations.",
      treeLifeButton: "Tree Life",
      cvButton: "Get my CV",
      tabs: {
        experience: "Experience",
        training: "Training",
        skills: "Skills & Tools",
        about: "About me",
      },
      experienceTitle: "My experience",
      experienceText: "Three field-grounded roles across Quality, CQV, laboratory support and operational execution.",
      trainingTitle: "My training",
      trainingText: "Management, quality, auditing, GMP and technical metrology training connected to field execution.",
      skillsTitle: "Skills & Tools",
      skillsText: "A more complete view of the software, standards, technical methods and soft skills from my CV.",
      aboutTitle: "About me",
      aboutText: "Structured view of the information I want people to find quickly before contacting me. Personal posture: tenacity, catalyst mindset and field realism.",
      experiences: [
        {
          period: "Sep 2024 - Present",
          title: "Quality Manager & CQV Engineer",
          company: "HeX GROUP",
          logo: "assets/logos/Logo-HeX-GROUP.png",
          tone: "invert-dark",
        },
        {
          period: "Sep 2022 - Sep 2024",
          title: "QA Assistant & QC Technician",
          company: "HeX GROUP",
          logo: "assets/logos/Logo-HeX-GROUP.png",
          tone: "invert-dark",
        },
        {
          period: "Mar 2022 - Jul 2022",
          title: "Quality Assistant",
          company: "AURAL",
          logo: "assets/logos/aural_logo.png",
        },
      ],
      training: [
        ["2022 - 2024", "Master in Team Management, Quality & Sustainable Development", "IAE School of Management, Lyon", "assets/logos/iaelyon-bloc-marque-bleu-institutionnel-moyen.png"],
        ["2021 - 2022", "Bachelor in Safety & Quality in Healthcare Practices", "IUT A, Lille", "assets/logos/Logotype_Université_de_Lille_2022.svg.png"],
        ["ISO/IEC 17025", "Internal Auditor ISO/IEC 17025:2017", "CQHN", "assets/logos/CQHN-removebg-preview.png"],
        ["ISO/IEC 17025", "ISO/IEC 17025:2017 Assessor", "BELAC", "assets/logos/belac.png"],
        ["GMP", "Good Manufacturing Practice: Requirements and Implementation", "CEFIRA", "assets/logos/Cefira.png"],
        ["FD X15-140", "Test Method FD X15-140:2024", "MEZYR", "assets/logos/mezyr-removebg-preview.png"],
        ["Metrology", "Characterization of Climatic and Thermostatic Chambers", "CETIAT", "assets/logos/logo-cetiat.svg"],
        ["Audit", "Audit Training: Best Practices & Soft Skills", "SCILIFE", "assets/logos/Scilife_logo_mauve-removebg-preview.png"],
        ["Management", "Top Manager Development Program", "MG Consultant", "assets/logos/MG Consultant.png"],
        ["CSR", "Corporate Social Responsibility", "EM Strasbourg Business School", "assets/logos/Logo_EMS.png"],
      ],
      skills: [
        {
          title: "Tools",
          type: "logos",
          items: [
            ["Office Suite", "assets/logos/Office Suite.png", "invert-light"],
            ["G Suite", "assets/logos/G suite.png", "invert-light"],
            ["Power Platform", "assets/logos/Powerplateform.png"],
            ["Excel ++", "assets/logos/Excel.png", "invert-light"],
            ["Teams", "assets/logos/Teams.png", "invert-light"],
            ["AI tools", "assets/logos/AI Tools.png", "invert-light"],
            ["Mindmapping", "assets/logos/Mindmap.png", "invert-light"],
            ["LIMS & CRM", "assets/logos/Qualishare.jpg"],
          ],
        },
        {
          title: "Hard skills",
          type: "details",
          items: [
            ["System / Management / Audit", "ISO/IEC 17025 - ISO 9001 - cGMP - PIC/S E10"],
            ["Technical / Metrology under development", "FD X15-140 - LAB GTA 24 - ISO 14644-series - NF S90-351 - EN 12469"],
            ["Applied Technical / Metrology", "Thermal Mapping - Calibration in lab / on site - Airflow measurements (velocities, flowrates, pressures, etc.) - Airborne particle classification - Etc."],
            ["Methods & continuous improvement", "PDCA - SWOT - PESTEL - Ishikawa - QQOQCP - 5 Whys - REX - FMEA - Gemba Walk & Lean Management"],
          ],
        },
        {
          title: "Soft Skills",
          type: "mindmap",
          items: [
            ["Proactivity", "assets/logos/proactivité.png", "invert-light"],
            ["Optimization & solution-oriented", "assets/logos/Otpimisation & axé solution.png", "invert-light"],
            ["Team spirit", "assets/logos/Team spirit.png", "invert-light"],
            ["Responsiveness", "assets/logos/réactivité.png", "invert-light"],
            ["Flexibility & adaptability", "assets/logos/la-flexibilite.png", "invert-light"],
          ],
        },
      ],
      about: [
        {
          title: "Driving license",
          items: [{ label: "Permit B", detail: "Available for field missions", logo: "assets/logos/transport.png", tone: "force-dark" }],
        },
        {
          title: "Languages",
          items: [
            { label: "French", detail: "Native language", logo: "assets/logos/france.png" },
            { label: "English", detail: "Professional proficiency (C1)", logo: "assets/logos/royaume-uni.png" },
          ],
        },
        {
          title: "Hobbies",
          type: "mindmap",
          items: [
            { label: "Guitar", detail: "Creative practice", logo: "assets/logos/guitare.png", tone: "force-dark" },
            { label: "AI", detail: "Exploration & productivity", logo: "assets/logos/codex-color-removebg-preview.png" },
            { label: "Manga", detail: "Visual storytelling", logo: "assets/logos/Simbolo_konoha.png", tone: "force-dark" },
            { label: "Chess", detail: "Strategy & patience", logo: "assets/logos/Chess.png", tone: "force-dark" },
            { label: "Travel", detail: "Curiosity & openness", logo: "assets/logos/Voyage.png", tone: "force-dark" },
          ],
        },
      ],
    },
    projects: [
      {
        number: "01",
        title: "Self-Assessment System",
        description:
          "A 360 degree ISO/IEC 17025 self-assessment framework that evaluates conformity and effectiveness as close as possible to field reality.",
        stack: "Audit, ISO/IEC 17025, Excel",
        image: "assets/work/generated/self-assessment-system.png",
        url: "https://www.notion.so/30ae441cb0c080ebb117e26056c365b4",
      },
      {
        number: "02",
        title: "Internal Audit Template",
        description:
          "Automated ISO 9001 audit templates designed to remove repetitive formatting and manual entry from audit reporting.",
        stack: "Audit, ISO 9001, Excel",
        image: "assets/work/generated/internal-audit-template.png",
        url: "https://www.notion.so/30ae441cb0c08045b330c7247fadfc14",
      },
      {
        number: "03",
        title: "HiHero",
        description:
          "A cross-department time and resource analytics tool built for Quality, Laboratory and Field team piloting.",
        stack: "Excel, Power Apps, Power Automate",
        image: "assets/work/generated/hihero.png",
        url: "https://www.notion.so/30ae441cb0c080469030ff4db40da39f",
      },
    ],
    blog: {
      label: "Blog",
      read: "Read article",
      posts: [
        {
          number: "01",
          title: "Consolidating Foundations at the Peak of Accreditation",
          description:
            "A reflection on ISO/IEC 17025:2017 training, audit mindset, technical foundations and the human dimension behind accreditation work.",
          tags: "BELAC, ISO/IEC 17025",
          image: "assets/blog/accreditation-foundations.png",
          url: "https://www.notion.so/30de441cb0c080b9b814c5d43affb585",
        },
        {
          number: "02",
          title: "Quality Management or the Quality of Management?",
          description:
            "A systemic reflection on why operational excellence depends on the quality of management as much as quality management.",
          tags: "TQL, Systemic approach, TPS",
          image: "assets/blog/quality-of-management.png",
          url: "https://www.notion.so/30de441cb0c08053bfffd88e4e2df42c",
        },
      ],
    },
    tree: {
      eyebrow: "",
      title: "Tree of Life",
      countryMark: "",
      lead:
        "A scrollytelling view of the Notion Portfolio page, organized section by section.",
      pdfButton: "Open PDF",
      resumeButton: "Back to Resume",
      topButton: "Back to top",
      summary: [
        ["8x", "on-site client audit defenses"],
        ["20x", "documentary client audit defenses"],
        ["30x", "supplier / vendor audits"],
        ["1x", "FAMHP GMP inspection"],
      ],
      sections: [
        {
          title: "Audit",
          items: [
            "8x on-site client audit defenses conducted by pharmaceutical, biotech, medtech, and other GMP-regulated companies.",
            "20x client documentary audit defenses.",
            "5x internal audits conducted.",
            "30x supplier/vendor audits conducted.",
            "2x FAMHP GMP inspection.",
            "Lead External ISO 9001 Auditor for an association (Junior Entreprise - IAE Lyon).",
            "Observer during ISO 9001 / ISO 14001 / ISO 45001 audit (Ref: Stéphane Dehame - COFRAC freelance auditor).",
          ],
        },
        {
          title: "Process Improvement",
          items: [
            "Automated dashboard for tracking personnel qualification, enabling the Training & Planning team to optimize resource management.",
            "Automated KPI dashboard enabling performance analysis to optimize results and reduce operational workload.",
            "Automated ISO 9001 internal audit template.",
            "Automated report templates compliant with cGMP and pharmacopoeia requirements (EP & USP), developed with the technical team: sterility testing, bioburden, mycoplasma by qPCR, biocide testing, water testing, etc.",
            "AI agent for automated mailbox management: continuous reading and analysis of incoming emails, automatic sorting, action definition in connected tools with human approval, autonomous execution of approved actions, and pre-drafting of emails based on historical correspondence.",
          ],
        },
        {
          title: "Global Quality Management",
          items: [
            "Management of personnel qualification.",
            "Quality management of equipment fleets.",
            "Management of contractors & suppliers (initial and periodic qualification).",
            "Change control management and oversight.",
            "Management of complaints & deviations (RCA, SCAR, investigations, corrective actions, etc.).",
            "Management of non-conforming work.",
            "Document control (drafting/review/update, version control, etc.).",
            "Support in drafting Quality System SOPs: Site Master File, Quality Manual, Quality Policy, General Operating Procedures, etc.",
            "Regulatory and normative monitoring.",
            "Management and implementation of corrective & preventive actions (CAPA) + effectiveness follow-up.",
            "Risk management (risk reduction + cost optimization), KPI implementation, trend analysis, Quality Reviews and Management Review.",
          ],
        },
        {
          title: "Sustainable development",
          items: [
            "Support in the comprehensive assessment of a company's carbon footprint.",
            "Support in the development of an action plan to reduce Scope 1 carbon emissions for an airport.",
            "Participation in a plastic bottle recycling initiative.",
          ],
        },
        {
          title: "International Missions",
          items: [
            "Maintaining strong quality relationships with international contractors and suppliers.",
            "Establishment of Quality & Technical Agreements with international clients.",
            "Client interactions in English as Quality & Technical support during commercial meetings for contract renewals.",
            "Conducting investigations in English.",
            "Daily technical exchanges with clients in English.",
            "Completion of cGMP training in English.",
          ],
        },
        {
          title: "Metrology",
          items: [
            "Technical regulatory monitoring of FD X15-140 standard.",
            "Support in drafting metrology procedures: facilities and environmental conditions, equipment and consumables management, transport management, measurement uncertainty evaluation, and assurance of result validity.",
            "Definition of accreditation scope based on laboratory's most suitable equipment.",
            "Support in drafting standard operating procedures (SOPs), technical investigations and technical lead for testing and calibration activities.",
            "Cleanroom & controlled environment testing (ISO 14644 series, EN 12649, NF S90-351, ISO 17141): airborne particle cleanliness classification, differential air pressure testing, airflow testing, airflow pattern analysis, recovery time & recovery rate testing, particle decay kinetics, environmental parameters, filter integrity testing and biocontamination control.",
            "Comparative testing (temperature, humidity, CO2), thermal mapping of climatic and thermostatic chambers in accordance with FD X15-140 and LAB GTA 24, calibration of temperature and humidity sensors.",
            "Technical review and approval of reports, selection of appropriate equipment for testing and calibration activities, and daily technical coordination with clients.",
            "Technical advisory & client support: optimization of qualification testing under PIC/S PE10 to reduce IQ, OQ and PQ costs, and risk analysis to demonstrate process control while limiting qualification expenses.",
          ],
        },
        {
          title: "CQV & Project Management",
          items: [
            "Full IQ/OQ/PQ protocol drafting under PIC/S PE10.",
            "Equipment and facility qualification.",
            "Qualification report review and protocol-result correlation.",
          ],
        },
        {
          title: "CSV",
          items: [
            "URS, DS and FS preparation with technical teams.",
            "QA testing and documented validation of report templates.",
          ],
        },
        {
          title: "Sales",
          items: [
            "Responses to tenders (RFPs).",
            "Client interactions as Quality and Technical support during commercial meetings for contract renewals.",
          ],
        },
        {
          title: "Tools",
          items: [
            "PDCA.",
            "SWOT & PESTEL.",
            "Ishikawa diagram, QQOQCP, 5 Whys, REX, etc.",
            "FMEA.",
            "Excel (macro, formula, chart).",
            "Google Workspace / G Suite (Drive, Chat, Gmail, Sites, etc.).",
            "Microsoft 365 (Teams, SharePoint, Loop, Planner, etc.).",
            "Power Platform (Power Automate, Power App, Power BI).",
            "AI (ChatGPT, Gemini, Claude, Perplexity, etc.).",
            "Gemba Walk & Lean Management.",
          ],
        },
        {
          title: "Leadership & Empowerment",
          items: [
            "Accountability-based leadership and empowerment of colleagues.",
            "Technical team supervision, prioritization, escalation and process owner coordination.",
            "Internship supervision based on team needs and skill development.",
          ],
        },
        {
          title: "Publications",
          items: [
            "Master's Thesis: Towards the Epitome of Quality Assurance: Key Factors and Core Competencies of the Ultimate QA Professional.",
            "Research Thesis: Which Factors Ensure the Successful Implementation of Continuous Improvement Projects?",
          ],
        },
      ],
    },
    contact: {
      title: "Let's build a system that works",
      text:
        "Tell me where compliance creates delay, rework or confusion. I will help turn it into a clearer operating system.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email address",
      phone: "Phone number",
      select: "Select a service",
      message: "Type your message here.",
      button: "Send message",
      locationLabel: "Address",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      resume: "CV",
      work: "Projets",
      blog: "Blog",
      contact: "Contact",
      contactMe: "Me contacter",
    },
    home: {
      eyebrow: "Quality Manager | Ingénieur CQV",
      titlePrefix: "Bonjour, je suis",
      titleName: "Steven Tolojanahary",
      lead:
        "J'aide les équipes Qualité, CQV et production à transformer les contraintes de conformité en systèmes pratiques, plus simples à utiliser, plus simples à auditer et plus difficiles à casser.",
      cvLabel: "Voir mon CV",
      stats: [
        { value: 4, label: ["Années", "d'expérience"] },
        { value: 60, prefix: "+", label: ["Audits &", "inspections"] },
        { value: 20, prefix: "+", label: ["Essais &", "étalonnages"] },
        { value: 250, prefix: "+", label: ["Projets", "traités"] },
      ],
    },
    services: [
      {
        title: "Quality",
        text: "Intégrer une conformité agile dans les flux de production, au plus près de la réalité terrain.",
      },
      {
        title: "Metrology",
        text: "Réaliser les suivis d'essais, d'étalonnage et de métrologie avec des preuves claires et fiables.",
      },
      {
        title: "CQV",
        text: "Réduire les coûts de validation grâce à une approche CQV basée sur les risques réels.",
      },
      {
        title: "System Optimization",
        text: "Simplifier les flux, documents et responsabilités pour rendre les systèmes plus simples à piloter et à auditer.",
      },
    ],
    resume: {
      sidebarTitle: "Pourquoi travailler avec moi ?",
      sidebarText: "Construire des systèmes qualité qui protègent la conformité sans ralentir les opérations.",
      treeLifeButton: "Tree Life",
      cvButton: "Voir mon CV",
      tabs: {
        experience: "Expériences",
        training: "Formations",
        skills: "Skills & Tools",
        about: "About me",
      },
      experienceTitle: "Mes expériences",
      experienceText: "Trois expériences terrain entre Qualité, CQV, support laboratoire et exécution opérationnelle.",
      trainingTitle: "Mes formations",
      trainingText: "Management, qualité, audit, GMP et métrologie technique reliés à l'exécution terrain.",
      skillsTitle: "Skills & Tools",
      skillsText: "Une vue plus complète des logiciels, standards, méthodes techniques et soft skills présents dans mon CV.",
      aboutTitle: "About me",
      aboutText: "Une lecture structurée des informations importantes à trouver rapidement avant de me contacter. Posture personnelle : ténacité, posture de catalyseur et réalisme terrain.",
      experiences: [
        {
          period: "Sep 2024 - Aujourd'hui",
          title: "Quality Manager & Ingénieur CQV",
          company: "HeX GROUP",
          logo: "assets/logos/Logo-HeX-GROUP.png",
          tone: "invert-dark",
        },
        {
          period: "Sep 2022 - Sep 2024",
          title: "Assistant QA & Technicien QC",
          company: "HeX GROUP",
          logo: "assets/logos/Logo-HeX-GROUP.png",
          tone: "invert-dark",
        },
        {
          period: "Mar 2022 - Jul 2022",
          title: "Assistant Qualité",
          company: "AURAL",
          logo: "assets/logos/aural_logo.png",
        },
      ],
      training: [
        ["2022 - 2024", "Master en Management des Équipes, Qualité & Développement Durable", "IAE School of Management, Lyon", "assets/logos/iaelyon-bloc-marque-bleu-institutionnel-moyen.png"],
        ["2021 - 2022", "Licence professionnelle en Sécurité & Qualité dans les pratiques de soins", "IUT A, Lille", "assets/logos/Logotype_Université_de_Lille_2022.svg.png"],
        ["ISO/IEC 17025", "Auditeur interne ISO/IEC 17025:2017", "CQHN", "assets/logos/CQHN-removebg-preview.png"],
        ["ISO/IEC 17025", "Assesseur ISO/IEC 17025:2017", "BELAC", "assets/logos/belac.png"],
        ["GMP", "Good Manufacturing Practice: exigences et mise en oeuvre", "CEFIRA", "assets/logos/Cefira.png"],
        ["FD X15-140", "Méthode d'essai FD X15-140:2024", "MEZYR", "assets/logos/mezyr-removebg-preview.png"],
        ["Métrologie", "Caractérisation d'enceintes climatiques et thermostatiques", "CETIAT", "assets/logos/logo-cetiat.svg"],
        ["Audit", "Audit Training: Best Practices & Soft Skills", "SCILIFE", "assets/logos/Scilife_logo_mauve-removebg-preview.png"],
        ["Management", "Parcours du Manager au TOP", "MG Consultant", "assets/logos/MG Consultant.png"],
        ["RSE", "Corporate Social Responsibility", "EM Strasbourg Business School", "assets/logos/Logo_EMS.png"],
      ],
      skills: [
        {
          title: "Tools",
          type: "logos",
          items: [
            ["Office Suite", "assets/logos/Office Suite.png", "invert-light"],
            ["G Suite", "assets/logos/G suite.png", "invert-light"],
            ["Power Platform", "assets/logos/Powerplateform.png"],
            ["Excel ++", "assets/logos/Excel.png", "invert-light"],
            ["Teams", "assets/logos/Teams.png", "invert-light"],
            ["Outils IA", "assets/logos/AI Tools.png", "invert-light"],
            ["Mindmapping", "assets/logos/Mindmap.png", "invert-light"],
            ["LIMS & CRM", "assets/logos/Qualishare.jpg"],
          ],
        },
        {
          title: "Hard skills",
          type: "details",
          items: [
            ["Système / Management / Audit", "ISO/IEC 17025 - ISO 9001 - cGMP - PIC/S E10"],
            ["Technique / Métrologie en cours de développement", "FD X15-140 - LAB GTA 24 - ISO 14644-series - NF S90-351 - EN 12469"],
            ["Technique / Métrologie appliquée", "Thermal Mapping - Calibration in lab / on site - Mesures aérauliques (vitesses, débits, pressions, etc.) - Classification particulaire de l'air - Etc."],
            ["Méthodes & amélioration continue", "PDCA - SWOT - PESTEL - Ishikawa - QQOQCP - 5 pourquoi - REX - AMDEC - Gemba Walk & Lean Management"],
          ],
        },
        {
          title: "Soft Skills",
          type: "mindmap",
          items: [
            ["Proactivité", "assets/logos/proactivité.png", "invert-light"],
            ["Optimisation & axé solution", "assets/logos/Otpimisation & axé solution.png", "invert-light"],
            ["Travail d'équipe", "assets/logos/Team spirit.png", "invert-light"],
            ["Réactivité", "assets/logos/réactivité.png", "invert-light"],
            ["Flexibilité et capacité d'adaptation", "assets/logos/la-flexibilite.png", "invert-light"],
          ],
        },
      ],
      about: [
        {
          title: "Permis",
          items: [{ label: "Permis B", detail: "Disponible pour les missions terrain", logo: "assets/logos/transport.png", tone: "force-dark" }],
        },
        {
          title: "Langues",
          items: [
            { label: "Français", detail: "Langue maternelle", logo: "assets/logos/france.png" },
            { label: "Anglais", detail: "Compétences professionnelles (C1)", logo: "assets/logos/royaume-uni.png" },
          ],
        },
        {
          title: "Hobbies",
          type: "mindmap",
          items: [
            { label: "Guitare", detail: "Pratique créative", logo: "assets/logos/guitare.png", tone: "force-dark" },
            { label: "IA", detail: "Exploration & productivité", logo: "assets/logos/codex-color-removebg-preview.png" },
            { label: "Manga", detail: "Narration visuelle", logo: "assets/logos/Simbolo_konoha.png", tone: "force-dark" },
            { label: "Échecs", detail: "Stratégie & patience", logo: "assets/logos/Chess.png", tone: "force-dark" },
            { label: "Voyages", detail: "Curiosité & ouverture", logo: "assets/logos/Voyage.png", tone: "force-dark" },
          ],
        },
      ],
    },
    projects: [
      {
        number: "01",
        title: "Self-Assessment System",
        description:
          "Un système d'auto-évaluation ISO/IEC 17025 à 360 degrés pour évaluer la conformité et l'efficacité au plus près de la réalité terrain.",
        stack: "Audit, ISO/IEC 17025, Excel",
        image: "assets/work/generated/self-assessment-system.png",
        url: "https://www.notion.so/30ae441cb0c080ebb117e26056c365b4",
      },
      {
        number: "02",
        title: "Internal Audit Template",
        description:
          "Des modèles d'audit ISO 9001 automatisés pour réduire le temps passé sur la mise en forme et la saisie manuelle.",
        stack: "Audit, ISO 9001, Excel",
        image: "assets/work/generated/internal-audit-template.png",
        url: "https://www.notion.so/30ae441cb0c08045b330c7247fadfc14",
      },
      {
        number: "03",
        title: "HiHero",
        description:
          "Un outil d'analyse du temps et des ressources pour piloter les équipes Qualité, laboratoire et terrain.",
        stack: "Excel, Power Apps, Power Automate",
        image: "assets/work/generated/hihero.png",
        url: "https://www.notion.so/30ae441cb0c080469030ff4db40da39f",
      },
    ],
    blog: {
      label: "Blog",
      read: "Lire l'article",
      posts: [
        {
          number: "01",
          title: "Consolidating Foundations at the Peak of Accreditation",
          description:
            "Une réflexion sur la formation ISO/IEC 17025:2017, la posture d'audit, les fondations techniques et la dimension humaine de l'accréditation.",
          tags: "BELAC, ISO/IEC 17025",
          image: "assets/blog/accreditation-foundations.png",
          url: "https://www.notion.so/30de441cb0c080b9b814c5d43affb585",
        },
        {
          number: "02",
          title: "Quality Management or the Quality of Management?",
          description:
            "Une réflexion systémique sur le fait que l'excellence opérationnelle dépend autant de la qualité du management que du management de la qualité.",
          tags: "TQL, Approche systémique, TPS",
          image: "assets/blog/quality-of-management.png",
          url: "https://www.notion.so/30de441cb0c08053bfffd88e4e2df42c",
        },
      ],
    },
    tree: {
      eyebrow: "",
      title: "L'Arbre de Vie",
      countryMark: "",
      lead:
        "Un scrollytelling basé sur la page Notion Portfolio, organisé section par section.",
      pdfButton: "Ouvrir le PDF",
      resumeButton: "Retour au CV",
      topButton: "Retour au sommet",
      summary: [
        ["8x", "défenses d'audits client sur site"],
        ["20x", "défenses d'audits documentaires"],
        ["30x", "audits fournisseurs / prestataires"],
        ["1x", "inspection AFMPS GMP"],
      ],
      sections: [
        {
          title: "Audit",
          items: [
            "8x défense d'audits client sur site menés par des clients pharma, biotech, medtech, etc. sur les GMP.",
            "20x défense d'audits client documentaire.",
            "5x réalisation d'audits internes.",
            "30x réalisation d'audits de prestataires/fournisseurs.",
            "1 Inspection AFMPS sur les GMP.",
            "Auditeur principal externe ISO 9001 sur une association (Junior Entreprise - IAE Lyon).",
            "Observateur lors d'un audit ISO 9001 / ISO 14001 / ISO 45001 (ref : Stéphane Dehame - auditeur freelance COFRAC).",
          ],
        },
        {
          title: "Amélioration de process",
          items: [
            "Tableau automatisé pour le suivi de la qualification du personnel permettant à l'équipe Training & Planning une gestion optimisée des ressources.",
            "Tableau de bord automatisé pour le suivi des KPI permettant une analyse pour optimiser les résultats et diminuer les charges.",
            "Template automatisé d'audits internes ISO 9001.",
            "Template de rapports automatisés conformes aux cGMP et à la pharmacopée (EP & USP) en collaboration avec l'équipe technique : essai de stérilité, bioburden, mycoplasme par qPCR, biocide, eaux, etc.",
            "Agent IA pour la gestion automatisée d'une boîte mail : lecture continue et analyse des mails entrants, tri automatique, définition d'actions dans les outils connectés avec demande d'approbation humaine, exécution autonome des actions et pré-rédaction de mails sur base de l'historique.",
          ],
        },
        {
          title: "Gestion Qualité globale",
          items: [
            "Gestion de la qualification du personnel.",
            "Gestion qualité de parcs équipements.",
            "Gestion des prestataires & fournisseurs (qualifications initiale et périodique).",
            "Gestion et maîtrise de Change control.",
            "Gestion des plaintes & déviations (RCA, SCAR, investigation, action, etc.).",
            "Gestion des travaux non conformes.",
            "Gestion documentaire (rédaction/revue/mise à jour, gestion des versions, etc.).",
            "Assistance à la rédaction de SOPs sur le système Qualité : Site Master File, Manuel Qualité, Politique Qualité, Procédure de fonctionnement général, etc.",
            "Veille normative et réglementaire.",
            "Gestion et implémentation d'actions correctives & préventives (CAPA) + suivi d'efficacité.",
            "Gestion des risques, mise en place de KPI, analyse des tendances, Quality Review et assistance à la revue de direction.",
          ],
        },
        {
          title: "Développement durable",
          items: [
            "Assistance dans l'évaluation complète de l'empreinte carbone d'une entreprise.",
            "Assistance dans l'élaboration d'un plan d'action pour réduire le bilan carbone du scope 1 d'un aéroport.",
            "Participation à une initiative de tri de bouteilles en plastique.",
          ],
        },
        {
          title: "Missions à l'international",
          items: [
            "Entretien d'un lien de qualité avec les prestataires/fournisseurs internationaux.",
            "Établissement de Quality & Technical Agreement avec les clients internationaux.",
            "Échanges en anglais avec les clients en tant que support Qualité et Technique lors de rencontre commerciale pour les renouvellements de contrats.",
            "Investigations en anglais.",
            "Échanges techniques quotidiens en anglais avec les clients.",
            "Suivi de formation en anglais sur les cGMP.",
          ],
        },
        {
          title: "Métrologie",
          items: [
            "Veille normative technique de la FD X15-140.",
            "Assistance à la rédaction de procédures de métrologie : installations et conditions ambiantes, gestion des équipements et consommables, gestion du transport, évaluation des incertitudes de mesure, assurance de la validité des résultats.",
            "Définition d'un scope d'accréditation sur base des meilleurs équipements du laboratoire.",
            "Assistance à la rédaction de modes opératoires, investigations techniques et référent technique sur les essais et étalonnages.",
            "Réalisation d'essais en salles propres et environnements apparentés (ISO 14644-series, EN 12649, NF S90-351, ISO 17141) : classification particulaire, pression différentielle, flux d'air, schémas aérauliques, essai de récupération, cinétique d'élimination, paramètres d'ambiances, intégrité de filtration, biocontamination.",
            "Réalisation d'essais par comparaison en température, humidité, CO2.",
            "Réalisation de cartographies d'enceintes climatiques et thermostatiques suivant la FD X15-140 et le LAB GTA 24.",
            "Réalisation d'étalonnages de capteurs de température et d'humidité, review technique et approbation des rapports, choix d'équipements adaptés et échanges techniques quotidiens avec les clients.",
            "Conseil technique pour l'accompagnement client : optimisation des tests PIC/S E10 pour réduire les coûts IQ/OQ/PQ et analyse de risques pour montrer leur maîtrise.",
          ],
        },
        {
          title: "CQV & Gestion de projet",
          items: [
            "Rédaction complète de protocoles IQ/OQ/PQ dans le cadre des PIC/S PE10.",
            "Qualification d'équipements et de locaux.",
            "Analyse des rapports de qualification et mise en relation résultats-protocoles.",
          ],
        },
        {
          title: "CSV",
          items: [
            "Établissement des URS, DS et FS avec les équipes techniques.",
            "QA testing et validation documentée des templates de rapports.",
          ],
        },
        {
          title: "Sales",
          items: [
            "Réponse à des appels d'offres.",
            "Échanges avec les clients en tant que support Qualité et Technique lors de rencontres commerciales pour les renouvellements de contrats.",
          ],
        },
        {
          title: "Outils",
          items: [
            "PDCA.",
            "SWOT & PESTEL.",
            "Diagramme d'Ishikawa, QQOQCP, 5 pourquoi, REX, etc.",
            "AMDEC.",
            "Excel (macro, formule, graphique).",
            "Google Workspace / G Suite (Drive, Tchat, Gmail, Sites, etc.).",
            "Microsoft 365 (Teams, Sharepoint, Loop, Planner, etc.).",
            "Power Platform (Power Automate, Power App, Power BI).",
            "IA (ChatGPT, Gemini, Claude, Perplexity, etc.).",
            "Gemba Walk & Lean Management.",
          ],
        },
        {
          title: "Leadership & Empowerment",
          items: [
            "Leadership orienté responsabilisation et autonomie des collègues.",
            "Pilotage de membres techniques, priorisation, escalade et coordination des pilotes de processus.",
            "Tutorat de stage selon les besoins d'équipe et le développement de compétences.",
          ],
        },
        {
          title: "Rédactions académiques",
          items: [
            "Mémoire de fin d'étude : Vers l'épitome de l'Assurance Qualité : Les facteurs pertinents et les compétences clés du QA Ultime.",
            "Mémoire : Avec quels facteurs peut-on assurer la bonne conduite de projet d'amélioration continue ?",
          ],
        },
        {
          title: "Projets spécifiques",
          items: [
            "Mise en place d'un outil de gestion et d'analyse du temps pour les équipes Qualité, laboratoire et terrain, à des fins de pilotage d'équipes et d'optimisation des ressources.",
            "Mise en place d'un système de self-assessment suivant l'ISO/IEC 17025.",
            "Auteur d'un Light Novel - Fantasy & Surnaturel : Eternal.",
          ],
        },
      ],
    },
    contact: {
      title: "Construisons un système qui fonctionne",
      text:
        "Dis-moi où la conformité crée du délai, de la reprise ou de la confusion. Je t'aiderai à en faire un système plus clair.",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Adresse email",
      phone: "Téléphone",
      select: "Sélectionner un service",
      message: "Écris ton message ici.",
      button: "Envoyer",
      locationLabel: "Adresse",
    },
  },
};

let lang = localStorage.getItem("portfolio-lang") || "en";
let theme = localStorage.getItem("portfolio-theme") || "dark";
let workIndex = 0;
let blogIndex = 0;
let treeScrollHandler = null;
let treeRevealObserver = null;
let treeMouseHandler = null;

function currentCopy() {
  return copy[lang];
}

function currentRoute() {
  const route = window.location.hash.replace("#", "");
  return routes.includes(route) ? route : "home";
}

function setText(selector, value, root = document) {
  const node = root.querySelector(selector);
  if (node) node.textContent = value;
}

function logoToneClass(tone) {
  return tone ? ` logo-tone-${tone}` : "";
}

function logoImage(logo, label, tone = "") {
  return `<img class="logo-asset${logoToneClass(tone)}" src="${logo}" alt="${label}" />`;
}

function aboutLogoTone(tone = "") {
  if (tone === "force-dark" || tone === "invert-light") return "auto";
  return tone;
}

function logoFrame(logo, label, tone = "") {
  return `<span class="logo-frame logo-hover-tile">${logoImage(logo, label, tone)}</span>`;
}

function normalizeMindItem(item) {
  if (Array.isArray(item)) {
    const [label, logo, tone] = item;
    return { label, logo, tone };
  }
  return item;
}

function renderMindMap(group, extraClass = "") {
  const className = extraClass ? ` ${extraClass}` : "";
  return `
    <div class="skill-mindmap${className}" aria-label="${group.title}">
      <svg class="mindmap-lines" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
        <line x1="50" y1="50" x2="50" y2="12" />
        <line x1="50" y1="50" x2="84" y2="32" />
        <line x1="50" y1="50" x2="78" y2="82" />
        <line x1="50" y1="50" x2="22" y2="82" />
        <line x1="50" y1="50" x2="16" y2="32" />
      </svg>
      <div class="mind-center">${group.title}</div>
      ${group.items
        .map((item, index) => {
          const entry = normalizeMindItem(item);
          const tone = extraClass.includes("about-mindmap") ? aboutLogoTone(entry.tone) : entry.tone;
          const visual = entry.logo
            ? logoImage(entry.logo, entry.label, tone)
            : `<span class="mind-mark">${entry.mark || ""}</span>`;
          return `
            <div class="mind-node mind-node-${index + 1} logo-hover-tile">
              <span class="skill-logo-visual">${visual}</span>
              <span>${entry.label}</span>
              ${entry.detail ? `<small>${entry.detail}</small>` : ""}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function setActiveRoute(route) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.route === route && !link.classList.contains("hire-link"));
  });
}

function updatePersistentLabels() {
  const data = currentCopy();
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-nav-key]").forEach((item) => {
    item.textContent = data.nav[item.dataset.navKey];
  });
  langLabel.textContent = lang.toUpperCase();
  langToggle.setAttribute("aria-label", lang === "en" ? "Switch to French" : "Passer en anglais");
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
}

function applyTheme() {
  document.body.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  updatePersistentLabels();
}

function closeMenu() {
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
}

function renderRoute(route = currentRoute()) {
  const template = document.querySelector(`#${route}-template`);
  if (!template) return;

  if (treeScrollHandler) {
    window.removeEventListener("scroll", treeScrollHandler);
    treeScrollHandler = null;
  }
  if (treeRevealObserver) {
    treeRevealObserver.disconnect();
    treeRevealObserver = null;
  }
  if (treeMouseHandler) {
    window.removeEventListener("mousemove", treeMouseHandler);
    treeMouseHandler = null;
  }

  app.replaceChildren(template.content.cloneNode(true));
  setActiveRoute(route);
  closeMenu();
  hydrateRoute(route);

  if (route === "home") initCounters();
  if (route === "resume") initResumeTabs();
  if (route === "work") initWorkSlider();
  if (route === "blog") initBlogSlider();
  if (route === "tree-life") initTreeLife();
}

function hydrateRoute(route) {
  const data = currentCopy();
  if (route === "home") hydrateHome(data.home);
  if (route === "services") hydrateServices(data.services);
  if (route === "resume") hydrateResume(data.resume);
  if (route === "tree-life") hydrateTreeLife(data.tree);
  if (route === "contact") hydrateContact(data.contact, data.services);
  if (route === "blog") hydrateBlogFrame(data.blog);
}

function hydrateHome(home) {
  setText("[data-home='eyebrow']", home.eyebrow);
  setText("[data-home='titlePrefix']", home.titlePrefix);
  setText("[data-home='titleName']", home.titleName);
  setText("[data-home='lead']", home.lead);
  setText("[data-home='cvLabel']", home.cvLabel);

  const stats = document.querySelector("[data-home-stats]");
  stats.replaceChildren(
    ...home.stats.map((stat) => {
      const item = document.createElement("div");
      item.className = "stat";
      item.innerHTML = `
        <strong data-count="${stat.value}" data-prefix="${stat.prefix || ""}">0</strong>
        <span>${stat.label[0]}<br />${stat.label[1]}</span>
      `;
      return item;
    }),
  );
}

function hydrateServices(services) {
  const grid = document.querySelector("[data-services]");
  grid.replaceChildren(
    ...services.map((service, index) => {
      const article = document.createElement("article");
      article.className = "service-card";
      const number = String(index + 1).padStart(2, "0");
      article.innerHTML = `
        <a href="#contact" class="service-arrow" aria-label="Open ${service.title} service">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
        </a>
        <strong>${number}</strong>
        <h2>${service.title}</h2>
        <p>${service.text}</p>
      `;
      return article;
    }),
  );
}

function hydrateResume(resume) {
  Object.entries(resume.tabs).forEach(([key, label]) => {
    const tab = document.querySelector(`[data-tab-key='${key}']`);
    if (tab) tab.textContent = label;
  });
  ["sidebarTitle", "sidebarText", "treeLifeButton", "cvButton", "experienceTitle", "experienceText", "trainingTitle", "trainingText", "skillsTitle", "skillsText", "aboutTitle", "aboutText"].forEach((key) => {
    setText(`[data-resume='${key}']`, resume[key]);
  });

  renderExperiences(resume.experiences);
  renderTraining(resume.training);
  renderSkills(resume.skills);
  renderAbout(resume.about);
}

function renderExperiences(experiences) {
  const list = document.querySelector("[data-experience-list]");
  list.replaceChildren(
    ...experiences.map((item) => {
      const article = document.createElement("article");
      article.className = "experience-row";
      article.innerHTML = `
        ${logoFrame(item.logo, `${item.company} logo`, item.tone)}
        <div>
          <span>${item.period}</span>
          <h3>${item.title}</h3>
          <p>${item.company}</p>
        </div>
      `;
      return article;
    }),
  );
}

function renderTraining(training) {
  const list = document.querySelector("[data-training-list]");
  list.replaceChildren(
    ...training.map(([period, title, org, logo, tone]) => {
      const article = document.createElement("article");
      article.className = "experience-row training-row";
      article.innerHTML = `
        ${logoFrame(logo, `${org} logo`, tone)}
        <div>
          <span>${period}</span>
          <h3>${title}</h3>
          <p>${org}</p>
        </div>
      `;
      return article;
    }),
  );
}

function renderSkills(groups) {
  const box = document.querySelector("[data-skills-toolbox]");
  box.replaceChildren(
    ...groups.map((group) => {
      const section = document.createElement("section");
      section.className = "skill-family-row";
      if (group.type === "logos") {
        section.innerHTML = `
          <h3>${group.title}</h3>
          <div class="skill-logo-strip">
            ${group.items.map(([label, logo, tone]) => `<div class="skill-logo-item logo-hover-tile"><span class="skill-logo-visual">${logoImage(logo, label, tone)}</span><span>${label}</span></div>`).join("")}
          </div>
        `;
      } else if (group.type === "mindmap") {
        section.classList.add("skill-family-mindmap");
        section.innerHTML = renderMindMap(group);
      } else if (group.type === "details") {
        section.innerHTML = `
          <h3>${group.title}</h3>
          <div class="skill-detail-list">
            ${group.items.map(([label, value]) => `<article><strong>${label}</strong><p>${value}</p></article>`).join("")}
          </div>
        `;
      } else {
        section.innerHTML = `
          <h3>${group.title}</h3>
          <ul class="skill-bullet-list">
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        `;
      }
      return section;
    }),
  );
}

function renderAbout(rows) {
  const table = document.querySelector("[data-about-table]");
  table.replaceChildren(
    ...rows.map((group) => {
      const block = document.createElement("section");
      const isMindmap = group.type === "mindmap";
      const isLanguage = ["languages", "langues"].includes(group.title.toLowerCase());
      block.className = `about-block${isMindmap ? " about-block-mindmap" : ""}`;
      block.innerHTML = `
        <h3>${group.title}</h3>
        ${
          isMindmap
            ? renderMindMap(group, "about-mindmap")
            : `<div class="about-items">
                ${group.items
                  .map((item) => {
                    const tone = aboutLogoTone(item.tone);
                    const visual = item.logo
                      ? isLanguage
                        ? `<span class="about-logo-plain">${logoImage(item.logo, item.label, tone)}</span>`
                        : `<span class="about-icon logo-hover-tile">${logoImage(item.logo, item.label, tone || "auto")}</span>`
                      : `<span class="about-icon about-mark logo-hover-tile">${item.mark}</span>`;
                    return `
                      <article class="about-item${isLanguage ? " about-item-plain-logo" : ""}">
                        ${visual}
                        <div>
                          <strong>${item.label}</strong>
                          <span>${item.detail}</span>
                        </div>
                      </article>
                    `;
                  })
                  .join("")}
              </div>`
        }
      `;
      return block;
    }),
  );
}

const treeSceneCopy = {
  en: {
    lemur: "Precision, alertness and audit defense, represented by the Maki Catta watching inside the ink circle.",
    tsingy: "Scientific accuracy is represented by the sharp mineral peaks of the Tsingy de Bemaraha.",
    bamboo: "Optimization and automation that free value, carried by animated bamboo leaves and swaying process scrolls.",
    chameleon: "Global quality management requires constant adaptation, like a chameleon changing color without losing control.",
    ocean: "CQV and project work move like a pirogue on a strict current: protocols, evidence and controlled execution.",
    leadership: "The baobab carries quiet strength, deep roots and the wisdom of collective responsibility.",
    fan: "Sales is kept clear and precise, like a folded fan opening only where the discussion needs it.",
    ankoay: "International missions and sustainable development are shown through an Ankoay gliding with long-range perspective.",
    butterfly: "CSV is represented by the comet butterfly: light, exact and fully documented.",
    waves: "Publications close the fresco with the rhythm of the Indian Ocean waves.",
  },
  fr: {
    lemur: "Précision, vigilance et défense d'audit, représentées par le Maki Catta dans un cercle d'encre.",
    tsingy: "La justesse scientifique est représentée par les pics minéraux des Tsingy de Bemaraha.",
    bamboo: "Optimisation et automatisation pour libérer de la valeur, portées par des feuilles de bambou animées.",
    chameleon: "Le management de la qualité globale demande une adaptation permanente, comme le caméléon qui ajuste ses couleurs sans perdre le contrôle.",
    ocean: "Le CQV et la gestion de projet avancent comme une pirogue sur un courant strict : protocoles, preuves et exécution maîtrisée.",
    leadership: "Le baobab porte la force tranquille, l'ancrage profond et la sagesse de la responsabilité collective.",
    fan: "Le sales reste clair et précis, comme un éventail plissé qui s'ouvre au bon moment de la discussion.",
    ankoay: "Les missions internationales et le développement durable sont portés par un Ankoay qui garde une vision longue distance.",
    butterfly: "Le CSV est représenté par le papillon comète : léger, exact et entièrement documenté.",
    waves: "Les publications ferment la fresque avec le rythme des vagues de l'Océan Indien.",
  },
};

function normalizeTreeTitle(title) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function findTreeSection(tree, terms) {
  return tree.sections.find((section) => {
    const normalized = normalizeTreeTitle(section.title);
    return terms.some((term) => normalized.includes(term));
  });
}

function splitTreeSection(section, groups) {
  if (!section) return [];
  return groups.map((group) => ({
    title: group.title,
    items: section.items.slice(group.start, group.end),
  }));
}

function makeTreeSection(title, items, options = {}) {
  return { title, items, ...options };
}

function treeListTitle(key, fallback) {
  const labels = {
    en: {
      audit: "Audit",
      metrology: "Metrology",
      process: "Process Improvement",
      quality: "Global Quality",
      cqv: "CQV & Project Management",
      leadership: "Leadership & Empowerment",
      sales: "Sales",
      international: "International Missions & Sustainable Development",
      csv: "CSV",
      publications: "Publications",
      metrologyGeneral: "General metrology & procedures",
      cleanrooms: "Cleanroom & Controlled Environment Testing",
      metrologySupport: "Technical review, equipment and client coordination",
      advisory: "Technical Advisory & Client Support",
      missing: "Content not provided in the Notion Portfolio page.",
    },
    fr: {
      audit: "Audit",
      metrology: "Metrology",
      process: "Process Improvement",
      quality: "Global Quality",
      cqv: "CQV & Project Management",
      leadership: "Leadership & Empowerment",
      sales: "Sales",
      international: "International Missions & Sustainable Development",
      csv: "CSV",
      publications: "Publications",
      metrologyGeneral: "General metrology & procedures",
      cleanrooms: "Cleanroom & Controlled Environment Testing",
      metrologySupport: "Technical review, equipment and client coordination",
      advisory: "Technical Advisory & Client Support",
      missing: "Content not provided in the Notion Portfolio page.",
    },
  };
  return labels[lang]?.[key] || fallback;
}

function buildPortfolioTreeContent() {
  return {
    audit: makeTreeSection(treeListTitle("audit", "Audit"), [
      "8x on-site client audit defenses conducted by pharmaceutical, biotech, medtech, and other GMP-regulated companies.",
      "20x client documentary audit defenses.",
      "5x internal audits conducted.",
      "30x supplier/vendor audits conducted.",
      "2x FAMHP GMP inspection.",
      "Lead External ISO 9001 Auditor for an association (Junior Entreprise - IAE Lyon).",
      "Observer during ISO 9001 / ISO 14001 / ISO 45001 audit (Ref: Stephane Dehame - COFRAC freelance auditor).",
    ]),
    metrology: [
      makeTreeSection(treeListTitle("metrologyGeneral", "General metrology & procedures"), [
        "Technical regulatory monitoring of FD X15-140 standard.",
        "Support in drafting metrology procedures, including: Facilities and environmental conditions; Equipment and consumables management; Transport management; Measurement uncertainty evaluation; Assurance of result validity.",
        "Definition of accreditation scope based on laboratory's most suitable equipment.",
        "Support in drafting standard operating procedures (SOPs).",
        "Technical investigations.",
        "Technical lead for testing and calibration activities.",
      ]),
      makeTreeSection(treeListTitle("cleanrooms", "Cleanroom & Controlled Environment Testing"), [
        "Cleanroom & Controlled Environment Testing (ISO 14644 series, EN 12649, NF S90-351, ISO 17141).",
        "Airborne particle cleanliness classification.",
        "Differential air pressure testing.",
        "Airflow testing (uniformity, velocity, flow rate, air change rate).",
        "Airflow pattern analysis.",
        "Recovery time & recovery rate testing.",
        "Particle decay kinetics.",
        "Environmental parameters (temperature & humidity).",
        "Filter integrity testing.",
        "Biocontamination control (air & surfaces).",
      ]),
      makeTreeSection(treeListTitle("metrologySupport", "Technical review, equipment and client coordination"), [
        "Comparative testing (temperature, humidity, CO2).",
        "Thermal mapping of climatic and thermostatic chambers in accordance with FD X15-140 and LAB GTA 24.",
        "Calibration of temperature and humidity sensors.",
        "Technical review and approval of reports.",
        "Selection of appropriate equipment for testing and calibration activities.",
        "Daily technical coordination with clients.",
      ]),
      makeTreeSection(treeListTitle("advisory", "Technical Advisory & Client Support"), [
        "Optimization of qualification testing under PIC/S PE10 to reduce IQ, OQ, and PQ costs.",
        "Risk analysis to demonstrate process control while limiting qualification expenses.",
      ]),
    ],
    process: [
      makeTreeSection("Dashboards & internal audit template", [
        "Automated dashboard for tracking personnel qualification, enabling the Training & Planning team to optimize resource management.",
        "Automated KPI dashboard enabling performance analysis to optimize results and reduce operational workload.",
        "Automated ISO 9001 internal audit template.",
      ], { meta: "Dashboards" }),
      makeTreeSection("cGMP report templates", [
        "Automated report templates compliant with cGMP and pharmacopoeia requirements (EP & USP), developed in collaboration with the technical team, including: Sterility testing; Bioburden; Mycoplasma by qPCR; Biocide testing; Water testing; Etc.",
      ], { meta: "cGMP templates" }),
      makeTreeSection("Mailbox AI Agent", [
        "AI agent for automated mailbox management, including: Continuous reading and analysis of incoming emails; Automatic email sorting; Definition of actions within connected tools, with human approval request; Autonomous execution of approved actions; Pre-drafting of emails based on historical correspondence.",
      ], { meta: "Mailbox AI Agent" }),
    ],
    quality: [
      makeTreeSection("Personnel qualification & equipment fleets", [
        "Management of personnel qualification.",
        "Quality management of equipment fleets.",
        "Management of contractors & suppliers (initial and periodic qualification).",
      ]),
      makeTreeSection("Change control, complaints & deviations", [
        "Change control management and oversight.",
        "Management of complaints & deviations (RCA, SCAR, investigations, corrective actions, etc.).",
        "Management of non-conforming work.",
      ]),
      makeTreeSection("Document control & Quality System SOPs", [
        "Document control (drafting/review/update, version control, etc.).",
        "Support in drafting Quality System SOPs, including: Site Master File; Quality Manual; Quality Policy; General Operating Procedures; Etc.",
      ]),
      makeTreeSection("Regulatory monitoring & CAPA", [
        "Regulatory and normative monitoring.",
        "Management and implementation of corrective & preventive actions (CAPA) + effectiveness follow-up.",
      ]),
      makeTreeSection("Risk, KPI & trends", [
        "Risk management (risk reduction + cost optimization).",
        "KPI implementation.",
        "Trend analysis.",
      ]),
      makeTreeSection("Quality Reviews", [
        "Conducting Quality Reviews.",
        "Management Review.",
      ]),
    ],
    cqv: makeTreeSection(treeListTitle("cqv", "CQV & Project Management"), [
      "Full drafting of IQ/OQ/PQ protocols in accordance with PIC/S E10 guidelines.",
      "Equipment qualification.",
      "Facility qualification.",
      "Review of qualification reports and correlation of results with protocol requirements.",
    ]),
    leadership: makeTreeSection(treeListTitle("leadership", "Leadership & Empowerment"), [
      "Leadership focused on accountability and empowerment of colleagues.",
      "Supervision of 2 technical team members.",
      "Task prioritization.",
      "Interpersonal communication (DISC, DESCC, FISC, 3W, etc.).",
      "Escalation and reporting to top management.",
      "Coordination of process owners.",
      "Internship supervisor (definition of assignments based on team needs & skills development).",
    ]),
    sales: makeTreeSection(treeListTitle("sales", "Sales"), [
      "Responses to tenders (RFPs).",
      "Client interactions as Quality and Technical support during commercial meetings for contract renewals.",
    ]),
    international: [
      makeTreeSection("International Missions", [
        "Maintaining strong quality relationships with international contractors and suppliers.",
        "Establishment of Quality & Technical Agreements with international clients.",
        "Client interactions in English as Quality & Technical support during commercial meetings for contract renewals.",
        "Conducting investigations in English.",
        "Daily technical exchanges with clients in English.",
        "Completion of cGMP training in English.",
      ]),
      makeTreeSection("Sustainable Development", [
        "Support in the comprehensive assessment of a company's carbon footprint.",
        "Support in the development of an action plan to reduce Scope 1 carbon emissions for an airport.",
        "Participation in a plastic bottle recycling initiative.",
      ]),
    ],
    csv: makeTreeSection(treeListTitle("csv", "CSV"), [
      "Development of URS, DS, and FS in collaboration with the technical team.",
      "QA testing of report templates.",
      "Documented validation of report templates.",
    ]),
    publications: makeTreeSection(treeListTitle("publications", "Publications"), [
      "Master's Thesis: Towards the Epitome of Quality Assurance: Key Factors and Core Competencies of the Ultimate QA Professional.",
      "Research Thesis: Which Factors Ensure the Successful Implementation of Continuous Improvement Projects?",
    ]),
  };
}

function makeTreeScene(style, title, label, sections) {
  return {
    style,
    title,
    label,
    intro: treeSceneCopy[lang][style],
    sections: sections.filter(Boolean),
  };
}

function buildTreeScenes(tree) {
  const content = buildPortfolioTreeContent();

  return {
    scenes: [
      makeTreeScene("lemur", "Audit", "Audit - Lémurien Maki Catta", [content.audit]),
      makeTreeScene("tsingy", "Metrology", "Metrology - Tsingy de Bemaraha", content.metrology),
      makeTreeScene("bamboo", "Process Improvement", "Process Improvement - Bambouseraie", content.process),
      makeTreeScene("chameleon", "Global Quality", "Global Quality - Caméléon", content.quality),
      makeTreeScene("ocean", "CQV & Project Management", "CQV & Project Management - Pirogue sur l'Océan", [content.cqv]),
      makeTreeScene("leadership", "Leadership & Empowerment", "Leadership & Empowerment - Baobab Sacré", [content.leadership]),
      makeTreeScene("fan", "Sales", "Sales - Éventail plissé", [content.sales]),
      makeTreeScene("ankoay", "International Missions & Sustainable Development", "International Missions & Sustainable Development - Ankoay planant", content.international),
      makeTreeScene("butterfly", "CSV", "CSV - Papillon Comète", [content.csv]),
      makeTreeScene("waves", "Publications", "Publications - Vagues de l'Océan Indien", [content.publications]),
    ].filter((scene) => scene.sections.length),
    footer: [],
  };
}

function treeSceneSvg(style) {
  const svgs = {
    lemur: `
      <svg class="tree-scene-svg tree-lemur-large enso-container" viewBox="0 0 200 200">
        <path class="enso-path" d="M 100,20 C 150,20 180,60 180,100 C 180,150 140,180 100,180 C 50,180 20,140 25,100 C 28,70 50,30 90,22" />
        <g class="lemur-body" transform="translate(130, 42) scale(0.35)">
          <polygon points="50,40 20,80 80,80" />
          <polygon points="20,80 10,50 35,70" />
          <polygon points="80,80 90,50 65,70" />
          <circle class="interactive-circle" cx="35" cy="72" r="4.5" />
          <circle class="interactive-circle" cx="65" cy="72" r="4.5" />
          <polygon points="45,45 55,45 50,40" />
          <polygon points="50,80 30,150 70,150" opacity="0.6" />
          <path class="lemur-tail" d="M 70,150 Q 120,140 100,80 T 80,40 T 110,10" />
        </g>
      </svg>
    `,
    bamboo: `
      <svg class="tree-scene-svg tree-bamboo-large" viewBox="0 0 220 220">
        <g transform="translate(12 8)">
          <line class="bamboo-stem" x1="52" y1="0" x2="52" y2="204" />
          <path class="bamboo-leaf-node" d="M52,40 Q15,15 5,20 Q30,45 52,40" />
          <path class="bamboo-leaf-node" d="M52,40 Q22,35 16,50 Q36,54 52,40" />
          <path class="bamboo-leaf-node" d="M52,110 Q90,84 104,91 Q74,116 52,110" />
          <path class="bamboo-leaf-node" d="M52,170 Q10,145 2,150 Q25,175 52,170" />
          <circle class="interactive-circle" cx="52" cy="40" r="5" />
          <circle class="interactive-circle" cx="52" cy="110" r="5" />
          <circle class="interactive-circle" cx="52" cy="170" r="5" />
        </g>
        <g transform="translate(108 18)">
          <line class="bamboo-stem bamboo-stem-light" x1="52" y1="0" x2="52" y2="196" />
          <path class="bamboo-leaf-node" d="M52,70 Q15,45 5,52 Q30,78 52,70" />
          <path class="bamboo-leaf-node" d="M52,70 Q24,68 18,86 Q40,90 52,70" />
          <path class="bamboo-leaf-node" d="M52,140 Q90,118 104,126 Q76,150 52,140" />
          <path class="bamboo-leaf-node" d="M52,140 Q82,140 78,158 Q58,162 52,140" />
          <circle class="interactive-circle" cx="52" cy="70" r="5" />
          <circle class="interactive-circle" cx="52" cy="140" r="5" />
        </g>
      </svg>
    `,
    chameleon: `
      <svg class="tree-scene-svg tree-chameleon-large chameleon-trigger" viewBox="0 0 200 150">
        <path class="chameleon-branch" d="M 10,120 L 190,40" />
        <polyline class="chameleon-segment chameleon-leg" points="75,90 65,115 55,115" />
        <polyline class="chameleon-segment chameleon-leg" points="115,70 125,95 135,95" />
        <path class="chameleon-segment" d="M 40,75 C 45,35 90,30 120,55 C 130,65 135,80 120,95 C 105,100 85,95 70,95 C 55,95 45,90 40,75 Z" />
        <polygon class="chameleon-segment" points="40,75 52,38 72,40" opacity="0.8" />
        <polygon class="chameleon-segment" points="72,40 92,32 110,48" opacity="0.7" />
        <path class="chameleon-segment" d="M 40,75 Q 55,95 70,95" opacity="0.9" />
        <path class="chameleon-tail" d="M 120,95 Q 155,110 145,130 T 110,120 T 120,100 T 130,110" />
        <g transform="translate(58, 55)">
          <circle class="chameleon-segment" cx="0" cy="0" r="11" opacity="0.85" />
          <circle cx="0" cy="0" r="7" />
          <circle data-tree-pupil cx="0" cy="0" r="3" />
        </g>
      </svg>
    `,
    baobab: `
      <svg class="tree-scene-svg tree-baobab-light" viewBox="0 0 200 200">
        <path class="baobab-trunk" d="M 92,184 C 98,150 82,123 78,85 C 74,48 64,26 100,25 C 136,26 126,48 122,85 C 118,123 102,150 108,184 Z" />
        <path class="baobab-branch" d="M78 82 Q45 61 28 75 M122 82 Q155 61 172 75 M92 40 Q72 18 58 28 M108 40 Q128 18 142 28" />
        <path class="baobab-roots" d="M92 184 Q64 176 42 188 M108 184 Q136 176 158 188" />
        <circle class="baobab-fruit" cx="100" cy="25" r="6" />
        <circle class="baobab-fruit" cx="58" cy="28" r="5" />
        <circle class="baobab-fruit" cx="142" cy="28" r="5" />
      </svg>
    `,
    tsingy: `
      <svg class="tree-scene-svg tree-tsingy-large" viewBox="0 0 200 200">
        <circle class="sand-line interactive-circle" cx="100" cy="100" r="90" />
        <circle class="sand-line interactive-circle" cx="100" cy="100" r="75" />
        <circle class="sand-line interactive-circle" cx="100" cy="100" r="60" />
        <circle class="sand-line interactive-circle" cx="100" cy="100" r="45" />
        <polygon class="tsingy-needle" points="20,170 32,85 44,170" />
        <polygon class="tsingy-needle" points="40,170 52,65 64,170" />
        <polygon class="tsingy-needle" points="60,170 75,50 90,170" />
        <polygon class="tsingy-needle tsingy-major" points="85,170 100,15 115,170" />
        <polygon class="tsingy-needle" points="110,170 122,58 134,170" />
        <polygon class="tsingy-needle" points="130,170 142,75 154,170" />
        <polygon class="tsingy-needle" points="150,170 160,95 170,170" />
      </svg>
    `,
    ocean: `
      <svg class="tree-scene-svg tree-ocean-large" viewBox="0 0 200 200">
        <line class="water-flow-line" x1="58" y1="12" x2="58" y2="188" />
        <line class="water-flow-line water-flow-delay" x1="142" y1="18" x2="142" y2="190" />
        <path class="laka-boat" d="M 34,130 Q 100,168 166,130 Q 136,154 100,156 Q 64,154 34,130" />
        <path class="laka-sail" d="M 100,48 L 100,128 L 144,118 Z" />
        <path class="laka-wave" d="M 35,164 Q 62,154 90,164 T 145,164 T 188,164" />
        <circle class="interactive-circle" cx="100" cy="130" r="5" />
      </svg>
    `,
    leadership: `
      <svg class="tree-scene-svg tree-baobab-large baobab-interactive" viewBox="0 0 200 240">
        <path class="baobab-trunk baobab-bottle" d="M 86,220 C 85,180 91,120 94,80 L 106,80 C 109,120 115,180 114,220 Z" />
        <line class="baobab-ground" x1="40" y1="220" x2="160" y2="220" />
        <path class="baobab-branch" d="M 100,80 Q 100,60 92,48 T 85,30 T 90,15" />
        <path class="baobab-branch" d="M 92,48 Q 80,42 75,30 T 62,20" />
        <path class="baobab-branch" d="M 94,80 Q 75,70 60,55 T 42,42 T 30,55" />
        <path class="baobab-branch" d="M 60,55 Q 52,42 40,32 T 22,25" />
        <path class="baobab-branch" d="M 106,80 Q 125,70 140,55 T 158,42 T 170,55" />
        <path class="baobab-branch" d="M 140,55 Q 148,42 160,32 T 178,25" />
        <path class="baobab-branch" d="M 90,15 Q 85,8 95,5 M 62,20 Q 55,15 62,10 M 160,32 Q 165,22 158,18" />
        <circle class="baobab-fruit" cx="90" cy="15" r="5" />
        <circle class="baobab-fruit" cx="62" cy="20" r="5" />
        <circle class="baobab-fruit" cx="22" cy="25" r="5" />
        <circle class="baobab-fruit" cx="178" cy="25" r="5" />
        <circle class="baobab-fruit" cx="100" cy="45" r="6" />
        <circle class="baobab-fruit" cx="50" cy="50" r="5.5" />
        <circle class="baobab-fruit" cx="150" cy="50" r="5.5" />
      </svg>
    `,
    fan: `
      <svg class="tree-scene-svg tree-fan-large" viewBox="0 0 220 180">
        <path class="fan-fold" d="M 30,142 Q 110,18 190,142 Z" />
        <line class="fan-rib" x1="110" y1="142" x2="34" y2="142" />
        <line class="fan-rib" x1="110" y1="142" x2="54" y2="96" />
        <line class="fan-rib" x1="110" y1="142" x2="78" y2="58" />
        <line class="fan-rib" x1="110" y1="142" x2="110" y2="30" />
        <line class="fan-rib" x1="110" y1="142" x2="142" y2="58" />
        <line class="fan-rib" x1="110" y1="142" x2="166" y2="96" />
        <line class="fan-rib" x1="110" y1="142" x2="186" y2="142" />
        <circle class="interactive-circle fan-pivot" cx="110" cy="142" r="8" />
      </svg>
    `,
    ankoay: `
      <svg class="tree-scene-svg tree-ankoay-large ankoay-flying" viewBox="0 0 220 160">
        <path class="ankoay-wing left" d="M 112,72 Q 62,20 16,54 Q 68,58 104,90" />
        <path class="ankoay-wing right" d="M 108,72 Q 158,20 204,54 Q 152,58 116,90" />
        <path class="ankoay-body" d="M 94,70 Q 110,55 126,70 L 112,130 Q 106,130 94,70 Z" />
        <path class="ankoay-tail" d="M 112,128 L 96,150 M112,128 L128,150" />
        <circle class="interactive-circle" cx="110" cy="72" r="5" />
      </svg>
    `,
    compass: `
      <svg class="tree-scene-svg tree-compass-large" viewBox="0 0 220 220">
        <circle class="compass-ring interactive-circle" cx="110" cy="110" r="86" />
        <circle class="compass-ring inner interactive-circle" cx="110" cy="110" r="58" />
        <path class="compass-needle north" d="M 110,28 L 126,112 L 110,104 L 94,112 Z" />
        <path class="compass-needle south" d="M 110,192 L 126,108 L 110,116 L 94,108 Z" />
        <line class="compass-cross" x1="110" y1="18" x2="110" y2="202" />
        <line class="compass-cross" x1="18" y1="110" x2="202" y2="110" />
        <circle class="interactive-circle compass-center" cx="110" cy="110" r="7" />
      </svg>
    `,
    butterfly: `
      <svg class="tree-scene-svg tree-butterfly-large comet-butterfly" viewBox="0 0 220 180">
        <path class="comet-trail" d="M 22,134 Q 58,112 92,112" />
        <path class="butterfly-wing left top" d="M 110,88 C 72,22 30,36 52,90 C 70,120 92,104 110,88 Z" />
        <path class="butterfly-wing right top" d="M 110,88 C 148,22 190,36 168,90 C 150,120 128,104 110,88 Z" />
        <path class="butterfly-wing left bottom" d="M 108,94 C 76,112 76,158 108,130 Z" />
        <path class="butterfly-wing right bottom" d="M 112,94 C 144,112 144,158 112,130 Z" />
        <line class="butterfly-body" x1="110" y1="72" x2="110" y2="138" />
        <path class="butterfly-antenna" d="M 110,72 Q 98,54 86,58 M110,72 Q 122,54 134,58" />
      </svg>
    `,
    waves: `
      <svg class="tree-scene-svg tree-waves-large" viewBox="0 0 240 160">
        <path class="wave-line" d="M 10,48 Q 40,26 70,48 T 130,48 T 190,48 T 250,48" />
        <path class="wave-line delay-one" d="M -8,82 Q 28,56 64,82 T 136,82 T 208,82" />
        <path class="wave-line delay-two" d="M 12,118 Q 48,94 84,118 T 156,118 T 228,118" />
        <circle class="interactive-circle" cx="120" cy="82" r="6" />
      </svg>
    `,
  };
  return svgs[style] || svgs.baobab;
}

function renderTreeContentCards(scene) {
  if (scene.style === "bamboo" && scene.sections[0]?.items.length >= 5) {
    const items = scene.sections[0].items;
    return [
      { title: lang === "fr" ? "Automatisation opérationnelle" : "Operational automation", items: items.slice(0, 3) },
      { title: lang === "fr" ? "Templates réglementés" : "Regulated templates", items: [items[3]] },
      { title: lang === "fr" ? "Agent IA métier" : "Business AI agent", items: [items[4]] },
    ]
      .map((card, index) => renderTreeContentCard(card.title, card.items, index + 1, "swaying-scroll"))
      .join("");
  }

  return scene.sections
    .map((section, index) => renderTreeContentCard(section.title, section.items, index + 1, scene.sections.length > 1 ? "" : ""))
    .join("");
}

function renderTreeContentCard(title, items, index, extraClass = "") {
  const className = extraClass ? ` ${extraClass}` : "";
  return `
    <article class="tree-content-card${className}">
      <span>${String(index).padStart(2, "0")} / ${title}</span>
      <h3>${title}</h3>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderTreeList(items, className = "text-list") {
  return `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderTreeInfoCards(scene) {
  return scene.sections
    .map(
      (section) => `
        <article class="info-card">
          <span class="card-label">${section.title}</span>
          ${renderTreeList(section.items)}
        </article>
      `,
    )
    .join("");
}

function renderTreeImpactCards(scene) {
  return scene.sections
    .map(
      (section, index) => `
        <article class="impact-card${index % 2 ? " alt" : ""}">
          <div class="impact-title"><span>${section.title.toLowerCase().includes("international") ? "INT" : "SD"}</span><h3>${section.title}</h3></div>
          ${renderTreeList(section.items)}
        </article>
      `,
    )
    .join("");
}

function renderTreeTanzaku(title, items, index, meta = "") {
  return `
    <article class="tanzaku" style="animation-delay: ${index * -1.5}s">
      <div class="tanzaku-head"><b>${title}</b>${meta ? `<span>${meta}</span>` : ""}</div>
      ${renderTreeList(items)}
    </article>
  `;
}

function renderTreeScene(scene, index) {
  if (scene.style === "lemur") {
    const items = scene.sections[0]?.items || [];
    return `
      <section class="scene scene-audit tree-style-lemur tree-reveal">
        <div class="enso-container scene-row">
          <div class="audit-art art-layer" aria-hidden="true">${treeSceneSvg("lemur")}</div>
          <article class="glass-panel">
            <p class="kicker">${scene.label}</p>
            <h2>${scene.title}</h2>
            <p class="italic-copy">${scene.intro}</p>
            ${renderTreeList(items, "check-list")}
          </article>
        </div>
      </section>
    `;
  }

  if (scene.style === "tsingy") {
    return `
      <section class="scene scene-metro tree-style-tsingy tree-reveal">
        <div class="tsingy-art art-layer" aria-hidden="true">${treeSceneSvg("tsingy")}</div>
        <div class="scene-column">
          <article class="glass-panel centered">
            <p class="kicker">${scene.label}</p>
            <h2>${scene.title}</h2>
            <p class="italic-copy">${scene.intro}</p>
          </article>
          <div class="cards-grid two">${renderTreeInfoCards(scene)}</div>
        </div>
      </section>
    `;
  }

  if (scene.style === "bamboo") {
    return `
      <section class="scene scene-process tree-style-bamboo tree-reveal">
        <div class="bamboo-art art-layer" aria-hidden="true">${treeSceneSvg("bamboo")}</div>
        <div class="scene-row split">
          <article class="glass-panel narrow">
            <p class="kicker">${scene.label}</p>
            <h2>${scene.title}</h2>
            <p class="italic-copy">${scene.intro}</p>
          </article>
          <div class="scroll-stack">
            ${scene.sections.map((section, sectionIndex) => renderTreeTanzaku(section.title, section.items, sectionIndex, section.meta)).join("")}
          </div>
        </div>
      </section>
    `;
  }

  if (scene.style === "chameleon") {
    return `
      <section class="scene scene-quality tree-style-chameleon tree-reveal">
        <div class="chameleon-art art-layer" aria-hidden="true">${treeSceneSvg("chameleon")}</div>
        <div class="scene-column">
          <article class="glass-panel centered">
            <p class="kicker">${scene.label}</p>
            <h2>${scene.title}</h2>
            <p class="italic-copy">${scene.intro}</p>
          </article>
          <div class="cards-grid">${renderTreeInfoCards(scene)}</div>
        </div>
      </section>
    `;
  }

  if (scene.style === "ocean") {
    return `
      <section class="scene scene-cqv tree-style-ocean tree-reveal">
        <div class="water-art art-layer" aria-hidden="true">${treeSceneSvg("ocean")}</div>
        <div class="scene-row split">
          <article class="glass-panel narrow">
            <p class="kicker">${scene.label}</p>
            <h2>${scene.title}</h2>
            <p class="italic-copy">${scene.intro}</p>
          </article>
          <div class="scroll-stack">
            ${scene.sections.map((section, sectionIndex) => renderTreeTanzaku(section.title, section.items, sectionIndex)).join("")}
          </div>
        </div>
      </section>
    `;
  }

  if (scene.style === "leadership") {
    return `
      <section class="scene scene-leadership tree-style-leadership tree-reveal">
        <div class="baobab-art art-layer" aria-hidden="true">${treeSceneSvg("leadership")}</div>
        <div class="scene-row split">
          <article class="glass-panel wide">
            <p class="kicker">${scene.label}</p>
            <h2>${scene.title}</h2>
            <p class="italic-copy">${scene.intro}</p>
            <div class="small-divider"></div>
            ${scene.sections
              .map(
                (section) => `
                  <section class="group-block">
                    <h3>${section.title}</h3>
                    ${renderTreeList(section.items)}
                  </section>
                `,
              )
              .join("")}
          </article>
          <div class="seal word-seal"><span>TEAM</span><small>LEAD</small></div>
        </div>
      </section>
    `;
  }

  if (scene.style === "fan") {
    return `
      <section class="scene scene-sales tree-style-fan tree-reveal">
        <div class="fan-art art-layer" aria-hidden="true">${treeSceneSvg("fan")}</div>
        <div class="scene-row">
          <article class="glass-panel centered">
            <p class="kicker">${scene.label}</p>
            <h2>${scene.title}</h2>
            <p class="italic-copy">${scene.intro}</p>
            ${renderTreeList(scene.sections[0]?.items || [])}
          </article>
        </div>
      </section>
    `;
  }

  if (scene.style === "ankoay") {
    return `
      <section class="scene scene-international tree-style-ankoay tree-reveal">
        <div class="ankoay-art art-layer" aria-hidden="true">${treeSceneSvg("ankoay")}</div>
        <div class="scene-column">
          <article class="glass-panel centered">
            <p class="kicker">${scene.label}</p>
            <h2>${scene.title}</h2>
            <p class="italic-copy">${scene.intro}</p>
          </article>
          <div class="impact-grid">${renderTreeImpactCards(scene)}</div>
        </div>
      </section>
    `;
  }

  if (scene.style === "butterfly") {
    return `
      <section class="scene scene-csv tree-style-butterfly tree-reveal">
        <div class="butterfly-art art-layer" aria-hidden="true">${treeSceneSvg("butterfly")}</div>
        <div class="scene-row split">
          <article class="glass-panel narrow">
            <p class="kicker">${scene.label}</p>
            <h2>${scene.title}</h2>
            <p class="italic-copy">${scene.intro}</p>
          </article>
          <div class="scroll-stack">
            ${scene.sections.map((section, sectionIndex) => renderTreeTanzaku(section.title, section.items, sectionIndex)).join("")}
          </div>
        </div>
      </section>
    `;
  }

  return `
    <section class="scene scene-publications tree-style-waves tree-reveal">
      <div class="waves-art art-layer" aria-hidden="true">${treeSceneSvg("waves")}</div>
      <article class="publications">
        <div class="footer-inner">
          <div class="seal footer-seal" aria-hidden="true"><span>PUB</span><small>REF</small></div>
          <p class="kicker">${scene.label}</p>
          <h2>${scene.title}</h2>
          <p class="italic-copy">${scene.intro}</p>
          <div class="publication-grid">
            ${(scene.sections[0]?.items || [])
              .map(
                (item) => `
                  <article class="publication-card">
                    <span>${scene.sections[0].title}</span>
                    <p>${item}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </article>
    </section>
  `;
}

function renderTreeFooterScene(tree, footerSections) {
  return null;
}

function hydrateTreeLife(tree) {
  ["eyebrow", "title", "countryMark", "lead", "pdfButton", "resumeButton"].forEach((key) => {
    setText(`[data-tree='${key}']`, tree[key]);
  });
  setText("[data-tree-top]", tree.topButton);

  const sections = document.querySelector("[data-tree-sections]");
  const { scenes, footer } = buildTreeScenes(tree);
  const footerScene = renderTreeFooterScene(tree, footer);
  sections.innerHTML = scenes.map((scene, index) => renderTreeScene(scene, index)).join("");
  if (footerScene) sections.append(footerScene);
}

function initTreeLife() {
  const revealItems = Array.from(document.querySelectorAll(".tree-reveal"));
  if ("IntersectionObserver" in window) {
    treeRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -70px 0px" },
    );
    revealItems.forEach((item) => treeRevealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("active"));
  }

  const activePath = document.querySelector("[data-tree-path]");
  const page = document.querySelector(".tree-fresco-page");
  if (activePath && page && typeof activePath.getTotalLength === "function") {
    const pathLength = activePath.getTotalLength();
    activePath.style.strokeDasharray = pathLength;
    activePath.style.strokeDashoffset = pathLength;
    treeScrollHandler = () => {
      const start = page.offsetTop;
      const available = Math.max(page.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max((window.scrollY - start) / available, 0), 1);
      activePath.style.strokeDashoffset = pathLength - pathLength * progress;
    };
    window.addEventListener("scroll", treeScrollHandler, { passive: true });
    treeScrollHandler();
  }

  const chameleonSvg = document.querySelector(".tree-chameleon-large");
  const chameleonPupil = document.querySelector("[data-tree-pupil]");
  if (chameleonSvg && chameleonPupil) {
    treeMouseHandler = (event) => {
      const rect = chameleonSvg.getBoundingClientRect();
      const eyeX = rect.left + rect.width * 0.29;
      const eyeY = rect.top + rect.height * 0.37;
      const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
      chameleonPupil.style.transform = `translate(${Math.cos(angle) * 3.5}px, ${Math.sin(angle) * 3.5}px)`;
    };
    window.addEventListener("mousemove", treeMouseHandler, { passive: true });
  }

  const topButton = document.querySelector("[data-tree-top]");
  if (topButton) {
    topButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function hydrateContact(contact, services) {
  ["title", "text", "button", "locationLabel"].forEach((key) => {
    setText(`[data-contact='${key}']`, contact[key]);
  });
  document.querySelectorAll("[data-placeholder-key]").forEach((field) => {
    field.placeholder = contact[field.dataset.placeholderKey];
  });
  const select = document.querySelector("[data-contact-select]");
  select.replaceChildren(
    new Option(contact.select, ""),
    ...services.map((service) => new Option(service.title, service.title)),
  );
}

function hydrateBlogFrame(blog) {
  setText("[data-blog-label]", blog.label);
  setText("[data-blog-read]", blog.read);
}

function initCounters() {
  const counters = Array.from(document.querySelectorAll("[data-count]"));
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = `${counter.dataset.prefix || ""}${Math.round(target * eased)}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

function initResumeTabs() {
  const tabs = Array.from(document.querySelectorAll("[data-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-panel]"));

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const next = tab.dataset.tab;
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === next));
    });
  });
}

function initWorkSlider() {
  const number = document.querySelector(".project-number");
  const title = document.querySelector(".work-copy h2");
  const description = document.querySelector(".work-copy p");
  const stack = document.querySelector(".tech-stack");
  const image = document.querySelector(".work-preview img");
  const projectLink = document.querySelector(".work-links a:first-child");
  const discussLink = document.querySelector(".work-links a:nth-child(2)");
  const prev = document.querySelector("[data-work-prev]");
  const next = document.querySelector("[data-work-next]");

  function paint() {
    const projects = currentCopy().projects;
    const project = projects[workIndex % projects.length];
    number.textContent = project.number;
    title.textContent = project.title;
    description.textContent = project.description;
    stack.textContent = project.stack;
    image.src = project.image;
    image.alt = `${project.title} preview`;
    projectLink.href = project.url;
    projectLink.target = "_blank";
    projectLink.rel = "noreferrer";
    discussLink.href = "#contact";
  }

  prev.addEventListener("click", () => {
    const projects = currentCopy().projects;
    workIndex = (workIndex - 1 + projects.length) % projects.length;
    paint();
  });

  next.addEventListener("click", () => {
    const projects = currentCopy().projects;
    workIndex = (workIndex + 1) % projects.length;
    paint();
  });

  paint();
}

function initBlogSlider() {
  const number = document.querySelector(".blog-number");
  const title = document.querySelector(".blog-copy h2");
  const description = document.querySelector("[data-blog-description]");
  const tags = document.querySelector(".blog-tags");
  const image = document.querySelector(".blog-media img");
  const link = document.querySelector(".blog-footer .outline-button");
  const prev = document.querySelector("[data-blog-prev]");
  const next = document.querySelector("[data-blog-next]");

  function paint() {
    const posts = currentCopy().blog.posts;
    const post = posts[blogIndex % posts.length];
    number.textContent = post.number;
    title.textContent = post.title;
    description.textContent = post.description;
    tags.textContent = post.tags;
    image.src = post.image;
    image.alt = `${post.title} preview`;
    link.href = post.url;
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  prev.addEventListener("click", () => {
    const posts = currentCopy().blog.posts;
    blogIndex = (blogIndex - 1 + posts.length) % posts.length;
    paint();
  });

  next.addEventListener("click", () => {
    const posts = currentCopy().blog.posts;
    blogIndex = (blogIndex + 1) % posts.length;
    paint();
  });

  paint();
}

menuToggle.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.classList.toggle("open", isOpen);
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
});

langToggle.addEventListener("click", () => {
  lang = lang === "en" ? "fr" : "en";
  localStorage.setItem("portfolio-lang", lang);
  updatePersistentLabels();
  renderRoute(currentRoute());
});

themeToggle.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.dataset.route === currentRoute()) {
      window.setTimeout(() => renderRoute(link.dataset.route), 0);
    }
  });
});

window.addEventListener("hashchange", () => renderRoute());

if (!window.location.hash) {
  window.location.hash = "home";
}

applyTheme();
updatePersistentLabels();
renderRoute();
