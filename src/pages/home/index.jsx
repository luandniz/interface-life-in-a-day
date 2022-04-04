import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Instagram } from "../../components/instagram";
import { Footer } from "../../components/footer";

import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Instagram />
      <Footer />
    </Container>
  );
};
