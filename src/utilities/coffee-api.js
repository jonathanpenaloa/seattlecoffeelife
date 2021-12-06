import sendRequest from './send-request';

const BASE_URL ='/api/coffee';

export function searchHot() {
    return sendRequest(`${BASE_URL}/hot`, 'POST');
}

export function searchCold() {
    return sendRequest(`${BASE_URL}/iced`, 'POST');
}