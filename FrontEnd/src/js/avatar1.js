
document.querySelector("#myFileInput").addEventListener("change", function() {
    // console.log(this.files);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        // console.log(reader.result);
        window.localStorage.setItem("recent-image", reader.result);
    });
    reader.readAsDataURL(this.files[0]);
})   
