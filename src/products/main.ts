import { addProduct, calcStock, products } from "./product.services";


addProduct({
  title: 'New product',
  createdAt: new Date(),
  stock: 2000,
  sizes: 'XL'
});
addProduct({
  title: 'New product 3',
  createdAt: new Date(),
  stock: 400,
  sizes: 'M'
});
console.log(products);

const total = calcStock();
console.log('total', total);

