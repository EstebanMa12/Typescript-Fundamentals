import { Product } from "./product.model";

export const products: Product[] = [];


export const addProduct= (data:Product) => {
  products.push(data);
}

export const calcStock = (): number =>{
  let total = products.reduce((sum, item) => sum + item.stock, 0);
  return total;
}
