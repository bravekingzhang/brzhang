<template>
    <div>
        <Row type="flex" justify="center">
            <Col span="8" style="text-align: center"><h1>{{msg}}</h1></Col>
        </Row>
        <br>
        <Row type="flex" justify="center">
            <Col span="16">
                <Content>
                    <ve-line :data="chartData" :settings="chartSettings"></ve-line>
                </Content>
            </Col>
            <Col span="4" style="text-align: center">
                <ChangTouChat :temperature="temperature" :date="date"></ChangTouChat>
            </Col>
        </Row>
    </div>
</template>

<script>
    import Vue from 'vue'
    import ChangTouChat from '../components/ChangTouChart'
    import VeLine from 'v-charts/lib/line.common'

    Vue.component(VeLine.name, VeLine)
    export default {
        name: "Changtou",
        data() {
            return {
                msg: '长投温度历史数据一览表',
                changtouArr: '',
                chartSettings: {
                    labelMap: {
                        'date': '日期',
                        'pe_temperature': 'PE温度',
                        'pb_temperature': 'PB温度',
                        'changtou_temperature': '长投温度',
                    },
                    area: true
                }
            }
        },
        components: {
            ChangTouChat
        },
        computed: {
            temperature() {
                return this.changtouArr[this.changtouArr.length - 1].changtou_temperature
            },
            date(){
                return this.changtouArr[this.changtouArr.length - 1].date
            },
            chartData() {
                if (this.changtouArr) {
                    return {
                        columns: ['date', 'pe_temperature', 'pb_temperature', 'changtou_temperature'],
                        rows: this.changtouArr.reverse()
                    };
                } else {
                    return {}
                }

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
            }
        },
        mounted() {
            this.readTextFile('changtou.json', res => {
                this.changtouArr = JSON.parse(res)
            })
        }
    };
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
