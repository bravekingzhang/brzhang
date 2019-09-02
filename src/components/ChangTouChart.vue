<template>
    <i-circle
            :size="240"
            :trail-width="4"
            :stroke-width="5"
            :percent="temperature"
            stroke-linecap="round"
            :stroke-color="color"
            :dashboard="dashboard">
        <div class="demo-Circle-custom">
            <p>{{date}}</p>
            <h1>长投温度{{temperature}}</h1>
            <p>{{msg}}</p>
        </div>
    </i-circle>
</template>
<script>
    export default {
        data() {
            return {
                dashboard:true
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
            color() {
                if (this.temperature < 20) {
                    return "#5cb85c"
                } else if (this.temperature >= 20 && this.temperature < 40) {
                    return "#ff9900"
                } else {
                    return "#ed4014"
                }

            },
        },
        props: {
            temperature: {
                type: Number,
                default: 20.0
            },
            date:{
                type:String,
                default: new Date().toISOString().substr(0,10)
            }
        },
    }
</script>
<style lang="less">
    .demo-Circle-custom {
        & h1 {
            color: #3f414d;
            font-size: 28px;
            font-weight: normal;
        }

        & p {
            color: #657180;
            font-size: 14px;
            margin: 10px 0 15px;
        }

        & span {
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;

            &:before {
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -15px;
            }
        ;
        }

        & span i {
            font-style: normal;
            color: #3f414d;
        }
    }
</style>