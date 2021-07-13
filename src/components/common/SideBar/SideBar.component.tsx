import React from "react";
import FacebookLogo from "../../../assets/images/icons/facebook-square.inline.svg";
import LinkedInLogo from "../../../assets/images/icons/linkedin-square.inline.svg";
import EmailLogo from "../../../assets/images/icons/envelope.inline.svg";
import * as styles from "./SideBar.styles";

const SideBar = () => (
  <div css={styles.sideBar}>
    <div css={styles.iconContainer}>
      <a href="https://www.facebook.com/cybergenius.co" target="_blank" title="Our Facebook page">
        <FacebookLogo />
      </a>
    </div>
    <div css={styles.iconContainer}>
      <a
        href="https://www.linkedin.com/company/cybergenius-co"
        target="_blank"
        title="Our LinkedIn page">
        <LinkedInLogo />
      </a>
    </div>
    <div css={styles.iconContainer}>
      <a href="mailto:contactus@cybergenius.co" title="Email us">
        <EmailLogo />
      </a>
    </div>
  </div>
);

export default SideBar;
