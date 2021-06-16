import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { css, keyframes } from "@emotion/react";
// @ts-ignore
import logo from "../images/genius-dark -01.png";

const IndexPage = () => (
  <DefaultLayout>
    <div css={container}>
      <h1 css={comingSoonText}>Coming soon!</h1>
      <div css={logoContainer}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  </DefaultLayout>
);

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const clickme = keyframes`
0% {
}

33% {
  background: #fff;
  box-shadow: 0 3px 3px rgb(0 0 0 / 10%);
  transform: scale(1.2) translate3d(0,0,0);
}
50% {
  transform: scale(1.3) translate3d(0,0,0);
}
66% {
  background: #fff;
  box-shadow: 0 3px 3px rgb(0 0 0 / 10%);
  transform: scale(1.2) translate3d(0,0,0);
}
100% {
}
`;

const logoContainer = css`
  position: fixed;
  top: 4rem;
  left: 4rem;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 1px solid #c4c4c4;
  cursor: pointer;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1rem);
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const reveal = keyframes`
  80%{
    letter-spacing: 8px;
  }
  100% {
    background-size: 300% 300%;
  }
`;

const glow = keyframes`
  40% {
    text-shadow: 0 0 .8rem #5bc5f3;
  }
`;

const comingSoonText = css`
  font-size: 6rem;
  color: #1285b7;
  animation: ${reveal} 3000ms ease-in-out forwards 200ms, ${glow} 2500ms linear infinite 2000ms;
`;

export default IndexPage;
