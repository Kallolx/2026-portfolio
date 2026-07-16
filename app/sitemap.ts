import { MetadataRoute } from "next";
import { ARCHIVE_PROJECTS, MAIN_PROJECTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kamrulhasan.site";
  const staticRoutes = [
    { route: "", priority: 1.0, changeFrequency: "weekly" as const },
    { route: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/resume", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const projectRoutes = [...MAIN_PROJECTS, ...ARCHIVE_PROJECTS].map((project, index) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: index < MAIN_PROJECTS.length ? 0.85 : 0.6,
  }));

  return [
    ...staticRoutes.map(({ route, priority, changeFrequency }) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...projectRoutes,
  ];
}
