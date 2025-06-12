import type { SkillModel } from "./skill-model";

export interface PortfolioAssignmentModel {
    title: string;
    date: Date;
    thumbnail: string;
    techstackLogo: string;
    abstract: string;
    href: string;
    tech: SkillModel[];
    gitRepoUrl: string;
}

export type Tech = "angular" | "vue" | "react" | "next" | "java" | "python" | "node.js" | "mysql" | "postgresql" | "mongodb";
