// require('./login');
document.querySelector("#myFileInput").addEventListener("change", function() {
    console.log(this.files);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        console.log(reader.result);
        localStorage.setItem("recent-image", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
})   

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem("recent-image");

    if(recentImageDataUrl){
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl)
    }
})

