import sendRequest from './send-request';

const BASE_URL ='/api/coffee'; 

export function searchHot() {
    return sendRequest(`${BASE_URL}/hot`, 'POST');
}

export function searchCold() {
    return sendRequest(`${BASE_URL}/iced`, 'POST');
}

export function create(item) {
    return sendRequest(`${BASE_URL}/items`, 'POST', item);
}

export function getAll() {
    return sendRequest(`${BASE_URL}/myDrinks`);
  }

export function findOneAndDelete(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}