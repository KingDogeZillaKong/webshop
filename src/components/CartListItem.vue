<script setup lang="ts">
import type { ProductModel } from '@/product-model'
import Counter from './Counter.vue'
import { useCartStore } from '@/stores/cart'
import { onUpdated, ref } from 'vue'
import IconCoffee from '@/components/icons/IconCoffee.vue'

const props = defineProps<{ item: ProductModel; quantity: number }>()
const { item, quantity } = props
const quantityRef = ref(quantity)

onUpdated(() => {
  quantityRef.value = props.quantity
})

const store = useCartStore()
const onAmountUpdatedInShoppingCart = (item: ProductModel, diff: number) => {
  if (diff > 0) {
    store.onProductAddedToCart(item)
  } else if (diff < 0) {
    store.decreaseNumberOfItemsInCart(item)
  }
}
</script>
<template>
  <div class="list-item">
    <img :alt="'Image of ' + item.description" :src="item.preview" class="product-image" />
    <span class="clickable" @click="$emit('itemClicked')">{{ item.title }}</span>

    <span class="clickable" @click="$emit('itemClicked')">{{ item.description }}</span>

    <span class="flex"
      ><span class="quantity-in-cart">{{ item.price }}</span
      ><i><IconCoffee /></i
    ></span>
    <div class="counter-compontent">
      <Counter
        :amount="quantityRef"
        @counterChanged="(count) => onAmountUpdatedInShoppingCart(item, count)"
      />
    </div>
  </div>
</template>

<style scoped>
.list-item {
  display: grid;
  grid-template-columns: 96px 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: start;
  align-items: center;
  gap: 0.33em;
  padding: 1.5em;
  border-bottom: 1px solid whitesmoke;
  width: 100%;
  height: 100%;
  .product-image {
    aspect-ratio: 1/1;
    width: 48px;
  }

  .flex {
    display: flex;
    justify-content: end;
    padding: 0.75em;
    font-weight: bold;
    flex-direction: row;
  }
  .description {
    font-style: italic;
  }

  .clickable {
    display: flex;
    flex-grow: 1;
    width: 100;
    text-align: left;
    border-bottom: transparent 1px solid;
    padding: 0.33em 0.15em;
    transition: border-color 0.21s ease-in-out;
  }
  .clickable:hover {
    border-bottom-color: white;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.21);
  }

  .counter-compontent {
    justify-self: end;
  }
  .quantity-in-cart {
    width: 3ch;
    font-weight: bold;
    text-align: left;
  }
}
</style>
