const form2 = document.querySelector("loginForm");

form2.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("logusername").value;
  const password = document.getElementById("logpassword").value;

  const url = `http://localhost:3000/users/login`;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  };

  const response = await fetch(url, options);

  if (response.status == 200) {
    const data = await response.json();
    console.log(data);
    localStorage.setItem("session", data.session);
    window.location.assign(`index.html?account_id=${data.account_id}`);
  } else {
    alert("You've fucked it");
  }
});
