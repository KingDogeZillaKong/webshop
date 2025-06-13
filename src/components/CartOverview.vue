<script setup lang="ts">
import type { ProductModel } from '@/product-model';
import { useCartStore } from '@/stores/cart';
import CartListItem from './CartListItem.vue';
// import {IconCoffee} from "@/components/icons/IconCoffee.vue";
import IconCoffee from "./icons/IconCoffee.vue";
import { computed } from 'vue';
const props =  defineProps<{items:Map<ProductModel, number>}>(); 
    const {items} = props;

    const cartStore = useCartStore();
    
    

  const onItemClicked = (barcode: number) => {
    console.warn("We should navigate to the details page of product: " + barcode)
  }

  function findProduct(barcode: number) {
    return cartStore.cart.find(el => el.barcode === barcode)!
  }
  
</script>

<template>
  <div class="cart-overview-parent">
    <div class="cart-overview-wrapper">


          <div class="expanded-cart">{{ cartStore.cart.length === 0 ? 'No contents in cart' : 'Cart Contents ' + cartStore.cart.length }} 
            <ul class="items-in-cart-overview">
                <!-- <li v-for="x of cartStore.cartItems">Barcode: {{x[0]  }} | Aantal: {{  x[1]}}</li> -->
              <li v-for="x in cartStore.cartMap" :key="x[0].barcode">
          <CartListItem :item="findProduct(x[0].barcode)" :quantity="x[1]" @itemClicked="onItemClicked(x[0].barcode)"/>
              </li>
     
            </ul>
         <div class="flex-row">
                                                    <span class="total-damage">Total: {{cartStore.cartTotal.toFixed(2) }}  <i><IconCoffee/></i></span>
                                                    </div>

          </div>

     

    </div>
    
    </div>
</template>

<style scoped>
  .cart-overview-parent {
        position: relative;
        display: block;
        padding: 24px;;
        /* min-height: 80vh; */
        border: 1px solid black;
        border-radius: 12px;;
        box-shadow: 1px 1px 2px 2px rgba(0,0,0,.66);;
        background: rgb(122, 122, 122);
        /* color: white; */
    }
    .cart-overview-wrapper {
        position: relative;
        display: block;
        padding: 1em;
        border: 1px solid black;
        box-shadow: 1px 1px 2px 2px rgba(0,0,0,.66);;
        background: black;
        color: white;
       
    }
    .expanded-cart {
      padding: 1em .33em 1em .33em;
    }
    .total-damage {
      display: flex;
     float: right;
      /* background-color: orange; */
    }
    .items-in-cart-overview {
      /* height: 100px; */
      /* background-color: orange; */

    }
   
</style>