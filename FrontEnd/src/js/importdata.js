const url = "https://adam-backend.onrender.com";

document.addEventListener("DOMContentLoaded", async () => {
    const options = {
        headers: {
            Authorization: window.localStorage.getItem("session")
        }
    };
    
    try{
        const habitResponse = await fetch(`${url}/habits/${accountId}`, options);
        const habitData = await habitResponse.json();
        
        
    }
    catch (err){
        console.log(err);
    }
});


