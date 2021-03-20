import { useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useContext } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    //! Passa para 'element' a verificação se 'wrapperRef' existe
    const element = wrapperRef.current;

    if (element) {
      const updateScrollValue = () => {
        //! Tira essas 'props' de 'element'
        const { scrollTop, scrollHeight, offsetHeight } = element;

        //! Tamanho do scroll total(fullScroll) é o tamanho da altura da página inteira(scrollHeight) menos a altura de cada uma das 'sections'(offsetHeight)
        const fullScroll = scrollHeight - offsetHeight;

        scrollY.set(scrollTop); //! Valor em px que o usuário está scrollando
        scrollYProgress.set(scrollTop / fullScroll); //! Valor em % que o usuário está scrollando
      };

      //! Adiciona um ouvidor de eventos
      element.addEventListener("scroll", updateScrollValue);

      //! Desfaz o ouvidor de eventos
      return () => element.removeEventListener("scroll", updateScrollValue);
    }
  }, [scrollY, scrollYProgress, wrapperRef]);

  return { scrollY, scrollYProgress };
}
