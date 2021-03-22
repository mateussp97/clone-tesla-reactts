import { motion } from "framer-motion";
import {
  fadeAnimation,
  titleUpAnimation,
  leftAnimation,
  rightAnimation,
} from "../../animation";
import { Container, Heading, Buttons } from "./styles";

interface Props {
  label: string;
  description: string;
  link: string;
}

const DefaultOverlayContent: React.FC<Props> = ({
  label,
  description,
  link,
}) => {
  return (
    <Container>
      <Heading>
        <motion.h1 variants={titleUpAnimation} initial="hidden" animate="show">
          {label}
        </motion.h1>
        <motion.h2 variants={fadeAnimation} initial="hidden" animate="show">
          {description}
          <span>{link}</span>
        </motion.h2>
      </Heading>
      <Buttons>
        <motion.button variants={leftAnimation} initial="hidden" animate="show">
          Custom Order
        </motion.button>
        <motion.button
          className="white"
          variants={rightAnimation}
          initial="hidden"
          animate="show"
        >
          Existing Inventory
        </motion.button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
