import sendRequest from './send-request';

const BASE_URL = '/api/coffee';

export function searchHot() {
    console.log('HOT-ROUT');
    return sendRequest(`${BASE_URL}/hot`);
}

export function searchCold() {
    console.log('COLD')
    return sendRequest(`${BASE_URL}/iced`);
}