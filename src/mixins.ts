import type { PortfolioAssignmentModel, Tech } from "./portfolio-assignment";
import type { SkillModel } from "./skill-model";
import router from "@/router";
    export const onLaunchApp = (assignment: PortfolioAssignmentModel) => {
        window.open(assignment.href)
    } 
    export const onOpenFrameworkInfo = (tech: Tech) => {
        router.push({path: `/skills/${tech}`})
        window.open(`/skills/${tech}`);
    } 

  export const onOpenGithub = (assignment: PortfolioAssignmentModel) => {
        window.open(assignment.gitRepoUrl)
    } 

    