/**
 * Generated by "@vuepress/internal-site-data"
 */
export const siteData = {
  "title": "",
  "description": "",
  "base": "/",
  "headTags": [],
  "pages": [
    {
      "title": "Home",
      "frontmatter": {
        "home": true,
        "heroText": "Hero 标题",
        "tagline": "Hero 副标题",
        "actionText": "快速上手 →",
        "actionLink": "/zh/guide/",
        "features": [
          {
            "title": "简洁至上",
            "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
          },
          {
            "title": "Vue驱动",
            "details": "享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。"
          },
          {
            "title": "高性能",
            "details": "VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。"
          }
        ],
        "footer": "MIT Licensed | Copyright © 2018-present Evan You"
      },
      "regularPath": "/",
      "relativePath": "README.md",
      "key": "v-41de8936",
      "path": "/"
    },
    {
      "title": "关于我",
      "frontmatter": {
        "slidebar": "auto",
        "title": "关于我"
      },
      "regularPath": "/about.html",
      "relativePath": "about.md",
      "key": "v-e2914694",
      "path": "/about.html",
      "headers": [
        {
          "level": 2,
          "title": "关于我",
          "slug": "关于我"
        },
        {
          "level": 2,
          "title": "这是about",
          "slug": "这是about"
        },
        {
          "level": 2,
          "title": "二级标题",
          "slug": "二级标题"
        },
        {
          "level": 3,
          "title": "三级标题",
          "slug": "三级标题"
        }
      ]
    },
    {
      "title": "关于我",
      "frontmatter": {
        "slidebar": "auto",
        "title": "关于我"
      },
      "regularPath": "/about/about.html",
      "relativePath": "about/about.md",
      "key": "v-ddaa29ae",
      "path": "/about/about.html",
      "headers": [
        {
          "level": 2,
          "title": "关于我",
          "slug": "关于我"
        },
        {
          "level": 2,
          "title": "这是about",
          "slug": "这是about"
        },
        {
          "level": 2,
          "title": "二级标题",
          "slug": "二级标题"
        },
        {
          "level": 3,
          "title": "三级标题",
          "slug": "三级标题"
        }
      ]
    },
    {
      "title": "这是css的readme",
      "frontmatter": {},
      "regularPath": "/css/",
      "relativePath": "css/README.md",
      "key": "v-1e7da7ea",
      "path": "/css/"
    },
    {
      "title": "aaa",
      "frontmatter": {},
      "regularPath": "/css/c-aaa.html",
      "relativePath": "css/c-aaa.md",
      "key": "v-3010d2ae",
      "path": "/css/c-aaa.html"
    },
    {
      "title": "aaa",
      "frontmatter": {},
      "regularPath": "/js/c-aaa.html",
      "relativePath": "js/c-aaa.md",
      "key": "v-4dacfccd",
      "path": "/js/c-aaa.html"
    },
    {
      "title": "bbb",
      "frontmatter": {},
      "regularPath": "/css/c-bbb.html",
      "relativePath": "css/c-bbb.md",
      "key": "v-48590509",
      "path": "/css/c-bbb.html"
    },
    {
      "title": "这是css的readme",
      "frontmatter": {},
      "regularPath": "/js/",
      "relativePath": "js/README.md",
      "key": "v-62e5fae8",
      "path": "/js/"
    },
    {
      "title": "bbb",
      "frontmatter": {},
      "regularPath": "/js/c-bbb.html",
      "relativePath": "js/c-bbb.md",
      "key": "v-660757cb",
      "path": "/js/c-bbb.html"
    },
    {
      "title": "ccc",
      "frontmatter": {},
      "regularPath": "/js/c-ccc.html",
      "relativePath": "js/c-ccc.md",
      "key": "v-7e61b2c9",
      "path": "/js/c-ccc.html"
    },
    {
      "title": "ccc",
      "frontmatter": {},
      "regularPath": "/css/c-ccc.html",
      "relativePath": "css/c-ccc.md",
      "key": "v-ae8b192e",
      "path": "/css/c-ccc.html"
    }
  ],
  "themeConfig": {
    "lastUpdated": "上次修改时间",
    "logo": "/assets/img/logo.png",
    "nav": [
      {
        "text": "Home",
        "link": "/"
      },
      {
        "text": "Guide",
        "link": "/about/about.md"
      },
      {
        "text": "Languages",
        "ariaLabel": "Language Menu",
        "items": [
          {
            "text": "Chinese",
            "link": "/language/chinese/"
          },
          {
            "text": "Japanese",
            "link": "/language/japanese/"
          }
        ]
      },
      {
        "text": "External",
        "link": "https://google.com"
      }
    ],
    "sidebar": [
      "/",
      "about",
      {
        "title": "美丽的css",
        "path": "/css/",
        "collapsable": false,
        "sidebarDepth": 1,
        "children": [
          "/css/c-aaa",
          "/css/c-bbb",
          "/css/c-ccc"
        ]
      }
    ],
    "plugins": [
      [
        "@vuepress/last-updated",
        {}
      ]
    ]
  }
}