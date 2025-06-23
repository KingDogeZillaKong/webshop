<script setup lang="ts">
import menu from '@/assets/menu.svg'

import expandedMenu from '@/assets/expanded-menu.svg'
import { ref } from 'vue'
import IconMenuExpanded from './icons/IconMenuExpanded.vue'
import IconMenu from './icons/IconMenu.vue'
interface RouterLinkModel {
  path: string
  name: string
}

const isExpanded = ref(false)

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value
}

const closeMenu = () => {
  isExpanded.value = false
}

const getRouterLink = (path: string, name: string): RouterLinkModel => {
  return { path, name }
}

const navMenuConfig = [
  getRouterLink('/', 'About me'),
  getRouterLink('/my-experience', 'Personal Experiences'),
  getRouterLink('/skills', 'Portfolio'),
]
</script>

<template>
  <div class="menu-wrapper">
    <div class="menu-icon-wrapper">
      <IconMenu v-if="isExpanded" foregroundColor="var(--highlight-color)" @click="toggleMenu" />
      <IconMenuExpanded
        v-if="!isExpanded"
        foregroundColor="var(--highlight-color)"
        @click="toggleMenu"
      />

      <!-- <img v-ifF="!isExpanded" :src="menu" @click="toggleMenu" />
      <img v-if="isExpanded" :src="expandedMenu" @click="toggleMenu" /> -->
    </div>
    <nav class="desktop-nav">
      <div v-for="link of navMenuConfig">
        <RouterLink class="navigation-item" :to="link.path" @click="closeMenu" :key="link.path">{{
          link.name
        }}</RouterLink>
      </div>
    </nav>
    <div class="fancy-nav-wrapper-mobile" v-if="isExpanded">
      <nav class="mobile-nav">
        <div v-for="link of navMenuConfig" class="navigation-item">
          <RouterLink class="navigation-item" :to="link.path" @click="closeMenu" :key="link.path">{{
            link.name
          }}</RouterLink>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.navigation-item {
  padding: 1em 2em;
  font-size: 1.5em;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.33);
  }
}
a {
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

a.router-link-exact-active:hover {
  background-color: transparent;
}

a.router-link-exact-active {
  position: relative;
  color: var(--highlight-color);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
    width: 6px;
    height: 1.5em;
    background-color: whitesmoke;
    border-radius: 2px;
  }
}
a.router-link-exact-active:hover {
  background-color: transparent;
}
.mobile-nav {
  grid-row: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  font-size: 12px;
  text-align: left;
  transition: transform 1s ease-in;

  a.router-link-exact-active {
    color: var(--highlight-color);
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }
}

.menu-icon-wrapper {
  z-index: 9999;
  width: 60px;
  height: 60px;
  padding: 0.33;
  text-align: center;
  margin: auto au/to;
  background-color: var(--secondary-color);
  border: 1px solid var(--highlight-color);
  border-radius: 1em;
  display: flex;
  > * {
    transition: all 0.3s ease-in;
  }
}
.desktop-nav {
  display: none;
}
.fancy-nav-wrapper-mobile {
  display: grid;
  position: fixed;
  grid-template-rows: 120px auto;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100svh;
  z-index: -1;
  background: rgba(0, 0, 0, 0.54);
  backdrop-filter: blur(18px);
}

.menu-wrapper {
  display: block;
  z-index: 999;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
}

@media (orientation: landscape) {
  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    text-wrap: nowrap;
  }
  .fancy-nav-wrapper-mobile {
    display: none;
  }
  .mobile-nav {
    display: none;
  }

  .menu-wrapper {
    display: flex;
    place-items: center;
    gap: 1em;

    .menu-icon-wrapper {
      display: none;
    }
  }
  .desktop-nav {
    position: relative;

    display: flex;

    place-items: center;
    font-size: 12px;
    text-align: left;
    position: relative;
    display: flex;
    width: unset;
    flex-direction: row;

    font-size: 12px;
    text-align: center;
  }
}
</style>
