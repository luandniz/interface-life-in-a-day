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
  }
`;
export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  img {
    margin: 10px;
  }
`;
