module.exports = {
  siteMetadata: {
    title: `永范的乌托邦是个理想国`,
    name: `youngbeom`,
    siteUrl: `https://shenyongfan.com`,
    description: `用来记录有趣的事情`,
    hero: {
      heading: `你好,欢迎来到永范的博客！这里存放着所有关于我爱着的这个世界`,
      dontmiss: `Make sure you don't miss out our future events.`,
      join: `Join now for free 👇`,
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
        mailchimp: true,
        sources: {
          local: true,
          // contentful: true,
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
        name: `MontrealPhoto.club`,
        short_name: `MontrealPhotoClub`,
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
        host: `https://www.shenyongfan.com`,
        sitemap:`https://www.shenyongfan.com/sitemap.xml`,
        policy: [{ userAgent: '*' }],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://www.shenyongfan.com`,
        sitemap:`https://www.shenyongfan.com/sitemap.xml`,
        policy: [{ userAgent: '*' }],
      },
    },
  ],
};
