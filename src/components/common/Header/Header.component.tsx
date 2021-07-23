import React, { useContext } from "react";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";
import * as styles from "./Header.styles";
import NavBtn from "../NavBtn/NavBtn.component";

const HeaderComponent = () => {
  const { onPageChange } = useContext(NavigationContext);

  return (
    <header css={styles.header}>
      <div css={styles.wrapper}>
        <div css={styles.logoContainer} onClick={() => onPageChange(0)}>
          <span css={styles.name}>CYBER GENIUS</span>
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
        <NavBtn />
      </div>
    </header>
  );
};

export default HeaderComponent;
