<script setup lang="ts">
import { PORTFOLIO_ASSIGNMENTS } from '@/components/database'
import PortfolioAssignment from '@/components/PortfolioAssignment.vue'
import { onLaunchApp, onOpenGithub, onOpenFrameworkInfo } from '../mixins'
import MobilePortfolioAssignment from '@/components/MobilePortfolioAssignment.vue'
</script>
<template>
  <div class="portfolio">
    <ul class="project-list-mobile" v-for="assignment in PORTFOLIO_ASSIGNMENTS">
      <li class="project-list-item">
        <MobilePortfolioAssignment
          :assignment="assignment"
          @launchApp="onLaunchApp(assignment)"
          @openFrameworkInfo="onOpenFrameworkInfo(assignment.tech[0].tech)"
          @openGithub="onOpenGithub(assignment)"
        />
      </li>
    </ul>
    <ul class="project-list" v-for="assignment in PORTFOLIO_ASSIGNMENTS">
      <li class="project-list-item">
        <PortfolioAssignment
          :assignment="assignment"
          @launchApp="onLaunchApp(assignment)"
          @openFrameworkInfo="onOpenFrameworkInfo(assignment.tech[0].tech)"
          @openGithub="onOpenGithub(assignment)"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.project-list {
  height: 100%;
  /* background-color: orange; */
  overflow-y: auto;
  padding-left: 0;

  .project-list-item {
    /* display: grid; */
    place-items: start;
    background-color: rgba(255, 255, 255, 0.12);
    transition: background-color 0.33s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.33);
    }
  }
}
.portfolio {
  min-height: 100vh;
}
@media (orientation: landscape) {
  .project-list-mobile {
    display: none;
    background-color: yellow;
  }
  .project-list {
    display: grid;

    .project-list-item {
      margin: 0.5em 0 0.5em 0;
    }
    /* background-color: red; */
  }
}

@media (orientation: portrait) {
  .project-list-mobile {
    display: grid;
    /* background-color: green; */
  }
  .project-list {
    display: none;
    gap: 3em;
  }
}
</style>
