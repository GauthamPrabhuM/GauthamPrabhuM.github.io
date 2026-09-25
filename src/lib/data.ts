// ============================================================================
//  Content layer — single source of truth for the site.
//  Framed around the research thesis: efficient & scalable learning over
//  complex, structured, and time-evolving data (GraphML / Temporal GNNs).
// ============================================================================

// ── Identity ────────────────────────────────────────────────────────────────
export const PROFILE = {
  name: 'Gautham Manuru Prabhu',
  shortName: 'Gautham M. Prabhu',
  // What I want to be read as, first line of the page.
  headline: 'Machine learning researcher',
  subhead:
    'I study how to train graph neural networks on graphs that keep changing. At MiCoSys Lab I work on temporal GNNs for dynamic graphs with millions of edges, trained under a fixed memory and compute budget.',
  currentLine:
    'Research Associate, MiCoSys Lab, San José State University · Software Engineer 2, AI Acceleration, Cisco',
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
  'Graph Representation Learning',
  'Temporal & Dynamic Graphs',
  'Efficient & Scalable Deep Learning',
  'Geometric Deep Learning',
  'Machine Learning Systems',
]

// ── Research narrative ────────────────────────────────────────────────────────
// The intellectual core of the site. Written as connected paragraphs so an
// admissions reader sees a trajectory, not a list.
export const NARRATIVE = {
  thesis:
    'Most of my research comes back to one trade-off. A model has to represent data that is high-dimensional, relational and changing over time, and it has to do that inside a fixed budget of memory and compute. In QuCardio the budget was counted in qubits. In production systems at Cisco it is counted in milliseconds. At MiCoSys it is the memory a temporal graph network spends on state for every node.',
  paragraphs: [
    {
      heading: 'Early work: structure worth keeping',
      body: 'My first projects were about structure that standard pipelines discard. In QuCardio we tested whether quantum feature maps could separate ECG images that classical kernels could not. QSVC, Pegasos QSVC and a quanvolutional neural network reached 97% accuracy, 10 to 14 points above classical baselines we trained on the same data. SatelTensor approached the same idea with classical tools, using Tucker and CP decompositions to compress satellite image stacks while keeping their spatial and temporal factors separate. Both projects treated the geometry of the data as something to model directly.',
    },
    {
      heading: 'Learning under real constraints',
      body: 'The medical imaging and NLP projects added constraints of a different kind: few labels, noisy inputs, unbalanced classes and, in clinical work, errors that do not cost the same in both directions. At the IIT Kharagpur Medical Informatics Lab I built an ensemble feature-fusion method for anomaly detection in optical coherence tomography scans. At Manipal I built retinal vessel segmentation pipelines over 3,000 fundus images. In the vaccine misinformation project we stopped classifying posts in isolation and modeled how they spread across the graph of user interactions, running BERT and XLNet over 10,000 posts alongside that propagation graph. It was the first project where I modeled the graph itself.',
    },
    {
      heading: 'Temporal graph learning',
      body: 'Temporal graph neural networks combine the problems above: relational data, change over time, and the cost of learning at scale. Continuous-time models keep a memory state for every node and sample a temporal neighborhood at each step, and both costs grow with the number of interactions. At MiCoSys, with Dr. Saptarishi Sengupta, I work on training these models on dynamic graphs with millions of edges under a fixed memory and compute budget, using PyTorch Geometric, DGL and CUDA across several GPUs. The most expressive temporal models are usually the most expensive to train, and that gap is the problem I want to keep working on.',
    },
    {
      heading: 'Production systems',
      body: 'At Cisco I build LLM-based agents for Supply Chain Operations and own their retrieval quality, evaluation and guardrails. Four agents now run in production and close 35% of incoming support cases with no human in the loop. Running them has made the cost of scale concrete: latency and memory budgets, input distributions that drift, and the distance between a benchmark score and a deployed system.',
    },
  ],
  future:
    'Next, I want to work on graph and temporal representation learning where efficiency is part of the problem statement: compact node state, sampling and sparsification that come with guarantees, and a clearer account of how expressivity, cost and generalization trade off. I am also interested in the systems work needed to run these methods on real graphs.',
}

