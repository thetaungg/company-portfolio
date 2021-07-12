import React, { useContext } from "react";
import CheckMark from "../../../assets/images/icons/icons8-checkmark.inline.svg";
import * as styles from "./ServicesSection.styles";
import { NavigationContext } from "../../../contexts/navigation/navigation.context";

const services = [
  {
    id: 1,
    heading: "IT Services",
    items: [
      {
        id: 20,
        name: "IT Outsourcing Service",
        desc:
          "With this service, you can sit back and relax. We’ve got your IT Systems covered with unlimited support all day, every day",
      },
      {
        id: 28,
        name: "Digital Marketing",
        desc: "With Social Media Marketing and Search Engine Optimization, we'll t",
      },
      {
        id: 35,
        name: "Digital Transformation & Consulting",
        desc: "Transform you business into the next level using the latest technologies available.",
      },
    ],
  },
  {
    id: 2,
    heading: "Software Development",
    items: [
      {
        id: 21,
        name: "Web & Mobile Development",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea, laboriosam Accusamus animi assumenda",
      },
      {
        id: 27,
        name: "Web Application Maintenance",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea, laboriosam Accusamus animi assumenda",
      },
      {
        id: 32,
        name: "System Integration",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea, laboriosam Accusamus animi assumenda",
      },
      {
        id: 38,
        name: "Web Hosting",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea, laboriosam Accusamus animi assumenda",
      },
    ],
  },
];

const ServicesSection = () => {
  const { currentPage } = useContext(NavigationContext);
  const isVisible = () => currentPage === 2;
  return (
    <section css={styles.container}>
      <h1 css={styles.heading(isVisible())}>Services</h1>

      <div css={styles.services}>
        {services.map((service) => (
          <div key={service.id} css={styles.textGroup}>
            <h5 css={styles.serviceHeading(isVisible(), service.id === 1 ? "left" : "right")}>
              {service.heading}
            </h5>
            <div css={styles.list}>
              {service.items.map((item) => (
                <div
                  key={item.id}
                  css={styles.listItem(
                    isVisible(),
                    service.id === 1 ? "left" : "right",
                    1.3 + item.id / 100
                  )}>
                  <div css={styles.iconContainer}>
                    <CheckMark />
                  </div>
                  <div css={styles.col}>
                    <span>{item.name}</span>
                    <span css={styles.serviceDetails}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
