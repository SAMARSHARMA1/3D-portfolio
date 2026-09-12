<<<<<<< HEAD
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
    image: "Public/assets/projects/IdeProject.png",
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
    icon: "Public/assets/logos/github.png",
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
=======
export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
>>>>>>> 4fd1fbdc02cf29c1820943210bb26b3fad0ae01e
];