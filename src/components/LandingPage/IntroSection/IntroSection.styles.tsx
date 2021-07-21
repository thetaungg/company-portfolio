import { css } from "@emotion/react";
import { moveInTop } from "../../animation.styles";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 10rem 2rem 2rem 10rem;
  display: flex;
  align-items: flex-start;
  background: #1b3451;
  color: #fff;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 1065px) {
    padding-top: 20rem;
    padding-left: 7rem;
  }

  @media only screen and (max-width: 695px) {
    padding-top: 20rem;
    padding-left: 4rem;
  }

  @media only screen and (max-width: 695px) {
    padding-left: 2rem;
  }

  @media only screen and (max-width: 650px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media only screen and (max-height: 900px) {
    padding-top: 16rem;
  }

  @media only screen and (max-height: 775px) {
    padding-top: 14rem;
  }

  @media only screen and (max-height: 675px) {
    padding-top: 12rem;
  }

  @media only screen and (max-height: 445px) {
    padding-top: 12rem;
  }

  @media only screen and (min-height: 900px) {
    padding-top: 22rem;
  }
`;

export const textContainer = (isVisible: boolean) => css`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  transition: all 1.5s ease;
  animation: ${moveInTop} 0.5s ease-out;
  z-index: 3;

  ${isVisible
    ? `
     transform: translateX(0); 
  `
    : `
     transform: translateY(-80%);
  `};

  @media only screen and (max-width: 650px) {
    width: fit-content;
    padding-left: 2rem;
  }
  @media only screen and (max-width: 465px) {
    padding-left: 1rem;
  }
`;

export const headingText = css`
  backface-visibility: hidden;
  font-size: 14rem;

  @media only screen and (max-width: 1225px) {
    font-size: 12rem;
  }

  @media only screen and (max-width: 1125px) {
    font-size: 11rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 10rem;
  }

  @media only screen and (max-width: 865px) {
    font-size: 8rem;
  }
  @media only screen and (max-width: 775px) {
    font-size: 6rem;
  }

  @media only screen and (max-width: 650px) {
    font-size: 8rem;
  }

  @media only screen and (max-width: 465px) {
    font-size: 7rem;
  }
  @media only screen and (max-width: 365px) {
    font-size: 6rem;
  }
`;

export const illustration = (isVisible: boolean) => css`
  width: 50%;
  position: absolute;
  top: 55%;
  right: 0;
  transform: translateY(-50%);
  text-align: right;

  @media only screen and (max-width: 650px) {
    width: 100%;
    z-index: 1;
    top: unset;
    transform: unset;
    bottom: 5rem;
    display: flex;
  }

  @media only screen and (max-width: 465px) {
    @media only screen and (min-height: 775px) {
      bottom: 8rem;
    }
  }

  svg {
    width: 100%;
    animation: ${moveInTop} 0.8s ease-out;
    transition: all 1s ease;

    ${isVisible
      ? `
     transform: translateY(0);
  `
      : `
     transform: translateY(-80%);
  `};

    @media only screen and (max-width: 650px) {
      height: fit-content;
    }
  }

  @media only screen and (max-width: 1065px) {
    right: 5%;
  }
`;
