const axios = require('axios');
let fs = require('fs')
let zhongzheng500 = '000905';
let percentrank = function (x, vec) {
    var s = 0;
    var b = 0;
    for (var k = 0; k < vec.length; k++) {
        if (vec[k] < x) {
            s += 1;
        } else {
            b += 1;
        }
    }
    return s / (s + b - 1);
}
let changtou = function (stockCode) {
    let startTime = new Date(new Date().getTime() - 10 * 360 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10);
    let endTime = new Date().toISOString().substr(0, 10);
    console.log('endTime',endTime);
    axios.post('https://open.lixinger.com/api/a/indice/fundamental', {
        "token": "f9371285-245a-4c5c-9328-5b7680c9e39c",
        "startDate": startTime,
        "endDate": endTime,
        "stockCodes": [
            stockCode
        ],
        "metrics": [
            "pe_ttm.f_s.weightedAvg",
            "pb.f_s.weightedAvg"
        ]
    }).then(function (response) {
        if (response.data.code === 0) {
            let changtouArr = response.data.data.map(item => {
                return {
                    date: new Date(item.date).toISOString().substr(0, 10),
                    pe: item.pe_ttm.f_s.weightedAvg.latestVal,
                    pb: item.pb.f_s.weightedAvg.latestVal,
                }
            })
            let peArr = changtouArr.map(item => {
                return item.pe
            });
            let pbArr = changtouArr.map(item => {
                return item.pb
            });
            changtouArr = changtouArr.map(item => {
                item.pe_temperature = (percentrank(item.pe, peArr) * 100).toFixed(3) * 1;
                item.pb_temperature = (percentrank(item.pb, pbArr) * 100).toFixed(3) * 1;
                delete item.pe;
                delete item.pb;
                item.changtou_temperature = ((item.pe_temperature + item.pb_temperature) / 2).toFixed(3) * 1;
                return item
            });
            try {
                fs.unlinkSync("../public/changtou.json")
            } catch (err) {
                console.log(err)
            }
            fs.writeFile("../dist/changtou.json", JSON.stringify(changtouArr), function (err) {
                    if (err) throw err;
                    console.log('complete');
                }
            );
        }
    }).catch(function (error) {
        console.log(error);
    });
};

changtou(zhongzheng500);