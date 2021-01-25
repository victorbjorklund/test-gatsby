module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    siteUrl: "https://budgetera.nu"
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
