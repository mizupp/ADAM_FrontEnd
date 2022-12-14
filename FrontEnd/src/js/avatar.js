document.addEventListener("DOMContentLoaded", async () => {
    const recentImageDataUrl = window.localStorage.getItem("recent-image");
    const id = window.location.href.split("=")[1];
    if(recentImageDataUrl){
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl)
    }

    const getOptions = {
        headers: {
            Authorization: window.localStorage.getItem("session"),
        }
    }
    const response = await fetch(`http://localhost:3000/users/${id}`, getOptions)
    const data = await response.json();

    data.avatar = recentImageDataUrl;
    

    const putOptions = {
        method: "PUT",
        headers: {
            Authorization: window.localStorage.getItem("session"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    console.log(JSON.stringify(data))
    
    const responsePut = await fetch(`http://localhost:3000/users/${id}`, putOptions);
    const putData = await responsePut.json();
    // console.log(putData.avatar.length);
    
})

