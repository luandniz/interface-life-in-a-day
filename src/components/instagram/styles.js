import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-color);

  h3 {
    font-size: 44px;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 15px;
  }
`;
export const Content = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  img {
    width: 100%;
    cursor: pointer;
  }

  @media (min-width: 425px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 90%;
  }

  @media (min-width: 835px) {
    width: 70%;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;
