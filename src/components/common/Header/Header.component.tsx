import React, { useContext } from "react";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";
import * as styles from "./Header.styles";

const HeaderComponent = () => {
  const { onPageChange } = useContext(NavigationContext);

  return (
    <header css={styles.header}>
      <div css={styles.wrapper}>
        <div css={styles.logoContainer}>
          <a href="#" css={styles.name}>
            CYBER GENIUS
          </a>
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
