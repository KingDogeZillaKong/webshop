<script setup lang="ts">
import IconCart from './icons/IconCart.vue';
        const props =  defineProps<{amount: number, cartColor: string }>(); 


</script>
<template>
    <div class="product-in-cart-wrapper">
<div class="circle">{{ props.amount }}</div>
    <IconCart :style="{fill: cartColor}"/>
    </div>
</template>
<style scoped>
.product-in-cart-wrapper {
    position: relative;
    display: flex;
    width: 64px;
    height: 64px;
   place-content: center;

   /* > svg {
    fill: cartColor;
   } */
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