import type { Project } from "~/types/project";

const projects: Project[] = [
    {
        slug: "my-itn",
        name: "My-ITN",
        title: "My ITN : Sigle Sign On Portal",
        idea: "Centralizing campus digital ecosystem into a seamless Single Sign-On portal",
        description: "Working with the PUSTIK team, I focused on overhauling the campus's authentication process to move away from isolated systems into a single integrated portal. I was responsible for building an intuitive interface from the ground up, ensuring a smooth transition for users and making navigation between complex internal applications feel effortless.",
        cover: "my-itn-1.webp",
        framework: "Next",
        role: "Frontend Developer",
        technologies: ["Javascript", "React", "Next", "Tailwind", "Redis"],
        gallery: [
            "my-itn-1.webp",
            "my-itn-2.webp",
            "my-itn-3.webp",
            "my-itn-4.webp",
            "my-itn-5.webp",
        ]
    },
];

const frameworkType = {
    "Typescript": "devicon:typescript",
    "Javascript": "devicon:javascript",
    "Next": "devicon:nextjs",
    "Nuxt": "devicon:nuxt",
    "Sveltekit": "devicon:svelte",
    "React-Native": "devicon:reactnative",
    "React": "devicon:react",
    "Remix": "devicon:remix",
    "Tailwind": "devicon:tailwindcss",
    "Redis": "devicon:redis",
}

export { projects, frameworkType };