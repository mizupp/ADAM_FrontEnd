let account_ID = window.location.href.split("=")[1];

const logoBtn = document.getElementById("logoadam");
logoBtn.addEventListener("click", () => {
    window.location.assign(`newdashboard.html?account_id=${account_ID}`);
})