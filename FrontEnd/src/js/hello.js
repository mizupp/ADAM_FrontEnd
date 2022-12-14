// //make it personal

let accountId;

document.addEventListener("DOMContentLoaded", () => {
    let greeting = document.getElementById('showUsername')  
    let greetingTop = document.getElementById("welcomeUsername")
    async function updateQuote() {
      let session = localStorage.getItem('session');
      accountId = window.location.href.split("=")[1];
      // console.log(accountId);
      const options = {
        headers: {
          Authorization: localStorage.getItem("session"),
        },
      };
      const response = await fetch(`http://localhost:3000/users/${accountId}`, options);
      const userData = await response.json();
      // console.log(userData);
      // console.log(userData.username);
      if (response.ok) {
        // Update DOM elements
        greeting.textContent = `Hello ${userData.username}!`
        greetingTop.textContent = `Welcome back, ${userData.username}!`
        const avatarImg= document.querySelector("#imgPreview");
        avatarImg.src = userData.avatar || "../src/img/avatar.png";
        
      } else {
        greeting.textContent = "An error occured";
        greetingTop.textContent = `Welcome back!`
        // console.log(userData);
      }
    }
    // // Attach an event listener to the `button`
    // button.addEventListener("click", updateQuote);
    // // call updateQuote once when page loads
    updateQuote();
  });

  const settingLink = document.getElementById("setting-link");
  settingLink.addEventListener("click", () => {
    window.location.assign(`settings.html?account_id=${accountId}`);
  })

  // const habitstatLink = document.getElementById("habit-stat-link");
  // habitstatLink.addEventListener("click",() => {
  //   window.location.assign(`habitstat.html?account_id=${accountId}`);
  // })

  const dashboardLink = document.getElementById("newdashboard-link");
  dashboardLink.addEventListener("click", () => {
    window.location.assign(`newdashboard.html?account_id=${accountId}`);
  })


