<script setup lang="ts">
import TextBubble from '@/components/TextBubble.vue'
const { img, text } = defineProps<{ img: string; text: string }>()
</script>
<template>
  <div class="tech-stack-item-wrapper">
    <img :src="img" :alt="text" />
    <div class="w-full">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
.tech-stack-item-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;

  /* border-radius: 100vw; */
  /* border-top: 1px solid var(--primary-color); */
  padding: 1rem 1.2rem;
  gap: 1em;
  /* justify-content: center; */
  img {
    aspect-ratio: 1/1;
    width: 30%;
    max-width: 150px;
    height: auto;
    margin: auto;
  }

  .w-full {
    /* width: 100%; */
    /* background: orange; */
    font-size: 1.5em;
    width: 100%;

    /* text-align: left; */
    /* float: left; */
  }
}
</style>
