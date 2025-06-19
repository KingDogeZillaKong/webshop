<script setup lang="ts">
import java from "@/assets/java.svg";
import postgres from "@/assets/postgres.svg"
import angular from "@/assets/angular.svg";
import TechStackItem from '@/components/TechStackItem.vue';
interface TechStackItem {
    img: string;
    text: string;
}
function getTechStackItem(img: string, text: string): TechStackItem {
    return {img, text};
}
    const TECH_STACK_ITEMS : TechStackItem[] = [getTechStackItem(angular, "Angular"), getTechStackItem(postgres, "Postgres"), getTechStackItem(java, "Java")];
    
</script>

<template>
    <ul >
        <li v-for="item in  TECH_STACK_ITEMS" :key="item.text">
            <TechStackItem :img="item.img" :text="item.text"/>
        </li>
    </ul>

    </template>


<style scoped>
ul {
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
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
    border-bottom: 1px solid var(--primary-color); /* Add separator line */
}

    
   li:last-child {
    border-bottom: none;
}
    

}

</style>