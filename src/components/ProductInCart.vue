<script setup lang="ts">
import IconCart from './icons/IconCart.vue';
        const props =  defineProps<{amount: number }>(); 


</script>
<template>
    <div class="wrapper">
<div class="circle">{{ props.amount }}</div>
    <IconCart/>
    </div>
</template>
<style scoped>
.wrapper {
    position: relative;
    width: 64px;
    height: 64px;
}
    .circle {
        position: absolute;
        top: .15em;
        right: .09em;
        background-color: green;
        aspect-ratio: 1/1;
        width: 24px;
        height: 24px;;
        padding: .15em;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        color: whitesmoke;
    }

</style>