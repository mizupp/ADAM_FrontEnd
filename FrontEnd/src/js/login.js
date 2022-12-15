const logform = document.getElementById("login-form");

logform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("logusername").value;
  const password = document.getElementById("logpassword").value;
  console.log("LoginFunctionRuns");
  const url = `https://adam-backend.onrender.com/users/login`;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  };

  console.log("test")
  const response = await fetch(url, options);
  console.log(response.status)
  if (response.status == 200) {
    const data = await response.json();
    // console.log(data);
    localStorage.setItem("session", data.session);
    // localStorage.setItem("id", data.account_id);
    window.location.assign(`newdashboard.html?account_id=${data.account_id}`);
    
  } else {
    alert("Uh oh, it was wrong!");
  }
});
