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
import { NavLink } from "react-router-dom";

export function Checkout() {
  return (
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
            <InputReduced placeholder="CEP" />
            <InputNormal placeholder="Rua" />
            <div className="addresInputsFirst">
              <InputReduced placeholder="Número" />
              <InputNormal placeholder="Complemento" />
            </div>
            <div className="addresInputsSecond">
              <InputReduced placeholder="Bairro" />
              <InputNormal placeholder="Cidade" />
              <InputMinimum placeholder="UF" />
            </div>
          </div>
        </Address>

        <Payment>
          <div className="paymentTitle">
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="paymentButtons">
            <button>
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </button>
            <button>
              <Bank size={16} />
              <p>CARTÃO DE DÉBITO</p>
            </button>
            <button>
              <Money size={16} />
              <p>DINHEIRO</p>
            </button>
          </div>
        </Payment>
      </div>

      <div className="totalRequest">
        <h4>Cafés selecionados</h4>
        <ConfirmRequest>
          <CartItem />
          <CartItem />

          <TotalValue>
            <div>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </div>
            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>R$ 33,20</strong>
              </span>
            </div>
          </TotalValue>

          <NavLink to="/success" title="Success">
            <button type="submit">CONFIRMAR PEDIDO</button>
          </NavLink>
        </ConfirmRequest>
      </div>
    </CheckoutContainer>
  );
}
