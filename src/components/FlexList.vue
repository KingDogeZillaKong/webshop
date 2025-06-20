<script setup lang="ts">
import type { Tech } from '@/portfolio-assignment'
import type { SkillModel } from '@/skill-model'
import { ref, watch, capitalize, onUpdated } from 'vue'
const emit = defineEmits(['skillClicked'])
const props = defineProps<{ items: SkillModel[]; selected: Tech | undefined }>()
const { items, selected } = props
const selectedItem = ref<Tech | undefined>(selected)

const onItemClicked = (item: SkillModel) => {
  selectedItem.value = item.tech
  emit('skillClicked', item.tech)
}
onUpdated(() => {
  selectedItem.value = props.selected
})
</script>

<template>
  <ul class="skill-variants">
    <li
      v-for="skill in items"
      :class="[
        'tech-item',
        { selected: skill.tech.toLocaleLowerCase() === selectedItem?.toLocaleLowerCase() },
      ]"
      @click="onItemClicked(skill)"
    >
      <div class="tech-icon-wrapper">
        <img :src="skill.iconSrc" class="tech-icon" :alt="skill.tech" />
        <span>{{ skill.displayName }} </span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.tech-item {
  background: rgba(255, 255, 255, 0.11);
  display: flex;
  flex-grow: 1;
  padding: 0.1em 0.24em 0.1em 0.24em;
  place-content: center;
  border-bottom: 1px solid transparent;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.33);
    color: whitesmoke;
      

  }
}

.selected {
  background: rgba(255, 255, 255, 0.33);
  border-bottom: 1px solid white;
}
</style>
