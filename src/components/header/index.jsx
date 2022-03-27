import bg from "../../assets/avidaemumdia.jpg";
// import sobreposicao from "../../assets/sobreposicao.png";

import { Background } from "./styles";
//Animation, Sobreposicao

export const Header = () => {
  return (
    <div>
      <Background src={bg} alt="logo"></Background>

      {/* <Sobreposicao src={sobreposicao} alt="logo"></Sobreposicao> */}
    </div>
  );
};
