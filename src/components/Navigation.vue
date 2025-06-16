<script setup lang ="ts">
import menu from "@/assets/menu.svg";

import expandedMenu from "@/assets/expanded-menu.svg"
import { ref } from "vue";

const isExpanded = ref(false);

const toggleMenu = () => {
    isExpanded.value = !isExpanded.value
}
</script>

<template>

    <div class="menu-wrapper">
       <div class="menu-icon-wrapper"> 
        <img v-if="!isExpanded" :src="menu" @click="toggleMenu"/>
        <img v-if="isExpanded" :src="expandedMenu" @click="toggleMenu"/>
       </div>
           <nav class="desktop-nav">
   
        <RouterLink to="/">Shop</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
          <RouterLink to="/portfolio">My work</RouterLink>
               <RouterLink to="/skills">My Coding Adventures</RouterLink>

    </nav>
    <nav v-if="isExpanded">
   
        <RouterLink to="/">Shop</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
          <RouterLink to="/portfolio">My work</RouterLink>
               <RouterLink to="/skills">My Coding Adventures</RouterLink>

    </nav>
    </div>
</template>

<style scoped>
nav {
        z-index: 1000;
        position: relative  ;;
            display: flex;
            flex-direction: column;
    /* flex-grow: 1;; */
    /* justify-content: space-between; */
  /* width: 100%; */
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */

}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

  nav {
    position: fixed;

    height: 100svh;
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    background: rgba(0,0,0, 0.54);
    backdrop-filter: blur(12px);
    width: 100svw;
    padding: 1rem 0;
    top: 0;
    /* margin-top: 1rem; */
  } 
nav a:first-of-type {
  border: 0;
}

 /* .menu-wrapper {
        display: block;

    } */
        .menu-icon-wrapper{
            z-index: 9999;
        width: 60px;
        height: 60px;
        padding: .66em;
        background-color: rgba(255, 255, 255, .48);
        border: 1px solid whitesmoke;
        border-radius: 1em;
  
        
            
    }
    .desktop-nav {
        display: none;
    }
@media(orientation: landscape){

    .menu-wrapper {
        display: flex;
        place-items: center;
        gap: 1em;

        .menu-icon-wrapper{
            display: none;
        }
    }
        .desktop-nav {
            position: relative;
            
        /* display: none; */
            display: flex;
    /* flex-direction: column; */
    /* flex-grow: 1;; */
    /* justify-content: space-between; */
    place-items: center;
  /* width: 100%; */
  font-size: 12px;
  text-align: left;
  /* margin-top: 2rem; */
    }
    nav {
        position: relative;
        /* background-color: orange; */
            display: flex;
            flex-direction: row;
    /* flex-grow: 1;; */
    /* justify-content: space-between; */
  /* width: 100%; */
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
    }

   


}
</style>