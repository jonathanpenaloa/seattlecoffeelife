const fetch = require('node-fetch');
// const Coffee = require('../../models/');

const SEARCH_URL ='https://api.sampleapis.com/coffee';

module.exports = {
    searchHot,
    searchCold
};

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

