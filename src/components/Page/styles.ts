import styled from "styled-components";
import model3 from "../../images/model3.jpg";
import models from "../../images/models.jpg";
import modelw from "../../images/modelw.jpg";
import modelx from "../../images/modelx.jpg";
import modely from "../../images/modely.jpg";
import roadster from "../../images/roadster.jpg";
import truck from "../../images/truck.jpg";

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${model3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .colored:nth-child(2) {
    background: url(${models});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .colored:nth-child(3) {
    background: url(${modelw});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .colored:nth-child(4) {
    background: url(${modelx});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .colored:nth-child(5) {
    background: url(${modely});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .colored:nth-child(6) {
    background: url(${roadster});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .colored:nth-child(7) {
    background: url(${truck});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
