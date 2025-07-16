<script setup lang="ts">
import { useRoute, type RouteParamsGeneric } from 'vue-router'
import { capitalize, computed, ref, watch } from 'vue'
import { ALL_PRODUCTS } from '@/catalog'
import { PORTFOLIO_ASSIGNMENTS } from '@/components/database'
import PortfolioAssignment from '@/components/PortfolioAssignment.vue'
import { onLaunchApp, onOpenGithub, onOpenFrameworkInfo } from '../mixins'
import type { PortfolioAssignmentModel, Tech } from '@/portfolio-assignment'
import { SKILLS } from '@/components/database'
import MobilePortfolioAssignment from '@/components/MobilePortfolioAssignment.vue'

import FlexList from '@/components/FlexList.vue'
import router from '@/router'
import type { SkillModel } from '@/skill-model'
const route = useRoute()

const { params } = route
const techUsedAtAssignments: Tech[] = PORTFOLIO_ASSIGNMENTS.map((ass) =>
  ass.tech.map((skill) => skill.tech),
).flat()
const SET_OF_USED_TECHS: SkillModel[] = SKILLS.filter((skill) =>
  techUsedAtAssignments.includes(skill.tech),
)

// const VISIBLE_SKILLS: Tech[] = ref(result());

function getSelectedSkillFromRouteParams(params: RouteParamsGeneric): string | undefined {
  return Boolean(params['skill']) ? (params['skill'] as string) : undefined
}
const scope = ref<Tech | undefined>(getSelectedSkillFromRouteParams(params) as Tech)
const skill = ref<SkillModel | undefined>(
  SKILLS.find((el) => el.tech === scope.value?.toLocaleLowerCase()),
)

watch(
  () => route.params,
  (newValue, oldValue) => {
    const value = getSelectedSkillFromRouteParams(newValue)
    if (!value) {
      scope.value = undefined
      skill.value = undefined
      return
    }
    scope.value = value as Tech
    skill.value = SKILLS.find((el) => el.tech === scope.value)
  },
)

const visibleAssignments = computed(() => {
  return !scope.value?.length
    ? PORTFOLIO_ASSIGNMENTS
    : PORTFOLIO_ASSIGNMENTS.filter((ass) =>
        ass.tech
          .map((t) => t.tech.toLocaleLowerCase())
          .includes(scope.value?.toLocaleLowerCase() || 'XXX'),
      )
})

const onSkillClicked = (skill: Tech) => {
  router.push({ path: `/skills/${skill}` })
}
</script>
<template>
  <div class="skill-page-wrapper">
    <div class="flex-full">
      <FlexList
        :items="SET_OF_USED_TECHS"
        :selected="scope"
        @skill-clicked="(tech: Tech) => onSkillClicked(tech)"
      />
    </div>
    <div v-if="visibleAssignments">
      <h1 class="center-align">{{ skill?.displayName || 'There is no skill selected' }}</h1>
      <h2>
        I launched {{ visibleAssignments.length }} {{ skill?.displayName }}
        {{ visibleAssignments.length > 1 ? 'projects' : 'project' }}.
      </h2>
      <ul class="project-list-mobile" v-for="assignment in visibleAssignments">
        <li class="project-list-item">
          <MobilePortfolioAssignment
            :assignment="assignment"
            @launchApp="onLaunchApp(assignment)"
            @openFrameworkInfo="onOpenFrameworkInfo(assignment.tech[0].tech)"
            @openGithub="onOpenGithub(assignment)"
            :key="assignment.abstract"
          />
        </li>
      </ul>
      <ul class="project-list" v-for="assignment in visibleAssignments">
        <li class="project-list-item">
          <PortfolioAssignment
            :assignment="assignment"
            @launchApp="onLaunchApp(assignment)"
            @openFrameworkInfo="onOpenFrameworkInfo(assignment.tech[0].tech)"
            @openGithub="onOpenGithub(assignment)"
            :key="assignment.abstract"
          />
        </li>
      </ul>

      <!-- <ul>
       
        <li v-for="assignment of visibleAssignments" :key="assignment.abstract">
            <PortfolioAssignment :assignment="assignment" @launchApp="onLaunchApp(assignment)" @openFrameworkInfo="onOpenFrameworkInfo(assignment.tech[0])" @openGithub="onOpenGithub(assignment)"/>
        </li>
    </ul> -->
    </div>
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
    box-shadow: 10px 3px 20px 1px var(--portfolio-assignment-box-shadow-color);
    place-items: start;
    background-color: var(--portfolio-assignment-background);
    transition: background-color 0.33s ease-in-out;

    &:hover {
      background-color: var(--portfolio-assignment-background-hover);
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
  }
}

@media (orientation: portrait) {
  .project-list-mobile {
    display: grid;
  }
  .project-list {
    display: none;
    gap: 3em;
  }
}

.skills-page-wrapper {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex-full {
  width: 100%;
  margin: auto auto;
  display: flex;
  flex: 1;
}
.center-align {
  color: var(--default-text-color);
  margin-top: 0.5em;
  text-decoration: underline 1px var(--futuristic-color);
  text-underline-offset: 0.15em;
  text-align: center;
}
</style>
