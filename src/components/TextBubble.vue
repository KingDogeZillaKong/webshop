<script setup lang="ts">
const { text, borderColor, backgroundColor, img } = defineProps<{
  text?: string
  borderColor?: string
  backgroundColor?: string
  img?: string
}>()
</script>
<template>
  <div
    :style="{
      borderColor: borderColor ? borderColor : 'var(--primary-color)',
      backgroundColor: backgroundColor ? backgroundColor : 'black',
    }"
  >
    <img v-if="img" :src="img" />
    <span v-if="text">{{ text }}</span>
  </div>
</template>
<style scoped>
div {
  border-radius: 100%;
  aspect-ratio: 1/1;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: inherit;

  width: min(120px, 25vw);
  height: auto;

  padding: 0.9em;
  text-wrap: wrap;
  font-size: 1.5em;
  border: 3px solid transparent;
  transition: border-color 0.33s ease-in-out;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px 10px rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;

  &::before {
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
    }
  }
  span {
    color: var(--primary-color);
    font-size: clamp(9px, 5vw, 21px);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8),
      transparent,
      rgba(255, 255, 255, 0.3)
    );
  }
}
img {
  /* margin: auto auto; */
  aspect-ratio: 1/1;
  width: 50%;
}
</style>
