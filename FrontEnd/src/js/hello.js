// //make it personal

// document.addEventListener("DOMContentLoaded", () => {
//     let greeting = document.getElementById('showUsername')  
  
//     async function updateQuote() {
//         // let id = localStorage.getItem('id');
//         console.log(id)
//       const response = await fetch(`http://localhost:3000/users/${data.account_id}`);
//       const data = await response.json();
//       console.log("wtf" + data.username);
//       if (response.ok) {
//         // Update DOM elements
//         greeting.innerHTML = `Hello ${data.username}!`
//       } else {
//         greeting.textContent = "An error occured";
//         console.log("wtf" + data);
//       }
//     }
//     // // Attach an event listener to the `button`
//     // button.addEventListener("click", updateQuote);
//     // // call updateQuote once when page loads
//     updateQuote();
//   });

// // 
// // 
// // console.log(localStorage.getItem('session')) 

// // document.addEventListener("DOMContentLoaded", async (e) => { 
// //     helloPerson(e);
// // })


// // async function helloPerson(e){
// //     e.preventDefault();
// //     try {
// //         let userID = localStorage.getItem('id')
// //         const url = `http://localhost:3000/users/login`;

// //         const options = {
// //             method: 'GET',
// //             headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('session') },
// //             body: JSON.stringify(Object.fromEntries( ))
// //         }
// //         const r = await fetch(`${url}/users`, options)
// //         // const response = await fetch(`${API_URL}/users/${account_id}`, options);
// //         console.log("hello" + data);
// //         const data = await r.json()
// //         if (data.err){ throw Error(data.err) }
// //     } catch (err) {
// //         console.warn(err);
// //     }
// // }
