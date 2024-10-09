import { CoffeeBuy, CoffeeTextContent, ProductContainer } from "./styles";

import imgCoffee from "../../../../assets/coffee.png";
import { ShoppingCartSimple } from "phosphor-react";

export function Product() {
  return (
    <ProductContainer>
      <img src={imgCoffee} />
      <CoffeeTextContent>
        <span>TRADICIONAL</span>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeTextContent>
      <CoffeeBuy>
        <p>
          R$<span>9,90</span>
        </p>
        <div>
          <input type="number" placeholder="1" />

          <button>
            <ShoppingCartSimple size={22} />
          </button>
        </div>
      </CoffeeBuy>
    </ProductContainer>
  );
}
