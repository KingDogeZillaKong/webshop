import type { Shape } from "./shape-model";
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
    logoShape: Shape;
}

export type Tech = "angular" | "vue" | "react" | "next" | "java" | "python" | "node.js" | "mysql" | "postgresql" | "mongodb" | "uiux";
