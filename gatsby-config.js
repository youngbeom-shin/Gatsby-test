module.exports = {
  siteMetadata: {
    title: `youngbeom`,
    name: `youngbeom`,
    siteUrl: `https://shenyongfan.com`,
    description: `用来记录有趣的事情`,
    hero: {
      heading: `好久不见! 欢迎来到youngbeom的博客`,
      dontmiss: ``,
      join: ``,
      maxWidth: 1080,
    },
    social: [
      {
        url: `https://twitter.com/ShinYoungboom`,
      },
      {
        url: `https://www.instagram.com/youngbeom_shin`,
      },
      {
        url: `https://github.com/youngbeom-shin`,
      },
      {
        url: `https://facebook.com/youngbeomshen`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: false,
        sources: {
          local: true,
          // contentful: false,
        },
      },
    },
    {
     resolve: 'gatsby-plugin-fathom',
     options: {
       trackingUrl: '',
       siteId: ''
     },
   },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `youngbeom的博客`,
        short_name: `youngbeom的博客`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://chimpstatic.com/mcjs-connected/js/users/527c0d3a0f3716e0f5813dfc4/b979ebbba561a5d18521544f6.js", // add your MC list endpoint here; see plugin repo for instructions
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-ZJB1QDW1MZ",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "G-ZJB1QDW1MZ",
        // Enables Google Optimize Experiment ID
        experimentId: "G-ZJB1QDW1MZ",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "G-ZJB1QDW1MZ",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-advanced-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://shenyongfan.com`,
        sitemap:`https://shenyongfan.com/sitemap.xml`,
        policy: [{ userAgent: '*' }],
      },
    },
  ],
};
