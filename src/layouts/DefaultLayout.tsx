import React from "react";
import { css } from "@emotion/react";
import { useStaticQuery, graphql } from "gatsby";
// import HeaderComponent from "../components/Header/Header.component";
import "../css/global.css";
import SEO from "../components/seo";

const DefaultLayout = ({ title = "Hi, I'm Thet Aung", children }: LayoutProps) => {
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
      <SEO title={title} />
      {/*<HeaderComponent siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
      <div css={body}>
        <main style={{ height: `100%` }}>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            padding: `1rem`,
          }}>
          © {new Date().getFullYear()}, All rights reserved to Cyber Genius Inc.
          {` `}
        </footer>
      </div>
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
  /* padding: 4rem 2rem 4rem 15rem; */
`;

export default DefaultLayout;
