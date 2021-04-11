import { useCallback, useRef, useState } from 'react';
import { Container, OverlaysRoot } from './styles';
import ModelOverlay from '../ModelOverlay';
import ModelsContext, { CarModel } from './../ModelsContext';

let containerRef: HTMLDivElement | null = null;

export function getContainerRef() {
  return containerRef;
}

//? É responsável por ser o 'Provider' da nossa Context
const ModelsWrapper: React.FC = ({ children }) => {
  //! Definindo como HTMLDivElement pois 'Container' é uma div
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  //! Definindo o estado 'registeredModels' da contextAPI e tipando como 'CarModel'
  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  //! Definindo 'registerModel'
  //! Ela irá receber 'model'
  //! Através do 'setState', adiciona todos os 'model' anteriores junto do novo 'model' dentro do 'state'(registeredModels)
  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model]);
  }, []);

  //! Definindo 'unregisterModel'
  //! Ela irá receber 'modelName'
  //! Através do 'setState', faz um filtro nele dizendo que não queremos nenhum 'model' que tenha o nome igual 'modelName' que é passado como parâmetro da função
  //? Ou seja, se o nome dos 'model' dentro do 'state'(registeredModels) for diferente do 'modelName', irá continuar no 'state'(registeredModels)
  //? Se for igual, será retirado
  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName)
    );
  }, []);

  //! Definindo 'getModelByName'
  //! Ela irá receber 'modelName'
  //! Pega o 'state' e procura um 'model' correspondente com o 'modelName' que é passado como parâmetro da função
  //! Se achar, retorna o 'model'
  //! Se não, retorna nulo
  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find((item) => item.modelName === modelName) || null
      );
    },
    [registeredModels]
  );

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container
        ref={(ref) => {
          containerRef = ref;
          wrapperRef.current = ref;
        }}
      >
        <OverlaysRoot>
          {registeredModels.map((item) => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>
        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
