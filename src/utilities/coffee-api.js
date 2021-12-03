import sendRequest from './send-request';

const BASE_URL = '/api/coffee';

export function search(arg) {
    return sendRequest(`${BASE_URL}?search=${search}`);
}