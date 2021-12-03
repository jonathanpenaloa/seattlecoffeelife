const fetch = require('node-fetch');
// const Coffee = require('../../models/');

const SEARCH_URL = 'https://api.sampleapis.com/coffee';

module.exports = {
    searchHot,
    searchCold
};

async function searchHot(req, res) {
    try{
        const resultsHot = await fetch(`${SEARCH_URL}/hot`).then((res) => res.json());
        res.json(resultsHot);
    } catch(e) {
        console.log(e);
        res.json('Error occurred');
    }
}
async function searchCold(req, res) {
    try{
        const resultsCold = await fetch(`${SEARCH_URL}/cold`).then((res) => res.json());
        res.json(resultsCold);
    } catch(e) {
        console.log(e);
        res.json('Error occurred');
    }
}
