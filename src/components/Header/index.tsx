import { ShoppingCartSimple } from "phosphor-react";

import logoCoffee from "../../assets/logoCoffee.svg";

import { HeaderContainer } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Início">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <NavLink to="/checkout" title="Carrinho">
        <button>
          <ShoppingCartSimple size={22} />
        </button>
      </NavLink>
    </HeaderContainer>
  );
}
