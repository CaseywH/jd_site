module.exports = {
  siteMetadata: {
    title: "JD's shoppe!",
    author: 'Casey Heinemeyer',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass',
  ],
};
