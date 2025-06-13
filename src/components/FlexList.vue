<script setup lang="ts">
import type { Tech } from '@/portfolio-assignment';
import type { SkillModel } from '@/skill-model';
import { ref, watch, capitalize } from 'vue';
const emit = defineEmits(['skillClicked'])
    const props = defineProps<{items: SkillModel[], selected: Tech | undefined}>();
    const {items, selected} = props;
    const selectedItem = ref<Tech | undefined>(selected);

    const onItemClicked = (item: SkillModel) => {
        selectedItem.value = item.name;
        console.warn(item.name)
        emit('skillClicked', item.name);
    }
</script>
    

<template>
<ul class="skill-variants">
        <li v-for="skill in items" :class="['tech-item', {'selected':skill.name === selectedItem }]"  @click="onItemClicked(skill)">
            <div class="tech-icon-wrapper">
                <img :src="skill.iconSrc" class="tech-icon" :alt="skill.name"/>
                     <span>{{ skill.name === "UIUX"  ?"UI/UX" : capitalize(skill.name) }}</span> 
            </div>
       
        </li>
    </ul>
</template>


<style scoped>

  .tech-item {
       background: rgba(255, 255, 255, .11);;
       display: flex;
       flex-grow: 1;
       place-content: center;
    border-bottom: 1px solid transparent;

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, .33);
    }
  }

  .selected {
    background: rgba(255, 255, 255, .33);;
    border-bottom: 1px solid white;
  }

</style>