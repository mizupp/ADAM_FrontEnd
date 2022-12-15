// const { text } = require("express");
const container = document.querySelector("main");
const search = document.querySelector(".search label");
const expander = document.querySelector("main .menu .expander");
const current = document.querySelector(".current");
const menuItems = document.querySelectorAll("main .menu .primary .menu-item");
const mainCards = document.querySelectorAll("main .dashboard .card");



const url = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", async () => {
  const accountId = window.location.href.split("=")[1];
  const options = {
    headers: {
      Authorization: window.localStorage.getItem("session"),
    },
  };

  try {
    const habitResponse = await fetch(
      `${url}/users/habits/${accountId}`,
      options
    );
    const habitData = await habitResponse.json();

    // habitData.forEach((habit) => newCard(habit))
    // console.log(habitData)
    // console.log(habitData[0]);
    if (habitResponse.ok) {
      // createHabitCard();
      
      for (let i = 0; i < habitData.length; i++) {
        // console.log(habitData[i])
        newCard(habitData[i]);
      }
      // habitData.forEach((habit) => newCard(habit));
      // newCard(habitData);
      // dummyData(habitData);
    } else {
    }
    
  } catch (err) {
    console.log(err);
  }

  // function createHabitCard(habitData) {

  //     const habit = document.createElement('div')
  //     habit.className = 'card'

  //     const title = document.createElement('h1')
  //     title.className = 'title'

  //     // const content = document.createElement('h2')
  //     // content.className = 'content'

  //     title.textContent = `${habitData.habit_name}`
  //     // content.textContent = `${habitData.content}`

  //     habit.appendChild(title)
  //     habit.appendChild(content)
  // }
});

const dummyData = (hb) => {
  console.log(hb);
  mainCards.forEach((card, i) => {
    card.querySelector(".title").innerText = `${hb.name}`;
    card.querySelector(".streak").innerText = `${hb.streak}`;
    card.querySelector(".frequency").innerText = `${hb.frequency}`;
    card.querySelector(".startDate").innerText = `${hb.id}`;
  });
};

const newCard = (hb) => {
  // apple loading
  const tree = document.querySelectorAll(".branch"); 
  const leaves = document.querySelectorAll(".leaf");
  const numLeaves = leaves.length;
  const ranLeaf = Math.floor(Math.random() *(numLeaves))
  const leaf = leaves[ranLeaf];
  leaf.setAttribute("class", "apples");
  // habit card loading
  const card = document.createElement("div");
  card.classList.add("card");
  const header = document.createElement("header");
  const name = document.createElement("a");
  name.classList.add("title");
  name.textContent = hb.name;
  header.appendChild(name);
  
  const streakLabel = document.createElement("p");
  streakLabel.classList.add("streakLeaf");
  
  if (hb.date) {
    let yesterday = dayjs().subtract(1, "d");
    if (dayjs(hb.date).isBefore(yesterday, "day")) {
      streakLabel.textContent = `Streak: ${0}`;
    } else {
      streakLabel.textContent = `Streak: ${hb.streak}`;
    }
  } else {
    streakLabel.textContent = `Streak: ${0}`;
  }

// HERE /////////////////////////////////////
  const frequencyLabel = document.createElement("p");
  frequencyLabel.textContent = `Frequency: ${hb.frequency}
                                 ${hb.units} per ${hb.time_period}`;


  // const quantityLabel = document.createElement("p");
  // quantityLabel.textContent = `Quantity: ${hb.quantity}`;
  // const quantity = document.createElement("p");
  // quantity.textContent = hb.quantity;

  const task = document.createElement("div");
  task.classList.add("task");
  const checkbox = document.createElement("div");
  checkbox.classList.add("checkboxtask");

  checkbox.addEventListener("click", async () => {
    // Increase streak by 1
    // Send in a PUT request to http://localhost:3000/habits
    hb.streak++;
    const habitId = hb.id;
    const url = `http://localhost:3000/habits/${habitId}`;
    const options = {
      method: "PUT",
      headers: {
        Authorization: localStorage.getItem("session"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account_id: hb.account_id,
        habit_name: hb.name,
        frequency: hb.frequency,
        units: hb.units,
        time_period: hb.time_period,
        streak: hb.streak,
        habit_id: hb.id,
        _date: new Date().toDateString(),
      }),
    };
    const response = await fetch(url, options);
    const updatedStreak = await response.json();
    streakLabel.classList.add("streakLeafaf");
    streakLabel.textContent = `Streak: ${updatedStreak.streak}`;
    // console.log(updatedStreak._date, habitId);
  });

  const description = document.createElement("description");
  description.classList.add("description");
  description.textContent = "I completed the task!";

  task.appendChild(checkbox);
  task.appendChild(description);

  card.appendChild(header);
  card.appendChild(streakLabel);
  // card.appendChild(streak);
  card.appendChild(frequencyLabel);
  // card.appendChild(frequency);
  // card.appendChild(quantityLabel);
  card.appendChild(task);
  // Delete function and add delete button habi
  
  // Adding delete button to habit card
  const del = document.createElement("span");
  del.classList.add("delete-habit-btn")
  function renderDelButton(hb) {
    // del.textContent = "\u00D7";
    del.onclick = () => deleteHabit(hb.id);
    card.appendChild(del);
  }
  // Add event listener for when del button is presse
  async function deleteHabit(habitId) {
    try {
      console.log(`habitId is: ${habitId}`)

      const options = { method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("session") }
      };
      response = await fetch(`http://localhost:3000/habits/${habitId}`, options);
      
      if (response.status == 204) {
        // card.remove();
        window.location.reload();
      } else {
        console.log("Habit could not be deleted");
      }

      } catch (err) {
        console.warn(err);
      }
  }
  
  renderDelButton(hb);
  let column = document.getElementsByClassName("cardcolumn")[0];
  column.appendChild(card);
};






