<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ProductInCart from './components/ProductInCart.vue';
import { useCartStore } from './stores/cart';
import { ref } from 'vue';
import CartOverview from "./components/CartOverview.vue";
const cartStore = useCartStore();
const showCartContents = ref(false);
function onHideCartContents() {
  showCartContents.value = false;
}
  function onShowCartContents() {
  showCartContents.value = true;
}

</script>

<template>
  <header>
      <nav>
        <div class="flex">
        <RouterLink to="/">Shop</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
          <RouterLink to="/portfolio">My work</RouterLink>
               <RouterLink to="/skills">My Coding Adventures</RouterLink>
        </div> 
          
        <div class="cart-contents">
                <div class="flex" @mouseover="onShowCartContents" @mouseleave="onHideCartContents">
          <a><ProductInCart :cart-color="'#FFFFFF'" :amount="cartStore.cartTotalItems"/></a>
         </div>
            <div   :class="['cart-overview-section', {'visible': showCartContents}]" @mouseover="onShowCartContents" @mouseleave="onHideCartContents">
            <CartOverview  />
            </div>
        </div>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  width:100%;
  border-bottom: 1px solid whitesmoke;
}

.items-in-cart-overview {
  list-style: none;
}

.wrapper {
  width: 100%;
  height: 100%;;
  border-bottom: 1px solid whitesmoke;

  padding: .66em 0;
}

.cart-overview-section {
  position: absolute;
  bottom: 3px;
  transform: translate(-100%, 90%);
  z-index: 999;
  display: none;
  opacity: 0;
  transition: opacity .33s ease-out;

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
}

.cart-contents {
  justify-self: end;;
  position: relative;

}
nav {
    display: flex;
    flex-grow: 1;;
    justify-content: space-between;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;


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
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } 
nav a:first-of-type {
  border: 0;
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
