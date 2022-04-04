import styled from "styled-components";

export const Box_video = styled.iframe`
  width: 950px;
  height: 550px;
  border: none;

  @media (max-width: 988px) {
    width: 740px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 440px;
    height: 250px;
  }

  @media (max-width: 425px) {
    width: 300px;
    height: 180px;
  }
`;

export const Container = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--main-color);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  width: 90%;

  @media (min-width: 620px) {
    width: 70%;
  }

  @media (min-width: 1300px) {
    width: 65%;
  }

  @media (min-width: 1400px) {
    width: 60%;
  }
`;
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 20px 0;

  p {
    font-size: 19px;
    line-height: 29px;
    padding-bottom: 16px;
  }
`;

export const Title = styled.h3`
  font-size: 44px;
  text-transform: uppercase;
  font-weight: 300;
`;

export const Datas = styled.section`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 100px 0 100px 0;

  div {
    text-align: center;
  }

  h3 {
    font-size: 44px;
    text-transform: uppercase;
    font-weight: 300;
  }

  p {
    font-size: 19px;
    line-height: 29px;
    padding-bottom: 16px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    margin: 60px 0 60px 0;
  }
`;
