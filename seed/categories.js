import { v4 as uuid } from "uuid";

const categories = [
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

export default categories;
