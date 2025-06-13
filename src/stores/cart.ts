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
        
        const cartTotalItems = computed(() => {
            return cart.value.reduce((acc,product) => acc + 1, 0)
        })
         const cartItems: ComputedRef<Map<number, number>> = computed(() =>  {return  countProductInCart(cart.value)})
        const cartMap: ComputedRef<Map<ProductModel, number>> = computed(() => {return transformToMap(cart.value)})

        //actions
        function onProductAddedToCart (product: ProductModel) {
            cart.value = [...cart.value, product]
            console.warn(cart.value)
            console.warn(cartItems)
        }

        function increaseNumberOfItemsInCart(item: ProductModel){
        
            cart.value = [...cart.value, item];
        }

        function decreaseNumberOfItemsInCart(item: ProductModel){
            const indexToRemove = cart.value.indexOf(item);
            cart.value = cart.value.filter((el: ProductModel, index: number) => index !== indexToRemove);
           
}

  return { cart, cartMap, cartTotal,cartItems,cartTotalItems, onProductAddedToCart ,decreaseNumberOfItemsInCart,increaseNumberOfItemsInCart}
})



function transformToMap(products: ProductModel[]): Map<ProductModel, number> {
    const uniqueProducts = new Set<ProductModel>();
    products.forEach(p => uniqueProducts.add(p));
    const result = new Map();
    for(const product of uniqueProducts){
        result.set(product, countNeedleInHayStack(product, products))
    }
    return result;
}
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

