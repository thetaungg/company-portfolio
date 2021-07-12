import { css } from "@emotion/react";
import { moveInLeft, moveInRight } from "../../animation.styles";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 10rem 2rem 2rem 10rem;
  display: flex;
  align-items: flex-start;
  background: #1b3451;
  color: #fff;
  position: relative;

  @media only screen and (min-height: 675px) {
    padding-top: 13rem;
  }

  @media only screen and (min-height: 775px) {
    padding-top: 18rem;
  }

  @media only screen and (min-height: 900px) {
    padding-top: 22rem;
  }
`;

export const textContainer = (isVisible: boolean) => css`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  transition: all 1.5s ease;
  animation: ${moveInLeft} 0.5s ease-out;

  ${isVisible
    ? `
     transform: translateX(0); 
  `
    : `
     transform: translateX(-80%);
  `}
`;

export const headingText = css`
  font-size: 14rem;
  backface-visibility: hidden;

  @media only screen and (max-width: 1225px) {
    font-size: 12rem;
  }

  @media only screen and (max-width: 1125px) {
    font-size: 11rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 9rem;
  }
`;

export const illustration = (isVisible: boolean) => css`
  width: 50%;
  position: absolute;
  top: 55%;
  right: 0;
  transform: translateY(-50%);
  text-align: right;

  svg {
    width: 95%;
    animation: ${moveInRight} 0.5s ease-out;
    transition: all 1s ease;

    ${isVisible
      ? `
     transform: translateX(0);
  `
      : `
     transform: translateX(80%);
  `}
  }

  @media only screen and (max-width: 1065px) {
    right: 5%;
  }
`;
