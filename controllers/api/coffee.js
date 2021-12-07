const fetch = require('node-fetch');
const myCoffee = require('../../models/mycoffee');
const myCoffeeSchema = require('../../models/myCoffeeSchema');
// const Coffee = require('../../models/');

const SEARCH_URL ='https://api.sampleapis.com/coffee';

module.exports = {
    searchHot,
    searchCold, 
    create,
    getAll,
};

async function getAll(req, res) {
    const items = await myCoffee.find({})
    res.json(items);
}


async function create(req, res) {
    const item = await myCoffee(req.body);
    item.save();
    res.json(item);
}

async function searchHot(req, res) {
    await fetch(`${SEARCH_URL}/hot`)
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Bad call')
    })
    .then(data => {
        res.json(data)
    })
}
async function searchCold(req, res) {
    await fetch(`${SEARCH_URL}/iced`)
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Bad call')
    })
    .then(data => {
        res.json(data)
    })
}

