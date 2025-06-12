import type { PortfolioAssignmentModel, Tech } from "./portfolio-assignment";

    export const onLaunchApp = (assignment: PortfolioAssignmentModel) => {
        window.open(assignment.href)
    } 
    export const onOpenFrameworkInfo = (tech: Tech) => {
        window.open(`/skills?scope=${tech}`);
    } 

  export const onOpenGithub = (assignment: PortfolioAssignmentModel) => {
        window.open(assignment.href)
    } 

    