const avatar = document.getElementById("myFileInput");

avatar.addEventListener("change", function() {
    console.log(this.files);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        console.log(reader.result);
        window.localStorage.setItem("recent-image", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
})   

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = window.localStorage.getItem("recent-image");

    if(recentImageDataUrl){
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl)
    }
})