import styled from "styled-components";

export const Container = styled.div`
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
    font-size: 4rem;
    color: #393c41;
  }

  h2 {
    font-weight: normal;
    font-size: 1.25rem;
    color: #5c5e62;

    margin-top: 1rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 8rem;

  > button {
    background: #1a1720;
    color: #fff;

    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.25rem;
    text-transform: uppercase;

    padding: 1rem 2.5rem;
    border-radius: 1.5rem;
    border: none;
    outline: none;
    cursor: pointer;

    &.white {
      color: #1a1720;
      background: #fff;
    }

    & + button {
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    margin-bottom: 12rem;

    > button + button {
      margin-top: 0rem;
      margin-left: 2rem;
    }
  }
`;
