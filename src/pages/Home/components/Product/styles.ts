import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  img {
    margin-top: -3.125rem;
  }
`;

export const CoffeeTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  span {
    background-color: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-900"]};

    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    font-size: 0.625rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["brown-100"]};
    text-align: center;
  }
`;

export const CoffeeBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.438rem;

  p {
    font-size: 0.875rem;

    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  div {
    display: flex;
    gap: 0.5rem;

    input {
      width: 4.5rem;
      height: 2.375rem;
      background-color: ${(props) => props.theme["gray-400"]};
      border: 0;
      border-radius: 8px;
      text-align: center;
    }

    button {
      padding: 0.5rem;
      background-color: ${(props) => props.theme["purple-900"]};
      color: ${(props) => props.theme["white"]};
      border: 0;
      border-radius: 8px;
      cursor: pointer;

      display: flex;
      align-items: center;
    }
  }
`;
