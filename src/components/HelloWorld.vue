<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>json相关</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                   target="_blank" rel="noopener">babel</a></li>
            <li>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                   target="_blank" rel="noopener">eslint</a></li>
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
        <h3>娱乐工具</h3>
        <ul>
            <li><a href="http://tools.jb51.net/games/gangqin" target="_blank" rel="noopener">在线钢琴</a>
            </li>
        </ul>
        <h3>知名博主</h3>
        <ul>
            <li><a href="http://www.ruanyifeng.com/home.html" target="_blank" rel="noopener">ruanyifeng</a>
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
