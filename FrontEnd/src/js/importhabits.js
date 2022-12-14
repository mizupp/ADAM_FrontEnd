const url = 'http://localhost:3000';

document.addEventListener("DOMContentLoaded", async () => {
    const accountId = window.location.href.split("=")[1];
    const options = {
        headers: {
            Authorization: window.localStorage.getItem("session")
        }
    };
    
    try{
        const habitResponse = await fetch(`${url}/habits/${accountId}`, options);
        const habitData = await habitResponse.json();
        console.log(habitData);

        habitData.data.forEach((obj) => {
            console.log("hi!")
        });

    }
    catch (err){
        console.log(err);
    }

    function createHabitCard(habitData) {

        const habit = document.createElement('div')
        habit.className = 'habit'

        const title = document.createElement('h1')
        title.className = 'title'

        // const content = document.createElement('h2')
        // content.className = 'content'

        title.textContent = `${habitData.habit_name}`
        // content.textContent = `${habitData.content}`

        habit.appendChild(title)
        habit.appendChild(content)
    }

})