// ── Research questions ────────────────────────────────────────────────────────
// The formal statement of the agenda — numbered, the way a thesis proposal
// would state them. Rendered as a boxed list inside the research statement.
export const RESEARCH_QUESTIONS = [
  {
    id: 'RQ1',
    question:
      'How much per-node memory does a temporal GNN need to keep its accuracy on continuous-time dynamic graphs, and can that state be compressed, shared or recomputed instead of stored?',
  },
  {
    id: 'RQ2',
    question:
      'Can temporal neighborhood sampling come with guarantees? Which properties of the learned representation survive when the temporal computation graph is sparsified?',
  },
  {
    id: 'RQ3',
    question:
      'What does temporal expressivity cost in compute and memory, and where do existing dynamic graph architectures sit on that trade-off?',
  },
] as const

// ── News ─────────────────────────────────────────────────────────────────────
// Reverse-chronological, dated, one line each — the canonical academic format.
export const NEWS = [
  {
    date: 'Aug 2025',
    text: 'Promoted to Software Engineer 2, AI Acceleration, at Cisco. My second promotion in 18 months.',
  },
  {
    date: '2025',
    text: 'Joined the MiCoSys Lab at San José State University as a Research Associate, working with Dr. Saptarishi Sengupta on the efficiency of temporal graph neural networks.',
  },
  {
    date: 'Apr 2024',
    text: 'Our paper on vaccine misinformation spreading over user-association graphs appeared in Procedia Computer Science (ICMLDE 2023).',
  },
  {
    date: 'Dec 2023',
    text: 'QuCardio, on quantum machine learning for cardiovascular disease detection, published in IEEE Access (Q1). It has since passed 60 citations.',
  },
  {
    date: '2023',
    text: 'Presented SatelTensor at the Tensor Computation & Machine Learning Workshop, IISc Bengaluru; selected for the ACM Winter School on Optimization for ML & OR at IIT Goa.',
  },
  {
    date: 'Aug 2023',
    text: 'Finished a deep learning research internship at the Medical Informatics Lab, IIT Kharagpur, and presented the work at the Digital Health Symposium.',
  },
] as const

// ── Talks & presentations ─────────────────────────────────────────────────────
export const TALKS = [
  {
    title: 'SatelTensor: Satellite Data Exploration via Tensor Decomposition',
    venue: 'Tensor Computation & Machine Learning (TCML) Workshop, IISc Bengaluru',
    type: 'Contributed talk',
    year: '2023',
  },
  {
    title: 'Ensemble Feature Fusion for Anomaly Detection in Optical Coherence Tomography',
    venue: 'Digital Health Symposium, IIT Kharagpur',
    type: 'Research presentation',
    year: '2023',
  },
  {
    title: 'QuCardio: A Quantum Ecosystem for Cardiovascular Disease Detection',
    venue: 'Global Quantum Science & Technology Hackathon, Grand Finale',
    type: 'Finalist presentation',
    year: '2022',
  },
  {
    title: 'VIKAS: A Multimodal Framework for Disaster Management',
    venue: 'Smart India Hackathon (NDRF track), Grand Finale',
    type: 'Finalist presentation',
    year: '2022',
  },
] as const

