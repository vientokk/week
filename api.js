const express = require("express");
const app = express();
const PORT = 3000;
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(PORT, () => {
    console.log('start server');
})

//console.log(uuidAPIKey.create());

const key = {
    apiKey: 'G65F6EQ-CHH4X1R-M8D7QY4-M06FPWQ',
    uuid: '818af33a-6462-4e87-a21a-7bf8a00cfb72'
}

app.get('/api/users/:apikey/:type', async (req, res) => {
    let { apikey, type } = req.params;

    if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey not valid');
    } else {
        if (type == 'seoul') {
            let data = [
                { name: "홍길동", city: "seoul" },
                { name: "김철수", city: "seoul" }
            ];
            res.send(data);
        } else if (type == 'jeju') {
            let data = [
                { name: "박지성", city: "jeju" },
                { name: "손흥민", city: "jeju" }
            ];
            res.send(data);
        }
        else {
            res.send('type is not correct.');
        }
    }
});


app.get('/api/sales/:apikey/:year', async (req, res) => {
    let { apikey, year } = req.params;

    if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
        res.send('apikey is not valid');
    } else {
        if (year == '2019') {
            let data = [
                { product: "반도체", amount: 1312331 },
                { name: "냉장고", amount: 21211 }
            ];
            res.send(data);
        } else if (year == '2020') {
            let data = [
                { product: "반도체", amount: 41312331 },
                { name: "냉장고", amount: 621211 }
            ];
            res.send(data);
        }
        else {
            res.send('type is not correct.');
        }
    }
});