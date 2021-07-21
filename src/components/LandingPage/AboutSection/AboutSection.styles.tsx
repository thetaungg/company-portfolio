import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 8rem 2rem 2rem 12rem;
  display: flex;
  align-items: center;
  position: relative;
  background: #1e1e1e;
  color: #fff;
  overflow: hidden;

  @media only screen and (max-width: 1225px) {
    padding-top: 6rem;
    padding-left: 10rem;
  }

  @media only screen and (max-width: 650px) {
    align-items: flex-start;
    padding: 12rem 2rem 2rem;
  }
  @media only screen and (max-width: 650px) and (max-height: 850px) {
    padding: 8rem 2rem 2rem;
  }
`;

export const textContainer = (isVisible: boolean) => css`
  display: flex;
  flex-direction: column;
  width: 50%;
  transition: all 1.5s ease;

  ${isVisible
    ? `
     transform: translateX(0);
  `
    : `
     transform: translateX(-50%);
  `};

  @media only screen and (max-width: 650px) {
    width: fit-content;
    padding-left: 2rem;
  }
`;

export const heading = css`
  font-size: 12rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 1225px) {
    font-size: 11rem;
  }

  @media only screen and (max-width: 1125px) {
    font-size: 10rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 8rem;
  }

  @media only screen and (max-width: 865px) {
    font-size: 6.5rem;
  }

  @media only screen and (max-width: 650px) {
    font-size: 8rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 465px) {
    font-size: 6.5rem;

    @media only screen and (max-height: 668px) {
      font-size: 5rem;
    }
  }
`;

export const text = css`
  font-size: 2.3rem;
  line-height: 3.2rem;
  font-weight: 500;

  @media only screen and (max-width: 1125px) {
    font-size: 2.1rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
  @media only screen and (max-width: 865px) {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
  @media only screen and (max-width: 650px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 465px) {
    font-size: 1.6rem;

    @media only screen and (max-height: 668px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
  @media only screen and (max-width: 361px) {
    font-size: 1.4rem;
  }
`;

export const aboutContainer = (isVisible: boolean) => css`
  width: 50%;
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  @media only screen and (max-width: 650px) {
    width: 110%;
    z-index: 1;
    top: unset;
    right: unset;
    transform: unset;
    left: -5%;
    bottom: 5rem;
    display: flex;

    svg {
      height: fit-content;
    }
  }

  @media only screen and (max-width: 465px) {
    @media only screen and (min-height: 775px) {
      bottom: 5rem;
    }
    @media only screen and (min-height: 875px) {
      bottom: 8rem;
    }

    @media only screen and (max-height: 737px) {
      bottom: 3rem;
    }
  }

  svg {
    width: 100%;
    transition: all 1s ease;

    ${isVisible
      ? `
     transform: translateX(0);
  `
      : `
     transform: translateX(50%);
  `}
  }
`;
