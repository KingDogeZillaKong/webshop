import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useCartStore } from '@/stores/cart' // adjust path if needed
import { ALL_PRODUCTS, getProduct } from '@/catalog'

const product = getProduct(123, "Mock product 1", 3,  'path_to_image');
const product2 = getProduct(456, "Mock product 1", 1.5,  'path_to_image');

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds product to cart', () => {
    const store = useCartStore()
    // const product = mockProduct();
    store.onProductAddedToCart(product);
    expect(store.cart.map(item => item.barcode)).toContain(product.barcode)
    expect(store.cartTotal).toBeCloseTo(product.price)
    expect(store.cartItems.get(product.barcode)).toBe(1)
  })

  it('increases product quantity in cart', () => {
    const store = useCartStore()
    // const product = mockProduct()
    store.increaseNumberOfItemsInCart(product)
    store.increaseNumberOfItemsInCart(product)

    expect(store.cart.length).toBe(2)
    expect(store.cartItems.get(product.barcode)).toBe(2)
  })

  it('decreases product quantity in cart', () => {
    const store = useCartStore()
    // const product = mockProduct()
    store.onProductAddedToCart(product)
    store.increaseNumberOfItemsInCart(product)

    store.decreaseNumberOfItemsInCart(product)

    expect(store.cartItems.get(product.barcode)).toBe(1)
    expect(store.cartTotal).toBeCloseTo(product.price)
  })

  it('computes total items and total cost', () => {
    const store = useCartStore()
   
    store.onProductAddedToCart(product)
    store.onProductAddedToCart(product2)
    store.increaseNumberOfItemsInCart(product)

    expect(store.cartTotalItems).toBe(3)
    expect(store.cartTotal).toBeCloseTo(7.5)
    expect(store.cartItems.get(product.barcode)).toBe(2)

  })
})