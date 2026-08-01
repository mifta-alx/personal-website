import type { Experience } from "~/types/experience";

export const workExperiences: Experience = {
  title: "Experience",
  description: "My professional journey and work history.",
  companies: [
    {
      logo: "/images/itn-logo-origin.webp",
      name: "PUSTIK Institut Teknologi Nasional Malang",
      url :"https://www.itn.ac.id",
      roles: [
        {
          name: "Frontend Developer",
          period: "Oct 2024 - Feb 2026",
          location: "Malang, East Java, Indonesia",
          contract: "Project Based",
          mode: "Hybrid",
          responsibilities: [
            "Contributed to the development of three core institutional systems: SIAM (student academic information system), SIAKAD Master (academic and administrative management system), and MyITN (centralized Single Sign-On platform)",
            "Built and maintained scalable frontend architectures using Next.js and React to support complex operational flows for students, faculty members, and university administrators",
            "Implemented secure authentication mechanisms including Google OAuth integration, email-based recovery, multi-step verification, and Redis-based session caching to enhance system reliability and performance",
            "Engineered reusable component structures from complex Figma designs, establishing consistent UI patterns across interconnected applications",
            "Optimized server-state management using TanStack Query to improve data synchronization and minimize redundant API requests",
          ],
        },
        {
          name: "Frontend Developer",
          period: "Mar 2024 - Jun 2024",
          location: "Malang, East Java, Indonesia",
          contract: "Internship",
          mode: "Hybrid",
          responsibilities: [
            "Rebuilt the frontend of the SIJAMU quality assurance system, migrating from legacy PHP (CodeIgniter) to Next.js.",
            "Improved responsiveness and overall user experience through component restructuring and optimized rendering techniques.",
          ],
        },
      ],
    },
    {
      logo: "/images/kuantis-logo.webp",
      name: "PT Kuantis Teknologi Solusi",
      url:"",
      roles: [
        {
          name: "Full Stack Developer",
          period: "Feb 2023 - May 2025",
          location: "Malang, East Java, Indonesia",
          contract: "Freelance",
          mode: "Remote",
          responsibilities: [
            "Collaborated with the team to align design and functionality, while ensuring clear communication for a comprehensive understanding of design requirements. Completed the project within specified deadlines.",
            "Participated in designing UI/UX and developing full stack web application using Sveltekit, TailwindCSS and PostgreSQL, including creation and management of RESTful API endpoints and database design, as well as managing application to the deployment platform.",
            "Conducting regular testing to ensure software quality and proper functionality, as well as maintaining code quality by implementing best development practices.",
          ],
        },
      ],
    },
  ],
};
