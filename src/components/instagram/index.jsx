import image1 from "../../assets/instagram/image1.jpg";
import image2 from "../../assets/instagram/image2.jpg";
import image3 from "../../assets/instagram/image3.jpg";
import image4 from "../../assets/instagram/image4.jpg";
import image5 from "../../assets/instagram/image5.jpg";
import image6 from "../../assets/instagram/image6.jpg";

import { Container, Content } from "./styles";

export const Instagram = () => {
  return (
    <Container>
      <h3>INSTAGRAM</h3>
      <Content>
        <a
          href="https://www.instagram.com/p/CL7dc8ZDyeW/"
          target="_blank"
          title="Instagram"
        >
          <div>
            <img src={image1} alt="" />
          </div>
        </a>

        <a
          href="https://www.instagram.com/p/CLmiSJKD2Ow/"
          target="_blank"
          title="Instagram"
        >
          <div>
            <img src={image2} alt="" />
          </div>
        </a>

        <a
          href="https://www.instagram.com/p/CLe0Lt2j4k-/"
          target="_blank"
          title="Instagram"
        >
          <div>
            <img src={image3} alt="" />
          </div>
        </a>

        <a
          href="https://www.instagram.com/p/CLcN4d0DxMO/"
          target="_blank"
          title="Instagram"
        >
          <div>
            <img src={image4} alt="" />
          </div>
        </a>

        <a
          href="https://www.instagram.com/p/CLUiL-Vjtif/"
          target="_blank"
          title="Instagram"
        >
          <div>
            <img src={image5} alt="" />
          </div>
        </a>

        <a
          href="https://www.instagram.com/p/CLHyMFpjdRZ/"
          target="_blank"
          title="Instagram"
        >
          <div>
            <img src={image6} alt="" />
          </div>
        </a>
      </Content>
    </Container>
  );
};

{
  /*  */
}
