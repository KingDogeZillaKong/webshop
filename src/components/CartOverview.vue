<script setup lang="ts">
import type { ProductModel } from '@/product-model';
import { useCartStore } from '@/stores/cart';

const props =  defineProps<{items:Map<ProductModel, number>}>(); 
    const {items} = props;

    const cartStore = useCartStore();
  const onItemClicked = (barcode: number) => {
    console.warn("We should navigate to the details page of product: " + barcode)
  }
</script>

<template>
    <div class="cart-overview-wrapper">


          <div class="expanded-cart">{{ cartStore.cartItems.size === 0 ? 'No contents in cart' : 'Cart Contents' }} 
            <ul class="items-in-cart-overview">
                <!-- <li v-for="x of cartStore.cartItems">Barcode: {{x[0]  }} | Aantal: {{  x[1]}}</li> -->
              <li v-for="x of items">
          <CartListItem :item="x" @itemClicked="onItemClicked(x[0].barcode)"/>
              </li>
            </ul>
          </div>

        <ul>
            <li>

            </li>
        </ul>
    </div>
</template>

<style scoped>
    .cart-overview-wrapper {
        position: relative;
        display: block;
        padding: 4px 6px;
        border: 1px solid black;
        box-shadow: 1px 1px 2px 2px rgba(0,0,0,.66);;
        background: #D3D3D3;
    }
</style>