import type { Involvement } from "~/types/involvement";

export const involvementExperiences: Involvement = {
  title: "Involvement",
  description: "My contributions in organizations and communities",
  organization: [
    {
      logo: "/images/lab-logo.webp",
      name: "Mobile Programming Laboratory",
      institution: "Institut Teknologi Nasional Malang",
      experience: [
        {
          role: "Mobile Programming Practicum Coordinator",
          period: "Jan 2023 - Jan 2024",
          location: "Malang, Indonesia",
          responsibilities: [
            "Conducted research and developed practical module content, structured with a focus on the latest developments in the field and presented to more than 100 students, in alignment with industry needs.",
            "Managing students'task grades and progress throughout the 10 learning modules of the internship, meticulously handling attendance to ensure students' presence in each practical session.",
          ],
        },
        {
          role: "Laboratory Instructor",
          period: "Sep 2021 - Sep 2025",
          location: "Malang, Indonesia",
          responsibilities: [
            "Assist and teach mobile programming, embedded systems, and visual programming to more than 20 students/classes during practicum sessions.",
          ],
        },
      ],
    },
    {
      logo: "/images/hati-logo.webp",
      name: "Himpunan Mahasiswa Teknik Informatika",
      institution: "Institut Teknologi Nasional Malang",
      experience: [
        {
          role: "Informatics Festival Committee",
          period: "Jun 2023",
          location: "Malang, Indonesia",
          responsibilities: [
            "Responsible for documenting the entire activities during the grand night of the Informatics Festival.",
            "Collaborated with the committee team to ensure the visual documentation reflected the atmosphere and diversity of the event.",
            "Coordinated with fellow photographers to cover all aspects of the event.",
            "Ensured timely delivery of photo results.",
          ],
        },
      ],
    },
  ],
};
