// ============================================================================
//  Content layer: all site copy lives here. Facts follow the CV (Oct 2026).
// ============================================================================

// ── Identity ────────────────────────────────────────────────────────────────
export const PROFILE = {
  name: 'Gautham Manuru Prabhu',
  shortName: 'Gautham M. Prabhu',
  // What I want to be read as, first line of the page.
  headline: 'Machine learning researcher',
  subhead:
    'I research temporal graph learning at MiCoSys Lab, San José State University, and build agentic AI systems at Cisco. I am interested in why models that work in one setting fail in another: when data go missing, conditions shift, or parts that work on their own make the combined model worse.',
  currentLine:
    'Research Intern, MiCoSys Lab, San José State University · Software Engineer II, AI Acceleration, Cisco',
  // Short callout under the name. Set to null to hide it.
  highlight: {
    label: 'Nov 2026',
    text: 'First-author poster at the Stanford Data-Centric AI Workshop 2026',
    href: '#talks',
  } as { label: string; text: string; href: string } | null,
  location: 'Bengaluru, India',
  email: 'gauthamprabhu9@gmail.com',
  links: {
    github: 'https://github.com/GauthamPrabhuM',
    linkedin: 'https://www.linkedin.com/in/gautham-prabhu-5b2342192/',
    scholar: 'https://scholar.google.com/citations?user=eFGVT2UAAAAJ',
    cv: '/assets/CV.pdf',
  },
  photo: '/assets/me.png',
}

// One-line research interests for the overview chip row.
export const RESEARCH_INTERESTS = [
  'Temporal Graph Learning',
  'LLMs on Graphs',
  'Evaluation & Reproducibility',
  'Learning Under Changing Conditions',
]

// ── Research narrative ────────────────────────────────────────────────────────
export const NARRATIVE = {
  thesis:
    'Most of my projects end up being about why a model fails once its assumptions stop holding. I work on this empirically: build the model, test it, then go through what broke.',
  paragraphs: [
    {
      heading: 'Incomplete data',
      body: 'At IIT Kharagpur\'s Medical Informatics Lab I built dual-encoder, cross-attention models to detect macular degeneration from thermal and structural OCT scans. The scans came in at different resolutions and many patients were missing one modality, so the model had to work without it. I also compared RGB, HSV and thermal inputs to see which helped detection most.',
    },
    {
      heading: 'Comparing architectures',
      body: 'In QuCardio we benchmarked quantum kernel methods and quanvolutional networks for classifying heart disease from ECG images. The quanvolutional model reached 97.31% accuracy, 3.88 points above a comparable CNN. I also extended Pegasos QSVC from binary to four-class classification.',
    },
    {
      heading: 'No history to learn from',
      body: 'At Cisco I am lead developer of an agentic test-triage platform for failed hardware tests. It finds root causes for about 70% of previously undiagnosed failures, even on new products with no failure history.',
    },
    {
      heading: 'Text and structure',
      body: 'At MiCoSys Lab, with Dr. Saptarshi Sengupta, I test whether LLM text features help temporal link prediction. Our first model underperformed a text-aware baseline, so we reproduced CROSS (NeurIPS 2025) and evaluated it more strictly. Against 100 sampled negatives, most of its lead disappears. Text still helps on nodes the model has not seen before, and a text encoder 15 times larger made results worse. I am first author on the poster, at the Stanford Data-Centric AI Workshop 2026.',
    },
  ],
  future:
    'Next I want to pin down when text carries information the interaction history does not, and how to evaluate these models so a reported gain survives a change of protocol.',
}

// ── Research questions ────────────────────────────────────────────────────────
// Rendered as a numbered box inside the research statement.
export const RESEARCH_QUESTIONS = [
  {
    id: 'RQ1',
    question:
      'Do reported gains from adding LLMs to temporal graph models hold up under a common evaluation protocol?',
  },
  {
    id: 'RQ2',
    question:
      'When does the text on a graph carry information that the interaction history does not?',
  },
  {
    id: 'RQ3',
    question: 'Do larger text encoders or deeper fusion improve link prediction?',
  },
] as const

