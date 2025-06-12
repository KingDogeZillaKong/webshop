import type { PortfolioAssignmentModel, Tech } from "@/portfolio-assignment";
import PortfolioAssignment from '@/components/PortfolioAssignment.vue';
import vue from "@/assets/logo.svg"
import angular from "@/assets/angular.svg"
import next from "@/assets/next.svg";
import lucadexlogo from "@/assets/lucadexlogo.svg"
  
  const getPortfolioAssignment = (tech: Tech[], title: string, abstract: string, date: string | number | Date, thumbnail: string, techstackLogo: string, websiteUrl: string, gitRepoUrl: string) => {
        return {tech, title,abstract, date: new Date(date), thumbnail, techstackLogo, href: websiteUrl, gitRepoUrl}
    }

const ASTON_MARTIN_VUE_WEBSHOP = getPortfolioAssignment(["vue"], "Vue Dashboard", "Een dashboard gemaakt in Vue voor Aston Martin's Formule-1 team.", new Date(),vue,  vue, "/", "/");
const NIKKICHANEL = getPortfolioAssignment(["angular"], "Nikkichanel.nl", "Een website gemaakt voor mijn zus die fotograaf en videograaf is.", new Date("02/12/2023"), lucadexlogo, angular, "https://www.nikkichanel.nl", "https://github.com/luukcollin?tab=repositories");
const LUCADEX = getPortfolioAssignment(["next", "mongodb"], "Lucadex.com", "Een portaal dat ik gemaakt voor developers om gemakkelijk kennis op te doen over handige ontwikkelaarstools", new Date("02/12/2024"), lucadexlogo, next, "https://www.lucadex.com", "https://github.com/luukcollin?tab=repositories");
const POKERDEX = getPortfolioAssignment(["angular", "java", "postgresql"], "Pokerdex.io", "Een portaal dat ik gemaakt heb voor pokerspelers die keuzes willen maken op basis van feiten", new Date("05/14/2025"),lucadexlogo, angular, "https://www.pokerdex.io", "https://github.com/luukcollin?tab=repositories");

    export const PORTFOLIO_ASSIGNMENTS:PortfolioAssignmentModel [] = [ASTON_MARTIN_VUE_WEBSHOP, NIKKICHANEL, LUCADEX, POKERDEX];