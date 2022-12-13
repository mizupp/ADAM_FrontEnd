habitCard = document.querySelector(".catagory");
title = document.querySelector(".title");
content = document.querySelector(".content");
username = document.querySelector(".insertName")

// FETCH DATA

// Fetch all habit data
// Should I be fetching by habit_id or account_id?
async function getAllHabits(habit_id) {
    const url = (`http://localhost:3000/user${habit_id}`) 
    let habitData;
    try {
        await fetch(url)
        .then((res) => res.json)
        .then((data) => {
            habitData = data
        })
        return habitData
    }
    catch(err) {
        console.warn(err)
    }
} 


// Fetch username
// Fetch user data to display username
// This should be user_id?
async function getUsername(account_id) {
    const url = (`http://localhost:3000/user${account_id}`) 
    let userData;
    try {
        await fetch(url)
        .then((res) => res.json)
        .then((data) => {
            userData = data
        })
        return userData
    }
    catch(err) {
        console.warn(err)
    }
} 

// DISPLAY DATA

// Display the habit title
function displayTitle(habitData) {
    title.textContent = postData.title;
}

// Display habit content
function displayTitle(habitData) {
    content.textContent = postData.content; // Content is not in the sql schema 
}

// Display username
function displayUsername(userData) {
    username.textContent = userData.username;
}


// DELETE

// Delete an existing habit
async function deleteHabit(habit_id) { // What should be in the brackets?
    try {
        const options = {method: "DELETE"}
        response = await fetch(`http://localhost:3000/habit/${id}`, options)
        
        if (response.status == 200) {
            window.location.reload()
        }
        else {
            console.log("Habit could not be deleted")
        }
    }
    catch(err) {
        console.warn(err)
    }
}

// Adding delete button to habit card
function renderDelButton(habit) { // What should be here?
    const del = document.createElement("button")
    del.textContent = "Delete Habit"
    del.onclick = () => deleteHabit(habit.habit_id)
     habitCard.appendChild(del)    
}

// Add data to --myHeight variable from somewhere?
