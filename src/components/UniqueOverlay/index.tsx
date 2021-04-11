import React, { useEffect } from 'react';
import { Container, Header, Logo, Burger, Footer } from './styles';
import { useMotionValue, useTransform } from 'framer-motion';
import logoImg from '../../images/tesla.svg';
import { getContainerRef } from '../Model/ModelsWrapper';

const UniqueOverlay: React.FC = () => {
  const scrollPosition = useMotionValue(0);
  const opacity = useTransform(scrollPosition, [0.9, 1], [0, 1]);

  useEffect(() => {
    //! Não usar essa função dentro de hooks que rodam antes de renderizar a tela pelo menos uma vez. 'getContainerRef' depende de, pelo menos, uma 'renderização' para pegar o 'ref'
    const scrollContainer = getContainerRef();
    if (!scrollContainer) return;

    function onScroll() {
      let { scrollTop, scrollHeight, offsetHeight } = scrollContainer!;
      let scrollContainerHeight = scrollHeight - offsetHeight;

      let scrollPositionPercentage = scrollTop / scrollContainerHeight;
      scrollPosition.set(scrollPositionPercentage);
    }

    scrollContainer.addEventListener('scroll', onScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', onScroll);
    };
  }, [scrollPosition]);

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
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://mateuspaula.dev">
              Mateus Paula © 2021
            </a>
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