// ── News ─────────────────────────────────────────────────────────────────────
// Reverse-chronological, one line each.
export const NEWS = [
  {
    date: 'Nov 2026',
    text: 'First-author poster at the Stanford Data-Centric AI Workshop 2026 (Nov 3), on when LLM text features help temporal link prediction.',
  },
  {
    date: '2026',
    text: 'Won the Offensive Summit capture-the-flag security competition at Cisco.',
  },
  {
    date: 'Mar 2026',
    text: 'Joined MiCoSys Lab, San José State University, as a Research Intern with Dr. Saptarshi Sengupta.',
  },
  {
    date: 'Oct 2025',
    text: 'Promoted to Software Engineer II on the AI Acceleration team at Cisco.',
  },
  {
    date: '2025',
    text: 'Reviewer for ICMLDE 2025.',
  },
  {
    date: 'Aug 2024',
    text: 'Promoted from intern to Software Engineer I at Cisco.',
  },
  {
    date: '2024',
    text: 'Graduated from Manipal Institute of Technology, B.Tech in Computer Science, 8.91/10.',
  },
  {
    date: '2024',
    text: 'Second runner-up of 100+ entries in Cisco\'s Intern Case Study Competition.',
  },
  {
    date: 'Apr 2024',
    text: 'Vaccine misinformation paper published in Procedia Computer Science (ICMLDE 2023).',
  },
  {
    date: 'Jan 2024',
    text: 'Joined Cisco Supply Chain as a Software Engineering Intern.',
  },
  {
    date: 'Dec 2023',
    text: 'QuCardio published in IEEE Access. 60+ citations since.',
  },
  {
    date: '2023',
    text: 'Presented SatelTensor at the TCML Workshop, IISc Bengaluru.',
  },
  {
    date: '2023',
    text: 'Radio telescope design paper and retinal segmentation review published in Journal of Physics: Conference Series.',
  },
  {
    date: '2023',
    text: 'Attended the CNI Summer School on Dynamic Resource Allocation at IISc Bengaluru.',
  },
  {
    date: 'Summer 2023',
    text: 'Research internship at the Medical Informatics Lab, IIT Kharagpur. Presented at the Digital Health Symposium.',
  },
  {
    date: '2023',
    text: 'VIKAS and EyeEncrypt published in Springer CCIS vol. 1804.',
  },
  {
    date: '2022',
    text: 'QuCardio placed in the top 16 of 1,626 teams at the Global Quantum Science and Technology Hackathon.',
  },
  {
    date: '2022',
    text: 'Led our team to the Smart India Hackathon Grand Finale with VIKAS.',
  },
  {
    date: '2022',
    text: 'Attended the ACM Winter School on Optimization for ML and Operations Research at IIT Goa.',
  },
] as const

// ── Talks & presentations ─────────────────────────────────────────────────────
// `authors` is optional; when present the list renders with my name in bold.
type Talk = {
  title: string
  venue: string
  type: string
  year: string
  authors?: readonly string[]
}

export const TALKS: readonly Talk[] = [
  {
    title:
      'On Link Prediction Using Node-Pair LLM Semantics and Structure in Temporal Text-Attributed Graphs',
    venue: 'Stanford Data-Centric AI Workshop 2026, Stanford University',
    type: 'Poster, first author',
    year: '2026',
    authors: [
      'G. M. Prabhu',
      'S. Gupta',
      'A. Nagarajan',
      'M. Choudhary',
      'K. Potika',
      'S. Sengupta',
    ],
  },
  {
    title:
      'Enhanced Analytics and Procedural Decision-Making for Ocular Diagnostics Using Multi-Modal Data',
    venue: 'Digital Health Symposium, IIT Kharagpur',
    type: 'Talk',
    year: '2023',
    authors: ['G. M. Prabhu', 'S. Gupta', 'S. Rathinam'],
  },
  {
    title: 'SatelTensor: Satellite Data Exploration via Tensor Decomposition',
    venue: 'Tensor Computation & Machine Learning (TCML) Workshop, IISc Bengaluru',
    type: 'Talk',
    year: '2023',
    authors: ['G. M. Prabhu', 'S. Gupta'],
  },
]

