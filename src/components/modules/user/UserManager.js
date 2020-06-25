const remoteURL = "http://localhost:5002"

export default
{
    get(username) {
    return fetch(`${remoteURL}/users?username=${username}`).then(result => result.json())
  },

  getUserParties(id) {
    return fetch(`${remoteURL}/users/${id}?_embed=parties`).then(result => result.json())
  }

//   post(newUser) {
//     return fetch(`${remoteURL}/users`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newUser)
//     }).then(data => data.json())
// }

  

}