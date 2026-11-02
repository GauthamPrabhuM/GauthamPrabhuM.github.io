// ============================================================================
//  Content layer: all site copy lives here.
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
    'Research Associate, MiCoSys Lab, San José State University · Software Engineer 2, AI Acceleration, Cisco',
  // Short callout under the name. Set to null to hide it.
  highlight: {
    label: 'Nov 2026',
    text: 'First-author poster at the Stanford Graph Learning Workshop 2026',
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
      body: 'At IIT Kharagpur\'s Medical Informatics Lab, retinal scans for macular degeneration came in at different resolutions, and many patients were missing one of the modalities. I encoded each modality separately before fusing features, and gave the model each scan in several color spaces.',
    },
    {
      heading: 'Comparing architectures',
      body: 'In QuCardio we benchmarked quantum kernel methods and a quanvolutional neural network for detecting heart disease from ECG images. They reached 97% accuracy, 10 to 14 points above classical baselines trained on the same data.',
    },
    {
      heading: 'No history to learn from',
      body: 'At Cisco I led an agentic suite that diagnoses failed hardware tests, usually with no past failures to go on. It root-causes 70% of failures that were previously undiagnosed.',
    },
    {
      heading: 'Text and structure',
      body: 'At MiCoSys Lab, with Dr. Saptarshi Sengupta, I test whether LLM text features help temporal link prediction. Our first model underperformed a text-aware baseline, so we reproduced CROSS (NeurIPS 2025) and evaluated it more strictly. Against 100 sampled negatives, most of its lead disappears. Text still helps on nodes the model has not seen before, and a text encoder 15 times larger made results worse. I am first author on the poster, at the Stanford Graph Learning Workshop 2026.',
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
    text: 'First-author poster at the Stanford Graph Learning Workshop 2026 (Nov 3), on when LLM text features help temporal link prediction.',
  },
  {
    date: 'Aug 2025',
    text: 'Promoted to Software Engineer 2 at Cisco.',
  },
  {
    date: '2025',
    text: 'Joined MiCoSys Lab, San José State University, as a Research Associate with Dr. Saptarshi Sengupta.',
  },
  {
    date: 'Aug 2024',
    text: 'Converted from intern to Software Engineer 1 at Cisco after six months.',
  },
  {
    date: '2024',
    text: 'Graduated from Manipal Institute of Technology, B.Tech in Computer Science, 8.91/10.',
  },
  {
    date: '2024',
    text: 'Third of 100+ entries in Cisco\'s intern case study competition.',
  },
  {
    date: 'Apr 2024',
    text: 'Vaccine misinformation paper published in Procedia Computer Science (ICMLDE 2023).',
  },
  {
    date: 'Jan 2024',
    text: 'Joined Cisco Supply Chain Operations as an intern.',
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
    text: 'ACM Winter School at IIT Goa, and the CNI Summer School on Dynamic Resource Allocation at IISc.',
  },
  {
    date: 'Aug 2023',
    text: 'Finished a research internship at the Medical Informatics Lab, IIT Kharagpur.',
  },
  {
    date: '2023',
    text: 'VIKAS and EyeEncrypt published in Springer CCIS vol. 1804.',
  },
  {
    date: '2022',
    text: 'QuCardio placed in the top 16 of 1,600+ teams at the QETCI Global Quantum Hackathon.',
  },
  {
    date: '2022',
    text: 'Led a team of 6 to the Smart India Hackathon Grand Finale with VIKAS.',
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
    venue: 'Stanford Graph Learning Workshop 2026, Stanford University',
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
    venue: 'QETCI Global Quantum Hackathon, Grand Finale',
    type: 'Finalist presentation',
    year: '2022',
  },
  {
    title: 'VIKAS: A Multimodal Framework for Disaster Management',
    venue: 'Smart India Hackathon (NDRF track), Grand Finale',
    type: 'Finalist presentation',
    year: '2022',
  },
]

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
export const PROJECTS = [
  {
    id: 'tgnn',
    title: 'LLM Text Features for Temporal Link Prediction',
    period: '2025 – Present',
    status: 'First-author poster · Stanford Graph Learning Workshop 2026',
    motivation:
      'Recent methods add LLM summaries to temporal graph networks and report large gains. We wanted to know if those gains hold under a stricter evaluation.',
    approach:
      'Reproduced CROSS (NeurIPS 2025) on Enron and ICEWS1819 over 5 seeds, then ranked it against 100 sampled negatives instead of in-batch ones, next to a DyGFormer + BERT baseline.',
    contribution:
      'The reproduction matched the paper. Under 100 negatives the lead mostly closed: level on Enron, well behind on ICEWS1819 (MRR 0.60 vs 0.89). Text still helped on new nodes (0.70 vs 0.63), and swapping MiniLM for BGE-large, 15 times the size, lowered MRR on both datasets. Full paper in preparation.',
    stack: ['PyTorch', 'DyGLib', 'LLMs', 'Sentence encoders', 'LoRA'],
    links: [],
  },
  {
    id: 'qucardio',
    title: 'QuCardio: Quantum ML for Cardiovascular Diagnosis',
    period: '2022 – 2023',
    status: 'Published · IEEE Access',
    motivation:
      'Classical kernels plateau on some ECG classification tasks. Quantum feature maps might separate classes they cannot.',
    approach:
      'QSVC, Pegasos QSVC and a quanvolutional neural network against classical baselines on the same ECG images.',
    contribution:
      '97% accuracy, 10 to 14 points above the baselines. Funded by MeitY and AWS. Grand Finalist, top 16 of 1,600+ teams.',
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
    motivation: 'Text alone misses how a post spreads between users.',
    approach:
      'BERT and XLNet combined with a propagation graph over user interactions, on 10,000 posts.',
    contribution: 'F1 above 0.90, ahead of content-only baselines.',
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
    role: 'Research Associate',
    group: 'MiCoSys Lab (Machine Intelligence & Complex Systems)',
    institution: 'San José State University',
    advisor: 'Dr. Saptarshi Sengupta',
    period: '2025 – Present',
    location: 'Remote',
    current: true,
    points: [
      'First author on our poster at the Stanford Graph Learning Workshop 2026, on whether LLM text features help temporal link prediction.',
      'Reproduced CROSS (NeurIPS 2025) and re-ran it against 100 sampled negatives. Its lead over a text-aware baseline mostly disappears, except on new nodes. Full paper in preparation.',
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
      'Macular degeneration from multimodal retinal scans with mixed resolutions and missing modalities. Encoded each modality separately, then fused at the feature level.',
      'Presented at the IIT Kharagpur Digital Health Symposium.',
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
      'QSVC, Pegasos QSVC and a quanvolutional neural network against classical baselines on ECG images. 97% accuracy, 10 to 14 points higher.',
      'Funded by MeitY and AWS. Published in IEEE Access.',
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
      'Retinal vessel segmentation over 3,000 fundus images with CLAHE, Gaussian smoothing and edge detection.',
      'The images left Kasturba Medical College\'s network, so the pipeline encrypts them with Diffie–Hellman and AES-256. Published in Springer CCIS.',
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
      'BERT and XLNet with a propagation graph over 10,000 posts to detect vaccine misinformation. F1 above 0.90.',
      'Published in Procedia Computer Science (ICMLDE 2023).',
    ],
  },
] as const

