const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/parties/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/parties`).then(result => result.json())
  },
  post(newParty) {
    return fetch(`${remoteURL}/parties`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newParty)
    }).then(data => data.json())
},
  delete(id) {
    return fetch(`${remoteURL}/parties/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}
