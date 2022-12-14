

function generateAvatar(text, foregroundColor = "white",backgroundColor = "black") {
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

canvas.width = 200;
canvas.height = 200;

// Draw background
context.fillStyle = backgroundColor;
context.fillRect(0, 0, canvas.width, canvas.height);

// Draw text
context.font = "bold 100px Assistant";
context.fillStyle = foregroundColor;
context.textAlign = "center";
context.textBaseline = "middle";
context.fillText(text, canvas.width / 2, canvas.height / 2);

return canvas.toDataURL("image/png");
}

//this is not running (not in any function)
document.getElementById("avatar").src = generateAvatar("Adam", "white", "#009578");

// document.addEventListener("DOMContentLoaded", async (e) => { 
//     e.preventDefault();
//     const response = await fetch(`${API_URL}/users/${account_id}`, options);
//     console.log(data)
// });



