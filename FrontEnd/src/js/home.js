// Script for the home page

window.addEventListener("load", updateMain);


function updateMain() {
// FETCH DATA

// Fetch all habit data
// Should I be fetching by habit_id or account_id?
    async function getAllHabits(account_id) {
        const url = (`http://localhost:3000/users/${account_id}`) 
        let habitData;
        try {
            await fetch(url)
            .then((res) => res.json)
            .then((data) => {
                habitData = data
            })
            console.log(JSON.stringify(habitData))
            return habitData
        }
        catch(err) {
            console.warn(err)
        }
    } 


    // Fetch username
    // Fetch user data to display username
    // This should be user_id?
    // async function getUsername(account_id) {
    //     const url = (`http://localhost:3000/users/${account_id}`) 
    //     let userData;
    //     try {
    //         await fetch(url)
    //         .then((res) => res.json)
    //         .then((data) => {
    //             userData = data
    //         })
    //         return userData
    //     }
    //     catch(err) {
    //         console.warn(err)
    //     }
    // } 

// DISPLAY DATA

// Pass each habit to be crated as a habit card
    async function loadHabits() {
        habitData.forEach(h => {
            createHabit(h)
        })
            
    };

    function createHabit(habitData) {

        const habit = document.createElement('div')
        habit.className = 'habit'

        const title = document.createElement('h1')
        title.className = 'title'

        const content = document.createElement('h2')
        content.className = 'content'

        title.textContent = `${habitData.habit_name}`
        content.textContent = `${habitData.content}`

        habit.appendChild(title)
        habit.appendChild(content)
    }

    function addUserName(habitData) {

        const name = document.createElement('span')
        name.className = 'name'

        name.textContent = `${habitData.username}`
    }


// DELETE

// Delete an existing habit
    async function deleteHabit(habit_id) { // What should be in the brackets?
        try {
            const options = {method: "DELETE"}
            response = await fetch(`http://localhost:3000/habit/${habit_id}`, options)
            
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

    function renderDelButton(habitData) { // What should be here?
        const habit = document.querySelector('.habit')
        const del = document.createElement("button")
        del.textContent = "Delete Habit"
        del.onclick = () => deleteHabit(habitData.habit_id)
        habit.appendChild(del)    
    }

}