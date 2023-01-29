const fetch = require('node-fetch');
const Coffee = require('../../models/coffee');

const SEARCH_URL ='https://api.sampleapis.com/coffee';

module.exports = {
    searchHot,
    searchCold, 
    create,
    getAll,
    findOneAndDelete
};

async function findOneAndDelete(req, res) {
    await Coffee.findByIdAndDelete(req.params.id);
    const drinkList = await Coffee.find({});
    res.json(drinkList);
}

async function getAll(req, res) {
    const items = await Coffee.find({})
    res.json(items);
}

async function create(req, res) {
    const item = await Coffee(req.body);
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

