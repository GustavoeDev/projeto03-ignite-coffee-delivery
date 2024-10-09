import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};

  img {
    max-width: 4rem;
    width: 100%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const CartInputs = styled.div`
  display: flex;
  align-items: center;
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
    background-color: ${(props) => props.theme["gray-400"]};
    border: 0;
    width: 5.688rem;
    height: 2.375rem;
    border-radius: 8px;
    color: ${(props) => props.theme["purple-500"]};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    cursor: pointer;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["brown-300"]};
    }
  }
`;
