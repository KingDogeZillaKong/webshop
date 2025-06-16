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
import uiux from "@/assets/uiux.svg";
import nikkichanel from "@/assets/nikkichanel.svg";
import pokerdex from "@/assets/pokerdex.svg";
import type { SkillModel } from "@/skill-model";
import type { Shape } from "@/shape-model";
import { capitalize } from "vue";

  
  const getPortfolioAssignment = (tech: SkillModel[], title: string, abstract: string, date: string | number | Date, thumbnail: string, techstackLogo: string, websiteUrl: string, gitRepoUrl: string, logoShape?:Shape | null) => {
        return {tech, title,abstract, date: new Date(date), thumbnail, techstackLogo, href: websiteUrl, gitRepoUrl, logoShape: logoShape ? logoShape : "square"}
    }


        export const SKILLS : SkillModel[]= [ getSkill("angular", angular),  getSkill("react", react),  getSkill("next", next), getSkill("vue", vue), getSkill("java", java), getSkill("python", python), getSkill("mongodb", mongo), getSkill("postgresql", postgres), getSkill("mysql", mysql), getSkill("uiux", uiux, "UI/UX")];

    function getSkill(tech: Tech, iconSrc: string, displayName?: string): SkillModel{
        return {tech, iconSrc, displayName: displayName ? displayName : capitalize(tech)};
    }


const ASTON_MARTIN_VUE_WEBSHOP = getPortfolioAssignment(SKILLS.filter(skill => ["vue", "uiux"].includes(skill.tech)) , "Luukgoedhart.nl", "Een dashboard gemaakt in Vue voor Aston Martin's Formule-1 team.", new Date(),vue,  vue, "/", "https://github.com/KingDogeZillaKong/webshop");
const NIKKICHANEL = getPortfolioAssignment(SKILLS.filter(skill => ["angular","uiux"].includes(skill.tech)), "Nikkichanel.nl", "Een website gemaakt voor mijn zus die fotograaf en videograaf is.", new Date("02/12/2023"), nikkichanel, angular, "https://www.nikkichanel.nl", "https://github.com/luukcollin/nikkichanel");
const LUCADEX = getPortfolioAssignment(SKILLS.filter(skill => ["next", "mongodb","uiux"].includes(skill.tech)) , "Lucadex.com", "Een portaal dat ik gemaakt voor developers om gemakkelijk kennis op te doen over handige ontwikkelaarstools", new Date("02/12/2024"), lucadexlogo, next, "https://www.lucadex.com", "https://github.com/luukcollin/-testhub", "circle");
const POKERDEX = getPortfolioAssignment(SKILLS.filter(skill => ["angular", "java", "postgresql","uiux"].includes(skill.tech)) , "Pokerdex.io", "Een platform dat ik gemaakt heb voor pokerspelers die keuzes willen maken op basis van feiten", new Date("05/14/2025"),pokerdex, angular, "https://www.pokerdex.io", "https://github.com/luukcollin/pokerdex-fe", "circle");

    export const PORTFOLIO_ASSIGNMENTS:PortfolioAssignmentModel [] = [ASTON_MARTIN_VUE_WEBSHOP, NIKKICHANEL, LUCADEX, POKERDEX];