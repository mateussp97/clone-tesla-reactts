import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  //! Definindo o efeito de scroll-snap
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;
