import { v4 as uuid } from "uuid";

export const categories = [
  {
    id: uuid(),
    name: "Homme",
    path: "/homme",
    photo:
      "https://images-eu.ssl-images-amazon.com/images/I/41dlOcmHEbL._QL70_ML2_.jpg",
  },
  {
    id: uuid(),
    name: "Femme",
    path: "/femme",
    photo:
      "https://www.cdiscount.com/pdt2/1/4/8/1/700x700/mp32229148/rw/vetements-africains-robe-d-ete-femmes-robes-mi-lon.jpg",
  },
  {
    id: uuid(),
    name: "Enfants",
    path: "/enfants",
    photo:
      "https://www.afrizap.com/en/wp-content/uploads/sites/2/2016/03/download-1.jpeg",
  },
  {
    id: uuid(),
    name: "Arts",
    path: "/arts",
    photo:
      "https://www.africapresse.paris/local/cache-vignettes/L540xH270/arton1745-70fe4.jpg?1556808249",
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
    photo: "https://www.la-botte.com/PHOTOS/Ecco/SOFT_7_BLANC_HD.jpg",
  },
];
