export class ProductModel {
  barcode: number
  title: string
  price: number
  preview: string
  description?: string

  constructor(barcode: number, title: string, price: number, preview: string) {
    this.barcode = barcode
    this.title = title
    this.price = price
    this.preview = preview
    this.description = 'Lorem ipsum description'
  }
}
