const url = "http://localhost:3000";

const delBtn = document.getElementById("deleteaccountbtn");

delBtn.addEventListener("click", async () => {
    try{
        const accountId = window.location.href.split("=")[1];
        delOptions = {
            method: "DELETE",
            headers: {
                Authorization: localStorage.getItem("session")
            }
        };
        const response = await fetch(`${url}/users/${accountId}`, delOptions);
        window.location.assign("newmain.html");
    } catch(err){
        window.location.assign(`newdashboard.html?account_id=${data.account_id}`)
    }
})