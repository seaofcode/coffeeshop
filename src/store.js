import { getStorageItem, setStorageItem } from './utils.js';
let store = [];
const setupStore = (products) => {
    store = products.map((product) => {
        console.log(product);
        return product;
    });
};
const findProduct = () => {};
export { store, setupStore, findProduct };