// ── Publications ─────────────────────────────────────────────────────────────
// `selected` surfaces a paper as a highlighted entry. `role` notes contribution
// where it strengthens the research story.
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
    note: 'Quantum kernel methods (QSVC, Pegasos QSVC) and a quanvolutional neural network for ECG image classification. 97% accuracy, 10 to 14 points above matched classical baselines. Funded by MeitY and AWS.',
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
    note: 'Adds a model of how posts spread over the user-interaction graph to BERT and XLNet text classifiers, and improves on content-only detection.',
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
    note: 'Retinal vessel segmentation paired with Diffie–Hellman key exchange and AES-256, so clinical images can leave the hospital network encrypted.',
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
    authors: ['G. Hegde', 'S. Prabhu', 'S. Gupta', 'G. M. Prabhu', 'et al.'],
    venue: 'IOP J. Physics: Conference Series',
    venueDetail: 'vol. 2571, p. 012021',
    venueType: 'Peer-reviewed',
    year: 2023,
    note: 'Reviews the deep learning architectures, preprocessing steps and evaluation protocols used for retinal vessel segmentation.',
    citations: null,
    doi: '10.1088/1742-6596/2571/1/012021',
    link: 'https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012021',
    bibtex: `@article{hegde2023vesselreview,
  author  = {Hegde, G. and Prabhu, S. and Gupta, S. and Prabhu, G. M. and others},
  title   = {A Systematic Review of Deep Learning Approaches for Vessel Segmentation in Retinal Fundus Images},
  journal = {Journal of Physics: Conference Series},
  volume  = {2571},
  pages   = {012021},
  year    = {2023},
  doi     = {10.1088/1742-6596/2571/1/012021}
}`,
  },
  {
    id: 'sateltensor',
    selected: false,
    title: 'SatelTensor: Satellite Data Exploration via Tensor Decomposition',
    authors: ['G. M. Prabhu', 'S. Gupta'],
    venue: 'TCML Workshop, IISc Bengaluru',
    venueDetail: 'Tensor Computation & ML Workshop',
    venueType: 'Workshop',
    year: 2023,
    note: 'Tucker and CP decompositions for low-rank representations of satellite image stacks that keep spatial and temporal factors separate. First author.',
    citations: null,
    doi: null,
    link: null,
    bibtex: `@misc{prabhu2023sateltensor,
  author       = {Prabhu, G. M. and Gupta, S.},
  title        = {SatelTensor: Satellite Data Exploration via Tensor Decomposition},
  howpublished = {Tensor Computation \\& Machine Learning Workshop, IISc Bengaluru},
  year         = {2023}
}`,
  },
] as const

// ── Featured research projects ───────────────────────────────────────────────
// Research-framed (motivation / approach / contribution), not product blurbs.
export const PROJECTS = [
  {
    id: 'tgnn',
    title: 'Efficient Training of Temporal Graph Neural Networks',
    period: '2025 – Present',
    status: 'Ongoing · MiCoSys Lab',
    motivation:
      'Temporal GNNs predict well on dynamic graphs, but training cost grows badly with scale. Per-node memory state and temporal neighborhood sampling both become expensive once interactions reach the millions.',
    approach:
      'Training temporal GNNs under a fixed memory and compute budget, and measuring what each saving costs in temporal expressivity.',
    contribution:
      'In progress. The target is lower training time and memory use at the same predictive accuracy.',
    stack: ['PyTorch Geometric', 'DGL', 'CUDA', 'Distributed Training'],
    links: [],
  },
  {
    id: 'qucardio',
    title: 'QuCardio: Quantum ML for Cardiovascular Diagnosis',
    period: '2022 – 2023',
    status: 'Published · IEEE Access',
    motivation:
      'Classical kernels plateau on some ECG classification tasks. Quantum feature maps embed inputs in much larger spaces and might separate classes that classical kernels cannot.',
    approach:
      'Compared QSVC, Pegasos QSVC and a quanvolutional neural network against classical baselines we trained on the same ECG image data.',
    contribution:
      '97% accuracy, 10 to 14 points above the classical baselines. Published in IEEE Access and funded by MeitY and AWS. Grand Finalist, top 16 of 1,600+ teams.',
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
    title: 'Misinformation Propagation on User-Association Graphs',
    period: '2022 – 2023',
    status: 'Published · Procedia CS',
    motivation:
      'Text alone misses a useful signal: how a post moves through the network of users who share it.',
    approach:
      'BERT and XLNet encoders combined with a graph model of propagation over user interactions, on a corpus of 10,000 posts.',
    contribution:
      'F1 above 0.90 on the benchmark, ahead of content-only baselines. My first project with an explicit graph model.',
    stack: ['BERT', 'XLNet', 'PyTorch', 'Graph Modeling'],
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
    status: 'Presented · TCML, IISc',
    motivation:
      'Satellite image stacks are large, and generic dimensionality reduction throws away the spatial and temporal structure that later tasks depend on.',
    approach:
      'Tucker and CP decompositions to get low-rank representations that keep that structure.',
    contribution:
      'Presented at the Tensor Computation & Machine Learning Workshop, IISc Bengaluru.',
    stack: ['Python', 'TensorLy', 'NumPy'],
    links: [],
  },
] as const

