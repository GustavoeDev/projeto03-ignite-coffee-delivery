import coffeeTradicional from "./assets/coffeeTradicional.png";
import coffeeGelado from "./assets/coffeeGelado.png";
import coffeeCapuccino from "./assets/coffeeCapuccino.png";
import coffeeChocolateQuente from "./assets/coffeeChocolateQuente.png";
import coffeeHavaiano from "./assets/coffeeHavaiano.png";
import coffeeLatte from "./assets/coffeeLatte.png";
import coffeeMocaccino from "./assets/coffeeMocaccino.png";
import coffeeAmericano from "./assets/coffeeAmericano.png";
import coffeeCremoso from "./assets/coffeeCremoso.png";
import coffeeLeite from "./assets/coffeeLeite.png";
import coffeeMacchiato from "./assets/coffeeMacchiato.png";
import coffeeCubano from "./assets/coffeeCubano.png";
import coffeeArabe from "./assets/coffeeArabe.png";
import coffeeIrlandes from "./assets/coffeeIrlandes.png";

export const Coffee = [
  {
    id: 1,
    name: "Expresso Tradicional",
    img: coffeeTradicional,
    tags: ["TRADICIONAL"],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    quantityItemCart: 1,
  },
  {
    id: 2,
    name: "Expresso Americano",
    img: coffeeAmericano,
    tags: ["TRADICIONAL"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 8.9,
    quantityItemCart: 1,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    img: coffeeCremoso,
    tags: ["TRADICIONAL"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.5,
    quantityItemCart: 1,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    img: coffeeGelado,
    tags: ["TRADICIONAL", "GELADO"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 11.9,
    quantityItemCart: 1,
  },
  {
    id: 5,
    name: "Café com Leite",
    img: coffeeLeite,
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 11.9,
    quantityItemCart: 1,
  },
  {
    id: 6,
    name: "Latte",
    img: coffeeLatte,
    tags: ["TRADICIONAL", "COM LEITE"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 10.0,
    quantityItemCart: 1,
  },
  {
    id: 7,
    name: "Capuccino",
    img: coffeeCapuccino,
    tags: ["TRADICIONAL", "COM LEITE"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 15.9,
    quantityItemCart: 1,
  },
  {
    id: 8,
    name: "Macchiato",
    img: coffeeMacchiato,
    tags: ["TRADICIONAL", "COM LEITE"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 16.9,
    quantityItemCart: 1,
  },
  {
    id: 9,
    name: "Mocaccino",
    img: coffeeMocaccino,
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 14.9,
    quantityItemCart: 1,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    img: coffeeChocolateQuente,
    tags: ["ESPECIAL", "COM LEITE"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 13.9,
    quantityItemCart: 1,
  },
  {
    id: 11,
    name: "Cubano",
    img: coffeeCubano,
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 18.9,
    quantityItemCart: 1,
  },
  {
    id: 12,
    name: "Havaiano",
    img: coffeeHavaiano,
    tags: ["ESPECIAL"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 18.9,
    quantityItemCart: 1,
  },
  {
    id: 13,
    name: "Árabe",
    img: coffeeArabe,
    tags: ["ESPECIAL"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 14.5,
    quantityItemCart: 1,
  },
  {
    id: 14,
    name: "Irlandês",
    img: coffeeIrlandes,
    tags: ["ESPECIAL", "ALCOÓLICO"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 19.9,
    quantityItemCart: 1,
  },
];
