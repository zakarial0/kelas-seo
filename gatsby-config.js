module.exports = {
    siteMetadata: {
    title: `Narikela Recycle`,
    description: `Narikela Recycle adalah produsen produk olahan kelapa ramah lingkungan seperti cocopeat, cocofiber, dan briket kelapa berkualitas untuk pertanian dan industri.`,
    siteUrl: "https://narikelarecycle.web.id",
    author: `DZaA`,
  },

  plugins: [

    // ============================
    // SOURCE FILESYSTEM
    // ============================

    // 1. Uploads folder — UNTUK GAMBAR DI STATIC/IMG
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img`,
      },
    },

    // 2. Markdown content (products & others)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/products`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `_content`,
        path: `${__dirname}/src`,
      },
    },

    // 3. Regular images folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // ============================
    // IMAGE PROCESSING (WAJIB)
    // ============================
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // ============================
    // MARKDOWN PROCESSOR
    // ============================
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Convert featuredimage & gambar markdown agar bisa pakai Sharp
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "uploads",
              ignoreMissing: true,
            },
          },

          // Optimasi gambar di markdown
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              quality: 100,
              withWebp: true,
              showCaptions: false,
              wrapperStyle: `margin: 7vw 0;`,
              disableBgImageOnAlpha: false,
            },
          },

          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },

          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    // ============================
    // CMS + Util Plugins
    // ============================
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Narikela Recycle | `,
        short_name: `NR`,
        start_url: `/`,
        background_color: `#ebebfa`,
        theme_color: `#ebebfa`,
        display: `standalone`,
        icon: `src/images/logo.webp`,
      },
    },

    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },

    `gatsby-plugin-netlify`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // note: plugin expects `excludes` (plural)
        excludes: [`/admin/**`, `/dev-404-page`, `/404`],
        // Use the plugin's default query/serialize which reliably lists site pages.
        // If you need custom fields (lastmod, priority per page), we can reintroduce a custom serialize.
      },
    },
  ],
}
