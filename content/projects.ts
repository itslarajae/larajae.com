export type ProjectCategory = "Art" | "Graphic Design" | "Motion & Video";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  year: string;
  role: string;
  tools: string[];
  cover: string;
  gallery: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "neon-subway-zine",
    title: "Neon Subway Zine",
    category: "Graphic Design",
    summary:
      "A folded print zine built from late-night sketches, wheatpaste textures, and hand-cut headlines.",
    year: "2024",
    role: "Art direction, layout, print production",
    tools: ["InDesign", "Risograph", "Analog collage"],
    cover: "/images/projects/project-1.svg",
    gallery: [
      "/images/projects/project-1.svg",
      "/images/projects/project-2.svg",
    ],
    tags: ["Print", "Collage", "Editorial"],
  },
  {
    slug: "corner-store-campaign",
    title: "Corner Store Campaign",
    category: "Graphic Design",
    summary:
      "A bold identity system for a neighborhood market celebrating community flyers and handwritten receipts.",
    year: "2023",
    role: "Brand identity, typography",
    tools: ["Illustrator", "Procreate"],
    cover: "/images/projects/project-2.svg",
    gallery: [
      "/images/projects/project-2.svg",
      "/images/projects/project-3.svg",
    ],
    tags: ["Identity", "Retail", "Community"],
  },
  {
    slug: "late-night-loop",
    title: "Late Night Loop",
    category: "Motion & Video",
    summary:
      "A motion collage about city glow, looping signage, and ambient rhythm for a gallery install.",
    year: "2024",
    role: "Motion design, editing",
    tools: ["After Effects", "Premiere"],
    cover: "/images/projects/project-3.svg",
    gallery: [
      "/images/projects/project-3.svg",
      "/images/projects/project-4.svg",
    ],
    tags: ["Motion", "Loop", "Gallery"],
  },
  {
    slug: "archive-of-flyers",
    title: "Archive of Flyers",
    category: "Art",
    summary:
      "A mixed-media wall series layering xeroxed flyers, painted marks, and soft pencil notes.",
    year: "2022",
    role: "Artist",
    tools: ["Mixed media", "Acrylic"],
    cover: "/images/projects/project-4.svg",
    gallery: [
      "/images/projects/project-4.svg",
      "/images/projects/project-5.svg",
    ],
    tags: ["Installation", "Texture", "Storytelling"],
  },
  {
    slug: "park-bench-portraits",
    title: "Park Bench Portraits",
    category: "Art",
    summary:
      "Portrait studies made in public parks, finished with pastel and annotated with short notes.",
    year: "2023",
    role: "Artist",
    tools: ["Pastel", "Ink"],
    cover: "/images/projects/project-5.svg",
    gallery: [
      "/images/projects/project-5.svg",
      "/images/projects/project-6.svg",
    ],
    tags: ["Portrait", "Field Work", "Analog"],
  },
  {
    slug: "streetlight-stories",
    title: "Streetlight Stories",
    category: "Motion & Video",
    summary:
      "A short film weaving archival footage, lyrical subtitles, and quiet street interviews.",
    year: "2021",
    role: "Director, editor",
    tools: ["Premiere", "DaVinci Resolve"],
    cover: "/images/projects/project-6.svg",
    gallery: [
      "/images/projects/project-6.svg",
      "/images/projects/project-1.svg",
    ],
    tags: ["Film", "Documentary", "Sound"],
  },
];

export const featuredProjects = projects.slice(0, 3);
