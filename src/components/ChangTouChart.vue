<template>

    <el-card class="chang-tou-card">
        <el-progress class="image" type="dashboard" :percentage="temperature"
                     :color="colors" style="margin: auto"></el-progress>
        <div class="span">长投温度是{{temperature}},{{msg}}</div>
    </el-card>
</template>
<script>
    export default {
        data() {
            return {
                percentage: 10,
                colors: [
                    {color: '#5cb87a', percentage: 15},
                    {color: '#1989fa', percentage: 25},
                    {color: '#6f7ad3', percentage: 35},
                    {color: '#e6a23c', percentage: 40},
                    {color: '#f56c6c', percentage: 60},
                ]
            }
        },
        methods: {
            name() {

            }
        },
        computed: {
            msg() {
                if (this.temperature < 20) {
                    return `可适当加大买入`
                } else if (this.temperature >= 20 && this.temperature < 40) {
                    return `建议适量买入`
                } else if (this.temperature >= 40 && this.temperature < 60) {
                    return `建议观望`
                } else {
                    return `建议适量卖出`
                }
            },
        },
        props: {
            temperature: {
                type: Number,
                default: 20.0
            },
            date: {
                type: String,
                default: new Date().toISOString().substr(0, 10)
            }
        },
    }
</script>
<style lang="less">
    .image {
        align-self: center;
        align-items: center;
    }

    .span {
        align-self: center;
        align-items: center;
    }

    .chang-tou-card {
        align-content: center;
        justify-content: center;
        display: flex;
        align-self: center;
    }

</style>