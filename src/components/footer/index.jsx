import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { Container, Content } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <a href="https://www.linkedin.com/in/luan-dniz/">
          <AiFillLinkedin size={30} title="Linkedin" />
        </a>
        <a href="https://github.com/luandniz">
          <AiFillGithub size={30} title="Github" />
        </a>
        <a href="https://lifeinaday.youtube/">
          <AiFillYoutube size={30} title="Site Original" />
        </a>
      </Content>
    </Container>
  );
};
