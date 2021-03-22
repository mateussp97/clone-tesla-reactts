import useWrapperScroll from "../Model/useWrapperScroll";
import { Container, Header, Logo, Burger, Footer } from "./styles";
import { useTransform } from "framer-motion";
import logoImg from "../../images/tesla.svg";

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo src={logoImg} />
        <ul>
          <li>
            <a href="https://github.com/">Model 3</a>
          </li>
          <li>
            <a href="https://github.com/">Model S</a>
          </li>
          <li>
            <a href="https://github.com/">Model W</a>
          </li>
          <li>
            <a href="https://github.com/">Model X</a>
          </li>
          <li>
            <a href="https://github.com/">Roadster</a>
          </li>
          <li>
            <a href="https://github.com/">Truck</a>
          </li>
        </ul>
        <Burger />
      </Header>
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="https://github.com/">Tesla © 2021</a>
          </li>
          <li>
            <a href="https://github.com/">Privacy & Legal</a>
          </li>
          <li>
            <a href="https://github.com/">News</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
