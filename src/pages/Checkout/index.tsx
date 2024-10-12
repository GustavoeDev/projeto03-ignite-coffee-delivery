import { useNavigate } from "react-router-dom";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  Address,
  CheckoutContainer,
  ConfirmRequest,
  InputMinimum,
  InputNormal,
  InputReduced,
  Payment,
  TotalValue,
} from "./styles";

import { CartItem } from "./components/CartItem";

import { useContext, useState } from "react";
import { CartCoffeeContext } from "../../contexts/CartCoffeeContext";

export function Checkout() {
  const {
    cartCoffee,
    address,
    payment,
    setPayment,
    handleChangeAddress,
    setAddress,
    setCartCoffee,
  } = useContext(CartCoffeeContext);

  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (
      address.cep === "" ||
      address.road === "" ||
      address.complement === "" ||
      address.number === "" ||
      address.district === "" ||
      address.city === "" ||
      address.uf === "" ||
      payment === "" ||
      cartCoffee.length === 0
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
      navigate("/success");
      setPayment("");
      setAddress({
        cep: "",
        road: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        uf: "",
      });
      setCartCoffee([]);
    }
  }

  const totalValue = cartCoffee.reduce((acc, item) => {
    return acc + item.price * item.quantityItemCart;
  }, 0);

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <CheckoutContainer>
        <div className="completeRequest">
          <h4>Complete seu pedido</h4>
          <Address>
            <div className="addressTitle">
              <MapPinLine size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="addressInputs">
              <InputReduced
                placeholder="CEP"
                required
                name="cep"
                value={address.cep}
                onChange={handleChangeAddress}
              />
              <InputNormal
                placeholder="Rua"
                required
                name="road"
                value={address.road}
                onChange={handleChangeAddress}
              />
              <div className="addresInputsFirst">
                <InputReduced
                  placeholder="Número"
                  required
                  name="number"
                  value={address.number}
                  onChange={handleChangeAddress}
                />
                <InputNormal
                  placeholder="Complemento"
                  required
                  name="complement"
                  value={address.complement}
                  onChange={handleChangeAddress}
                />
              </div>
              <div className="addresInputsSecond">
                <InputReduced
                  placeholder="Bairro"
                  required
                  name="district"
                  value={address.district}
                  onChange={handleChangeAddress}
                />
                <InputNormal
                  placeholder="Cidade"
                  required
                  name="city"
                  value={address.city}
                  onChange={handleChangeAddress}
                />
                <InputMinimum
                  placeholder="UF"
                  required
                  name="uf"
                  value={address.uf}
                  onChange={handleChangeAddress}
                />
              </div>
            </div>
          </Address>

          <Payment>
            <div className="paymentTitle">
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div className="paymentButtons">
              <button
                type="button"
                onClick={() => setPayment("Cartão de Crédito")}
                style={{
                  border:
                    payment === "Cartão de Crédito"
                      ? "1px solid #8047F8"
                      : "1px solid transparent",
                }}
              >
                <CreditCard size={16} />
                <p>CARTÃO DE CRÉDITO</p>
              </button>
              <button
                type="button"
                onClick={() => setPayment("Cartão de Débito")}
                style={{
                  border:
                    payment === "Cartão de Débito"
                      ? "1px solid #8047F8"
                      : "1px solid transparent",
                }}
              >
                <Bank size={16} />
                <p>CARTÃO DE DÉBITO</p>
              </button>
              <button
                type="button"
                onClick={() => setPayment("Dinheiro")}
                style={{
                  border:
                    payment === "Dinheiro"
                      ? "1px solid #8047F8"
                      : "1px solid transparent",
                }}
              >
                <Money size={16} />
                <p>DINHEIRO</p>
              </button>
            </div>
          </Payment>
        </div>

        <div className="totalRequest">
          <h4>Cafés selecionados</h4>
          <ConfirmRequest>
            {cartCoffee.length > 0 ? (
              cartCoffee.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantityItemCart={item.quantityItemCart}
                  />
                );
              })
            ) : (
              <span className="placeholderCart">O carrinho está vazio...</span>
            )}

            <TotalValue>
              <div>
                <p>Total de itens</p>
                <span>R$ {Number(totalValue).toFixed(2)}</span>
              </div>
              <div>
                <p>Entrega</p>
                {cartCoffee.length > 0 ? (
                  <span>R$ 3.50</span>
                ) : (
                  <span>R$ 0.00</span>
                )}
              </div>
              <div>
                <span>
                  <strong>Total</strong>
                </span>
                {cartCoffee.length > 0 ? (
                  <span>
                    <strong>R$ {(Number(totalValue) + 3.5).toFixed(2)}</strong>
                  </span>
                ) : (
                  <span>
                    <strong>R$ 0.00</strong>
                  </span>
                )}
              </div>
            </TotalValue>

            <button type="submit">CONFIRMAR PEDIDO</button>
          </ConfirmRequest>
        </div>
      </CheckoutContainer>
    </form>
  );
}
