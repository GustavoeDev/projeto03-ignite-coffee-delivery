import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";

import imgBanner from "../../../../assets/imgBanner.png";

import { BannerContainer, BannerDescriptions, BannerText } from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <BannerText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <BannerDescriptions>
          <div>
            <span>
              <ShoppingCartSimple size={16} />
            </span>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <span>
              <Package size={16} />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <span>
              <Timer size={16} />
            </span>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <span>
              <Coffee size={16} />
            </span>
            <p>O café chega fresquinho até você</p>
          </div>
        </BannerDescriptions>
      </BannerText>
      <img src={imgBanner} alt="" />
    </BannerContainer>
  );
}
