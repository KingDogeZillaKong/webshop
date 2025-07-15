<script setup lang="ts">
import type { PortfolioAssignmentModel, Tech } from '@/portfolio-assignment'
import ReplaceableIcon from '@/components/ReplaceableIcon.vue'
import github from '@/assets/github.svg'
import FlexList from '@/components//FlexList.vue'
import { onOpenFrameworkInfo } from '@/mixins'
const props = defineProps<{ assignment: PortfolioAssignmentModel }>()
const { assignment } = props
</script>

<template>
  <div class="portfolio-assignment-wrapper" :title="assignment.abstract" :key="assignment.title">
    <span class="publication-date">{{ assignment.date.toDateString() }}</span>

    <div class="full-row-wrapper">
      <div class="portfolio-assignment-thumbnail">
        <ReplaceableIcon
          :imageSrc="assignment.thumbnail"
          :type="'app'"
          @click="$emit('launchApp')"
        />
      </div>
      <h2 @click="$emit('launchApp')">{{ assignment.title }}</h2>
    </div>
    <h3 class="portfolio-description">{{ assignment.abstract }}</h3>

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
          :outline="true"
          shape="circle"
          :imageSrc="github"
          :type="'code'"
          @click="$emit('openGithub')"
        />
      </div>
    </div>
    <details>
      <summary>See More</summary>
      <FlexList
        :items="assignment.tech"
        :selected="undefined"
        @skill-clicked="(tech: Tech) => onOpenFrameworkInfo(tech)"
      />
    </details>
  </div>
</template>

<style scoped>
summary {
  cursor: pointer;
  text-decoration: underline 1px solid whitesmoke;
  border: 10px solid transparent;
  padding-bottom: 3px;
  margin-bottom: 3px;
  border-bottom-color: var(--flex-list-background);
}
.portfolio-description {
  grid-row: 3;
  grid-column: 1/-1;
}
.portfolio-assignment-wrapper {
  border: 1px solid transparent;
  border-bottom-color: var(--highlight-color);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 2fr 1fr 2fr auto;
  gap: 0.33em;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  padding: 0.66em 0.33em;
  .portfolio-assignment-thumbnail {
    display: flex;
    width: 120px;
    background-size: auto;
    background-position: center;
    height: auto;
    aspect-ratio: 1/1;
    overflow: hidden;
    padding: 0.15em;
  }
}

.publication-date {
  grid-row: 1;
  grid-column: 1/-1;
  place-self: end;

  /* background: rgba(193, 193, 193, 0.624); */
  background: var(--highlight-color);
  color: var(--primary-color);
  padding: 0 0.66em;
  border-radius: 3px;
}
.full-row-wrapper {
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  justify-content: start;
  grid-row: 2;
  grid-column: 1/-1;
  gap: 1em;
  text-decoration: underline 1px solid white;
}
.links {
  grid-row: 4;
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  gap: 1em;
  backdrop-filter: blur(9px);
  > * {
    height: 64px;
    justify-content: center;
  }
}
details {
  grid-column: 1/-1;
}
</style>
