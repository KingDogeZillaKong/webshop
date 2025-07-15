<script setup lang="ts">
import type { PortfolioAssignmentModel, Tech } from '@/portfolio-assignment'
import ReplaceableIcon from './ReplaceableIcon.vue'
import vue from '@/assets/logo.svg'
import github from '@/assets/github.svg'
import code from '@/assets/code.svg'

import FlexList from '@/components/FlexList.vue'
import { onOpenFrameworkInfo } from '@/mixins'

const props = defineProps<{ assignment: PortfolioAssignmentModel }>()
const { assignment } = props

const onSkillClicked = (tech: Tech) => {
  window.open(`/skills/${tech}`)
}
</script>

<template>
  <div class="portfolio-assignment-wrapper" :title="assignment.abstract" :key="assignment.title">
    <div class="portfolio-assignment-thumbnail">
      <ReplaceableIcon
        :imageSrc="assignment.thumbnail"
        :type="'app'"
        @click="$emit('launchApp')"
        :shape="assignment.logoShape ? assignment.logoShape : 'square'"
      />
    </div>

    <div class="details-section">
      <div>
        <h2 class="project-title" @click="$emit('launchApp')">{{ assignment.title }}</h2>
        <h3>{{ assignment.abstract }}</h3>
        <details>
          <summary>See More</summary>
          <FlexList
            :items="assignment.tech"
            :selected="undefined"
            @skill-clicked="(tech: Tech) => onOpenFrameworkInfo(tech)"
          />
        </details>
      </div>
      <span class="publication-date">{{ assignment.date.toDateString() }}</span>
    </div>

    <div class="links">
      <div class="portfolio-assignment-thumbnail">
        <ReplaceableIcon
          :imageSrc="assignment.techstackLogo"
          :type="'text'"
          @click="$emit('openFrameworkInfo')"
        />
      </div>

      <div class="portfolio-assignment-thumbnail">
        <ReplaceableIcon
          :imageSrc="github"
          :type="'code'"
          shape="circle"
          :outline="true"
          @click="$emit('openGithub')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
summary {
  cursor: pointer;
  text-decoration: underline 1px solid whitesmoke;
}
.project-title {
  cursor: pointer;
  text-decoration: underline 1px solid whitesmoke;
}
.portfolio-assignment-wrapper {
  display: grid;
  padding: 6px 60px 6px 54px;
  grid-template-columns: 120px 1fr auto;
  gap: 0.33em;
  width: 100%;
  height: 100%;
  /* border-bottom: 3px ridge var(--futuristic-color); */
  /* border-right: 3px solid var(--futuristic-color); */

  /* border-top: 3px solid whitesmoke; */
  border-right: 3px ridge whitesmoke;
  border-left: 3px ridge var(--futuristic-color);
  overflow: hidden;
  align-items: center;
  .portfolio-assignment-thumbnail {
    display: flex;
    width: 120px;
    background-size: auto;
    background-position: center;
    height: auto;
    aspect-ratio: 1/1;
    overflow: hidden;
    padding: 0.15em;
    cursor: pointer;
  }
  .details-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    padding: 6px;

    .publication-date {
      grid-row: 1;
      grid-column: 2;
      justify-self: end;
      align-self: center;
    }
  }
  .links {
    display: flex;
  }
}
</style>
