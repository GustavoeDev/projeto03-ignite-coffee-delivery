import { HomeContainer, ListContainer } from "./styles";

import { Banner } from "./components/Banner";
import { Product } from "./components/Product";

import { Coffee } from "../../Products/coffee";
import { useContext } from "react";
import { CartCoffeeContext } from "../../contexts/CartCoffeeContext";

export function Home() {
  const { handleAddItem } = useContext(CartCoffeeContext);

  return (
    <HomeContainer>
      <Banner />

      <ListContainer>
        <h2>Nossos Cafés</h2>

        <div className="listProducts">
          {Coffee.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                tags={item.tags}
                description={item.description}
                price={item.price}
                quantityItemCart={item.quantityItemCart}
                handleAddItem={handleAddItem}
              />
            );
          })}
        </div>
      </ListContainer>
    </HomeContainer>
  );
}
