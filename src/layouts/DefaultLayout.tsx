import React from "react";
import { css } from "@emotion/react";
import { useStaticQuery, graphql } from "gatsby";
import HeaderComponent from "../components/common/Header/Header.component";
import "../assets/css/global.css";
import SEO from "../components/seo";
import SideBar from "../components/common/SideBar/SideBar.component";
import { NavigationProvider } from "../contexts/navigation/navigation.context";

const DefaultLayout = ({ title = "IT Solutions Company in Myanmar", children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <NavigationProvider>
        <SEO title={title} />
        <HeaderComponent />
        <div css={body}>
          <SideBar />
          <main css={main}>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
              padding: `1rem`,
              position: "fixed",
              bottom: `0`,
              left: `1rem`,
              color: `#fff`,
            }}>
            © {new Date().getFullYear()}, All rights reserved to Cyber Genius Inc.
            {` `}
          </footer>
        </div>
      </NavigationProvider>
    </>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const body = css`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  overflow: hidden;
  /* padding: 4rem 2rem 4rem 15rem; */
`;

const main = css`
  height: 100%;
`;

export default DefaultLayout;
