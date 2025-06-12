<script setup lang="ts">
import { useRoute } from 'vue-router';
 import { capitalize, ref } from 'vue';
import { ALL_PRODUCTS } from '@/catalog';
import { PORTFOLIO_ASSIGNMENTS } from '@/components/database';
import PortfolioAssignment from '@/components/PortfolioAssignment.vue';
import {onLaunchApp,onOpenGithub,onOpenFrameworkInfo } from "../mixins";
import type { PortfolioAssignmentModel, Tech } from '@/portfolio-assignment';
import java from "@/assets/java.svg"
import react from "@/assets/react.svg";
import next from "@/assets/next.svg";
import vue from "@/assets/logo.svg";
import angular from "@/assets/angular.svg";
import mongo from "@/assets/mongo.svg";
import postgres from "@/assets/postgres.svg";
import mysql from "@/assets/mysql.svg"
import python from "@/assets/python.svg"
interface SkillModel {
    iconSrc: string;
    name: Tech;
}
    function getSkill(name: Tech, iconSrc: string){
        return {name, iconSrc};
    }
        const SKILLS : SkillModel[]= [ getSkill("angular", angular),  getSkill("react", react),  getSkill("next", next), getSkill("vue", vue), getSkill("java", java), getSkill("python", python), getSkill("mongodb", mongo), getSkill("postgresql", postgres), getSkill("mysql", mysql)];

    const router = useRoute();
   const {params} = router;
   const selectedSkill = params["skill"] as string || ""
   const scope = ref<Tech | undefined>(selectedSkill as Tech);
   const visibleAssignments = ref<PortfolioAssignmentModel[]>([]);
const onSkillClicked = (skill: Tech) => {
    scope.value = skill;
    visibleAssignments.value =  PORTFOLIO_ASSIGNMENTS.filter(ass => ass.tech.map(t => t.toLocaleLowerCase()).includes(skill.toLocaleLowerCase()))    
}
 
//    const matchingAssignments = PORTFOLIO_ASSIGNMENTS.filter(ass => ass.tech.map(t => t.toLocaleLowerCase()).includes(selectedSkill.toLocaleLowerCase()))    
</script>
<template>
<div class="skill-page-wrapper">
    <div>
    <ul class="skill-variants">
        <li v-for="skill in SKILLS" @click="onSkillClicked(skill.name)">
            <div class="tech-icon-wrapper">
                <img :src="skill.iconSrc" class="tech-icon" :alt="skill.name"/>
                     <span class="skill-name">{{ skill.name }}</span> 
            </div>
       
        </li>
    </ul>
    </div>
  <div v-if="scope" class="skill">
    <h1>{{ visibleAssignments.length ? capitalize(scope) :  'No skill found'}}</h1>
    <h2>I worked on {{  visibleAssignments.length }} {{ scope }} {{visibleAssignments.length > 1 ? 'projects' : 'project'}}.</h2>
    <ul>
        <li v-for="assignment of visibleAssignments">
            <PortfolioAssignment :assignment="assignment" @launchApp="onLaunchApp(assignment)" @openFrameworkInfo="onOpenFrameworkInfo(assignment.tech[0])" @openGithub="onOpenGithub(assignment)"/>
        </li>
    </ul>
  </div>
  </div>
</template>

<style scoped>
  .skills-page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .skill-variants {
    display: flex;
    gap: .15em;
    padding: 4px 2px;
    background-color: rgba(255,255, 255,.21);
    width: 100%;
    border-radius: 6px;;
    overflow-x: auto;
  }
  .skill {
       height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tech-icon-wrapper {
    display: flex;
    flex-direction: column;
    place-items: center;
    /* flex-grow: 1; */
    /* height: 100vw;; */
    padding: 2px 4px;
    border-radius: 4px;;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, .18);
    }
    .tech-icon {
        width: 48px;
        height: auto;
        aspect-ratio:1/1;
    }

    .skill-name {
        /* align-self:end; */
    }
  }
</style>