// ── Publications ─────────────────────────────────────────────────────────────
// `selected` surfaces a paper as a highlighted entry.
export const PUBLICATIONS = [
  {
    id: 'qucardio',
    selected: true,
    title:
      'QuCardio: Application of Quantum Machine Learning for Detection of Cardiovascular Diseases',
    authors: [
      'S. Prabhu',
      'S. Gupta',
      'G. M. Prabhu',
      'A. V. Dhanuka',
      'K. V. Bhat',
    ],
    venue: 'IEEE Access',
    venueDetail: 'vol. 11, pp. 136122–136135',
    venueType: 'Journal (Q1)',
    year: 2023,
    note: 'QSVC, Pegasos QSVC and quanvolutional networks for ECG image classification. The quanvolutional model reached 97.31% accuracy, 3.88 points above a comparable CNN. Supported by a $10,200 MeitY–AWS QCAL grant.',
    citations: '60+',
    doi: '10.1109/ACCESS.2023.3338145',
    link: 'https://ieeexplore.ieee.org/document/10335179',
    bibtex: `@article{prabhu2023qucardio,
  author  = {Prabhu, S. and Gupta, S. and Prabhu, G. M. and Dhanuka, A. V. and Bhat, K. V.},
  title   = {QuCardio: Application of Quantum Machine Learning for Detection of Cardiovascular Diseases},
  journal = {IEEE Access},
  volume  = {11},
  pages   = {136122--136135},
  year    = {2023},
  doi     = {10.1109/ACCESS.2023.3338145}
}`,
  },
  {
    id: 'vaccine',
    selected: true,
    title:
      'Addressing Vaccine Misinformation on Social Media by Leveraging Transformers and User Association Dynamics',
    authors: [
      'C. Rao',
      'G. M. Prabhu',
      'A. R. Kumar',
      'S. Gupta',
      'N. P. Shetty',
    ],
    venue: 'Procedia Computer Science',
    venueDetail: 'vol. 235, pp. 1803–1813 (ICMLDE 2023)',
    venueType: 'Conference',
    year: 2024,
    note: 'BERT and XLNet fine-tuned on the 15,073-tweet ANTi-Vax dataset, plus a Reddit user-association graph built from vaccine-discussion threads.',
    citations: null,
    doi: '10.1016/j.procs.2024.04.171',
    link: 'https://www.sciencedirect.com/science/article/pii/S1877050924008470',
    bibtex: `@article{rao2024vaccine,
  author  = {Rao, C. and Prabhu, G. M. and Kumar, A. R. and Gupta, S. and Shetty, N. P.},
  title   = {Addressing Vaccine Misinformation on Social Media by Leveraging Transformers and User Association Dynamics},
  journal = {Procedia Computer Science},
  volume  = {235},
  pages   = {1803--1813},
  year    = {2024},
  doi     = {10.1016/j.procs.2024.04.171}
}`,
  },
  {
    id: 'vikas',
    selected: false,
    title: 'VIKAS: A Multimodal Framework to Aid in Effective Disaster Management',
    authors: [
      'G. M. Prabhu',
      'T. Gupta',
      'M. V. Srujan',
      'A. R. Soumya',
      'A. Palorkar',
      'A. Chowdhury',
    ],
    venue: 'Springer CCIS (ATIS 2022)',
    venueDetail: 'vol. 1804',
    venueType: 'Conference',
    year: 2023,
    note: 'Combines text and image inputs to triage incoming information during disaster response. First author.',
    citations: null,
    doi: '10.1007/978-981-99-2264-2_22',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-2264-2_22',
    bibtex: `@inproceedings{prabhu2023vikas,
  author    = {Prabhu, G. M. and Gupta, T. and Srujan, M. V. and Soumya, A. R. and Palorkar, A. and Chowdhury, A.},
  title     = {VIKAS: A Multimodal Framework to Aid in Effective Disaster Management},
  booktitle = {Applications and Techniques in Information Security (ATIS 2022), CCIS},
  volume    = {1804},
  publisher = {Springer},
  year      = {2023},
  doi       = {10.1007/978-981-99-2264-2_22}
}`,
  },
  {
    id: 'eyeencrypt',
    selected: false,
    title: 'EyeEncrypt: A Cyber-Secured Framework for Retinal Image Segmentation',
    authors: ['G. Hegde', 'S. Gupta', 'G. M. Prabhu', 'S. V. Bhandary'],
    venue: 'Springer CCIS (ATIS 2022)',
    venueDetail: 'vol. 1804',
    venueType: 'Conference',
    year: 2023,
    note: 'Retinal vessel segmentation for 3,000+ fundus images, with Diffie–Hellman key exchange and AES-256 so the images can leave the hospital network encrypted.',
    citations: null,
    doi: '10.1007/978-981-99-2264-2_9',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-2264-2_9',
    bibtex: `@inproceedings{hegde2023eyeencrypt,
  author    = {Hegde, G. and Gupta, S. and Prabhu, G. M. and Bhandary, S. V.},
  title     = {EyeEncrypt: A Cyber-Secured Framework for Retinal Image Segmentation},
  booktitle = {Applications and Techniques in Information Security (ATIS 2022), CCIS},
  volume    = {1804},
  publisher = {Springer},
  year      = {2023},
  doi       = {10.1007/978-981-99-2264-2_9}
}`,
  },
  {
    id: 'vessel-review',
    selected: false,
    title:
      'A Systematic Review of Deep Learning Approaches for Vessel Segmentation in Retinal Fundus Images',
    authors: [
      'G. Hegde',
      'S. Prabhu',
      'S. Gupta',
      'G. M. Prabhu',
      'A. Palorkar',
      'M. V. Srujan',
      'S. V. Bhandary',
    ],
    venue: 'IOP J. Physics: Conference Series',
    venueDetail: 'vol. 2571, p. 012021',
    venueType: 'Peer-reviewed',
    year: 2023,
    note: 'Reviews the deep learning architectures, preprocessing steps and evaluation protocols used for retinal vessel segmentation.',
    citations: null,
    doi: '10.1088/1742-6596/2571/1/012021',
    link: 'https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012021',
    bibtex: `@article{hegde2023vesselreview,
  author  = {Hegde, G. and Prabhu, S. and Gupta, S. and Prabhu, G. M. and Palorkar, A. and Srujan, M. V. and Bhandary, S. V.},
  title   = {A Systematic Review of Deep Learning Approaches for Vessel Segmentation in Retinal Fundus Images},
  journal = {Journal of Physics: Conference Series},
  volume  = {2571},
  pages   = {012021},
  year    = {2023},
  doi     = {10.1088/1742-6596/2571/1/012021}
}`,
  },
  {
    id: 'radio-telescope',
    selected: false,
    title:
      'Exploring Design Optimisation Techniques of a Radio Telescope Using Fixed Costing Constraints',
    authors: ['A. A. Iyer', 'G. M. Prabhu', 'T. Gupta', 'S. Deshmukh', 'R. Rivankar'],
    venue: 'IOP J. Physics: Conference Series',
    venueDetail: 'vol. 2571, p. 012031',
    venueType: 'Peer-reviewed',
    year: 2023,
    note: 'Design choices for a radio telescope built under a fixed budget.',
    citations: null,
    doi: '10.1088/1742-6596/2571/1/012031',
    link: 'https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012031',
    bibtex: `@article{iyer2023radiotelescope,
  author  = {Iyer, A. A. and Prabhu, G. M. and Gupta, T. and Deshmukh, S. and Rivankar, R.},
  title   = {Exploring Design Optimisation Techniques of a Radio Telescope Using Fixed Costing Constraints},
  journal = {Journal of Physics: Conference Series},
  volume  = {2571},
  pages   = {012031},
  year    = {2023},
  doi     = {10.1088/1742-6596/2571/1/012031}
}`,
  },
] as const

