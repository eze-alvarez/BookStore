export function save (string, data) {
  window.localStorage.setItem(string, JSON.stringify(data))
}

export function recover (string, opcionB) {
  const data = window.localStorage.getItem(string)
  return data
    ? JSON.parse(data)
    : opcionB
}
