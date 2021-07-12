import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 10rem 8rem 4rem 8rem;
  display: flex;
  position: relative;
  background: #1d334f;
  color: #fff;
`;

export const textContainer = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 2rem;
`;

export const text = css`
  font-size: 4rem;
  text-align: center;
`;

export const contacts = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 4rem auto 0;
`;

export const contact = css`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 4rem;
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
`;

export const contactText = css`
  color: #f5f5f5;
  font-size: 1.5rem;

  &:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }
`;
