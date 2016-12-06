import fetch from 'isomorphic-fetch';
import { buildQueryString, bindUriParams } from './utils';
import methods from './methods';

class Api {
  uri = null;
  auth = null;

  constructor({
    protocol = 'http', host = 'localhost',
    port = '12900', basePath = '/', auth = '',
  }) {
    this.uri = `${protocol}://${host}:${port}${basePath}`;
    this.auth = auth;
  }
}

Object.keys(methods).forEach((name) => {
  const method = methods[name];

  Api.prototype[name] = function (params = {}, uriParams = {}) {
    const valid = method
      .parameters
      .filter(param => param.required && !params[param.name]);

    if (valid.length > 0) {
      return Promise.reject(`Missing require fields: ${valid.map(param => param.name).join()}`);
    }

    let uri = `${this.uri}${bindUriParams(method.path, uriParams)}`;
    if (method.method === 'GET' && params) {
      uri += `?${buildQueryString(params)}`;
    }

    return fetch(uri, {
      method: method.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.auth,
      },
      body: method.method !== 'GET' && params
        ? JSON.stringify(params)
        : null,
    })
      .then(response => response.json());
  };
});

export default config => new Api(config);
