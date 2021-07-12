import React, { useContext } from "react";
import ReactPageScroller from "react-page-scroller";
import IntroSection from "../IntroSection/IntroSection.component";
import AboutSection from "../AboutSection/AboutSection.component";
import ServicesSection from "../ServicesSection/ServicesSection.component";
import ContactSection from "../ContactSection/ContactSection.component";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";

const PageScroller = () => {
  const { currentPage, onPageChange } = useContext(NavigationContext);

  return (
    <ReactPageScroller
      animationTimer={500}
      renderAllPagesOnFirstRender
      customPageNumber={currentPage}
      onBeforePageScroll={onPageChange}>
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </ReactPageScroller>
  );
};

export default PageScroller;
