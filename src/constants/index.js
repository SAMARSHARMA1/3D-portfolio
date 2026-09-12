// src/constants/index.js

export const myProjects = [
  {
    id: 1,
    title: "AI Testing Automation Agent",
    description:
      "An AI-powered testing platform that integrates GitHub repositories with LLM-driven test-case generation and automated execution, streamlining software testing through an end-to-end developer workflow.",
    subDescription: [
      "Integrated GitHub API to fetch repositories and automatically analyze code structure.",
      "Used Gemini LLM to generate intelligent test cases based on code context and behavior.",
      "Built automated browser testing workflows using Browserbase and Stagehand for real execution.",
      "Implemented secure user authentication with Clerk and persistent data storage with Drizzle ORM + Neon PostgreSQL.",
      "Designed a modern, responsive UI using Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.",
    ],
    href: "https://github.com/SAMARSHARMA1",
    logo: "",
    image: "/assets/projects/GithubAnalyser.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextdotjs.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/typescript.svg" },
      { id: 3, name: "Gemini", path: "/assets/logos/googlegemini.svg" },
      { id: 4, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
    ],
  },
  {
  id: 2,
  title: "AI-Powered IDE",
  description:
    "A browser-based development environment with Monaco Editor, file management, terminal, live preview, authentication, project templates, and AI-assisted coding to provide an integrated developer workflow.",
  subDescription: [
    "Built a full in-browser IDE using Monaco Editor and WebContainer for real code execution.",
    "Implemented file/folder management, terminal emulation, and live preview.",
    "Integrated GitHub and Google authentication using Auth.js.",
    "Added support for multiple project templates including React, Next.js, Express, Vue, Hono, and Angular.",
    "Developed AI-powered code suggestions to accelerate development.",
    "Used Prisma with MongoDB Atlas for persistent project storage.",
  ],
  href: "https://github.com/SAMARSHARMA1",
  logo: "",
  image: "/assets/projects/IdeProject.png",
  tags: [
    { id: 1, name: "Next.js", path: "/assets/logos/nextdotjs.svg" },
    { id: 2, name: "Monaco", path: "/assets/logos/monica.svg" },
    { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
  ],
},
  {
    id: 3,
    title: "Autonomous Sales Forecasting Pipeline",
    description:
      "An automated ML forecasting pipeline using Airflow with self-healing data workflows, ensemble forecasting models, experiment tracking, and an interactive dashboard to transform sales data into actionable forecasts.",
    subDescription: [
      "Orchestrated data pipelines with Apache Airflow including self-healing workflow logic.",
      "Built ensemble forecasting models using XGBoost and LightGBM for higher accuracy.",
      "Tracked experiments and model versions with MLflow for reproducibility.",
      "Stored artifacts and datasets on MinIO (S3-compatible object storage).",
      "Developed an interactive Streamlit dashboard for forecast visualization and run history.",
      "Containerized the entire stack with Docker for consistent deployment.",
    ],
    href: "https://github.com/SAMARSHARMA1",
    logo: "",
    image: "/assets/projects/ForcastingAI.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Airflow", path: "/assets/logos/apacheairflow.svg" },
      { id: 3, name: "XGBoost", path: "Public/assets/logos/xgboost.svg" },
      { id: 4, name: "Docker", path: "/assets/logos/docker.svg" },
    ],
  },
  {
    id: 4,
    title: "AI Agentic Whiteboard",
    description:
      "An AI-powered interactive whiteboard that combines intelligent assistance with a visual canvas, enabling users to create, manipulate, and organize ideas through an intuitive visual workspace.",
    subDescription: [
      "Built an interactive canvas-based whiteboard with smooth drawing and manipulation.",
      "Integrated AI agents to assist users with idea generation and organization.",
      "Designed an intuitive UI focused on visual thinking and rapid ideation.",
      "Enabled real-time interaction between AI suggestions and the visual workspace.",
    ],
    href: "https://github.com/SAMARSHARMA1",
    logo: "",
    image: "/assets/projects/whiteboard.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "AI Agents", path: "/assets/logos/aircall.svg" },
      { id: 3, name: "Canvas", path: "/assets/logos/canvas.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 5,
    title: "RAG AI Agent",
    description:
      "A retrieval-augmented AI agent using semantic embeddings and vector search to retrieve relevant contextual information before response generation, enabling more relevant domain-specific AI interactions.",
    subDescription: [
      "Built a FastAPI backend with Inngest for background job orchestration.",
      "Used Gemini embeddings (gemini-embedding-001) with 3072-dimension vectors for semantic search.",
      "Stored and queried embeddings in Qdrant vector database for fast similarity search.",
      "Implemented document chunking with 1000-token chunks and 200-token overlap for optimal context retention.",
      "Chose Gemini embeddings over OpenAI for a more cost-effective solution.",
    ],
    href: "https://github.com/SAMARSHARMA1",
    logo: "",
    image: "/assets/projects/AIRAGAGENT.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "FastAPI", path: "/assets/logos/fastapi.svg" },
      { id: 3, name: "Qdrant", path: "/assets/logos/qdrant.svg" },
      { id: 4, name: "Gemini", path: "/assets/logos/googlegemini.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/917876304290",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/samar-sharma-13142a289/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/SAMARSHARMA1",
    icon: "/assets/logos/github.png",
  },
];

export const experiences = [
  {
    title: "Software Developer (Student)",
    job: "AI, Web & Developer Tools",
    date: "2024 - 2025",
    contents: [
      "Built multiple AI-powered applications including an AI testing automation agent, browser-based IDE, and RAG agent.",
      "Developed end-to-end developer workflows integrating LLMs, GitHub APIs, and automated testing.",
      "Designed and implemented ML pipelines with Apache Airflow, MLflow, and ensemble forecasting models.",
      "Created modern, responsive UIs with React, Next.js, TypeScript, and Tailwind CSS.",
    ],
  },
  {
    title: "Front-End Developer (Student)",
    job: "Animated Portfolio & Web Projects",
    date: "2024 - 2025",
    contents: [
      "Designed and developed a fully animated 3D developer portfolio using React.js, Vite, Tailwind CSS, and Framer Motion.",
      "Built responsive and mobile-friendly UI components with smooth transitions and modern design principles.",
      "Integrated React Three Fiber for 3D scenes including a falling astronaut and interactive globe.",
      "Optimized website performance using Vite's fast build system and reusable React components.",
    ],
  },
  {
    title: "C/C++ Developer (Student)",
    job: "Programming & DSA Practice",
    date: "2023 - 2024",
    contents: [
      "Practiced core programming concepts using C and C++ including variables, loops, functions, arrays, and pointers.",
      "Implemented object-oriented programming principles such as classes, inheritance, and polymorphism.",
      "Solved Data Structures and Algorithms problems using arrays, stacks, queues, linked lists, and recursion.",
      "Built mini console-based projects such as a student management system and basic games in C++.",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    title: "UI/UX Designer Training",
    issuer: "Future Finders",
    date: "Jun 2025 - Jul 2025",
    credentialId: "FF/6W/484",
    credentialUrl: "",
    image: "/assets/certificates/ui-ux-certificate.png",
  },
  {
    id: 2,
    title: "Data Science with AI Training",
    issuer: "Excellence Technology",
    date: "Jun 2026 - Jul 2026",
    credentialId: "Extech/1308/DM0491",
    credentialUrl: "",
    image: "/assets/certificates/data-science-certificate.png",
  },
];