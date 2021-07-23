import React, { useContext } from "react";
import ContactForm from "../ContactForm/ContactForm.component";
import LocationIcon from "../../../assets/images/icons/location.inline.svg";
import EmailIcon from "../../../assets/images/icons/mail.inline.svg";
import PhoneIcon from "../../../assets/images/icons/phone.inline.svg";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";
import * as styles from "./ContactSection.styles";

const ContactSection = () => {
  const { currentPage } = useContext(NavigationContext);
  const isVisible = () => currentPage === 3;
  return (
    <section css={styles.container}>
      <div css={styles.textContainer}>
        <h1 css={styles.heading(isVisible())}>Points of Contact</h1>

        <div css={styles.contacts}>
          <div css={styles.contact(isVisible(), 1)}>
            <h5 css={styles.contactHeader}>
              <LocationIcon /> Address
            </h5>
            <p css={styles.contactText}>Yangon, Myanmar</p>
          </div>
          <div css={styles.contact(isVisible(), 1.3)}>
            <h5 css={styles.contactHeader}>
              <EmailIcon /> Email
            </h5>
            <a css={styles.contactText} href="mailto:contactus@cybergenius.co">
              contactus@cybergenius.co
            </a>
          </div>

          <div css={styles.contact(isVisible(), 1.6)}>
            <h5 css={styles.contactHeader}>
              <PhoneIcon />
              Phone
            </h5>
            {/*<p css={styles.contactText}>+959 961 212 217</p>*/}
            <p css={styles.contactText}>+959 799 580 164</p>
            <p css={styles.contactText}>+959 777 627 355</p>
          </div>
        </div>
      </div>

      <ContactForm isVisible={isVisible()} />
    </section>
  );
};

export default ContactSection;
