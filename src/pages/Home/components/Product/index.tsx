import { useContext, useState } from "react";
import { CoffeeBuy, CoffeeTextContent, ProductContainer } from "./styles";

import { ShoppingCartSimple } from "phosphor-react";
import {
  CartCoffeeContext,
  HomeProps,
} from "../../../../contexts/CartCoffeeContext";

export interface ProductProps {
  id: number;
  name: string;
  img: string;
  tags: string[];
  description: string;
  price: number;
  quantityItemCart: number;
  handleAddItem: (product: HomeProps, quantity: number) => void;
}

export function Product(props: ProductProps) {
  const { handleAddItem } = useContext(CartCoffeeContext);

  const [quantityInput, setQuantityInput] = useState(1);

  function handleChangeQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    const quantity = Number(event.target.value);
    setQuantityInput(quantity > 0 ? quantity : 1);
  }

  function handleButtonAddItem() {
    handleAddItem(props, quantityInput);
    setQuantityInput(1);
  }

  return (
    <ProductContainer>
      <img src={props.img} alt={props.name} />
      <CoffeeTextContent>
        <div>
          {props.tags.map((item, index) => (
            <span key={`${props.name}-${index}`}>{item}</span>
          ))}
        </div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </CoffeeTextContent>
      <CoffeeBuy>
        <p>
          R$<span>{props.price.toFixed(2)}</span>
        </p>
        <div>
          <input
            type="number"
            placeholder="1"
            value={quantityInput}
            onChange={handleChangeQuantity}
          />

          <button onClick={handleButtonAddItem}>
            <ShoppingCartSimple size={22} />
          </button>
        </div>
      </CoffeeBuy>
    </ProductContainer>
  );
}