// ── Featured research projects ───────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'tgnn',
    title: 'LLM Text Features for Temporal Link Prediction',
    period: '2026 – Present',
    status: 'First-author poster · Stanford Data-Centric AI Workshop 2026',
    motivation:
      'Recent methods add LLM summaries to temporal graph networks and report large gains. We wanted to know if those gains hold under a stricter evaluation.',
    approach:
      'Reproduced CROSS (NeurIPS 2025) from its released code and LLM chains on Enron and ICEWS1819, then ran ablations against DyGFormer and a structure-aware gate (SAGE) under a common 100-negative protocol over 5 seeds.',
    contribution:
      'The reproduction matched the paper. Under 100 negatives the lead mostly closed: level on Enron, well behind on ICEWS1819 (MRR 0.60 vs 0.89). Text still helped on new nodes (0.70 vs 0.63), and swapping MiniLM for BGE-large, 15 times the size, lowered MRR on both datasets. Full paper in preparation.',
    stack: ['PyTorch', 'DyGLib', 'LLMs', 'Sentence encoders'],
    links: [],
  },
  {
    id: 'qucardio',
    title: 'QuCardio: Quantum ML for Cardiovascular Diagnosis',
    period: '2022 – 2023',
    status: 'Published · IEEE Access',
    motivation:
      'Classical models plateau on some ECG classification tasks. Quantum feature maps might separate classes they cannot.',
    approach:
      'QSVC, Pegasos QSVC and quanvolutional networks on ECG images. I extended Pegasos QSVC from binary to four-class with six one-vs-one models, and tuned feature maps, qubit counts and circuit depth.',
    contribution:
      'The quanvolutional model reached 97.31% accuracy, 3.88 points above a comparable CNN. Supported by a $10,200 MeitY–AWS QCAL grant. Grand finalist, top 16 of 1,626 teams.',
    stack: ['Qiskit', 'Python', 'Quantum ML', 'scikit-learn'],
    links: [
      { label: 'Paper', href: 'https://ieeexplore.ieee.org/document/10335179' },
      {
        label: 'Code',
        href: 'https://github.com/GauthamPrabhuM/Quantum-Ecosystem-for-Efficient-Detection-of-Cardiovascular-Diseases',
      },
    ],
  },
  {
    id: 'misinformation',
    title: 'Vaccine Misinformation: Transformers and User Graphs',
    period: '2022 – 2023',
    status: 'Published · Procedia CS',
    motivation: 'Text classifiers see what is said, not who is talking to whom.',
    approach:
      'Fine-tuned BERT and XLNet on the 15,073-tweet ANTi-Vax dataset, and built a Reddit user-association graph that links authors by post-comment cosine similarity.',
    contribution:
      'Compared precision-recall trade-offs between the two models and inspected dense user clusters with NetworkX.',
    stack: ['BERT', 'XLNet', 'PyTorch', 'NetworkX'],
    links: [
      {
        label: 'Paper',
        href: 'https://www.sciencedirect.com/science/article/pii/S1877050924008470',
      },
    ],
  },
  {
    id: 'sateltensor',
    title: 'SatelTensor: Tensor Decomposition for Satellite Data',
    period: '2023',
    status: 'Talk · TCML, IISc',
    motivation:
      'Generic dimensionality reduction throws away the spatial and temporal structure of satellite image stacks.',
    approach: 'Tucker and CP decompositions that keep the two separate.',
    contribution: 'Presented at the TCML Workshop, IISc Bengaluru.',
    stack: ['Python', 'TensorLy', 'NumPy'],
    links: [],
  },
] as const

