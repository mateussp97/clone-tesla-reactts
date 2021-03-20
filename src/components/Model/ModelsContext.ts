import React from "react";

//! modelName = nome do modelo = cada carro possui seu nome
//! overlayNode = ReactNode = cada carro tem seu conteúdo e atributos React
//! sectionRef = referência de um elemento HTML = cada carro tem uma 'section'
interface CarModel {
  modelName: string;
  overlayNode: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

//! wrapperRef = referência ao wrapper(ModelsWrapper) = referência de um elemento HTML
//! registeredModels = é o que foi registrado dentro da contextAPI quando o usuário inicia a página web = por padrão é uma Array vazia de carros
//! registerModel = ele recebe o carro que é o 'CarModel' e retorna 'void' pois ele adiciona dentro do Array(CarModel[]), então retorna 'void'
//! unregisterModel = essa função é para quando o elemento for desmontado da tela = pega o carro pelo nome(modelName) e deleta ele da lista de carros(registeredModels)
//! getModelByName = essa função é para recebermos o carro pelo própio nome(modelName), assim retornamos o modelo(CarModel) e se não acharmos retornamos 'null'
interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => CarModel | null;
}

export default React.createContext<ModelsContext>({} as ModelsContext);
