import useModel from "../useModel";
import { Container } from "./styles";
import { useEffect } from "react";
import { useRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  //! Pegando 'registerModel' do nosso hook 'useModel'
  const { registerModel } = useModel(modelName);

  //! Criando uma 'sectionRef' e passando as props de um 'HTMLDivElement'
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //! Se 'sectionRef.current' for verdadeiro, registramos um novo 'model'
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
    }
  }, [modelName, overlayNode, registerModel]);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
