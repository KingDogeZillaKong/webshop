<script setup lang="ts">
import { onUpdated, ref, watch } from 'vue';
import IconMinus from "@/components/icons/IconMinus.vue"
import IconPlus from "@/components/icons/IconPlus.vue"
const {amount} = defineProps<{amount: number}>();
    const emit = defineEmits(['counterChanged'])
    const counter = ref(amount) || 1;

    onUpdated(() => {
        counter.value =  amount;
    })
    // const onMinusClicked = () => {
    //     if(counter.value === 1) return;
    //     counter.value = counter.value - 1;
    // }
    //  const onPlusClicked = () => {
    //         if(counter.value === 99) return;
    //     counter.value = counter.value + 1;
    // }

</script>
<template>
    <div class="counter-wrapper">
        <label  class="the-button" @click="$emit('counterChanged', -1)">
        <IconMinus :foreground-color="'white'"/>
        </label>
       <input disabled id="counter-inp" min="1" max="99" class="invisible-input" type="text" :value="counter"/>
               <label class="the-button" @click="$emit('counterChanged', 1)">
     <IconPlus :foreground-color="'white'"/></label>    
     </div>
</template>
<style scoped>
.invisible-input {
  border: none;
  outline: none;
  background: transparent;
  color: inherit;
  font: inherit;
  padding: 4px 6px;
  margin: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  box-shadow: none;
  box-sizing: border-box;
    width: 3ch;
    text-align: center;
    font-weight: bold;
border-bottom: 1px solid black;
}
.counter-wrapper {
    display: flex;
    gap: .3em;
    place-content: center;
    place-items: center;
}
.the-button {
    /* background-color: gainsboro; */
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    place-items: center;
    cursor: pointer;
    width: 24px;
    aspect-ratio: 1/1;
    z-index: 99;
    transition: all .24s ease-out;
    border-bottom: 1px solid transparent;
    &:hover {
        /* transform: scale(1.1); */
        border-color: black;

 
    }

   
}
</style>