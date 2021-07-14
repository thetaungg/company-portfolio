import { css } from "@emotion/react";

export const navigation = css`
  display: none;

  @media only screen and (max-width: 650px) {
    display: inline-block;
  }
`;

export const btnWrapper = css`
  width: 20px;
  height: 15px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  /* position: fixed;
  top: 25px;
  right: 23px; */
  top: -2px;
  right: 15px;
  float: right;
  z-index: 1;
`;

export const navigationBtn = (isOpen: boolean) => css`
  ${isOpen && ``}
`;

export const navigationIcon = css`
  position: relative;
  margin-top: 15px;
  pointer-events: none;
  margin-left: 11px;

  &,
  &::before,
  &::after {
    width: 23px;
    height: 2px;
    background-color: #fff;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }
  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
`;

export const navigationBg = (isOpen: boolean) => css`
  pointer-events: none;
  width: 4.5rem;
  min-width: 0;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #0c294c;
  transition: width 0.6s cubic-bezier(0.2, 1, 0.2, 1) 0s,
    min-width 0.6s cubic-bezier(0.2, 1, 0.2, 1) 0s;

  ${isOpen &&
  `
    transition: width .9s cubic-bezier(.2,1,.2,1) 0s,min-width .9s cubic-bezier(.2,1,.2,1) 0s;
    width: 230vh;
    min-width: 220vw;
  `};
`;

export const ratio = css`
  width: 100%;
  padding-bottom: 100%;
`;

export const bars = css`
  height: 2rem;
`;

export const bar = (isOpen: boolean) => css`
  width: 100%;
  height: 2px;
  background: #fff;
  position: absolute;
  z-index: 2;
  transition: transform 0.5s, top 0.75s, left 0.75s, width 0.75s;

  &:nth-of-type(1) {
    left: 0;
    top: 0;
  }

  &:nth-of-type(2),
  &:nth-of-type(3) {
    /* we have to use nth-of-type instead of nth-child because we're using SRR*/
    left: 0;
    top: 50%;
  }
  &:nth-of-type(4) {
    left: 0;
    top: 100%;
  }

  ${isOpen &&
  `
    &:nth-of-type(1), &:nth-of-type(4) {
      width: 0;
      top: 50%;
      left: 50%;
    }
    &:nth-of-type(2) {
      transform: rotate(45deg);
    }
    &:nth-of-type(3) {
      transform: rotate(-45deg);
    }
   
  `};
`;

export const navContents = (isOpen: boolean) => css`
  ${!isOpen &&
  `

  `};
`;

export const navItems = (isOpen: boolean) => css`
  width: 100%;
  text-align: center;
  position: absolute;
  top: calc(50vh - 55px);
  left: -20%;
  transform: translateY(-50%);
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: left 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    opacity 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${isOpen &&
  `
    visibility: visible;
    opacity: 1;
    left: 0;
  `}
`;

export const navItem = css`
  font-size: 3.5rem;
  text-align: center;
  font-weight: 700;
  color: #fff;

  &:not(:last-child) {
    margin-bottom: 4.5vh;
  }
`;

export const socialItems = (isOpen: boolean) => css`
  position: absolute;
  top: calc(100vh - 140px);
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${isOpen &&
  `
    opacity: 1;
    visibility: visible;
  `}
`;

export const socialItem = css`
  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: #fff;
  }
  &:not(:last-child) {
    margin-right: 4rem;
  }
`;
