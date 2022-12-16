

const delBtn = document.getElementById("deleteaccountbtn");

delBtn.addEventListener("click", async () => {
    try{
        if (confirm("Are you sure you want to delete the account?")){
            const accountId = window.location.href.split("=")[1];
        delOptions = {
            method: "DELETE",
            headers: {
                Authorization: localStorage.getItem("session")
            }
        };
        const response = await fetch(`http://localhost:3000/users/${accountId}`, delOptions);
        window.location.assign("newmain.html");
        }
        else{}
    } catch(err){
        window.location.assign(`newdashboard.html?account_id=${data.account_id}`)
    }
})