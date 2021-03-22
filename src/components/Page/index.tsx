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
            "Model 3",
            "Model S",
            "Model W",
            "Model X",
            "Model Y",
            "Roadster",
            "Cybertruck",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for "
                  link="Touchless Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
      <UniqueOverlay />
    </Container>
  );
};

export default Page;
