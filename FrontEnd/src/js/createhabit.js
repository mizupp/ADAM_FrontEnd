// Create new hbit function 

document.getElementById("formhab").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = Object.create( new FormData(e.target));

    const options = {
        method: "POST",
        headers: {
            Authorization: localStorage.getItem("session"),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            account_id: window.location.href.split("=")[1],
            habit_name: form.get("habit"),
            frequency: form.get("frequency"),
            units: form.get("units"),
            time_period: form.get("time"),
            streak: 0
            // The other inputs are not in the database
        })
    }

    const result = await fetch(`http://localhost:3000/habits`, options);

    if (result.status == 201) {
        window.location.reload();
    }
})