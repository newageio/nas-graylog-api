const buildQueryString = params => Object
  .keys(params)
  .filter(value => params[value] !== '')
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  .join('&');

const bindUriParams = (uri, params) => uri.replace(/{([^}]*)}/g, (s, name) => params[name]);

export {
  buildQueryString,
  bindUriParams,
};