// ── Research experience ──────────────────────────────────────────────────────
export const RESEARCH_EXPERIENCE = [
  {
    role: 'Research Associate',
    group: 'MiCoSys Lab (Machine Intelligence & Complex Systems)',
    institution: 'San José State University',
    advisor: 'Dr. Saptarishi Sengupta',
    period: '2025 – Present',
    location: 'Remote',
    current: true,
    points: [
      'Training temporal graph neural networks on dynamic graphs with millions of edges under a fixed memory and compute budget.',
      'Focused on the two largest costs, per-node memory state and temporal neighborhood sampling. Built on PyTorch Geometric, DGL and CUDA across several GPUs.',
    ],
  },
  {
    role: 'Deep Learning Research Intern',
    group: 'Medical Informatics Lab',
    institution: 'IIT Kharagpur',
    advisor: 'Dr. Subhamoy Mandal · Ms. Pragya Gupta',
    period: 'Jun 2023 – Aug 2023',
    location: 'Remote',
    current: false,
    points: [
      'Proposed an ensemble feature-fusion method for anomaly detection in optical coherence tomography, with color-space features, preprocessing and augmentation tuned against a multi-class benchmark.',
      'Contributed to a dataset of 3,000 annotated retinal scans and presented the work at the IIT Kharagpur Digital Health Symposium.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    group: 'Cybersecurity & Quantum Computing Research Group',
    institution: 'MIT Manipal',
    advisor: 'Dr. Vivekananda Bhat',
    period: 'Feb 2022 – Nov 2023',
    location: 'Manipal, India',
    current: false,
    points: [
      'Compared QSVC, Pegasos QSVC and a quanvolutional neural network with classical baselines for detecting cardiovascular disease from ECG images. 97% accuracy, 10 to 14 points above the classical models.',
      'Funded by MeitY (Govt. of India) and AWS. Grand Finalist, Global Quantum Ecosystems Hackathon 2022 (top 16 of 1,600+ teams). Published in IEEE Access.',
    ],
  },
  {
    role: 'Undergraduate Research Assistant',
    group: 'Biometrics & Software Engineering Group',
    institution: 'MIT Manipal',
    advisor: 'Dr. Srikanth Prabhu · Mr. Govardhan Hegde',
    period: 'Jul 2022 – Oct 2023',
    location: 'Manipal, India',
    current: false,
    points: [
      'Built retinal vessel segmentation pipelines over 3,000 fundus images using CLAHE, Gaussian smoothing and edge detection.',
      'The images left Kasturba Medical College\'s network, so the pipeline encrypts them with Diffie–Hellman key exchange and AES-256. Published in Springer CCIS.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    group: 'NLP / Social Computing',
    institution: 'MIT Manipal',
    advisor: 'Dr. Nisha P. Shetty',
    period: 'Sep 2022 – Jul 2023',
    location: 'Manipal, India',
    current: false,
    points: [
      'Modeled how vaccine misinformation spreads, combining BERT and XLNet encoders with a propagation graph over 10,000 posts.',
      'F1 above 0.90 on the benchmark. Published in Procedia Computer Science (ICMLDE 2023).',
    ],
  },
] as const

// ── Professional experience (applied research / research-to-production) ───────
export const PROFESSIONAL = {
  summary:
    'LLM-based agents and ML services in production at Cisco, Supply Chain Operations.',
  roles: [
    {
      title: 'Software Engineer 2, AI Acceleration',
      org: 'Cisco Systems',
      team: 'Supply Chain Operations',
      period: 'Aug 2025 – Present',
      current: true,
      points: [
        'Four agents in production (service-request resolution, knowledge-base indexing, case follow-up, proactive alerting) close 35% of incoming support cases with no human in the loop, cut mean time to resolution by 40% and return roughly 10,000 engineer-hours a quarter.',
        'Own the research-to-production path for these agents: retrieval quality, evaluation and guardrails.',
        'Built failure-analysis and predictive-maintenance agents for the Quality Transformation Program. They root-caused 70% of previously undiagnosed failures across global manufacturing sites.',
      ],
    },
    {
      title: 'Software Engineer 1 · Software Engineering Intern',
      org: 'Cisco Systems',
      team: 'Supply Chain Operations',
      period: 'Jan 2024 – Aug 2025',
      current: false,
      points: [
        'Promoted twice in 18 months: intern to SE1 in 6 months, SE1 to SE2 in 12.',
        'Rewrote legacy failure-analysis workflows as event-driven microservices (FastAPI, Cassandra, Redis on Kubernetes) and added ML anomaly detection over manufacturing telemetry.',
        'Placed third of 100+ entries in Cisco\'s intern case study competition with an NLP pipeline that standardized supplier names across 50,000 records.',
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
    group: 'Research Recognition & Competitions',
    items: [
      {
        title: 'Grand Finalist, Global Quantum Science & Technology Hackathon',
        detail: 'Top 16 of 1,600+ teams across 25+ countries (quantum ML).',
        year: '2022',
      },
      {
        title: 'Grand Finalist, Smart India Hackathon (NDRF track)',
        detail: 'Led a team of 6 on VIKAS; top team from 1,000+ national entries.',
        year: '2022',
      },
      {
        title: '2nd Runner-Up, Cisco Intern Case Study Competition',
        detail: 'NLP supplier-name standardization, 50,000+ records, 100+ entries.',
        year: '2024',
      },
    ],
  },
  {
    group: 'Scholarships & Honors',
    items: [
      {
        title: 'NTSE State Scholar',
        detail: 'National Talent Search Examination, rank 21 of 151,000+.',
        year: '2018',
      },
      {
        title: 'Thayil Lonappan George Memorial Endowment Award',
        detail: '3rd rank, All India Senior School Certificate Examination.',
        year: '2020',
      },
    ],
  },
  {
    group: 'Selected Schools & Programmes',
    items: [
      {
        title: 'ACM Winter School on Optimization for ML & OR',
        detail: 'Selected participant, IIT Goa.',
        year: '2023',
      },
      {
        title: 'Summer School on Dynamic Resource Allocation',
        detail: 'Center for Networked Intelligence, IISc Bengaluru.',
        year: '2023',
      },
    ],
  },
  {
    group: 'Leadership',
    items: [
      {
        title: 'Co-founder & Technical Head, Project Kalpana',
        detail: 'Secured a $13,000 grant; led 8 on an affordable radio-astronomy platform.',
        year: '2022–23',
      },
      {
        title: 'General Secretary & Treasurer, ACM Student Chapter, Manipal',
        detail: 'Ran 12+ workshops and hackathons; grew participation 35%.',
        year: '2022–23',
      },
    ],
  },
]

// ── Methods & tooling (compact, supporting only) ─────────────────────────────
export const METHODS = [
  {
    label: 'Research methods',
    items: [
      'Graph Neural Networks',
      'Temporal Graphs',
      'Representation Learning',
      'Tensor Decomposition',
      'Quantum ML',
      'Transformers / NLP',
      'Computer Vision',
    ],
  },
  {
    label: 'Frameworks',
    items: ['PyTorch', 'PyTorch Geometric', 'DGL', 'TensorFlow', 'Qiskit', 'scikit-learn'],
  },
  {
    label: 'Systems & tooling',
    items: ['Python', 'C++', 'CUDA', 'FastAPI', 'Docker', 'Kubernetes', 'Distributed Training'],
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

// Compact scholarly metrics shown beneath the hero — kept factual.
export const HERO_STATS = [
  { value: '6', label: 'peer-reviewed publications' },
  { value: '60+', label: 'citations (Google Scholar)' },
  { value: '2', label: 'first-author papers' },
  { value: '4', label: 'research groups · 3 institutions' },
] as const
