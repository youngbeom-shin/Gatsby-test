module.exports = {
  siteMetadata: {
    title: `youngbeom`,
    name: `youngbeom`,
    siteUrl: `https://shenyongfan.com`,
    description: `用来记录有趣的事情`,
    hero: {
      heading: `好久不见! 欢迎来到我的博客`,
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
       trackingUrl: 'jpvalery.usesfathom.com',
       siteId: 'IOBNXYHX'
     },
   },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shenyongfan.com`,
        short_name: `shenyongfan.com`,
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
        endpoint: "https://club.us12.list-manage.com/subscribe/post?u=82813799388b14db2174b8591&amp;id=428156c588", // add your MC list endpoint here; see plugin repo for instructions
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
