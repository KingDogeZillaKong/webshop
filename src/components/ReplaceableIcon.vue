<script setup lang="ts">
//TODO rename to ICON

import { ref } from 'vue'
import IconFile from '@/components/icons/IconFile.vue'
import IconApp from '@/components/icons/IconApp.vue'
import IconCode from './icons/IconCode.vue'
import type { Shape } from '@/shape-model'
const props = defineProps<{ imageSrc: string; type: string; outline?: boolean; shape?: Shape }>() //TODO make type a type
const { imageSrc, type, outline, shape } = props
const shapeRef = ref<Shape>(shape || 'square')

const overlayIsVisible = ref(false)
const onMouseOverSelf = () => {
  overlayIsVisible.value = true
}
const onMouseLeaveSelf = () => {
  overlayIsVisible.value = false
}
</script>

<template>
  <div class="icon-wrapper" @mouseover="onMouseOverSelf" @mouseleave="onMouseLeaveSelf">
    <Transition>
      <div v-if="overlayIsVisible.valueOf()" class="overlay">
        <IconCode v-if="type === 'code'" :foregroundColor="'#FFFFFF'" title="Go to code" />
        <IconFile v-if="type === 'text'" :foregroundColor="'#FFFFFF'" title="Go to blog" />
        <IconApp v-if="type === 'app'" :foregroundColor="'#FFFFFF'" title="Go to app" />
      </div>
    </Transition>

    <img
      :class="['original-image', { circle: shapeRef === 'circle' }, { outline: outline }]"
      :src="imageSrc"
      :alt="'orignal image'"
    />
  </div>
</template>

<style scoped>
.icon-wrapper {
  display: flex;
  padding: 0.15em;
  overflow: hidden;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &:hover {
    .overlay {
      opacity: 1;
    }

    .original-image {
      opacity: 0.11;
      background-color: rgba(0, 0, 0, 0.12);
    }
  }
}

.overlay {
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  background-color: rgba(0, 0, 0, 0.12);
  opacity: 0;

  transition: opacity ease-in-out 0.3s;
}

.original-image {
  opacity: 1;
  transition: opacity ease-in-out 0.3s;

  &.circle {
    border-radius: 100%;
  }

  &.outline {
    /* border: 2px solid black; */
    background: darkgray;
  }
}
</style>
