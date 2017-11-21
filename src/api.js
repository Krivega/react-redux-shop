const BASE_API_URL = '/api';

function fetch2(url, options) {
  options = {
    // your default options
    credentials: 'same-origin',
    redirect: 'error',
    ...options
  };

  return fetch(url, options);
}

function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

function get(url, options = {}) {
  options = {
    method: 'GET',
    ...options
  };

  if (options.data) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.data);
    delete options.data;
  }

  return fetch2(url, options);
}

function post(url, options = {}) {
  options = {
    method: 'POST',
    ...options
  };

  if (options.data) {
    options.headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(options.data);
    delete options.data;
  }

  return fetch2(url, options);
}

export function fetchListCities({ query }) {
  const url = `${BASE_API_URL}/getCities/`;

  return get(url, {
    mode: 'cors',
    data: { q: query, name_startsWith: query }
  });
}

export function fetchSendOrder({ address }) {
  const url = `${BASE_API_URL}/checkout/`;

  return post(url, {
    data: address
  });
}
