import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 2.5rem 0 9.813rem 0;

  display: flex;
  flex-direction: column;
  gap: 7.75rem;

  h2 {
    color: ${(props) => props.theme["brown-500"]};
    font-size: 2rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  .listProducts {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
  }
`;
