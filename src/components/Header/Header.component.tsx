import React from "react";
import { Link } from "gatsby";
import { header, wrapper, logoContainer } from "./Header.styles";
// @ts-ignore
import Logo from "../../images/genius-b-01.png";

const HeaderComponent = ({ siteTitle = "" }: HeaderProps) => (
  <header css={header}>
    <div css={wrapper}>
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
        <div css={logoContainer}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}>
            <img src={Logo} alt="Cyber Genius Logo" />
          </Link>
        </div>
      </h1>
    </div>
  </header>
);

interface HeaderProps {
  siteTitle?: string;
}

export default HeaderComponent;