// ── Research experience ──────────────────────────────────────────────────────
export const RESEARCH_EXPERIENCE = [
  {
    role: 'Research Intern',
    group: 'MiCoSys Lab (Machine Intelligence & Complex Systems)',
    institution: 'San José State University',
    advisor: 'Dr. Saptarshi Sengupta',
    period: 'Mar 2026 – Present',
    location: 'Remote',
    current: true,
    points: [
      'First author on our poster at the Stanford Data-Centric AI Workshop 2026, on whether LLM text features help temporal link prediction on DTGB text-attributed graphs (Enron, ICEWS1819).',
      'Reproduced CROSS and ran controlled ablations against DyGFormer and a structure-aware gate (SAGE) over 5 seeds. Under a 100-negative protocol its lead mostly disappears, except on new nodes. Full paper in preparation.',
    ],
  },
  {
    role: 'Research Intern',
    group: 'Medical Informatics Lab',
    institution: 'IIT Kharagpur',
    advisor: 'Dr. Subhamoy Mandal',
    period: 'Summer 2023',
    location: 'Remote',
    current: false,
    points: [
      'Built dual-encoder, cross-attention models to detect macular degeneration from thermal and structural OCT, robust to missing modalities and mixed resolutions.',
      'Compared RGB, HSV and thermal inputs for detection. Presented at the IIT Kharagpur Digital Health Symposium.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    group: 'Cybersecurity & Quantum Computing Group',
    institution: 'MIT Manipal',
    advisor: 'Dr. Vivekananda Bhat K.',
    period: '2022 – 2023',
    location: 'Manipal, India',
    current: false,
    points: [
      'Benchmarked QSVC, Pegasos QSVC and quanvolutional networks on ECG images. The quanvolutional model reached 97.31%, 3.88 points above a comparable CNN.',
      'Extended Pegasos QSVC to four classes. Supported by a $10,200 MeitY–AWS QCAL grant. Published in IEEE Access.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    group: 'Biometrics & Software Engineering Group',
    institution: 'MIT Manipal',
    advisor: 'Dr. Srikanth Prabhu',
    period: '2022 – 2023',
    location: 'Manipal, India',
    current: false,
    points: [
      'Co-developed EyeEncrypt, secure retinal vessel segmentation for 3,000+ fundus images (Diffie–Hellman, AES-256).',
      'Demonstrated it to ophthalmologists at Kasturba Medical College. Published at ATIS 2022 and in a review.',
    ],
  },
  {
    role: 'Research Intern',
    group: 'Department of Information & Communication Technology',
    institution: 'MIT Manipal',
    advisor: 'Dr. Nisha P. Shetty',
    period: '2022 – 2023',
    location: 'Manipal, India',
    current: false,
    points: [
      'Fine-tuned BERT and XLNet on the 15,073-tweet ANTi-Vax dataset to separate misinformation from general vaccine discussion.',
      'Built a Reddit user-association graph from vaccine threads and inspected dense clusters with NetworkX. Published in Procedia Computer Science.',
    ],
  },
] as const

// ── Professional experience ───────────────────────────────────────────────────
export const PROFESSIONAL = {
  summary: 'LLM agents and ML services for Cisco Supply Chain.',
  roles: [
    {
      title: 'Software Engineer II',
      org: 'Cisco Systems',
      team: 'AI Acceleration Team',
      period: 'Oct 2025 – Present',
      current: true,
      points: [
        'Lead developer of an agentic test-triage platform (RAG, LLM diagnosis, MCP) deployed in factories worldwide. It finds root causes for about 70% of previously undiagnosed failures, even on new products.',
        'Contributed to a support-queue agent that resolves 30% of routine requests. Together the two systems cut case volume 35% and MTTR 40%, saving $450,000 a year. Presented to Cisco\'s Chief Supply Chain Officer.',
        'Took the platform from prototype to production with the security, platform and infrastructure teams. Mentor 5+ junior engineers.',
      ],
    },
    {
      title: 'Software Engineer I',
      org: 'Cisco Systems',
      team: 'Supply Chain Transformation',
      period: 'Aug 2024 – Sep 2025',
      current: false,
      points: [
        'Built Quality Transformation metrics engines tracking 10+ quality metrics across 200+ product lines.',
        'Added agentic AI to failure analysis on factory test lines, and split legacy monoliths into 10+ FastAPI microservices on Kubernetes across 8 global sites.',
        'Deployed a computer-vision system on assembly lines that flags connector edge gaps from camera images, replacing manual checks.',
      ],
    },
    {
      title: 'Software Engineering Intern',
      org: 'Cisco Systems',
      team: 'Supply Chain Organization',
      period: 'Jan 2024 – Jun 2024',
      current: false,
      points: [
        'Rebuilt a Python 2 workflow as microservices with CI/CD. Deploys went from 6 hours to 4 minutes.',
        'Built a supplier-name standardization pipeline across 50,000+ records. Second runner-up, Cisco Intern Case Study Competition.',
      ],
    },
  ],
}

// ── Education ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    minor: 'Minor in Big Data Analytics',
    school: 'Manipal Institute of Technology',
    period: '2020 – 2024',
    detail: '8.91 / 10 CGPA · Top 15% of cohort',
  },
]

