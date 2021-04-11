// import useWrapperScroll from "../Model/useWrapperScroll";
import { Container, Header, Logo, Burger, Footer } from './styles';
// import { useTransform } from "framer-motion";
import logoImg from '../../images/tesla.svg';

const UniqueOverlay: React.FC = () => {
  // const { scrollYProgress } = useWrapperScroll();

  // const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo src={logoImg} />
        <ul>
          <li>
            <a href="#any">Model 3</a>
          </li>
          <li>
            <a href="#any">Model S</a>
          </li>
          <li>
            <a href="#any">Model W</a>
          </li>
          <li>
            <a href="#any">Model X</a>
          </li>
          <li>
            <a href="#any">Roadster</a>
          </li>
          <li>
            <a href="#any">Truck</a>
          </li>
        </ul>
        <Burger />
      </Header>
      <Footer>
        <ul>
          <li>
            <a href="#any">Tesla © 2021</a>
          </li>
          <li>
            <a href="#any">Privacy & Legal</a>
          </li>
          <li>
            <a href="#any">News</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
