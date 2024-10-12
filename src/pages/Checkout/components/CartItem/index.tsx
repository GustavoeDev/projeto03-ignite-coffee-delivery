import { Trash } from "phosphor-react";
import { CartInputs, CartItemContainer } from "./styles";
import { useContext, useState } from "react";
import { CartCoffeeContext } from "../../../../contexts/CartCoffeeContext";

interface CartItemProps {
  id: number;
  name: string;
  img: string;
  price: number;
  quantityItemCart: number;
}

export function CartItem(props: CartItemProps) {
  const { handleChangeQuantity, setCartCoffee, cartCoffee } =
    useContext(CartCoffeeContext);

  const [quantityCartRequest, setQuantityCartRequest] = useState(
    props.quantityItemCart
  );

  function handleChangeQuantityInput(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const quantity = Number(event.target.value);
    const newQuantity = quantity > 0 ? quantity : 1;
    setQuantityCartRequest(newQuantity);
    handleChangeQuantity(props.id, newQuantity);
  }

  function handleRemoveItem() {
    setQuantityCartRequest(0);

    const newCartCoffee = cartCoffee.filter((item) => item.id !== props.id);
    setCartCoffee(newCartCoffee);
  }

  return (
    <CartItemContainer>
      <img src={props.img} />
      <div>
        <span>{props.name}</span>
        <CartInputs>
          <input
            type="number"
            placeholder="1"
            value={quantityCartRequest}
            onChange={handleChangeQuantityInput}
          />
          <button onClick={handleRemoveItem}>
            <Trash size={16} />
            <p>Remover</p>
          </button>
        </CartInputs>
      </div>
      <p>
        <strong>R$ {props.price.toFixed(2)}</strong>
      </p>
    </CartItemContainer>
  );
}
