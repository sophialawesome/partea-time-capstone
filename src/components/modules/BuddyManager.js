const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/buddies/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/buddies`).then(result => result.json())
  },
  post(newBuddy) {
    return fetch(`${remoteURL}/buddies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBuddy)
    }).then(data => data.json())
},
  delete(id) {
    return fetch(`${remoteURL}/buddies/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
  
}