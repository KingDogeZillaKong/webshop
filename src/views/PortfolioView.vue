<script setup lang="ts">
import { PORTFOLIO_ASSIGNMENTS } from '@/components/database';
import PortfolioAssignment from '@/components/PortfolioAssignment.vue';
import {onLaunchApp,onOpenGithub,onOpenFrameworkInfo } from "../mixins";
</script>
<template>
  <div class="portfolio">
    <ul class="project-list" v-for="assignment in PORTFOLIO_ASSIGNMENTS">
        <li class="project-list-item"><PortfolioAssignment :assignment="assignment" @launchApp="onLaunchApp(assignment)" @openFrameworkInfo="onOpenFrameworkInfo(assignment.tech[0])" @openGithub="onOpenGithub(assignment)"/>
            </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .portfolio {
    min-height: 100vh;

  }
  .project-list {
    height: 100%;
    /* background-color: orange; */
    overflow-y: auto;;
        padding-left: 0;;
    .project-list-item {

        display: grid;
        place-items: start;
    background-color: rgba(255, 255, 255, .12);
    transition: background-color .33s ease-in-out;

        &:hover {
            background-color: rgba(255, 255, 255, .33);
        }
        
    }
    .project-list-item {
            cursor: pointer;
    }
  }
}
</style>
