<script  lang="ts">
import type { ProductModel } from '@/product-model';

  
 const props =  defineProps<{item:ProductModel, quantity: number}>(); 
  const {item} = props;

</script>
<template>
    <li class="list-item">
                 <img :alt="'Image of ' + item.description" :src="item.preview" class="product-image"/>
<div class="title" @click="$emit('itemClicked')">{{item.title}}</div>
      
    

        <div @click="$emit('itemClicked')">{{item.description}}</div> 






        <div>$ {{item.price}}</div>
          <div class="delete">Delete</div>
        <!-- navigate to product -->
             <!-- <div>Change the amount of products</div> -->
    </li>
</template>

    <style scoped>
    
    .list-item {
        display: grid;
        grid-template-columns: 1fr auto 1fr auto auto auto;;
        grid-template-rows: 1fr auto;
        place-items: center;
        padding: 2px 6px;
        border: 1px solid black;
        background-color: orange;
        width:100%;
        /* background-color: aquamarine; */
        .product-image {
            aspect-ratio: 1/1;
            width: 48px;
            grid-row: 1/-1;
            grid-column: 1;;
        }

        .title {
            grid-row: 1;
            grid-column: 2/-2;
            font-style: bold;
        }
        .description {

            grid-row: 2;
            grid-column: 2/-2;
            font-style: italic;
        }

        .delete {
            grid-column: -1;
            grid-row: 1/-1;
        }

        /* .price {
            grid-row: 2;
            grid-column: -1;
        } */

    }

</style>

