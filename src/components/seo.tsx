import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description = "", lang = "en", meta = [], title }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteName
            url
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata?.siteName || ``,
        },
        {
          property: `og:url`,
          content: site.siteMetadata?.url || ``,
        },
        {
          property: `og:image`,
          content: site.siteMetadata?.image || ``,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:url`,
          content: site.siteMetadata?.url || ``,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata?.image || ``,
        },
      ].concat(meta)}
    />
  );
}

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<any>;
  title: string;
}

export default SEO;
