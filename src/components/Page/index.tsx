import { Container } from "./styles";
import DefaultOverlayContent from "./../DefaultOverlayContent/index";
import { ModelsWrapper, ModelSection } from "../Model";
import React from "react";
import UniqueOverlay from "../UniqueOverlay";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model One",
            "Model Two",
            "Model Three",
            "Model Four",
            "Model Five",
            "Model Six",
            "Model Seven",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
      <UniqueOverlay></UniqueOverlay>
    </Container>
  );
};

export default Page;
