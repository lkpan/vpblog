module.exports = {
  themeConfig: {
      lastUpdated: '更新时间', // string | boolean
      logo: '/assets/img/logo.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about/about.md' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar: [
         '/',
      'about',
      {
        title: '美丽的css',   // 必要的
        path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/css/c-aaa',
          '/css/c-bbb',
          '/css/c-ccc',
        ]
      },
      ]
      ,
      
      // 禁用导航栏
      // navbar: false
    }
  }