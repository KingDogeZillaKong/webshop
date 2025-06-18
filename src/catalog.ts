import type { ProductModel } from './product-model'
import logo from '@/assets/logo.svg'
import react from '@/assets/react.svg'
import angular from '@/assets/angular.svg'
import next from '@/assets/next.svg'
import python from "@/assets/python.svg"
const DEFAULT_IMAGE = logo

//getProduct(123, "Lada", 1500.97, angular)
export const ALL_PRODUCTS: ProductModel[] = [
  getProduct(234, 'Security Tooling', 2, react),
  getProduct(345, 'Blockchain Analysis', 2.5, DEFAULT_IMAGE),
  getProduct(678, 'Personal Web App', 2, angular),
  getProduct(789, 'Poker Tooling', 6, angular),
  getProduct(468, 'Developer Portal', 2, next),
  getProduct(890, 'Learning Management System', 5, next),
  getProduct(246, 'E-commerce', 3, DEFAULT_IMAGE),
  getProduct(249, 'Feedback Application', 2, react),
  getProduct(423, "Python Hackathons", 5, python)
]

function getProduct(barcode: number, title: string, price: number, preview: string): ProductModel {
  return { barcode, title, price, preview }
}
