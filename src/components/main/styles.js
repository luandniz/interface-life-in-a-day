import styled from "styled-components";

export const Box_video = styled.iframe`
  width: 970px;
  height: 550px;
  border: none;
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
  width: 60%;
`;
export const TextContent = styled.div`
  width: 85%;
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
  width: 55%;
  display: flex;
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
`;
