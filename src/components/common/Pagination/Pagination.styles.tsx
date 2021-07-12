import { css } from "@emotion/react";

export const pagination = css`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const marker = (currentPage: boolean) => css`
  width: 3rem;
  height: 0.5rem;
  cursor: pointer;
  background-color: #dddcdc;
  transition: all 0.2s ease-in-out;

  ${currentPage
    ? `
    background-color: #fff; 
    width: 5rem;
  `
    : ``}
  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
`;
