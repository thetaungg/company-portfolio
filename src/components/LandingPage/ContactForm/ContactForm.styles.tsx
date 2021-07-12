import { css } from "@emotion/react";

export const formContainer = css`
  width: 50%;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  padding: 1rem 3rem;
  box-shadow: 0 0.3rem 0.7rem rgba(0, 0, 0, 0.1);
  min-height: 40rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  /* custom scrollbar */

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #7f7d7d;
    border-radius: 0.6rem;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #8b8a8a;
  }
`;

export const form = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const formHeader = css`
  padding: 1.3rem 2rem;
  text-align: center;
  margin-bottom: 1rem;

  span {
    font-size: 2.6rem;
    font-weight: 700;
    color: #424242;
  }
`;

export const input = css`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

export const textArea = css`
  flex-grow: 1;
  margin-bottom: 1rem;
  textarea {
    min-height: 10rem;
  }
`;

export const button = css`
  padding: 1.2rem 2rem;
  font-size: 1.7rem;
  font-weight: 600;
  background-color: #2980b9;
  color: #fff;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 1.5rem 0 1rem;
  transition: all 0.2s;

  &:hover {
    background-color: #2573a7;
  }

  &:active {
    background-color: #2980b9;
  }
  &[disabled] {
    cursor: initial;
  }
`;

export const errorText = css`
  color: #db1f48;
`;
