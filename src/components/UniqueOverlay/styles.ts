import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
`;

export const Logo = styled.h1``;

export const Burger = styled(GiHamburgerMenu)`
  height: 2rem;
  width: 2rem;

  cursor: pointer;
`;

export const Footer = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 2rem;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      font-size: 1rem;

      & + li {
        margin-top: 0.75rem;
      }

      a {
        text-decoration: none;
        color: #393c41;

        &:hover {
          color: #000;
        }
      }
    }
  }

  @media (min-width: 600px) {
    margin-bottom: 2rem;

    ul {
      flex-direction: row;

      li + li {
        margin-top: 0;
        margin-left: 2rem;
      }
    }
  }
`;
