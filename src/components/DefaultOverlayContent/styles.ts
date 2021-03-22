import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;
`;

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;

  h1 {
    font-weight: 500;
    font-size: 3rem;
    color: #393c41;
    margin-bottom: 0.25rem;
  }

  h2 {
    font-weight: normal;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    color: #5c5e62;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  margin-bottom: 4rem;

  > button {
    width: 100%;
    background: #333438;
    color: #fff;

    font-size: 0.875rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: 0.125rem;
    text-transform: uppercase;

    opacity: 0.875;

    padding: 0.875rem 0;
    border-radius: 1.5rem;
    border: none;
    outline: none;
    cursor: pointer;

    &.white {
      color: #333438;
      background: #fff;
    }

    & + button {
      margin-top: 1rem;
    }
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    padding: 0;
    margin-bottom: 5rem;

    > button {
      width: 18rem;
    }

    > button + button {
      margin-top: 0rem;
      margin-left: 2rem;
    }
  }
`;
