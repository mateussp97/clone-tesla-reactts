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
    font-size: 2.75rem;
    color: #393c41;
    margin-bottom: 0.25rem;
  }

  h2 {
    font-weight: normal;
    font-size: 0.875rem;
    font-family: "Montserrat", sans-serif;
    color: #5c5e62;

    span {
      cursor: pointer;

      color: #484848;
      border-bottom: 1px solid #484848;

      &:hover {
        color: #000;
        border-bottom: 2px solid #000;
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: 0.875;

  padding: 0 16px;

  margin-bottom: 3.5rem;

  > button {
    width: 100%;
    background: #333438;
    color: #fff;

    font-size: 0.775rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    text-transform: uppercase;

    padding: 0.675rem 0;

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
      width: 16rem;
    }

    > button + button {
      margin-top: 0rem;
      margin-left: 1rem;
    }
  }
`;
