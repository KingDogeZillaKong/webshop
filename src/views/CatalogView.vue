<script setup lang="ts">
import { ALL_PRODUCTS } from '@/catalog'
import CatalogItem from '@/components/CatalogItem.vue'
import type { ProductModel } from '@/product-model'
import { useCartStore } from '@/stores/cart'
import IconCoffee from '@/components/icons/IconCoffee.vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import info from '@/assets/info.svg'
import { ref } from 'vue'
const products = ALL_PRODUCTS
const cartStore = useCartStore()
const catalogSection = ref<HTMLElement | null>(null)
const showTooltip = ref<boolean>(false)
const onProductAddedToCart = (product: ProductModel) => {
  cartStore.onProductAddedToCart(product)
}

const scrollToCatalogSection = () => {
  catalogSection.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}
</script>

<template>
  <div class="catalog-wrapper">
    <div class="info-about-coffee">
      <div class="tooltip" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
        <div
          :src="info"
          class="coffee-info-icon"
          :style="{ backgroundColor: 'whitesmoke', borderRadius: '100%' }"
        >
          <IconInfo fill="var(--secondary-highlight)" />
        </div>
        <i><IconCoffee /></i>
      </div>

      <span
        @mouseover="showTooltip = true"
        @mouseleave="showTooltip = false"
        :style="{ opacity: showTooltip ? '1' : '0' }"
        id="cappuccino-help"
        >Consider each cappuccino a marker of the time needed to share the full story — vision,
        challenges, and choices included.</span
      >
    </div>

    <h1 class="expectional-heading">Development Adventures</h1>
    <h2 class="underline" @click="scrollToCatalogSection">Explore my development adventures</h2>

    <!-- <h2 class="funnyness">
    In my opinion, years of experience is an inaccurate measure of somebody's experience. I learn
    much more diving into something new, which is frigthening and challenging, than when I
    comfortably write simple and easy code I've written hundreds of times before.
  </h2>

  <h2 class="funnyness">
    Therefore, I rather use the amount of cappucinos that I would've to drink during a conversation
    to cover the vision, thoughts, challenges, and decisions that went into the projectit.
  </h2> -->

    <main ref="catalogSection" class="wrapper">
      <div v-for="product in products" :key="product?.barcode" class="product-container">
        <CatalogItem
          :item="product"
          :amountInCart="cartStore.cartItems.get(product.barcode)"
          @addProductToCart="onProductAddedToCart(product)"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
@media (orientation: portrait) {
  .expectional-heading {
    width: 75%;
    margin: auto;
    padding: 0 1em;
  }
  .info-about-coffee {
    position: relative;
    display: flex;
    top: 0;
    right: 0;
    /* z-index: 99; */
    /* background: orange; */
    .coffee-info-icon {
      &:hover {
        #cappuccino-help {
          opacity: 1;
        }
      }
    }

    #cappuccino-help {
      position: absolute;
      /* top: 50%; */
      right: 0;
      z-index: 999;
      padding: 2px 4px;
      border-radius: 12px;
      backdrop-filter: blur(9px);
      width: 240px;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
    }
    .tooltip {
      z-index: 1;
      display: block;

      border-radius: 100%;
      /* padding: .75em; */
      position: absolute;
      display: inline-block;
      border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
      /* float: right; */
      top: 1em;
      right: 1em;
      i {
        width: 5em;
        height: 5em;
      }
    }
  }
}
@media (orientation: landscape) {
  .info-about-coffee {
    position: absolute;
    top: 0;
    right: 0;

    z-index: 99;

    .coffee-info-icon {
      &:hover {
        #cappuccino-help {
          opacity: 1;
        }
      }
    }

    #cappuccino-help {
      position: absolute;
      top: 50%;
      right: 0;
      z-index: 999;
      padding: 2px 4px;
      border-radius: 12px;

      backdrop-filter: blur(9px);
      width: 240px;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
    }
    .tooltip {
      z-index: 1;
      display: block;

      border-radius: 100%;
      /* padding: .75em; */
      position: absolute;
      display: inline-block;
      border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
      /* float: right; */
      top: 1em;
      right: 1em;
      i {
        width: 5em;
        height: 5em;
      }
    }
  }
}

/*



}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 20px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;

  position: absolute;
  bottom: 3px;
  transform: translate(-100%, 75%);
  z-index: 999;
  display: none;
  opacity: 0;
  transition: opacity 0.33s ease-out;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
.coffee-info-icon {
  position: absolute;
  top: -3px;
  right: -2px;
  width: 2.1em;
  height: 2.1em;
}
.catalog-wrapper {
  position: relative;
  /* background: blue; */
}
.coffee-tooltip {
  position: absolute;
  top: 1em;
  right: 1em;

  /* top: 1em; */
  /* right: 100px; */
}

#cappuccino-help {
  box-shadow: 2px 3px 12px 12px var(--tooltip-text-box-shadow-color);
  background: var(--tooltip-text-background);
  color: var(--tooltip-text-color);
}

.coffee-explaination {
  /* width: 100px;
 height: 100px;
  max-width: 100px;
  max-height: 100px; */
  aspect-ratio: 1/1;
  /* width: 10px; */
  width: 3rem;
  height: 3rem;
}

.funnyness {
  width: 75%;
  text-wrap: wrap;
  margin: auto;
}
* .underline {
  cursor: pointer;
  text-decoration: underline 1px solid white;
  text-underline-offset: 0.33em;
  margin-bottom: 1em;
  transition: color 0.33s ease-out;

  &:hover {
    color: silver;
  }
}
h1,
h2 {
  text-align: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.15em;
}
/* Medium devices (tablets, 768px and up) */
@media (max-width: 1024px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Small devices (phones, less than 768px) */
@media (max-width: 767px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}

/* Optional: Portrait orientation */
@media (orientation: portrait) and (max-width: 1024px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}

/* Optional: Landscape orientation */
@media (orientation: landscape) and (max-width: 1024px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

.product-container {
  position: relative;
}
</style>
