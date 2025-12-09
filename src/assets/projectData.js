export const projects = [
  {
    slug: "travelease",
    name: "TravelEase – Car Rental Web App",
    shortDescription:
      "A full-stack car rental platform with car browsing, filters, and secure bookings.",
    image: "https://i.ibb.co.com/35JVwjQC/Travel-Easy.png",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Firebase"
    ],
    liveUrl: "https://frabjous-eclair-9a636d.netlify.app/",
    githubUrl: "https://github.com/naimaashraf/travelease-client",
    description:
      "TravelEase is a car rental platform where users can browse cars, filter by category, location, and price, and request bookings with secure authentication. The UI is clean, modern, and includes subtle animations for an improved user experience.",
    challenges: [
      "Implementing advanced filtering across multiple attributes such as price, category, and location.",
      "Managing authentication state and protecting private routes.",
      "Designing a responsive layout that works well on both mobile and desktop devices."
    ],
    improvements: [
      "Add an admin dashboard for managing cars and bookings.",
      "Integrate online payment methods.",
      "Implement detailed booking history and invoice downloads for users."
    ]
  },
  {
    slug: "greennest",
    name: "GreenNest – Indoor Plant Care & Store",
    shortDescription:
      "A single-page React app for exploring indoor plants, reading care tips, and booking experts.",
    image: "https://i.ibb.co.com/Kpjjfrdc/Green-Nest.png",
    techStack: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "https://greeenet.netlify.app/",
    githubUrl: "https://github.com/naimaashraftithii/A9-Green-Nest.git",
    description:
      "GreenNest helps users discover indoor plants, view detailed care guides, and book expert consultations. It features protected routes and a calm, nature-inspired UI focused on readability and simplicity.",
    challenges: [
      "Managing protected routes with conditional rendering based on user authentication state.",
      "Structuring reusable components for plant cards, modals, and layouts.",
      "Maintaining a balanced visual hierarchy while using a nature-inspired color palette."
    ],
    improvements: [
      "Add user accounts with saved plant collections and care reminders.",
      "Integrate a real-time chat or messaging feature with plant experts.",
      "Add server-side filtering, pagination, and search for better performance and scalability."
    ]
  },
  {
    slug: "eventhub",
    name: "EventHub – Event Management Platform",
    shortDescription:
      "An event management platform with authentication and event CRUD features.",
    image: "https://i.ibb.co.com/wFSTvw4b/Event-Management.png",
    techStack: ["Next.js", "NextAuth", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://eventhub-demo.vercel.app",
    githubUrl: "https://github.com/naimaashraf/eventhub-client",
    description:
      "EventHub is an event management platform where authenticated users can create, update, and manage events. It uses the Next.js App Router and NextAuth for secure authentication with a modern, responsive UI.",
    challenges: [
      "Understanding and correctly using the Next.js App Router structure for pages and layouts.",
      "Integrating NextAuth with a custom backend API for secure login and session handling.",
      "Handling server-side and client-side rendering properly for dynamic data."
    ],
    improvements: [
      "Add search and filters for events by date, type, category, or location.",
      "Implement ticket booking and QR-code-based event check-in.",
      "Add role-based access control for organizers, admins, and attendees."
    ]
  },
  {
    slug: "cs-ticket-system",
    name: "CS — Ticket System",
    shortDescription:
      "A modern, responsive customer support dashboard for managing support tickets.",
    image: "https://i.ibb.co.com/TDWzS1m9/CS-Ticket-System.png",
    techStack: ["React", "Vite", "Tailwind CSS", "React Toastify", "React Icons"],
    liveUrl: "https://dreamy-pasca-9cf65c.netlify.app/",
    githubUrl:
      "https://github.com/naimaashraftithii/a7-customersupportzone-explorereact.git",
    description:
      "CS — Ticket System is a customer support dashboard where agents can view tickets, track their status, and manage tasks. It focuses on clean UI, reusable components, and UX patterns like loaders, badges, and toast notifications.",
    challenges: [
      "Designing reusable components for tickets, lists, banners, and layout without repeating code.",
      "Managing ticket and task state effectively while keeping the UI clear and responsive.",
      "Implementing a smooth UX with loaders, toasts, and responsive navigation."
    ],
    improvements: [
      "Add real backend integration for persistent ticket data and user accounts.",
      "Introduce advanced filtering, search, and sorting for tickets.",
      "Implement role-based dashboards for agents, admins, and managers."
    ]
  },
  {
    slug: "hero-io",
    name: "HERO.IO — Modern App Store",
    shortDescription:
      "A modern app store-style web application for browsing, installing, and managing apps.",
    image: "https://i.ibb.co.com/dsytrS8s/HERO-IO.png",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "React Toastify"
    ],
    liveUrl: "https://zesty-fenglisu-d5e062.netlify.app/",
    githubUrl: "https://github.com/naimaashraftithii/A8-Hero-App-React.git",
    description:
      "HERO.IO is a mini app store web platform where users can browse apps, view detailed information, and 'install' apps using localStorage. It features a rich UI with animations, statistics, skeleton loaders, and multiple pages such as Home, All Apps, App Details, and Installed Apps.",
    challenges: [
      "Designing a reusable architecture with components for cards, loaders, error states, and layout.",
      "Implementing localStorage-based install/uninstall logic with sorting and filtering on the Installed Apps page.",
      "Creating a smooth UX with skeleton loaders, custom error pages, and responsive design."
    ],
    improvements: [
      "Add user authentication and profiles for syncing installed apps across devices.",
      "Replace static JSON data with a real backend API for dynamic content.",
      "Introduce categories, tags, and advanced search for easier app discovery."
    ]
  }
];
