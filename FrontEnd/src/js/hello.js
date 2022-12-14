// //make it personal

document.addEventListener("DOMContentLoaded", () => {
    let greeting = document.getElementById('showUsername')  
    let greetingTop = document.getElementById("welcomeUsername")
    async function updateQuote() {
      let session = localStorage.getItem('session');
      let accountId = window.location.href.split("=")[1];
      console.log(accountId);
      const options = {
        headers: {
          Authorization: localStorage.getItem("session"),
        },
      };
      const response = await fetch(`http://localhost:3000/users/${accountId}`, options);
      const userData = await response.json();
      console.log(userData);
      console.log(userData.username);
      if (response.ok) {
        // Update DOM elements
        greeting.textContent = `Hello ${userData.username}!`
        greetingTop.textContent = `Welcome back, ${userData.username}!`
        const avatarImg= document.querySelector("#imgPreview");
        console.log(userData.avatar);
        avatarImg.src = userData.avatar;
        
      } else {
        greeting.textContent = "An error occured";
        greetingTop.textContent = `Welcome back!`
        console.log(userData);
      }
    }
    // // Attach an event listener to the `button`
    // button.addEventListener("click", updateQuote);
    // // call updateQuote once when page loads
    updateQuote();
  });

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
