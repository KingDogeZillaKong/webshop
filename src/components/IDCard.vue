<script setup lang="ts">
import sopra from '@/assets/sopra.svg'
import luuk from '@/assets/luuk.jpg'
import TextBubble from '@/components/TextBubble.vue'
import java from '@/assets/java.svg'
import postgres from '@/assets/postgres.svg'
import angular from '@/assets/angular.svg'
import linkedin from '@/assets/linkedin.svg'
import IDCard from '@/components/IDCard.vue'
import { navigateToLinkedIn, navigateToSopraWebsite } from '@/mixins'
import { ref } from 'vue'

import TechStack from './TechStack.vue'
const THRESHOLD_DEGREE = 2
const rotation = ref<undefined | number>(undefined)
const thresholdDeg = ref(THRESHOLD_DEGREE)
const skew = ref('0')
const underlineColor = ref('transparent')
const scale = ref(1.0)
const borderColor = ref('transparent')

const emit = defineEmits(['clickImage'])

const onMouseDown = () => {
  skew.value = '3deg'
  borderColor.value = 'var(--primary-color)'
  scale.value = 0.96
  thresholdDeg.value = THRESHOLD_DEGREE
  underlineColor.value = 'var(--highlight-color)'
  if (rotation.value === undefined) setInterval(rotate, 150)
}

function rotate() {
  rotation.value = thresholdDeg.value + (rotation.value || 20)
}

const stopRotation = () => {
  borderColor.value = 'transparent'
  scale.value = 1.0
  skew.value = '0'
  thresholdDeg.value = 0
  underlineColor.value = 'transparent'
}

const onClickImage = () => {
  console.warn('Hi')
  if (!document.startViewTransition) {
    return emit('clickImage')
  }

  document.startViewTransition(() => {
    emit('clickImage')
  })
}
</script>
<template>
  <div class="id-card-wrapper">
    <div class="card-top-rule">
      <img
        @click="onClickImage"
        :src="luuk"
        :style="{
          transform: `rotate(${rotation}deg)  scale(${scale})`,
          borderColor: `${borderColor}`,
        }"
        id="luuk-img"
        alt="luuk foto"
      />
      <div>
        <h1 class="my-name">Luuk Goedhart</h1>
        <span class="quote"
          >I
          <span class="turn" :style="{ textDecorationColor: `${underlineColor}` }">turn</span>
          coffee into code.</span
        >
      </div>
    </div>
    <div class="current-job-section" @click="navigateToSopraWebsite">
      <img class="company-img" :src="sopra" />
      <span class="sopra-quote">We make IT work</span>
    </div>
    <div id="links-to-socials">
      <div class="tech-item">
        <TextBubble
          text="10+ jaar ICT"
          @mousedown="onMouseDown"
          @mouseleave="stopRotation"
          background-color="white"
        />
      </div>
      <div class="tech-item">
        <TextBubble
          text="LinkedIn"
          :img="linkedin"
          @click="navigateToLinkedIn"
          background-color="white"
        />
      </div>
    </div>

    <h2 class="tech-stack-title">My favourite stack</h2>
    <div class="favourite-stack-mobile">
      <TechStack />
    </div>

    <div class="favourite-stack-desktop">
      <div class="tech-list">
        <div class="tech-item">
          <TextBubble text="Angular" :background-color="'transparent'" :img="angular" />
        </div>

        <div class="tech-item">
          <TextBubble text="Java" :background-color="'transparent'" :img="java" />
        </div>
        <div class="tech-item">
          <TextBubble text="Postgres" :background-color="'transparent'" :img="postgres" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.my-name {
  color: var(--primary-color);
}

.turn {
  color: var(--primary-color);
  transition: all 1s ease-in-out;
  text-underline-offset: 3px;
  text-decoration: 2px underline solid;
}
.tech-stack-title {
  color: var(--secondary-color);
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.1em;

  margin: 1em 0 0;
  padding: 0;
}
.favourite-stack-desktop {
  display: none;
}
.favourite-stack-mobile {
  display: flex;
  justify-content: center;

  text-align: center;
  padding: 20px;
}

.sopra-quote {
  font-style: italic;
  font-size: 1.2em;
  letter-spacing: 0.12em;
  &::before {
    content: open-quote;
    color: var(--primary-color);
    font-weight: bold;
  }

  &::after {
    content: close-quote;
    color: var(--primary-color);
    font-weight: bold;
  }
}

.tech-list {
  display: flex;
  justify-content: space-between;
  padding: 6px;
}
.id-card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: whitesmoke;
  color: black;

  overflow: hidden;
  padding: 2em 1em;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 1.2em;
}

