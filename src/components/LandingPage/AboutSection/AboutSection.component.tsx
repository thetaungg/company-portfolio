import React, { useContext } from "react";
import AboutIllustration from "../../../assets/images/about.inline.svg";
import WobblyContainer from "../../common/WobblyContainer/WobblyContainer.component";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";
import * as styles from "./AboutSection.styles";

const AboutSection = () => {
  const { currentPage } = useContext(NavigationContext);
  const isVisible = () => currentPage === 1;

  return (
    <section css={styles.container}>
      <div css={styles.textContainer(isVisible())}>
        <h1 css={styles.heading}>About Us</h1>
        <p css={styles.text}>
          We are a startup IT Company based in Yangon, Myanmar(Burma). With the leadership of the
          people who have years of experience in the IT field, we solve the IT problems properly and
          systematically. By leveraging agile development methodologies, we build beautiful,
          performance-optimized, reliable and secure Web and Mobile Applications.
        </p>
      </div>
      <WobblyContainer css={styles.aboutContainer(isVisible())}>
        <AboutIllustration />
      </WobblyContainer>
    </section>
  );
};

export default AboutSection;
