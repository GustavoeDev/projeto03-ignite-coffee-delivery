import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2rem 0;

  button {
    padding: 0.5rem;
    background-color: ${(props) => props.theme["yellow-100"]};
    color: ${(props) => props.theme["yellow-900"]};
    cursor: pointer;

    border: 0;
    border-radius: 8px;

    display: flex;
    align-items: center;
  }
`;
