import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  console.log(response);
  return response;
};

export default fetchProducts;
