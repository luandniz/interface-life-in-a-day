import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  // width: 100vw;
  margin-top: 50px;
  background-color: #212121;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  width: 60%;

  a {
    cursor: pointer;
    color: var(--light-gray);

    :hover {
      color: white;
      transition: 0.6s;
    }
  }
`;
