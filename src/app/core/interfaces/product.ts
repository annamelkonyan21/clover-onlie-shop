export interface IProduct {
  id: number,
  discount: number,
  price: number,
  images: string[],
  sizes: number[],
  productTitle: string,
  categoryId: number,
  colorId?: number,
  materialId?: number
}

