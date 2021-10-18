require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://qitadev.github.io",
    title: "Dikadoin.dong",
  },
  plugins: [
    'gatsby-plugin-postcss'
  ],
};