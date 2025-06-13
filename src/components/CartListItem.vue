<script setup lang="ts">
import type { ProductModel } from '@/product-model';
import Counter from './Counter.vue';
import { useCartStore } from '@/stores/cart';
import { onUpdated, ref } from 'vue';
import IconCoffee from "../components/icons/IconCoffee.vue"
  
 const props =  defineProps<{item:ProductModel, quantity: number}>(); 
  const {item, quantity} = props;
   const quantityRef =  ref(quantity);

   onUpdated(() => {
    // console.warn("Updated")
    quantityRef.value = props.quantity;
   })

  const store = useCartStore();
    const onAmountUpdatedInShoppingCart = (item: ProductModel, diff: number) => {
        if(diff > 0){
            store.onProductAddedToCart(item);
            // quantityRef.value = quantityRef.value -1;
        }
        else if(diff < 0){
         store.decreaseNumberOfItemsInCart(item);
            // quantityRef.value = quantityRef.value +1;
    }
   
    }   
</script>
<template>
    <div class="list-item">
                 <img :alt="'Image of ' + item.description" :src="item.preview" class="product-image"/>
<span  class="clickable" @click="$emit('itemClicked')">{{item.title}}</span>
      
    

        <span class="clickable" @click="$emit('itemClicked')">{{item.description}}</span> 






        <span class="flex-row"><span class="quantity-in-cart">{{item.price}}</span><i><IconCoffee/></i></span>
        <div class="counter-compontent">
        <Counter :amount="quantityRef" @counterChanged="(count) => onAmountUpdatedInShoppingCart(item, count)"/>
 </div>

          <!-- <div class="delete">Delete</div> -->
        <!-- navigate to product -->
             <!-- <div>Change the amount of products</div> -->
</div>
</template>

    <style scoped>
    
    .list-item {
        display: grid;
        grid-template-columns: 96px 1fr 1fr 1fr 1fr ;;
        grid-template-rows: 1fr;
        place-items: start;
        align-items: center;
        gap:.33em;
        padding: 1.5em;
        border-bottom: 1px solid whitesmoke;
         /* padding: .33em 1.2em; */
        /* margin-bottom: .33em; */ 
        /* border: 1px solid black; */
        /* background-color: orange; */
        width:100%;
        height: 100%;
        /* min-height: 1.2em; */
        /* background-color: aquamarine; */
        .product-image {
            aspect-ratio: 1/1;
            width: 48px;
            /* grid-row: 1/-1; */
            /* grid-column: 1;; */
        }

   
        .description {

            /* grid-row: 2; */
            /* grid-column: 2/-2; */
            font-style: italic;
        }

        .delete {
            /* grid-column: -1; */
            /* grid-row: 1/-1; */
        }

        /* .price {
            grid-row: 2;
            grid-column: -1;
        } */
        .clickable {
            display: flex;
            flex-grow: 1;
            width: 100;
            text-align: left;
            border-bottom: transparent 1px solid;
            padding: .33em .15em;
            transition: border-color .21s ease-in-out;
            
        }
        .clickable:hover {
            border-bottom-color: white;
            cursor: pointer;
            background-color: rgba(255, 255, 255, .21);
        }

        .counter-compontent {
            justify-self: end;
        }
        .quantity-in-cart {
            width: 3ch;
            font-weight: bold;
            text-align: right;
        }
    }

</style>

