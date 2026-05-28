import type { InvolvementExperience } from "~/types/involvement-experience"
import type { WorkExperience } from "~/types/work-experience"

const aboutDetails = [
    "Hi there! I appreciate you taking the time to visit my site. I’m Miftakhussurur Al Maliki, a fresh graduate from ITN Malang currently serving as a Frontend Developer Intern at PUSTIK ITN Malang. I am a developer with a deep passion for building impactful software and crafting seamless digital experiences.",
    "My technical toolkit is centered around modern web technologies like React.js, Next.js, SvelteKit, and Tailwind CSS. Beyond the browser, I’m also capable of handling backend logic with Express and Laravel, as well as developing mobile experiences using React Native.",
    `I have a natural lean toward User Experience. I find joy in identifying UX friction and turning it into something smooth and high-performing. Whether I'm building a fresh interface or modernizing a large-scale system like SIAKAD, my focus is always on bringing clarity, efficiency, and a bit of "soul" into the code I write.`,
    "I strongly believe that technical skills only go so far without great teamwork and open communication. I’m someone who thrives on feedback, enjoys brainstorming with seniors, and is always eager to learn from the people around me. I’m ready to bring my energy and technical curiosity to any collaborative project."
]

const educationDetails = {
    logo: '/images/itn-logo-origin.webp',
    institution: 'Institut Teknologi Nasional Malang',
    degree: 'Bachelor of Computer Science',
    duration: '2021 - 2025',
    location: 'Malang, East Java, Indonesia',
    details: [
        'GPA 3.92 out of 4.00',
        'Awarded as the Best Graduate (Valedictorian) of the Informatics Engineering Department for outstanding academic performance.',
        'Awarded for the achievement of securing funding for the "Program Kreatifitas Mahasiswa (PKM)" project, as organized by Direktorat Jenderal Pembelajaran dan Kemahasiswaan Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia.',

    ]
}

const workExperiences: WorkExperience[] = [
    {
        companyLogo: '/images/itn-logo-origin.webp',
        companyName: 'PUSTIK ITN Malang',
        role: 'Frontend Developer',
        period: 'Feb 2024 - Present',
        location: 'Malang, East Java, Indonesia',
        employmentType: 'Internship',
        workMode: 'Hybrid',
        responsibilities: [
            'Spearheaded the complete frontend rebuild of key university systems (SIJAMU, MyITN, SIAKAD Master, and SIAM) using Next.js, significantly enhancing performance, responsiveness, and user experience.',
            'Implemented secure and centralized authentication flows, including Google OAuth integration, secure password recovery, and multi-factor verification across different student and faculty portals.',
            'Unified disparate administrative tools into a single, cohesive ecosystem, streamlining complex workflows such as curriculum management, grade input, and academic reporting.',
            'Translated complex Figma designs into high-fidelity, reusable React components, ensuring a consistent design system and optimized user experience across all university platforms.',
            'Optimized data fetching and state management using TanStack Query and Redis, reducing server load and ensuring data consistency between frontend and backend API responses.',
            'Collaborated in an Agile environment using ClickUp, partnering with backend teams and stakeholders to transform academic requirements into functional, user-centric web solutions.',
            'Utilized a modern tech stack including JavaScript (ES6+), and TailwindCSS to deliver responsive and high-performance web applications, integrated with RESTful APIs.',

        ]
    },
    {
        companyLogo: '/images/kuantis-logo.webp',
        companyName: 'PT Kuantis Teknologi Solusi',
        role: 'Full Stack Developer',
        period: 'Jan 2022 - May 2025',
        location: 'Malang, East Java, Indonesia',
        employmentType: 'Internship',
        workMode: 'Remote',
        responsibilities: [
            'Collaborated with the team to align design and functionality, while ensuring clear communication for a comprehensive understanding of design requirements. Completed the project within specified deadlines.',
            'Participated in designing UI/UX and developing full stack web application using Sveltekit, TailwindCSS and PostgreSQL, including creation and management of RESTful API endpoints and database design, as well as managing application to the deployment platform.',
            'Conducting regular testing to ensure software quality and proper functionality, as well as maintaining code quality by implementing best development practices.',

        ]
    },
    {
        companyLogo: '/images/upt-logo.webp',
        companyName: 'UPT Pelatihan Dinas Koperasi dan UKM Provinsi Jawa Timur',
        role: 'Web Developer',
        period: 'Jul 2020 - Oct 2020',
        location: 'Malang, East Java, Indonesia',
        employmentType: 'Internship',
        workMode: 'Hybrid',
        responsibilities: [
            'Develop a website for the Big Data UPT using CodeIgniter and the MVC architecture. Improve user experience by integrating AJAX jQuery for asynchronous data retrieval, reducing loading times, and providing a more dynamic interface.',
            'Enhance functionality with features like pagination, search, and sorting, enabling users to navigate and interact efficiently with the big data content on the website.',
            'Improved website loading speed by 30% and user engagement by 23%, with results clearly visible from customer surveys and analytics.',

        ]
    },
]
const involvementExperiences: InvolvementExperience[] = [
    {
        organizationLogo: '/images/lab-logo.webp',
        organizationName: 'Mobile Programming Laboratory',
        role: 'Mobile Programming Practicum Coordinator',
        period: 'Jan 2023 - Jan 2024',
        location: 'Malang, East Java, Indonesia',
        responsibilities: [
            'Conducted research and developed practical module content, structured with a focus on the latest developments in the field and presented to more than 100 students, in alignment with industry needs.',
            "Managing students'task grades and progress throughout the 10 learning modules of the internship, meticulously handling attendance to ensure students' presence in each practical session.",
        ]
    },
    {
        organizationLogo: '/images/lab-logo.webp',
        organizationName: 'Mobile Programming Laboratory',
        role: 'Laboratory Instructor',
        period: 'Sep 2021 - Sep 2025',
        location: 'Malang, East Java, Indonesia',
        responsibilities: [
            'Assist and teach mobile programming, embedded systems, and visual programming to more than 20 students/classes during practicum sessions.',
        ]
    },
    {
        organizationLogo: '/images/hati-logo.webp',
        organizationName: 'Himpunan Mahasiswa Teknik Informatika',
        role: 'Informatics Festival Committee',
        period: 'Jun 2023',
        location: 'Malang, East Java, Indonesia',
        responsibilities: [
            'Responsible for documenting the entire activities during the grand night of the Informatics Festival.',
            'Collaborated with the committee team to ensure the visual documentation reflected the atmosphere and diversity of the event.',
            'Coordinated with fellow photographers to cover all aspects of the event.',
            'Ensured timely delivery of photo results.',
        ]
    },
]
export { educationDetails, workExperiences, involvementExperiences, aboutDetails }
