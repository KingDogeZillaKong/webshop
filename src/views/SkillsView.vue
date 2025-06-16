<script setup lang="ts">
import { useRoute, type RouteParamsGeneric } from 'vue-router';
 import { capitalize, computed, ref, watch } from 'vue';
import { ALL_PRODUCTS } from '@/catalog';
import { PORTFOLIO_ASSIGNMENTS } from '@/components/database';
import PortfolioAssignment from '@/components/PortfolioAssignment.vue';
import {onLaunchApp,onOpenGithub,onOpenFrameworkInfo } from "../mixins";
import type { PortfolioAssignmentModel, Tech } from '@/portfolio-assignment';
import {SKILLS} from "@/components/database"
import FlexList from '@/components/FlexList.vue';
import router from '@/router';
import type { SkillModel } from '@/skill-model';
    const route = useRoute();
  
   const {params} = route;
      
   function getSelectedSkillFromRouteParams(params: RouteParamsGeneric): string | undefined{
        return Boolean(params["skill"]) ? params["skill"] as string : undefined;

   }
      const scope = ref<Tech | undefined>(getSelectedSkillFromRouteParams(params) as Tech);
       const skill = ref<SkillModel | undefined>(SKILLS.find(el => el.tech === scope.value?.toLocaleLowerCase()));
     
      watch(() => route.params, (newValue, oldValue) => {
        const value = getSelectedSkillFromRouteParams(newValue) ;
        if(!value) {
          scope.value = undefined;
          skill.value = undefined;
          return;
        } 
        scope.value = value as Tech;
        skill.value = SKILLS.find(el => el.tech === scope.value)
   });
   

   const visibleAssignments = computed(() => { return !scope.value?.length ? PORTFOLIO_ASSIGNMENTS : PORTFOLIO_ASSIGNMENTS.filter(ass => ass.tech.map(t => t.tech.toLocaleLowerCase()).includes(scope.value?.toLocaleLowerCase() || "XXX"))});



const onSkillClicked = (skill: Tech) => {
    router.push({path: `/skills/${skill}`})
}
</script>
<template>
<div class="skill-page-wrapper">
    <div class="flex-full">
        <FlexList :items="SKILLS" :selected="scope" @skill-clicked="(tech: Tech) => onSkillClicked(tech)"/>
    </div>
  <div v-if="visibleAssignments" class="skill">
    <h1 class="center-align">{{  skill?.displayName || 'There is no skill selected' }}</h1>
    <h2>I worked on {{  visibleAssignments.length }}  {{ skill?.displayName  }} {{visibleAssignments.length > 1 ? 'projects' : 'project'}}.</h2>
    <ul>
        <li v-for="assignment of visibleAssignments" :key="assignment.abstract">
            <PortfolioAssignment :assignment="assignment" @launchApp="onLaunchApp(assignment)" @openFrameworkInfo="onOpenFrameworkInfo(assignment.tech[0])" @openGithub="onOpenGithub(assignment)"/>
        </li>
    </ul>
  </div>
  </div>
</template>

<style scoped>
.skills-page-wrapper {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flex-full {
    padding-top: 2.1em;
    width:100%;
    margin: auto auto;
    display: flex;
    flex: 1;
    /* background-color: orange; */
  }
  .center-align {
    text-align: center;
  }
</style>