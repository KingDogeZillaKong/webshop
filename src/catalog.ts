import type { ProductModel } from "./product-model";
import logo from "@/assets/logo.svg";
import react from "@/assets/react.svg";
import angular from "@/assets/angular.svg";
import next from "@/assets/next.svg"
const DEFAULT_IMAGE = logo;

//getProduct(123, "Lada", 1500.97, angular)
export const ALL_PRODUCTS : ProductModel[] = [getProduct(234, "Security Tooling", 36999.99, react),getProduct(345, "Blockchain Analysis", 19999.00 , DEFAULT_IMAGE), getProduct(678, "Personal Web App", 19999.00 , angular),getProduct(789, "Poker Tooling", 49999.00 , angular),getProduct(468, "Developer Portal", 49999.00 , next), getProduct(890, "Learning Management System", 49999.00 , next), getProduct(246, "E-commerce", 49999.00 , DEFAULT_IMAGE)];


function getProduct(barcode: number, title: string, price: number, preview: string): ProductModel{
    return {barcode, title, price, preview};
}