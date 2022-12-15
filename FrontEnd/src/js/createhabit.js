// Create new habit function

document.getElementById("formhab").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  console.log(form);

  const options = {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("session"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      account_id: window.location.href.split("=")[1],
      habit_name: form.get("habit"),
      frequency: form.get("frequency"),
      units: form.get("units"),
      time_period: form.get("time"),
      streak: 0,
      _date: "",
      // The other inputs are not in the database
    }),
  };

  const result = await fetch(`http://localhost:3000/habits`, options);
  console.log(result);
  if (result.status == 201) {
    window.location.reload();
  } else {
    console.log("Habit not created");
  }
});
