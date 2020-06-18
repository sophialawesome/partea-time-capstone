const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/teas/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/teas`).then(result => result.json())
  },
  post(newTea) {
    return fetch(`${remoteURL}/teas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTea)
    }).then(data => data.json())
},
  delete(id) {
    return fetch(`${remoteURL}/teas/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}
