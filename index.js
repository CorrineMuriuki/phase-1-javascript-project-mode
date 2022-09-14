document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

const myForm = "Registration Form";
function Ecoform(){
    document.getElementById("demo").innerHTML =
"The title of this document is: " + document.title;
 return Ecoforest;
}
function myfirstName(nameofPerson){
  return nameofPerson;
}
function mylastName(nameofPerson){
    return nameofPerson;
}
//Fetch requests for API
const fetch = require('node-fetch');

const url = 'https://api.sendinblue.com/v3/smtp/email';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'}
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));



