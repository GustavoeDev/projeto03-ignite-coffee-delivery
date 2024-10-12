import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.5rem 0 15rem 0;

  .completeRequest,
  .totalRequest {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .completeRequest {
    flex: 1;
  }

  .totalRequest {
    max-width: 28rem;
    width: 100%;
  }
`;

const BaseInput = styled.input`
  padding: 0.75rem;
  border: 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme["gray-400"]};

  width: 100%;
`;

export const InputReduced = styled(BaseInput)`
  max-width: 12.5rem;
`;

export const InputNormal = styled(BaseInput)`
  flex: 1;
`;

export const InputMinimum = styled(BaseInput)`
  max-width: 3.75rem;
`;

export const Address = styled.div`
  background-color: ${(props) => props.theme["gray-200"]};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .addressTitle {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme["yellow-900"]};

    span {
      color: ${(props) => props.theme["brown-500"]};
    }

    p {
      color: ${(props) => props.theme["brown-300"]};
      font-size: 0.875rem;
    }
  }

  .addressInputs {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .addresInputsFirst,
    .addresInputsSecond {
      display: flex;
      gap: 0.75rem;
    }
  }
`;

export const Payment = styled.div`
  background-color: ${(props) => props.theme["gray-200"]};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .paymentTitle {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme["purple-500"]};

    span {
      color: ${(props) => props.theme["brown-500"]};
    }

    p {
      color: ${(props) => props.theme["brown-300"]};
      font-size: 0.875rem;
    }
  }

  .paymentButtons {
    display: flex;
    gap: 0.75rem;
  }

  button {
    background-color: ${(props) => props.theme["gray-400"]};
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 1rem;
    font-size: 0.75rem;
    cursor: pointer;

    display: flex;
    gap: 0.75rem;
    align-items: center;

    color: ${(props) => props.theme["purple-500"]};

    p {
      color: ${(props) => props.theme["brown-300"]};
    }
  }

  button:hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }
`;

export const ConfirmRequest = styled.div`
  background-color: ${(props) => props.theme["gray-200"]};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button[type="submit"] {
    width: 100%;
    padding: 0.75rem;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    background-color: ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme["white"]};
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.6;
  }

  & > .placeholderCart {
    text-align: center;
    color: ${(props) => props.theme["brown-300"]};
  }
`;

export const TotalValue = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  & > div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
    }
  }
`;
