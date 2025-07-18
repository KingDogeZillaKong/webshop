<script setup lang="ts">
import type { ProductModel } from '@/product-model'
import { useCartStore } from '@/stores/cart'
import CartListItem from './CartListItem.vue'
import IconCoffee from '@/components/icons/IconCoffee.vue'

const cartStore = useCartStore()

const onItemClicked = (barcode: number) => {
  console.warn('We should navigate to the details page of product: ' + barcode)
}

function findProduct(barcode: number) {
  return cartStore.cart.find((el) => el.barcode === barcode)!
}
</script>

<template>
  <div class="cart-overview-parent">
    <div class="cart-overview-wrapper">
      <div class="expanded-cart">
        <h1>
          {{
            cartStore.cart.length === 0
              ? 'No contents in cart'
              : `Cart Contents (${cartStore.cart.length} item${cartStore.cart.length > 1 ? 's' : ''})`
          }}
        </h1>
        <ul class="items-in-cart-overview">
          <li v-for="x in cartStore.cartMap" :key="x[0].barcode">
            <CartListItem
              :item="findProduct(x[0].barcode)"
              :quantity="x[1]"
              @itemClicked="onItemClicked(x[0].barcode)"
            />
          </li>
        </ul>
      </div>
      <div class="flex-row">
        <span class="total-damage">Total:</span> <span>{{ cartStore.cartTotal.toFixed(2) }}</span
        ><span>
          <i><IconCoffee /></i
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-overview-parent {
  position: relative;
  display: block;
  padding: 24px;
  min-width: 300px;
  border-radius: 12px;
  box-shadow: 2px 3px 12px 12px rgba(203, 202, 202, 0.21);
  background: var(--cart-overview-background);
  backdrop-filter: blur(9px);
}
.cart-overview-wrapper {
  position: relative;
  display: block;
  padding: 1em;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.66);
  color: white;
}
.expanded-cart {
  padding: 1em 0.33em 1em 0.33em;
}
.total-damage {
  display: flex;
  float: right;
}
.items-in-cart-overview {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-top: 1px solid whitesmoke;

  li {
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>
