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
            store.increaseNumberOfItemsInCart(item);
            // quantityRef.value = quantityRef.value -1;
        }
        else if(diff < 0){
         store.decreaseNumberOfItemsInCart(item);
            // quantityRef.value = quantityRef.value +1;
    }
   
    }   
</script>
<template>
    <li class="list-item">
                 <img :alt="'Image of ' + item.description" :src="item.preview" class="product-image"/>
<span  class="clickable" @click="$emit('itemClicked')">{{item.title}}</span>
      
    

        <span class="clickable" @click="$emit('itemClicked')">{{item.description}}</span> 






        <span class="flex-row">{{item.price}}<i><IconCoffee/></i></span>
        <div class="counter-compontent">
        <Counter :amount="quantityRef" @counterChanged="(count) => onAmountUpdatedInShoppingCart(item, count)"/>
 </div>

          <!-- <div class="delete">Delete</div> -->
        <!-- navigate to product -->
             <!-- <div>Change the amount of products</div> -->
    </li>
</template>

    <style scoped>
    
    .list-item {
        display: grid;
        grid-template-columns: 96px 1fr 1fr 1fr 1fr ;;
        grid-template-rows: 1fr;
        place-items: start;
        align-items: center;
        gap:.33em;
        border-bottom: 1px solid whitesmoke;
        padding: .33em 1em;
        margin-bottom: .33em;
        /* border: 1px solid black; */
        /* background-color: orange; */
        width:100%;
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
            
        }
        .clickable:hover {
            border-bottom: white 1px solid;
            cursor: pointer;
        }

        .counter-compontent {
            justify-self: end;
        }
    }

</style>

