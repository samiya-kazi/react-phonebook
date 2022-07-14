 const baseUrl = 'http://localhost:3030/contacts';
 
 export function getContacts () {
  return fetch(baseUrl)
    .then(result => result.json())
    .catch(err => console.log(err));
 }


 export function postContact (contact) {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-type': 'application/json'
    }
  }

  return fetch(baseUrl, options)
    .then(result => result.json())
    .catch(err => console.log(err));
 }



 export function deleteContact(id) {
  const options = {
    method: 'DELETE'
  }

  return fetch(`${baseUrl}/${id}`, options)
    .then(result => result.json())
    .catch(err => console.log(err));
 }