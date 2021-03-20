import { ReactNode } from "react";

import { Container } from "./styles";

interface ModelOverlayProps {
  children: ReactNode;
}

const ModelOverlay: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ModelOverlay;