.current-job-section {
  cursor: pointer;
  display: flex;
  flex-direction: column;

  place-items: center;
  border-radius: 100vw;
}

.company-img {
  height: auto;
  width: 100%;

  padding: 1.5rem 0.5rem 0.5rem 0.5rem;
}

.tech-item {
  text-align: center;
  /* width: 100px; */
}

.card-top-rule {
  display: flex;
  flex-direction: column;
  place-items: start;
  border-radius: 100vw;
  gap: 1.5em;

  img {
    place-self: center;
  }
  h1 {
    font-size: 3em;
  }
}
.quote {
  width: 100%;
  max-lines: 2;
  text-wrap: wrap;
  text-align: center;
  font-style: italic;
  color: gray;
  font-size: 1.8em;

  &::before {
    content: open-quote;
    color: var(--primary-color);
    font-weight: bold;

    vertical-align: middle;
  }

  &::after {
    content: close-quote;
    color: var(--primary-color);
    font-style: italic;
    font-weight: bold;

    wrap: nowrap;
    vertical-align: middle;
  }
}

#links-to-socials {
  > * {
    cursor: pointer;
  }

  display: flex;
  justify-content: space-between;
  gap: 3em;
  text-align: center;
  border-radius: 100vw;

  background: linear-gradient(270deg, var(--primary-color), rgba(255, 255, 255, 1));
  padding: 6px;

  outline: 3px solid transparent;
  transition: all 0.33s ease-in-out;

  &:hover {
    animation-name: border-loop;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
}

#luuk-img {
  view-transition-name: image-transition;
  cursor: pointer;
  justify-self: center;
  border-radius: 100%;
  max-width: 100%;

  aspect-ratio: 1/1;
  border: transparent 3px dashed;
  outline: 2px solid var(--primary-color);
  transition: all 0.21s linear;
  max-width: 50vw;

  &:hover {
    border-color: var(--highlight-color);
  }
}

@media (min-width: 836px) {
  .card-top-rule {
    flex-direction: row;

    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }

  .tech-item {
    text-align: center;
  }

  #links-to-socials {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .tech-list {
    flex-direction: row;
    justify-content: space-between;
  }

  .id-card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: whitesmoke;
    color: black;

    overflow: hidden;
    padding: 2em 1em;
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    gap: 1.2em;
  }

  .current-job-section {
    cursor: pointer;
    display: flex;
    flex-direction: column;

    place-items: center;
    border-radius: 100vw;
  }

  .company-img {
    height: auto;
    width: 100%;

    padding: 1.5rem 0.5rem 0.5rem 0.5rem;
  }

  .quote {
    width: 100%;
    max-lines: 2;
    text-wrap: wrap;
    text-align: center;
    font-style: italic;
    color: var(--primary-color);
    font-size: 2.4em;

    &::before {
      content: open-quote;
      color: var(--primary-color);
      font-weight: bold;

      vertical-align: middle;
    }

    &::after {
      content: close-quote;
      color: var(--primary-color);
      font-style: italic;
      font-weight: bold;

      vertical-align: middle;
    }
  }

  #links-to-socials {
    > * {
      cursor: pointer;
    }

    display: flex;
    justify-content: space-between;
    gap: 3em;
    text-align: center;
    border-radius: 100vw;

    background: linear-gradient(270deg, var(--primary-color), rgba(255, 255, 255, 1));
    padding: 6px;

    outline: 3px solid transparent;
    transition: all 0.33s ease-in-out;

    &:hover {
      animation-name: border-loop;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }

  #luuk-img {
    view-transition-name: image-transition;
    justify-self: start;
    border-radius: 100%;
    max-width: 30%;

    aspect-ratio: 1/1;
    border: transparent 3px dashed;
    outline: 2px solid var(--primary-color);
    transition: all 0.21s linear;

    &:hover {
      border-color: var(--highlight-color);
    }
  }
}

@media (min-width: 1380px) {
  #links-to-socials {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    background: linear-gradient(90deg, var(--primary-color), rgba(255, 255, 255, 1));
  }
  .favourite-stack-desktop {
    display: block;
  }
  .favourite-stack-mobile {
    display: none;
  }
}

@keyframes border-loop {
  0% {
    outline-color: transparent;
  }
  10% {
    outline-color: var(--primary-color);
  }
  45% {
    outline-color: var(--secondary-color);
  }

  80% {
    outline-color: var(--highlight-color);
  }
  100% {
    outline-color: transparent;
  }
}
</style>
