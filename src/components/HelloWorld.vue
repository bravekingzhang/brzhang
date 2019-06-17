<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>工具集</h3>
        <ul>
            <li><a href="https://www.yuque.com/ruanyf/share/free-diagram"
                   target="_blank" rel="noopener">免费作图工具
            </a></li>
            <li><a href="https://miku.tools/"
                   target="_blank" rel="noopener">MikuTools - 工具集合
            </a></li>
            <li><a href="https://github.com/my8100/files/tree/master/scrapydweb"
                   target="_blank" rel="noopener">开源可视化爬虫
            </a></li>
            <li><a href="https://github.com/jlevy/the-art-of-command-line/blob/master/README-zh.md"
                   target="_blank" rel="noopener">bash中的哪些奇技淫巧
            </a></li>
            <li><a href="http://tools.jb51.net/regex/create_reg"
                   target="_blank" rel="noopener">在线正则-包含一些常用
            </a></li>
            <li><a href="https://chanind.github.io/hanzi-writer/"
                   target="_blank" rel="noopener">手写汉字js库
            </a></li>
        </ul>
        <h3>书籍下载</h3>
        <ul>
            <li><a href="https://kindle.51nazhun.pub/"
                   target="_blank" rel="noopener">Kindle电子书分享网
            </a></li>
        </ul>
        <h3>Android相关</h3>
        <ul>
            <li><a href="https://androidweekly.io/" target="_blank" rel="noopener">Android 开发技术周报</a></li>
            <li><a href="https://android-developers.googleblog.com/" target="_blank" rel="noopener">Android官方技术博客</a></li>
            <li><a href="https://zhuanlan.zhihu.com/weishu" target="_blank" rel="noopener">维术不多的Android技巧</a></li>
        </ul>

        <h3>小程序相关</h3>
        <ul>
            <li><a href="https://mp.weixin.qq.com/cgi-bin/wx" target="_blank" rel="noopener">官网</a>
            </li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://uniapp.dcloud.io/" target="_blank"
                   rel="noopener">uniapp</a></li>
            <li><a href="http://mpvue.com/" target="_blank" rel="noopener">mpvue</a>
            </li>
        </ul>
        <h3>娱乐&游戏</h3>
        <ul>
            <li><a href="http://tools.jb51.net/games/gangqin" target="_blank" rel="noopener">在线钢琴flash</a>
            </li>
            <li><a href="https://github.com/WarpPrism/AutoPiano" target="_blank" rel="noopener">在线钢琴h5</a>
            </li>
            <li><a href="http://loderunnerwebgame.com/game/" target="_blank" rel="noopener">挖金子</a>
            </li>
        </ul>
        <h3>知名博主</h3>
        <ul>
            <li><a href="http://www.ruanyifeng.com/home.html" target="_blank" rel="noopener">ruanyifeng</a>
            </li>
        </ul>
        <h3>比较有意思的一些文章</h3>
        <ul>
            <li><a href="https://juejin.im/entry/587e09201b69e600584cd326#foundation" target="_blank" rel="noopener">码农必须书籍</a>
            </li>
            <li><a href="https://learn.sparkfun.com/tutorials/how-to-read-a-schematic/all" target="_blank" rel="noopener">电路图符号解释</a>
            </li>
            <li><a href="http://blog.coderhuo.tech/2017/10/12/Virtual_Memory_C_strings_proc/" target="_blank" rel="noopener">虚拟内存最佳讲解</a>
            </li>
            <li><a href="https://www.forbes.com/sites/maddieberg/2019/02/19/the-greatest-investor-youve-never-heard-of-an-optometrist-who-beat-the-odds-to-become-a-billionaire/#753dab3a22e8" target="_blank" rel="noopener">阅读专利投资得21亿</a>
            </li>
        </ul>
        <h3>烧脑</h3>
        <ul>
            <li><a href="https://github.com/azl397985856/leetcode" target="_blank" rel="noopener">leetcode解题思路</a>
            </li>
            <li><a href="https://github.com/MisterBooo/LeetCodeAnimation" target="_blank" rel="noopener">leetcode解题动画</a>
            </li>
            <li><a href="https://algorithm-visualizer.org" target="_blank" rel="noopener">算法在线演示</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
