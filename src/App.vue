<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ProductInCart from './components/ProductInCart.vue'
import { useCartStore } from './stores/cart'
import { ref } from 'vue'
import router from '@/router'
import CartOverview from './components/CartOverview.vue'
import Navigation from '@/components/Navigation.vue'
const cartStore = useCartStore()

const showCartContents = ref(false)
function onHideCartContents() {
  showCartContents.value = false
}
function onShowCartContents() {
  showCartContents.value = true
}
const navigateToCart = () => {
  router.push({ path: '/cart' })
}
</script>

<template>
  <header id="navnav">
    <Navigation />

    <div class="cart-contents">
      <div
        class="flex"
        @click="navigateToCart"
        @mouseover="onShowCartContents"
        @mouseleave="onHideCartContents"
      >
        <a><ProductInCart :cart-color="'#FFFFFF'" :amount="cartStore.cartTotalItems" /></a>
      </div>
      <div
        :class="['cart-overview-section', { visible: showCartContents }]"
        @mouseover="onShowCartContents"
        @mouseleave="onHideCartContents"
      >
        <CartOverview />
      </div>
    </div>
    <!-- <nav>
        <div class="flex">
        <RouterLink to="/">Shop</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
          <RouterLink to="/portfolio">My portfolio</RouterLink>
               <RouterLink to="/skills">My Coding Adventures</RouterLink>
        </div> 
          
     
      </nav> -->
  </header>
  <RouterView />
</template>

<style scoped>
.template {
  background: orange !important;
}
#navnav {
  position: relative;
  z-index: 9999;
  display: flex;
  margin-bottom: 2.1rem;
  justify-content: space-between;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  border-bottom: 1px solid var(--highlight-color);
}

.items-in-cart-overview {
  list-style: none;
}

.wrapper {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid whitesmoke;

  padding: 0.66em 0;
}

.cart-overview-section {
  position: absolute;
  bottom: 3px;
  transform: translate(-100%, 75%);
  z-index: 999;
  display: none;
  opacity: 0;
  transition: opacity 0.33s ease-out;

  &.visible {
    display: block;
    opacity: 1;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.flex {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.cart-contents {
  justify-self: end;
  position: relative;
}

header {
  display: flex;
  place-items: center;

  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
.logo {
  margin: 0 2rem 0 0;
}
</style>
