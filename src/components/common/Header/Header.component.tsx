import React, { useContext, useEffect } from "react";
import * as styles from "./Header.styles";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";
// import logo from "../../assets/images/icons/logo-2.png";

const HeaderComponent = () => {
  const { onPageChange } = useContext(NavigationContext);

  return (
    <header css={styles.header}>
      <div css={styles.wrapper}>
        <div css={styles.logoContainer}>
          <h1 style={{ fontSize: "3.5rem" }}>CYBER GENIUS</h1>
        </div>

        {/*<h1 css={styles.name}>CyberGenius</h1>*/}
        <div css={styles.links}>
          <span css={styles.link} onClick={() => onPageChange(1)}>
            About
          </span>
          <span css={styles.link} onClick={() => onPageChange(2)}>
            Service
          </span>
          <span css={styles.link} onClick={() => onPageChange(3)}>
            Contact
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
