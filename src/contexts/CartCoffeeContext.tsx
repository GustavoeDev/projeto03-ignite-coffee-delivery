import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export interface HomeProps {
  id: number;
  name: string;
  img: string;
  tags: string[];
  description: string;
  price: number;
  quantityItemCart: number;
}

interface Address {
  cep: string;
  road: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

interface CartCoffeeContextType {
  cartCoffee: HomeProps[];
  handleAddItem: (product: HomeProps, quantity: number) => void;
  handleChangeQuantity: (id: number, quantity: number) => void;
  setCartCoffee: React.Dispatch<React.SetStateAction<HomeProps[]>>;
  address: Address;
  payment: string;
  handleChangeAddress: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setPayment: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<Address>>;
}

export const CartCoffeeContext = createContext({} as CartCoffeeContextType);

interface CartCoffeeContextProviderProps {
  children: ReactNode;
}

export function CartCoffeeContextProvider({
  children,
}: CartCoffeeContextProviderProps) {
  const [cartCoffee, setCartCoffee] = useState<HomeProps[]>([]);
  const [payment, setPayment] = useState("");
  const [address, setAddress] = useState({
    cep: "",
    road: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
  });

  useEffect(() => {
    const addressJSON = JSON.stringify(address);
    const cartJSON = JSON.stringify(cartCoffee);
    const paymentJSON = JSON.stringify(payment);

    localStorage.setItem("@ignite-coffee-delivery:address-1.0.0", addressJSON);
    localStorage.setItem("@ignite-coffee-delivery:cart-1.0.0", cartJSON);
    localStorage.setItem("@ignite-coffee-delivery:payment-1.0.0", paymentJSON);
  }, [address, cartCoffee, payment]);

  function handleChangeAddress(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setAddress((prev) => {
      const newAddress = { ...prev, [name]: value };

      return newAddress;
    });
  }

  function handleAddItem(product: HomeProps, quantity: number) {
    const addItemCart = {
      ...product,
      quantityItemCart: quantity,
    };

    setCartCoffee((state) => {
      const existingItem = state.find((item) => item.id === product.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantityItemCart: item.quantityItemCart + quantity,
              }
            : item
        );
      } else {
        return [...state, addItemCart];
      }
    });
  }

  function handleChangeQuantity(id: number, quantity: number) {
    setCartCoffee((state) =>
      state.map((item) =>
        item.id === id
          ? { ...item, quantityItemCart: quantity > 0 ? quantity : 1 }
          : item
      )
    );
  }

  return (
    <CartCoffeeContext.Provider
      value={{
        cartCoffee,
        handleAddItem,
        handleChangeQuantity,
        setCartCoffee,
        address,
        payment,
        setPayment,
        handleChangeAddress,
        setAddress,
      }}
    >
      {children}
    </CartCoffeeContext.Provider>
  );
}
