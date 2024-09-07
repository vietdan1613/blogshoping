module.exports = {
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-news',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'FlexiBlog Theme',
    name: 'FlexiBlog',
    description: 'My site description...',
    address: 'New York, NY',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Tiktok',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/@treecy2024'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Trang Chủ',
        slug: '/'
      },
      {
        name: 'Liên hệ',
        slug: '/authors'
      },
      // {
      //   name: 'Liên hệ',
      //   slug: '/contact'
      // }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Truy Cập Nhanh',
        items: [
          {
            name: 'Liên Hệ',
            slug: '/contact'
          },
          {
            name: 'Treecy',
            slug: '/about'
          },
          {
            name: 'Quảng cáo',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Vấn Đề Pháp Lý',
        items: [
          {
            name: 'Quyền Riêng Tư',
            slug: '/'
          },
          {
            name: 'Chính Sách Cookie',
            slug: '/'
          },
          {
            name: 'Điều Khoản Của Chúng Tôi',
            slug: '/'
          }
        ]
      }
    ]
  }
}
