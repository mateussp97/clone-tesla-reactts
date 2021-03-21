import { useTransform } from "framer-motion";
import { useCallback, useLayoutEffect, useState } from "react";
import { CarModel } from "../ModelsContext";
import useWrapperScroll from "../useWrapperScroll";
import { Container } from "./styles";

interface Props {
  model: CarModel;
}

//! Pegando as propriedades 'offsetTop' e 'offsetHeight' de uma tag div HTML
type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  //! Pegando os valores de 'offsetTop' e 'offsetHeight'
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [model.sectionRef]);

  //! Criando um estado para guardar os valores de 'offsetTop' e 'offsetHeight'
  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

  //! Toda vez que o usuário mudar o tamanho da tela, os valores de 'offsetTop' e 'offsetHeight' serão atualizados
  useLayoutEffect(() => {
    //! Função que atualiza os valores do state 'dimensions'
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    //! Coloca um ouvidor de eventos que quando houver um 'resize' será executado a função 'onResize()'
    window.addEventListener("resize", onResize);

    //! Desfaz o ouvidor de eventos
    return () => window.removeEventListener("resize", onResize);
  }, [getSectionDimensions]);

  const { scrollY } = useWrapperScroll();

  //! O primeiro parâmetro é o conteúdo de scrollY
  //! O segundo parâmetro é uma fórmula para pegar o valor em porcentagem
  //! (y - dimensions.offsetTop) / dimensions.offsetHeight = o tanto que o usuário scrollou menos o tanto que a div precisa de scroll pra chegarmos no topo dela, esse valor em porcentagem
  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );

  //! Criando o efeito de transição de opacidade
  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  );

  //! Tirando o 'pointerEvents' das section que não estão na tela
  const pointerEvents = useTransform(opacity, (value) =>
    value > 0 ? "auto" : "none"
  );

  return <Container style={{ opacity, pointerEvents }}>{children}</Container>;
};

export default ModelOverlay;
