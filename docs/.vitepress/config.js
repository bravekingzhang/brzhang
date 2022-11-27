module.exports = {
  title: "个人分享日记",
  description: "记录生活的点点滴滴",
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },

    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] },
    lineNumbers: true,
  },
  // 主题配置
  themeConfig: {
    //   头部导航
    nav: [
      { text: "首页", link: "/" },
      { text: "兴趣&生活", link: "/about/" },
      { text: "博客", link: "https://blog.brzhang.club" },
      { text: "我的", link: "/mine/" },
    ],
    //   侧边导航
    sidebar: [],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present brzhang ",
    },
  },
};
