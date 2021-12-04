const fetch = require('node-fetch');
// const Coffee = require('../../models/');

const SEARCH_URL = 'https://api.sampleapis.com/coffee';

module.exports = {
    searchHot,
    searchCold
};

async function searchHot(req, res) {
    try{
        const resultsHot = await fetch(`${SEARCH_URL}/hot`).then((res) => res.json())
        console.log(resultsHot);
        res.json(resultsHot);
    } catch(e) {
        console.log(e);
        res.json('Error occurred');
    }
}
async function searchCold(req, res) {
    const resultsCold = await fetch(`${SEARCH_URL}/iced`)
    .then((res) => 
    res.json(resultsCold));
}
