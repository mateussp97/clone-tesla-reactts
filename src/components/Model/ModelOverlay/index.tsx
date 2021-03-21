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
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollY } = useWrapperScroll();

  //! (y - dimensions.offsetTop) / dimensions.offsetHeight = o tanto que o usuário scrollou menos o tanto que a div precisa de scroll pra chegarmos no topo dela, esse valor em porcentagem
  const sectionScrollPRogress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );

  //! Criando o efeito de transição de opacidade
  const opacity = useTransform(
    sectionScrollPRogress,
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
