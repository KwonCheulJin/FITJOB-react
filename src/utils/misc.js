//miscellious -> 여러가지 잡다한

export function getQueryString(params) {
  return `?${Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')}`
}