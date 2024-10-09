import { HomeContainer, ListContainer } from "./styles";

import { Banner } from "./components/Banner";
import { Product } from "./components/Product";

export function Home() {
  return (
    <HomeContainer>
      <Banner />

      <ListContainer>
        <h2>Nossos Cafés</h2>

        <div className="listProducts">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </ListContainer>
    </HomeContainer>
  );
}
