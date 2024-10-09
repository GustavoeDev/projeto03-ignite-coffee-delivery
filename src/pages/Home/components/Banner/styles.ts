import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const BannerText = styled.div`
  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme["brown-700"]};
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["brown-500"]};
  }
`;

export const BannerDescriptions = styled.div`
  margin-top: 4.125rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    flex: 1 1 calc(50% - 20px);
  }

  div > span {
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

  div:nth-child(1) span {
    background-color: ${(props) => props.theme["yellow-900"]};
  }

  div:nth-child(2) span {
    background-color: ${(props) => props.theme["brown-300"]};
  }

  div:nth-child(3) span {
    background-color: ${(props) => props.theme["yellow-500"]};
  }

  div:nth-child(4) span {
    background-color: ${(props) => props.theme["purple-500"]};
  }
`;
