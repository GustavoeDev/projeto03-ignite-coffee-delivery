import { MapPinLine, Money, Timer } from "phosphor-react";

import ilustration from "../../assets/Illustration.png";
import { SuccessContainer, SuccessContent, SuccessText } from "./styles";

export function Success() {
  const storedAddress = localStorage.getItem(
    "@ignite-coffee-delivery:address-1.0.0"
  );
  const storedPayment = localStorage.getItem(
    "@ignite-coffee-delivery:payment-1.0.0"
  );

  const addressState = storedAddress ? JSON.parse(storedAddress) : null;
  const paymentState = storedPayment ? JSON.parse(storedPayment) : "";

  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <SuccessContent>
        <SuccessText>
          <div>
            <span>
              <MapPinLine />
            </span>
            <div>
              <p>
                Entrega em{" "}
                <strong>
                  {addressState.road}, {addressState.number}
                </strong>
              </p>
              <p>
                {addressState.district} - {addressState.city}, {addressState.uf}
              </p>
            </div>
          </div>

          <div>
            <span>
              <Timer />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>

          <div>
            <span>
              <Money />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentState}</strong>
              </p>
            </div>
          </div>
        </SuccessText>

        <img src={ilustration} alt="" />
      </SuccessContent>
    </SuccessContainer>
  );
}
