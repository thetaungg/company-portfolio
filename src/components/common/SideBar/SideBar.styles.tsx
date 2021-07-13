import { css } from "@emotion/react";

export const sideBar = css`
  position: fixed;
  left: 3.5rem;
  top: 0;
  z-index: 101;
  height: 100vh;
  /* background-color: #f3f1f1;
  box-shadow: 0 0.5rem 1rem rgb(0, 0, 0, 0.1);
   */
  padding: 4rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 695px) {
    left: 1rem;
  }

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const iconContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: #f5f5f5;
    transition: all 0.2s;
  }

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  &:hover {
    svg {
      fill: #fff;
      transform: scale(1.1);
    }
  }

  &:active {
    svg {
      transform: scale(0.9);
    }
  }
`;
