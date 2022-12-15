

const regform = document.getElementById("register-form");

regform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("regusername").value;
  const password = document.getElementById("regpassword").value;
  console.log("RegisterFunctionRuns");
  const url = `https://adam-backend.onrender.com/users/register`;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  };

  const response = await fetch(url, options);

  if (response.status == 201) {
    window.location.assign("newmain.html");
  } else {
    alert("Uh oh!");
  }
});