import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

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

  padding: 1.25rem 1rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      margin: 0 0.5rem;

      a {
        text-transform: uppercase;
        color: #000;
        font-size: 0.875rem;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        text-decoration: none;
      }
    }

    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  @media (min-width: 600px) {
    padding: 1.25rem 2rem;
  }
`;

export const Logo = styled.img``;

export const Burger = styled(AiOutlineMenu)`
  height: 1.5rem;
  width: 1.5rem;

  cursor: pointer;
`;

export const Footer = styled(motion.footer)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: block;

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
        color: #fff;

        &:hover {
          color: #000;
        }
      }
    }
  }

  @media (min-width: 600px) {
    ul {
      flex-direction: row;

      li + li {
        margin-top: 0;
        margin-left: 2rem;
      }
    }
  }
`;
