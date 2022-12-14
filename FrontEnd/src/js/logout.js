
window.addEventListener("load", async () => {
  const options = {
    headers: {
      Authorization: localStorage.getItem("session"),
    },
  };

  const response = await fetch("https://adam-backend.onrender.com/habits", options);
  const data = await response.json();
  // console.log(data);
  // console.log("this are habits");
  if (response.status == 401) {
    window.location.assign("newmain.html");
  }
});

const logOut = document.getElementById("logout-btn");
  
logOut.addEventListener("click", async () => {
  const accountId = window.location.href.split("=")[1];
  const url = `https://adam-backend.onrender.com/users/logout/${accountId}`;

  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  localStorage.clear();
  window.location.assign("newmain.html");
});