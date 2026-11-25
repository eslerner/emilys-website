export const profileData = {
  fullName: 'Emily Lerner',
  firstName: 'Emily',
  role: 'Engineer & team leader',
  bio: `Lover of education, advocate for creativity, 
  and believer in finding fun challenges in everyday tasks.
  Enjoyer of music 🎵, travel ✈️, history 📜, yoga 🧘‍♀️, nature and conservationism🌲.
  `,
  education: 'MBA, MSa Data Science',
  githubHandles: [
    { label: 'GitHub (@handle1)', url: 'https://github.com/eslerner' },
    { label: 'GitHub (@handle2)', url: 'https://github.com/es-lerner' },
  ],
  linkedin: 'https://linkedin.com/in/emily-lerner-/',
  skills: [
    'Python',
    'TypeScript',
    'React',
    'AWS',
    'Kubernetes',
    'Docker',
    'Polars',
    'Pandas',
    'SQL',
    'CI/CD',
    'sklearn',
  ],
};

export const landingPageText = {
  calloutBubble: 'Always open to opportunity',
  welcomeHeader: 'Welcome to my corner of the web',
};

export const projectsData = [
  {
    id: 1,
    title: 'The Ground is Lava',
    description: "A pygame take on a classic children's game.",
    tags: ['Python', 'Docker', 'GitHub Actions'],
    repoUrl: 'https://github.com/yourusername/project-one',
    // liveUrl: "https://emilylerner.online" # TODO: deploy to github pages
  },
  {
    id: 2,
    title: 'Supply Chain Vulnerability Analyzer',
    description:
      'Empirical analysis tool evaluating open-source package security metrics and mean-time-to-remediate across 40k+ repositories.',
    tags: ['Polars', 'Data Science', 'Security'],
    repoUrl: 'https://github.com/shcherbin/mads-siads-699-winter-2026-capstone',
    // liveUrl: null
  },
  {
    id: 3,
    title: 'Canvas Color Picker',
    description:
      'Browser-based utility for extracting accessible color palettes.',
    tags: ['React', 'TypeScript', 'CSS'],
    repoUrl: 'https://github.com/eslerner/color-picker',
    liveUrl: "https://colorpicker.emilylerner.online",
  },
];

export const blogPosts = [
  {
    id: 'lessons-in-cicd',
    title: 'Lessons Learned Orchestrating Multi-Repo CI/CD Pipelines',
    date: 'November 12, 2026',
    readTime: '5 min read',
    excerpt:
      'How to prevent dependency bottlenecks and keep developer feedback loops fast when scaling engineering teams.',
    content: `
      When managing multiple repositories, integration testing quickly becomes your biggest bottleneck. 
      
      The key is shifting left on contract testing while isolating environment provisioning using ephemeral containers. By decoupling build artifacts from deployment triggers, teams can merge independently without blocking the main release train.
      
      Start by auditing your longest-running test suites—usually, 80% of your pipeline duration comes from 20% of poorly parallelized end-to-end tests.
    `,
  },
  {
    id: 'first-principles-system-design',
    title: 'Designing Data Pipelines from First Principles',
    date: 'October 24, 2026',
    readTime: '4 min read',
    excerpt:
      'Why choosing the right data structure and execution engine matters more than throwing compute at slow queries.',
    content: `
      Modern data tooling makes it easy to spin up massive clusters, but vertical efficiency should always come before horizontal scale.
      
      Switching from row-oriented processing to columnar execution engines like Polars can often yield 10x–50x speedups on a single node before you ever need distributed infrastructure. Always benchmark your data shape before choosing your architecture.
    `,
  },
];