// ── Professional experience ───────────────────────────────────────────────────
export const PROFESSIONAL = {
  summary: 'LLM agents and ML services for Cisco Supply Chain Operations.',
  roles: [
    {
      title: 'Software Engineer 2, AI Acceleration',
      org: 'Cisco Systems',
      team: 'Supply Chain Operations',
      period: 'Aug 2025 – Present',
      current: true,
      points: [
        'Led an agentic suite on Cisco\'s product testing platform that works out whether a failed hardware test is down to the script, the environment or the product. It root-causes 70% of previously undiagnosed failures and runs in factories worldwide.',
        'Contributed to a support-queue agent that resolves 30% of routine requests on its own. Case volume is down 35% and mean time to resolution down 40%.',
        'The two systems save an estimated $450,000 a year. Presented the work to Cisco\'s Chief Supply Chain Officer.',
      ],
    },
    {
      title: 'Software Engineer 1 · Software Engineering Intern',
      org: 'Cisco Systems',
      team: 'Supply Chain Operations',
      period: 'Jan 2024 – Aug 2025',
      current: false,
      points: [
        'Intern to SE1 in 6 months, SE1 to SE2 in 12.',
        'Rebuilt a hand-deployed Python 2 manufacturing service as containerized code. Deploys went from about 6 hours to 4 minutes.',
        'Third of 100+ in Cisco\'s intern case study competition with an NLP pipeline that standardized 50,000 supplier names.',
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
        title: 'Grand Finalist, QETCI Global Quantum Hackathon',
        detail: 'Top 16 of 1,600+ teams across 25+ countries (quantum ML).',
        year: '2022',
      },
      {
        title: 'Grand Finalist, Smart India Hackathon (NDRF track)',
        detail: 'Led a team of 6 on VIKAS, a multimodal disaster-response system. National finalist among 160,000+ participants.',
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
    label: 'Research methods',
    items: [
      'Temporal Graph Neural Networks',
      'Language Models on Graphs',
      'LoRA / Adapters',
      'Representation Learning',
      'Tensor Decomposition',
      'Quantum ML',
      'Transformers / NLP',
      'Computer Vision',
    ],
  },
  {
    label: 'Frameworks',
    items: ['PyTorch', 'PyTorch Geometric', 'DGL', 'DyGLib', 'TensorFlow', 'Qiskit', 'scikit-learn'],
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

// Compact scholarly metrics shown beneath the hero.
export const HERO_STATS = [
  { value: '6', label: 'peer-reviewed publications' },
  { value: '60+', label: 'citations (Google Scholar)' },
  { value: '2', label: 'first-author papers' },
  { value: '4', label: 'research groups · 3 institutions' },
] as const
