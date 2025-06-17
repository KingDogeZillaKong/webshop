<script setup lang="ts">
import type { PortfolioAssignmentModel, Tech } from '@/portfolio-assignment';
import ReplaceableIcon from './ReplaceableIcon.vue';
import vue from "@/assets/logo.svg"
import github from "@/assets/github.svg"
import code from "@/assets/code.svg"
// import {SKILLS} from "../skills"
// import FlexList from './FlexList.vue';
import FlexList from '@/components/FlexList.vue';
import { onOpenFrameworkInfo } from '@/mixins';

const props = defineProps<{assignment: PortfolioAssignmentModel}>();
const {assignment}= props;

const onSkillClicked =  (tech: Tech) => {
    window.open(`/skills/${tech}`);
}
</script>

<template >
    <div class="portfolio-assignment-wrapper" :title="assignment.abstract" :key="assignment.title">
        <div class="portfolio-assignment-thumbnail">
                         <ReplaceableIcon :imageSrc="assignment.thumbnail" :type="'app'" @click="$emit('launchApp')" :shape="assignment.logoShape ? assignment.logoShape : 'square'" />
        </div>
       
        <div class="details-section">
            <div>
            <h2 class="project-title"  @click="$emit('launchApp')">{{ assignment.title }}</h2>
            <h3>{{ assignment.abstract }}</h3>
                     <details>
  <summary>See More</summary>
  <FlexList :items="assignment.tech" :selected="undefined" @skill-clicked="(tech: Tech) => onOpenFrameworkInfo(tech)"/>
</details>
            </div>
                  <span class="publication-date">{{ assignment.date.toDateString() }}</span>

        </div>
       
        <div class="links">
                        <div class="portfolio-assignment-thumbnail">
             <ReplaceableIcon :imageSrc="assignment.techstackLogo" :type="'text'" @click="$emit('openFrameworkInfo')"/>
        </div>
        
           <div class="portfolio-assignment-thumbnail">
             <ReplaceableIcon :imageSrc="github" :type="'code'" @click="$emit('openGithub')"/>
        </div>
       
        <!-- Als een gebruiker klikt op de techstack, leidt hem naar een pagina waar nogmaals een overzicht gegeven wordt van
         alle projecten die ik daar mee gedaan heb. Ook leuk is het om een algemeen verhaal te vertellen over wat ik van de techstack vind
         -->
    
        </div>

    </div>
</template>

<style scoped>
summary {
    cursor: pointer;
    text-decoration: underline 1px solid whitesmoke;
}
.project-title{
    cursor: pointer;
    text-decoration: underline 1px solid whitesmoke;;
}
.portfolio-assignment-wrapper {
    display: grid;
    grid-template-columns: 120px 1fr auto ;
    gap: .33em;
    /* background-color: blue; */
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* width: 100%; */
    /* justify-content: start; */
    align-items: center;
    .portfolio-assignment-thumbnail {
        display: flex;
        width: 120px;
        background-size:auto;
        background-position: center;
        height: auto;
        aspect-ratio: 1/1;
        overflow: hidden;
        padding: .15em;
        cursor: pointer;
        /* background-color: orange; */
    }
    .details-section {
        display: grid;
        grid-template-columns: 2fr 1fr;;
        grid-template-rows: 1fr;
        
        /* justify-items: start;
        align-items: center; */
        /* justify-self: start; */
        /* text-align: left; */
        /* align-content: space-between; */
        padding: 6px;
        /* width: 100%; */
        /* h2,span {
            margin: 0;
            padding: 0;
        } */
         .publication-date {
            grid-row: 1;
            grid-column: 2;
            justify-self: end;
            align-self: center;
            
            /* width: 100%; */
         }
    }
    .links {
        /* place-self: end; */
            /* align-items: center; */
        display: flex;
        /* display: inline-block; */
        /* gap: .33em; */
        /* justify-self:end */
    }
}
</style>