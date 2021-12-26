import { v4 as uuid } from "uuid";

export const categories = [
  {
    id: uuid(),
    name: "Homme",
    path: "/homme",
  },
  {
    id: uuid(),
    name: "Femme",
    path: "/femme",
  },
  {
    id: uuid(),
    name: "Enfants",
    path: "/enfants",
  },
  {
    id: uuid(),
    name: "Arts",
    path: "/arts",
  },
];

export const products = [
  {
    id: uuid(),
    name: "T-shirt",
    price: 2000,
    photo:
      "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/corri30058124bd_m1_2-0_540x.jpg?v=1606141918",
  },
  {
    id: uuid(),
    name: "T-shirt Pro",
    price: 9000,
    photo:
      "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/p27-1_540x.jpg?v=1581868287",
  },
  {
    id: uuid(),
    name: "Men T-shirt",
    price: 6000,
    photo:
      "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/famer2052212158_q1_2-1_80ef388a-668b-4cac-b04a-080e7e371c4b_540x.jpg?v=1606195110",
  },
  {
    id: uuid(),
    name: "Men T-shirt Pro",
    price: 6000,
    photo:
      "https://lh3.googleusercontent.com/proxy/0bHWh45hB8hl6v9GyYSeK65bZaXIHgKiYbkjOaqvw_Hf-MhR5WwkOSd1AFKmuWJ8j-YsSapOFyL9Prk7S9zyWv_ODoXKAeqEd4tFoEZovJMrUBGe_AH8_jJ76y279GwV7WdBl3w",
    // photo:
    //   "https://cdn.shopify.com/s/files/1/0332/6420/5963/products/pr2-blue-2_180x.jpg?v=1606813566",
  },
];
