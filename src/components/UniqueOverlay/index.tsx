import { Container, Header, Logo, Burger, Footer } from "./styles";

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
        <Burger />
      </Header>
      <Footer>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">UI Clone</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
