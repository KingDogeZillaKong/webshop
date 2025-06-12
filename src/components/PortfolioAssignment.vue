<script setup lang="ts">
import type { PortfolioAssignmentModel } from '@/portfolio-assignment';
import ReplaceableIcon from './ReplaceableIcon.vue';
import vue from "@/assets/logo.svg"
import github from "@/assets/github.svg"
import code from "@/assets/code.svg"
const props = defineProps<{assignment: PortfolioAssignmentModel}>();
const {assignment}= props;
</script>

<template>
    <div class="portfolio-assignment-wrapper">
        <div class="portfolio-assignment-thumbnail">
                         <ReplaceableIcon :imageSrc="assignment.thumbnail" :type="'text'" />
        </div>
       
        <div class="details-section">
            <h2>{{ assignment.title }}</h2>
            
            <span>{{ assignment.date.toDateString() }}</span>
      
        </div>
       
        <div class="links">
                        <div class="portfolio-assignment-thumbnail">
             <ReplaceableIcon :imageSrc="assignment.techstackLogo" :type="'app'"/>
        </div>
           <div class="portfolio-assignment-thumbnail">
             <ReplaceableIcon :imageSrc="github" :type="'code'" />
        </div>
   
    
        </div>
    </div>
</template>

<style scoped>
.portfolio-assignment-wrapper {
    display: grid;
    grid-template-columns: 120px auto auto ;
    gap: .33em;
    background-color: blue;
    width: 100%;
    overflow: hidden;
    /* width: 100%; */
    place-items: start;
    /* place-items: center; */
    .portfolio-assignment-thumbnail {
        display: flex;
        width: 120px;
        background-size:auto;
        background-position: center;
        height: auto;
        aspect-ratio: 1/1;
        overflow: hidden;
        padding: .15em;
        background-color: orange;
    }
    .details-section {
        display: grid;
        grid-template-columns: 1fr;;
        grid-template-rows: 1fr 1fr;
        /* justify-items: start;
        align-items: center; */
        justify-self: start;
        text-align: left;
        padding: 6px;
        /* h2,span {
            margin: 0;
            padding: 0;
        } */
    }
    .links {
        place-self: end;

        display: flex;
        /* display: inline-block; */
        /* gap: .33em; */
        /* justify-self:end */
    }
}
</style>