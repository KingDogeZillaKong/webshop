<script setup lang="ts">
import { ProductModel } from '../product-model'
import ProductInCart from './ProductInCart.vue'
import IconCoffee from '@/components/icons/IconCoffee.vue'
const props = defineProps<{ item: ProductModel; amountInCart: number | undefined }>() //({barcode: -1, title: "Undefined", price: 0.00, preview: "logo.svg"});
</script>
<template>
  <div class="item">
    <div v-if="props.amountInCart" class="is-in-cart">
      <ProductInCart :cart-color="'rgba(0,0,0,.63)'" :amount="props.amountInCart" />
    </div>
    <img
      alt="Product image"
      class="product-image"
      :src="props.item.preview"
      width="125"
      height="125"
    />
    <div class="flex">
      <div>
        <span class="flex-row">
          <h3>{{ props.item?.title }}</h3>
          <span>|</span>
          <h3 class="price">
            {{ props.item.price }}<i><IconCoffee /></i></h3
        ></span>
      </div>
    </div>
    <button @click="$emit('addProductToCart')">Add to cart</button>
  </div>
</template>
<style scoped>
.item {
  position: relative;
  display: flex;
  place-items: center;
  flex-direction: column;
  gap: 1.5em;

  padding: 1em 0.33em;
  color: var(--default-text-color);
  border-radius: 6% 6% 0 0;
  background: var(--catalog-item-background);

  /**
    LIGHT COLOR THEME 
  */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border-top: 4px solid #2af7cf;

  border-bottom: 1px solid transparent;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  /* 
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid whitesmoke;
  } */

  .is-in-cart {
    position: absolute;
    top: 0.24em;
    right: 0.24em;
    border-radius: 100%;
    aspect-ratio: 1/1;
    padding: 0.15em;
  }

  .flex {
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    width: 100%;
    gap: 0.33em;

    h3 {
      letter-spacing: 0.1em;
    }

    .price {
      display: flex;
      gap: 0.15em;
      font-weight: bold;
      color: var(--default-text-color);
    }
  }

  button {
    cursor: pointer;
    border-radius: 100vw;
    margin: 6px;
    padding: 0.66em 0.99em;
    background-color: rgba(0, 0, 0, 0.45);
    border: none;
    outline: 1px solid gold;
    transition: transform ease-out 0.06s;
    color: whitesmoke;
    letter-spacing: 0.03rem;
    font-weight: bold;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
