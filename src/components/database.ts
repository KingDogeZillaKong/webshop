import type { PortfolioAssignmentModel, Tech } from "@/portfolio-assignment";
import PortfolioAssignment from '@/components/PortfolioAssignment.vue';
import lucadexlogo from "@/assets/lucadexlogo.svg"
import java from "@/assets/java.svg"
import react from "@/assets/react.svg";
import next from "@/assets/next.svg";
import vue from "@/assets/logo.svg";
import angular from "@/assets/angular.svg";
import mongo from "@/assets/mongo.svg";
import postgres from "@/assets/postgres.svg";
import mysql from "@/assets/mysql.svg"
import python from "@/assets/python.svg"
import type { SkillModel } from "@/skill-model";

  
  const getPortfolioAssignment = (tech: SkillModel[], title: string, abstract: string, date: string | number | Date, thumbnail: string, techstackLogo: string, websiteUrl: string, gitRepoUrl: string) => {
        return {tech, title,abstract, date: new Date(date), thumbnail, techstackLogo, href: websiteUrl, gitRepoUrl}
    }


        export const SKILLS : SkillModel[]= [ getSkill("angular", angular),  getSkill("react", react),  getSkill("next", next), getSkill("vue", vue), getSkill("java", java), getSkill("python", python), getSkill("mongodb", mongo), getSkill("postgresql", postgres), getSkill("mysql", mysql)];

    function getSkill(name: Tech, iconSrc: string){
        return {name, iconSrc};
    }


const ASTON_MARTIN_VUE_WEBSHOP = getPortfolioAssignment(SKILLS.filter(skill => ["vue"].includes(skill.name)) , "Vue Dashboard", "Een dashboard gemaakt in Vue voor Aston Martin's Formule-1 team.", new Date(),vue,  vue, "/", "/");
const NIKKICHANEL = getPortfolioAssignment(SKILLS.filter(skill => ["angular"].includes(skill.name)), "Nikkichanel.nl", "Een website gemaakt voor mijn zus die fotograaf en videograaf is.", new Date("02/12/2023"), lucadexlogo, angular, "https://www.nikkichanel.nl", "https://github.com/luukcollin/nikkichanel");
const LUCADEX = getPortfolioAssignment(SKILLS.filter(skill => ["next", "mongodb"].includes(skill.name)) , "Lucadex.com", "Een portaal dat ik gemaakt voor developers om gemakkelijk kennis op te doen over handige ontwikkelaarstools", new Date("02/12/2024"), lucadexlogo, next, "https://www.lucadex.com", "https://github.com/luukcollin/-testhub");
const POKERDEX = getPortfolioAssignment(SKILLS.filter(skill => ["angular", "java", "postgresql"].includes(skill.name)) , "Pokerdex.io", "Een portaal dat ik gemaakt heb voor pokerspelers die keuzes willen maken op basis van feiten", new Date("05/14/2025"),lucadexlogo, angular, "https://www.pokerdex.io", "https://github.com/luukcollin/pokerdex-fe");

    export const PORTFOLIO_ASSIGNMENTS:PortfolioAssignmentModel [] = [ASTON_MARTIN_VUE_WEBSHOP, NIKKICHANEL, LUCADEX, POKERDEX];