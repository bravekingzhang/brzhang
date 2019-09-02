<template>
    <div>
        <Row type="flex" justify="space-around">
            <Col span="8">
                <Card>
                    <router-link to="/bookmark">
                        <div style="text-align:center">
                            <img width="320px" height="240px" src="../assets/book-mark.png">
                            <h3>这里记录我收藏的一些技术网站</h3>
                        </div>
                    </router-link>
                </Card>
            </Col>
            <Col span="8">
                <Card>
                    <router-link to="/changtou">
                        <div style="text-align:center">
                            <ChangTouChat :temperature="temperature" :date="date"></ChangTouChat>
                            <h3>中证500指数温度</h3>
                        </div>
                    </router-link>
                </Card>
            </Col>

        </Row>
        <br>
        <Row type="flex" justify="space-around" class="code-row-bg">
            <Col span="8">
                <Card>
                    <div style="text-align:center" @click.stop="toMyBlog">
                        <img width="320px" height="240px" src="../assets/blog.jpg">
                        <h3>这里是我的博客</h3>
                    </div>
                </Card>
            </Col>
            <Col span="8">
                <Card>
                    <div style="text-align:center" @click.stop="toMyQcloud">
                        <img width="320px" height="240px" src="../assets/qcloud.jpeg">
                        <h3>这里是我的腾讯云原创文章</h3>
                    </div>
                </Card>
            </Col>
        </Row>
        <br>
        <Row type="flex" justify="space-around" class="code-row-bg">
            <Col span="8">
                <Card>
                    <div style="text-align:center" @click.stop="toGithub">
                        <img width="320px" height="240px" src="../assets/github.png">
                        <h3>这里是我的Github</h3>
                    </div>
                </Card>
            </Col>
            <Col span="8">
            </Col>
        </Row>
        <br>
    </div>
</template>

<script>

    import ChangTouChat from '../components/ChangTouChart'

    export default {
        name: 'index',
        data() {
            return {
                changtouArr: ''
            }
        },
        components: {
            ChangTouChat
        },
        computed: {
            temperature() {
                return this.changtouArr[0] && this.changtouArr[0].changtou_temperature;
            },
            date() {
                return this.changtouArr[0] && this.changtouArr[0].date;
            }
        },
        methods: {
            readTextFile(file, callback) {
                var rawFile = new XMLHttpRequest();
                rawFile.overrideMimeType("application/json");
                rawFile.open("GET", file, true);
                rawFile.onreadystatechange = function () {
                    if (rawFile.readyState === 4 && rawFile.status == "200") {
                        callback(rawFile.responseText);
                    }
                }
                rawFile.send(null);
            },
            toMyBlog() {
                window.location.href = 'https://blog.brzhang.club/'
            },
            toMyQcloud() {
                window.location.href = 'https://cloud.tencent.com/developer/user/1203298'
            },
            toGithub() {
                window.location.href = 'https://github.com/bravekingzhang'
            }
        },
        mounted() {
            this.readTextFile('changtou.json', res => {
                this.changtouArr = JSON.parse(res)
            })
        }
    }
</script>

<style>

</style>