// ── Achievements & leadership ─────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    group: 'Competitions',
    items: [
      {
        title: 'Winner, Offensive Summit CTF',
        detail: 'Capture-the-flag security competition, Cisco.',
        year: '2026',
      },
      {
        title: 'Second Runner-Up, Cisco Intern Case Study Competition',
        detail: 'Supplier-name standardization, 100+ entries.',
        year: '2024',
      },
      {
        title: 'Grand Finalist, Global Quantum Science and Technology Hackathon',
        detail: 'Top 16 of 1,626 teams, with QuCardio.',
        year: '2022',
      },
      {
        title: 'Grand Finalist and Team Lead, Smart India Hackathon',
        detail: 'VIKAS, among 160,000+ students from 2,235+ institutes.',
        year: '2022',
      },
    ],
  },
  {
    group: 'Grants, Honors & Service',
    items: [
      {
        title: '25+ Cisco Connected Recognition awards',
        detail: 'For technical contribution, mentoring and volunteering.',
        year: '2024–26',
      },
      {
        title: 'Reviewer, ICMLDE',
        detail: 'International Conference on Machine Learning and Data Engineering.',
        year: '2025',
      },
      {
        title: 'MeitY–AWS QCAL research grant',
        detail: '$10,200 from the Quantum Computing Applications Lab, for QuCardio.',
        year: '2023',
      },
      {
        title: 'Undergraduate Research Sponsorship Grant',
        detail: 'Manipal Academy of Higher Education.',
        year: '2023',
      },
      {
        title: 'Thayil Lonappan George Memorial Endowment Award',
        detail: '3rd rank, All India Senior School Certificate Examination.',
        year: '2020',
      },
      {
        title: 'NTSE State Scholar',
        detail: 'Government of Karnataka, rank 21 of 151,000+.',
        year: '2018',
      },
    ],
  },
  {
    group: 'Schools',
    items: [
      {
        title: 'Summer School on Dynamic Resource Allocation',
        detail: 'Centre for Networked Intelligence, IISc Bengaluru.',
        year: '2023',
      },
      {
        title: 'ACM Winter School on Optimization for ML & OR',
        detail: 'IIT Goa.',
        year: '2022',
      },
    ],
  },
  {
    group: 'Leadership',
    items: [
      {
        title: 'Lead Volunteer, Cisco Emerging Talent Recruitment',
        detail: 'University Connect Track.',
        year: '2026–',
      },
      {
        title: 'Co-founder & Technical Head, Project Kalpana',
        detail: 'Co-founded a student group building a radio telescope. My proposal won the $13,000 university grant, and I led the software-defined radio and signal processing.',
        year: '2022–23',
      },
      {
        title: 'General Secretary & Treasurer, ACM Student Chapter, Manipal',
        detail: 'Organized 12+ workshops and hackathons. Participation grew 35%.',
        year: '2022–23',
      },
      {
        title: 'Technical Head, Astronomy Club of Manipal',
        detail: 'Led 5+ projects and ran astronomy sessions and stargazing events for 200+ students.',
        year: '2021–23',
      },
    ],
  },
]

