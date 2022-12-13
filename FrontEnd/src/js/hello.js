//make it personal
// const { log } = require('./login')
let greeting = document.getElementById('showUsername')
greeting.innerHTML = `Hello ${localStorage.getItem('username')}!`
console.log(localStorage.getItem('session')) 


const API_URL = require('./url');

async function helloPerson(e){
    e.preventDefault();
    try {
        let formData = new FormData(e.target)
        let userID = localStorage.getItem('id')
        formData.append('id', userID);
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('session') },
            body: JSON.stringify(Object.fromEntries(formData))
        }
        const r = await fetch(`${API_URL}/users`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err) }
        renderUsers([data]);
    } catch (err) {
        console.warn(err);
    }
}
