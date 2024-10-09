import { MapPinLine, Money, Timer } from "phosphor-react";

import ilustration from "../../assets/Illustration.png";
import { SuccessContainer, SuccessContent, SuccessText } from "./styles";

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div>
            <span>
              <Timer />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>Farrapos - Porto Alegre, RS</strong>
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
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </div>
        </SuccessText>

        <img src={ilustration} alt="" />
      </SuccessContent>
    </SuccessContainer>
  );
}
