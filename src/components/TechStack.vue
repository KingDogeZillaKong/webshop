<script setup lang="ts">
import java from '@/assets/java.svg'
import postgres from '@/assets/postgres.svg'
import angular from '@/assets/angular.svg'
import TechStackItem from '@/components/TechStackItem.vue'
interface TechStackItem {
  img: string
  text: string
  border: string
  background: string;
}
function getTechStackItem(img: string, text: string, border: string, background: string): TechStackItem {
  return { img, text, border, background}
}
const TECH_STACK_ITEMS: TechStackItem[] = [
  getTechStackItem(angular, 'Angular', '#dd1a16', 'rgba(200, 90, 56, .45)'),
  getTechStackItem(postgres, 'Postgres', '#336791',  'rgba(51, 103, 145, .45)'),
  getTechStackItem(java, 'Java', '#05382a', 'rgba(201, 130, 30, .45)'),
]

</script>

<template>
  <ul>
    <li v-for="item in TECH_STACK_ITEMS" :key="item.text" :style="{border: `2px solid ${item.border}`, background: `${item.background}`}">
      <TechStackItem :img="item.img" :text="item.text" />
    </li>
  </ul>
</template>

<style scoped>
ul {
  
  border-radius: 9px;
  list-style: none;
  display: flex;
  flex-direction: column;
    
 
  /* justify-content: center; */
  margin: 0;
  padding: 0;
  /* border-bottom: 1px solid gold;
     border-top: 1px solid gold; */

  li {
    padding: 8px 12px;
      border-radius: 100vw;
    border-bottom: 1px solid var(--primary-color); /* Add separator line */
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
li:first-child{
        border-bottom: none;
 
}
  li:last-child {
    border-bottom: none;
    

  }
}
</style>
