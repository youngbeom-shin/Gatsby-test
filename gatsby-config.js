module.exports = {
  siteMetadata: {
    title: `永范的乌托邦是个理想国`,
    name: `youngbeom`,
    siteUrl: `https://shenyongfan.com`,
    description: `用来记录有趣的事情`,
    hero: {
      heading: `你好,欢迎来到永范的博客！这里存放着所有关于我爱着的这个世界`,
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
      {
        url: `https://www.weibo.com/youngbeom`,
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
