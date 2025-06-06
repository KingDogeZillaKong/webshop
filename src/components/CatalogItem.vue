<script setup lang="ts" >

import { ProductModel } from '../product-model';
import ProductInCart from "./ProductInCart.vue"

      const props =  defineProps<{item: ProductModel }>(); //({barcode: -1, title: "Undefined", price: 0.00, preview: "logo.svg"});


</script>
<template>
    <div  class="item">
         <div class="is-in-cart"><ProductInCart :amount="3"/></div>
            <img alt="Product image" class="product-image" :src="props.item.preview" width="125" height="125" />
        <div class="flex">
      <h3>{{props.item?.title }}</h3><h3 class="price">${{ props.item.price }}</h3>
        </div>
  
    </div>
</template>
<style scoped>
.item {
    position: relative;
    display: flex;
    place-items: center;
    flex-direction: column;
    /* aspect-ratio: 17/22; */
    color: white;;

    .is-in-cart {
        position: absolute;
        top: .24em;
        right: .24em;
        border-radius: 100%;
        aspect-ratio: 1/1;
        padding: .15em;
    }

    &:hover {
        background-color: blue;
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
}
</style>