// ── Methods & tooling (compact, supporting only) ─────────────────────────────
export const METHODS = [
  {
    label: 'Research',
    items: ['Graph ML', 'Temporal GNNs', 'LLMs', 'PEFT (LoRA)', 'RAG', 'Agentic systems', 'Quantum ML'],
  },
  {
    label: 'Languages & ML',
    items: ['Python', 'C++', 'SQL', 'PyTorch', 'PyG', 'DGL', 'Hugging Face', 'Qiskit', 'OpenCV', 'NetworkX'],
  },
  {
    label: 'LLMs & agents',
    items: ['LangChain', 'LangGraph', 'LangSmith', 'MCP', 'Ragas', 'DeepEval', 'Pinecone', 'Weaviate'],
  },
  {
    label: 'Backend & cloud',
    items: ['FastAPI', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Jenkins', 'GitHub Actions', 'PostgreSQL', 'Redis', 'Neo4j'],
  },
]

// ── Navigation ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: '#news', label: 'News' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#talks', label: 'Talks' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

// Compact metrics shown beneath the hero.
export const HERO_STATS = [
  { value: '6', label: 'peer-reviewed publications' },
  { value: '60+', label: 'citations (Google Scholar)' },
  { value: '$10.2K', label: 'MeitY–AWS research grant' },
  { value: '5', label: 'research groups · 3 institutions' },
] as const
