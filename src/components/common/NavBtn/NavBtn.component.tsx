import React, { useContext, useEffect, useState } from "react";
import FacebookLogo from "../../../assets/images/icons/facebook-square.inline.svg";
import LinkedInLogo from "../../../assets/images/icons/linkedin-square.inline.svg";
import EmailLogo from "../../../assets/images/icons/envelope.inline.svg";
import * as styles from "./NavBtn.styles";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";

const NavBtn = () => {
  const { onPageChange } = useContext(NavigationContext);

  const [isOpen, setIsOpen] = useState(false);
  const onNavToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    //disabling scroll when popup opens
    if (isOpen) {
      // @ts-ignore
      document.querySelector("html").style.overflow = "hidden";
    } else {
      // @ts-ignore
      document.querySelector("html").style.overflowY = "auto";
    }
  }, [isOpen]);

  const onItemClick = (id: number) => {
    setIsOpen(!isOpen);
    onPageChange(id);
  };

  return (
    <div css={styles.navigation}>
      <div css={styles.btnWrapper}>
        <div css={styles.navigationBg(isOpen)}>
          <div css={styles.ratio} />
        </div>
        <div css={styles.bars} onClick={onNavToggle}>
          <div css={styles.bar(isOpen)} />
          <div css={styles.bar(isOpen)} />
          <div css={styles.bar(isOpen)} />
          <div css={styles.bar(isOpen)} />
        </div>
      </div>
      <div css={styles.navContents(isOpen)}>
        <ul css={styles.navItems(isOpen)}>
          {navItems.map((item) => (
            <li css={styles.navItem} key={item.id} onClick={() => onItemClick(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>

        <div css={styles.socialItems(isOpen)}>
          <a
            css={styles.socialItem}
            href="https://www.facebook.com/cybergenius.co"
            target="_blank"
            title="Our Facebook page">
            <FacebookLogo />
          </a>
          <a
            css={styles.socialItem}
            href="https://www.linkedin.com/company/cybergenius-co"
            target="_blank"
            title="Our LinkedIn page">
            <LinkedInLogo />
          </a>
          <a css={styles.socialItem} href="mailto:contactus@cybergenius.co" title="Email us">
            <EmailLogo />
          </a>
        </div>
      </div>
    </div>
  );
};

const navItems = [
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Services",
  },
  {
    id: 3,
    name: "Contact Us",
  },
];

export default NavBtn;
