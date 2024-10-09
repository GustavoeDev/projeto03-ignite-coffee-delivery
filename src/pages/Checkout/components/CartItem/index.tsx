import { Trash } from "phosphor-react";
import { CartInputs, CartItemContainer } from "./styles";

import imgCoffee from "../../../../assets/coffee.png";

export function CartItem() {
  return (
    <CartItemContainer>
      <img src={imgCoffee} />
      <div>
        <span>Expresso Tradicional</span>
        <CartInputs>
          <input type="number" placeholder="1" />
          <button>
            <Trash size={16} />
            <p>Remover</p>
          </button>
        </CartInputs>
      </div>
      <p>
        <strong>R$9,90</strong>
      </p>
    </CartItemContainer>
  );
}
