import type { PortfolioAssignmentModel, Tech } from "./portfolio-assignment";
import type { SkillModel } from "./skill-model";

    export const onLaunchApp = (assignment: PortfolioAssignmentModel) => {
        window.open(assignment.href)
    } 
    export const onOpenFrameworkInfo = (tech: SkillModel) => {
        window.open(`/skills/${tech.name}`);
    } 

  export const onOpenGithub = (assignment: PortfolioAssignmentModel) => {
        window.open(assignment.gitRepoUrl)
    } 

    