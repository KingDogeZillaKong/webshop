import { ref, computed, type ComputedRef, watch, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { ProductModel } from '@/product-model'

export const useCartStore = defineStore('cart', () => {
   // state: () => ({ cart: []}),
   const cart = ref([] as ProductModel[])

   //getters: { cartTotal: (state) = {state.cart.reduce((a,b) => a.price + b.price, 0)}
        const cartTotal = computed(() => {
            return cart.value.reduce((acc,product) => acc + product.price, 0.00)
        })
        

         const cartItems: ComputedRef<Map<number, number>> = computed(() =>  {return  countProductInCart(cart.value)})
        

        //actions
        function onProductAddedToCart (product: ProductModel) {
            cart.value = [...cart.value, product]
            console.warn(cart.value)
            console.warn(cartItems)
        }

  // ✅ Watch Effect (this will actually work)
  watchEffect(() => {
    console.log('Cart items updated:', cartItems.value)
  })


  return { cart, cartTotal,cartItems, onProductAddedToCart }
})


function countNeedleInHayStack(needle: ProductModel, haystack: ProductModel[]){
    return haystack.filter(hay => hay.barcode === needle.barcode).length;
}
function countProductInCart(cart: ProductModel[]): Map<number, number>{
    const result:  Map<number, number> = new Map();
  
    
for(const product of cart){
    result.set(product.barcode, countNeedleInHayStack(product, cart));
}

    return result;
}

