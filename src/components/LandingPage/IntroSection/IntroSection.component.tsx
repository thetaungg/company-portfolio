import React, { useContext, useState } from "react";
import Typist from "react-typist";
import MyUniverseIllustration from "../../../assets/images/LandingIllustration.inline.svg";
import * as styles from "./IntroSection.styles";
import WobblyContainer from "../../common/WobblyContainer/WobblyContainer.component";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";

const text2 = ["Solve", "Build", "Are"];
const texts = ["Problems", "Techs", "Reliable"];

const IntroSection = () => {
  const { currentPage } = useContext(NavigationContext);
  const isVisible = () => currentPage === 0;

  const [index, setIndex] = useState(0);

  const onTypingDone = () => {
    if (index === texts.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section css={styles.container}>
      <div css={styles.textContainer(isVisible())}>
        <h1 css={styles.headingText}>We</h1>
        <Typist
          avgTypingDelay={50}
          cursor={{ show: false }}
          key={index}
          onTypingDone={onTypingDone}>
          <h1 css={styles.headingText}>{text2[index]}</h1>
          <h1 css={styles.headingText}>{texts[index]}</h1>{" "}
          {/*don't want typist to remove entire line since the texts are align centered if we remove this one the other 2 from above will go down. So, during the animations the texts will go up and down and we don't want that*/}
          <Typist.Backspace count={texts[index].length + text2[index].length} delay={3000} />
        </Typist>
      </div>
      <WobblyContainer css={styles.illustration(isVisible())}>
        <MyUniverseIllustration />
      </WobblyContainer>
    </section>
  );
};

export default IntroSection;
