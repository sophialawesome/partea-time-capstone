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
update(editedParty) {
  return fetch(`${remoteURL}/parties/${editedParty.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedParty)
  }).then(data => data.json());
},
update(editedBuddy) {
  return fetch(`${remoteURL}/buddies/${editedBuddy.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedBuddy)
  }).then(data => data.json());
},
  delete(id) {
    return fetch(`${remoteURL}/buddies/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
  
}