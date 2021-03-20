import { useContext, useEffect, useCallback } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(
    ModelsContext
  );

  //! Quando esse hook for desmontado, ele irá retirar o 'model' de dentro do 'state'(registeredModels)
  useEffect(() => {
    return () => unregisterModel(modelName);
  }, [modelName, unregisterModel]);

  //! Retorna o 'model' que o usuário passou o 'modelName'
  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName,
  ]);

  return { registerModel, getModel };
}
