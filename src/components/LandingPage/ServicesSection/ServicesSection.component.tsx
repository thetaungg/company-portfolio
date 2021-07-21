import React, { useContext } from "react";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";
import * as styles from "./ServicesSection.styles";

const services = [
  "IT Outsourcing Service",
  "IT Helpdesk Service",
  "IT Backoffice Support",
  "Digital Marketing",
  "Digital Consulting",
  "Data Entry",
  "Web Design & Development",
  "Web Application Maintenance",
  "Web Hosting",
  "Portfolio",
  "E-commerce",
];

const ServicesSection = () => {
  const { currentPage, onPageChange } = useContext(NavigationContext);
  const isVisible = () => currentPage === 2;
  return (
    <section css={styles.container}>
      <div css={styles.textContainer}>
        <h1 css={styles.heading(isVisible())}>Services</h1>
        <button css={styles.contactUsBtn(isVisible())} onClick={() => onPageChange(3)}>
          Contact Us
        </button>
      </div>

      <div css={styles.services(isVisible())}>
        {services.map((service, i) => (
          <div key={i} css={styles.service}>
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
