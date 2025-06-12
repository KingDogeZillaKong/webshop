export interface PortfolioAssignmentModel {
    title: string;
    date: Date;
    thumbnail: string;
    techstackLogo: string;
    abstract: string;
    href: string;
    tech: Tech[];
    gitRepoUrl: string;
}

export type Tech = "angular" | "vue" | "react" | "next" | "java" | "python" | "node.js" | "mysql" | "postgresql" | "mongodb";
