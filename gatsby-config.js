module.exports = {
  siteMetadata: {
    title: `Cyber Genius - IT Service and Software Company in Myanmar`,
    description: `IT Service and Software Company in Myanmar`,
    author: `Thet Aung`,
    image: `https://cybergenius.s3.amazonaws.com/cg-landing.jpg`,
    siteName: `Cyber Genius`,
    url: `https://www.cybergenius.co`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fredoka+One`],
        display: "swap",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "cybergenius",
        acl: null,
      },
    },
  ],
};
