import { Title, Container, Content, TextContent, Datas } from "./styles";

export const Main = () => {
  return (
    <Container>
      <Content>
        <TextContent>
          <p>
            Em 25 de julho de 2020, pessoas no mundo inteiro filmaram a própria
            vida e compartilharam histórias para fazer parte de um documentário.
            Quando todos os envios foram registrados, os cineastas haviam
            recebido mais de 300 mil vídeos de 192 países.
          </p>
          <p>
            O resultado foi um filme incrível sobre amor, morte, tristeza e
            esperança que vai além da geografia e das circunstâncias para
            descobrir o que nos conecta como humanos.
          </p>
          <p>
            Dirigido pelo vencedor do Oscar® Kevin Macdonald. Produzido pelo
            lendário cineasta Ridley Scott. E filmado por VOCÊ.
          </p>
        </TextContent>

        <div>
          <Title>DISPONÍVEL AGORA</Title>
          <iframe
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            width="950"
            height="550"
            src="https://www.youtube.com/embed/vcsSc2iksC0?cc_load_policy=1&amp;enablejsapi=1&amp;modestbranding=1&amp;rel=0&amp;origin=https%3A%2F%2Flifeinaday.youtube&amp;widgetid=1"
            id="widget2"
          ></iframe>

          <section></section>
        </div>

        <Datas>
          <div>
            <h3>324.075</h3>
            <p>ENVIOS</p>
          </div>
          <div>
            <h3>192</h3>
            <p>PAÍSES</p>
          </div>
          <div>
            <h3>65</h3>
            <p>IDIOMAS</p>
          </div>
        </Datas>
      </Content>
    </Container>
  );
};
