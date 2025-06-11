import type { ProductModel } from "./product-model";
import logo from "@/assets/logo.svg";
import react from "@/assets/react.svg";
import angular from "@/assets/angular.svg";

const DEFAULT_IMAGE = logo;
//getProduct(123, "Lada", 1500.97, angular)
export const ALL_PRODUCTS : ProductModel[] = [getProduct(234, "Mercedes Benz", 36999.99, react),getProduct(345, "Honda Civic", 19999.00 , DEFAULT_IMAGE)];


function getProduct(barcode: number, title: string, price: number, preview: string): ProductModel{
    return {barcode, title, price, preview};
}