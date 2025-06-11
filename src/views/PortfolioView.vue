<script setup lang="ts">
import type { PortfolioAssignmentModel } from '@/portfolio-assignment';
import PortfolioAssignment from '@/components/PortfolioAssignment.vue';
import vue from "@/assets/logo.svg"
import angular from "@/assets/angular.svg"
import next from "@/assets/next.svg";
    const getPortfolioAssignment = (title: string, date: string | number | Date, thumbnail: string) => {
        return {title, date: new Date(date), thumbnail}
    }

const ASTON_MARTIN_VUE_WEBSHOP = getPortfolioAssignment("Vue Dashboard", new Date(), vue);
const NIKKICHANEL = getPortfolioAssignment("Nikkichanel.nl", new Date("02/12/2023"), angular);
const LUCADEX = getPortfolioAssignment("Lucadex.com", new Date("02/12/2024"), next);
const POKERDEX = getPortfolioAssignment("Pokerdex.io", new Date("05/14/2025"), angular);

    const PORTFOLIO_ASSIGNMENTS:PortfolioAssignmentModel [] = [ASTON_MARTIN_VUE_WEBSHOP, NIKKICHANEL, LUCADEX, POKERDEX];
</script>
<template>
  <div class="portfolio">
    <ul class="project-list" v-for="assignment in PORTFOLIO_ASSIGNMENTS">
        <li class="project-list-item"><PortfolioAssignment :assignment="assignment"/>
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
    list-style: none;
    height: 100%;
    background-color: orange;
    overflow-y: auto;;
        padding-left: 0;;
    .project-list-item {

        display: grid;
        place-items: start;
    background-color: rgba(255, 255, 255, .12);
    transition: background-color .33s ease-in-out;
    cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .33);
        }
        
    }
  }
}
</style>
