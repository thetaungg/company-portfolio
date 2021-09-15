import React from "react";
import MessengerIcon from "../../../assets/images/icons/messenger.inline.svg";
import * as styles from "./FloatingMessengerBtn.styles";

const FloatingMessengerBtn = () => {
  return (
    <div css={styles.btn}>
      <a href="https://m.me/cybergenius.co" title="https://m.me/cybergenius.co" target="_blank">
        <MessengerIcon />
      </a>
    </div>
  );
};

export default FloatingMessengerBtn;
