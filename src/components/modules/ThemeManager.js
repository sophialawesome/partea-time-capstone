const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/themes/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/themes`).then(result => result.json())
  },
  post(newTheme) {
    return fetch(`${remoteURL}/themes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTheme)
    }).then(data => data.json())
},
  delete(id) {
    return fetch(`${remoteURL}/themes/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}
