import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding: 2.5rem 0 5rem 0;

  & > h2 {
    color: ${(props) => props.theme["yellow-900"]};
    font-size: 2rem;
  }

  & > span {
    font-size: 1.25rem;
  }
`;

export const SuccessContent = styled.section`
  margin-top: 2.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SuccessText = styled.div`
  padding: 2.5rem;
  max-width: 32.875rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme["yellow-900"]};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 10vw;
      height: 10vw;
      max-width: 2rem;
      max-height: 2rem;
      border-radius: 50%;

      color: ${(props) => props.theme["white"]};
    }
  }

  div:nth-child(1) span {
    background-color: ${(props) => props.theme["purple-500"]};
  }

  div:nth-child(2) span {
    background-color: ${(props) => props.theme["yellow-500"]};
  }

  div:nth-child(3) span {
    background-color: ${(props) => props.theme["yellow-900"]};
  }
`;
