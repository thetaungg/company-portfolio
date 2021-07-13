import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 10rem 8rem 4rem 8rem;
  display: flex;
  position: relative;
  background: #1d334f;
  color: #fff;

  @media only screen and (max-width: 1065px) {
    padding: 8rem 8rem 4rem;
  }
  @media only screen and (max-width: 650px) {
    padding: 6rem 4rem 5rem;
    flex-direction: column;
  }

  @media only screen and (max-width: 465px) {
    padding: 5rem 2rem 5rem;
  }
  @media only screen and (max-width: 465px) and (max-height: 784px) {
    padding: 10rem 0.5rem 5rem;
  }
`;

export const textContainer = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 2rem;

  @media only screen and (max-width: 465px) and (max-height: 784px) {
    display: none;
  }
`;

export const heading = (isVisible: boolean) => css`
  font-size: 4rem;
  text-align: center;
  transition: all 1s ease;

  ${isVisible
    ? `
     transform: translateY(0); 
  `
    : `
     transform: translateY(10rem);
  `};

  @media only screen and (max-width: 1065px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const contacts = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 4rem auto 0;

  @media only screen and (max-width: 650px) {
    flex-direction: row;
  }
  @media only screen and (max-width: 575px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
  }
  @media only screen and (max-width: 465px) {
    flex-direction: row;
    padding: 0 2rem;
  }
`;

export const contact = (isVisible: boolean, animiationTiming: number) => css`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }
  transition: all ${animiationTiming}s ease;

  ${isVisible
    ? `
     transform: translateY(0); 
  `
    : `
     transform: translateY(15rem);
  `};

  @media only screen and (max-width: 650px) {
    &:not(:last-of-type) {
      margin-right: 3rem;
      margin-bottom: 0;
    }
  }
  @media only screen and (max-width: 465px) and (max-height: 875px) {
    &:nth-child(3) {
      p {
        &:nth-child(3),
        &:nth-child(4) {
          display: none;
        }
      }
    }
  }
`;

export const contactHeader = css`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1rem;
    width: 2rem;
    fill: #f5f5f5;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 1.8rem;
  }
`;

export const contactText = css`
  color: #f5f5f5;
  font-size: 1.5rem;

  &:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 1.4rem;
  }
`;
