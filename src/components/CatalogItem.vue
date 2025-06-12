<script setup lang="ts" >

import { ProductModel } from '../product-model';
import ProductInCart from "./ProductInCart.vue"

      const props =  defineProps<{item: ProductModel, amountInCart: number | undefined }>(); //({barcode: -1, title: "Undefined", price: 0.00, preview: "logo.svg"});

</script>
<template>
    <div  class="item">
         <div v-if="props.amountInCart" class="is-in-cart"><ProductInCart :cart-color="'#000000'" :amount="props.amountInCart"/></div>
            <img alt="Product image" class="product-image" :src="props.item.preview" width="125" height="125" />
        <div class="flex">
      <h3>{{props.item?.title }}</h3><h3 class="price">${{ props.item.price }}</h3>
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
    padding: 1em .33em;
    /* aspect-ratio: 17/22; */
    color: white;;
    border-radius: 6% 6% 0 0;
    background-color: rgba(0, 0, 0, .24);
    /* background-color: aquamarine; */

    .is-in-cart {
        position: absolute;
        top: .24em;
        right: .24em;
        border-radius: 100%;
        aspect-ratio: 1/1;
        padding: .15em;
    }

    &:hover {
        background-color: rgba(255, 255, 255, .15);
        border-bottom : 1px solid whitesmoke;

        cursor: pointer;;
    }

    .flex {
        display: flex;
        justify-content: space-around;
        flex-grow: 1;
        width: 100%;

        h3 {
letter-spacing: .1em;
        }
        
        .price {
            font-weight: bold;
   
        }
    }

    button {
        cursor: pointer;
        border-radius: 100vw;
        margin: 6px;
        padding: .66em .99em;
        background-color: rgba(0, 0, 0, .45);
        border: none;
        outline: 1px solid gold;
        transition: background-color ease-in-out .15s;
        color: whitesmoke;

        &:hover {
            background-color: rgba(33, 33, 33, .66);
        }
    }
}
</style>