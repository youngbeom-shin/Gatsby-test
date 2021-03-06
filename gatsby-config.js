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
        name: `乌托邦是个理想国`,
        short_name: `youngbeom`,
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
        trackingId: "UA-149817343-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "",
        // Enables Google Optimize Experiment ID
        experimentId: "",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        // baidu analytics siteId
        siteId: "902677b09046d7aae4cd242480d0c3b7",
        // Put analytics script in the head instead of the body [default:false]
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-149817343-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
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
