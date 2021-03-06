module.exports = {
  siteMetadata: {
    title: `PPR 20201 Team Site`,
    description: `Information about the Plant Power Racing team for 2021.`,
    author: `james-walker`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        layout: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        // projectId: process.env.SANITY_PROJECT_ID,
        // dataset: process.env.SANITY_DATASET,
        // token: process.env.SANITY_TOKEN,
        apiVersion: "2021-03-25", // use a UTC date string
        watchMode: true,
        overlayDrafts: true,
        useCdn: true,
        withCredentials: true,
        graphqlTag: "default",
        projectId: `v0rw1hdx`,
        dataset: `production`,
        token:
          "skOpvPKwd6wMNzIdlo2aNxinEWvjoTh1CxDCC3yGgsbeH3r4paU8MGP9Ljkq7A7xCcfXLngqdUWlcVECUFKPl9k3XOwIua9UMUpLj4gyoToOT6hqHFRp0X3CSGKbooKUFYQA9pvR308PJI34o8wsJ5JbkyupEdYpPO98dPiVIrnX2lt5cQCI",
        // token:
        // "skKbmMz6xD1c29LWXqDJeyKBCe2TkgVsy0USillhuJCZqDK56F0DPMduZ3dEPMWMauAZ1PBpXXbze0YPFoOEbazKzULK6TiChXEYOplUL54S29RUM5DrCWNUlH7ppYzf63TdyPpTzyZkwS2IsTESSXnWfJbDlGyEPec60EFh7X5YrO6I6B52", // or leave blank for unauthenticated usage
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "v0rw1hdx",
        dataset: "production",
        defaultImageConfig: {
          quality: 100, // use reasonable lossy compression level
          fit: "max", // like `object-fit: contain`, but never scaling up
          auto: "format", // automatically select next-gen image formats on supporting browsers
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
