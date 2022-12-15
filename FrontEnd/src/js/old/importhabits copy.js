// const { text } = require("express");
Date.prototype.minusDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() - days);
  return date.getDate();
};

const container = document.querySelector("main");
const search = document.querySelector(".search label");
const expander = document.querySelector("main .menu .expander");
const current = document.querySelector(".current");
const menuItems = document.querySelectorAll("main .menu .primary .menu-item");
const mainCards = document.querySelectorAll("main .dashboard .card");
const tree = document.querySelectorAll(".branch");
console.log(tree);

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
        renderDelButton(habitData)[i];
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
  // const apple = document.createElement("div");
  // apple.classList.add("apples");
  for (let i = 0; i < 10; i++) {
    console.log("apple on the tree: works");
    // tree.appendChild(apple);
  }

  console.log(hb);

  // const col = document.createElement("div")
  // col.classList.add("column");
  const card = document.createElement("div");
  card.classList.add("card");
  const header = document.createElement("header");
  const name = document.createElement("a");
  name.classList.add("title");
  name.textContent = hb.name;
  header.appendChild(name);

  const streakLabel = document.createElement("p");
  console.log(hb.date);
  if (hb.date) {
    if (new Date(hb.date).getDate() < new Date().minusDays(1)) {
      streakLabel.textContent = `Streak: ${0}`;
    } else {
      streakLabel.textContent = `Streak: ${hb.streak}`;
    }
  } else {
    streakLabel.textContent = `Streak: ${0}`;
  }
  // console.log(+number[0], hb.date);
  // if (hb.date == +number[0]) {
  //   console.log("yes");
  // }
  // streakLabel.textContent = `Streak: ${hb.streak}`;
  // const streak = document.createElement("p");
  // streak.textContent = hb.streak;

  const frequencyLabel = document.createElement("p");
  frequencyLabel.textContent = `Frequency: ${hb.frequency} ${hb.units} per ${hb.time_period}`;
  // const frequency = document.createElement("p");
  // frequency.textContent = hb.frequency;

  // Quantity not needed?

  const quantityLabel = document.createElement("p");
  quantityLabel.textContent = `Quantity: ${hb.quantity}`;
  const quantity = document.createElement("p");
  quantity.textContent = hb.quantity;

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
    streakLabel.textContent = `Streak: ${updatedStreak.streak}`;
    console.log(updatedStreak._date, habitId);
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
  card.appendChild(quantityLabel);
  card.appendChild(task);
  // card.appendChild(quantity);
  // const textnode = document.createTextNode(`${hb.name}`);
  // name.appendChild(textnode);
  // col.appendChild(node);
  // node.appendChild(name);
  // const pquantity = document.createTextNode("Quantity")
  // const pstreak = document.createTextNode("Streak");
  // const pfreq= document.createTextNode("Frequency");
  // const pstart = document.createTextNode("Start");
  // const textnode2 = document.createTextNode(`${hb.streak}`);
  // const textnode3 = document.createTextNode(`${hb.frequency}`);
  // const textnode4 = document.createTextNode(`${hb.id}`);
  // const textnode5 = document.createTextNode(`${hb.id}`);

  // node.appendChild(pstreak);
  // node.appendChild(textnode2);
  // node.appendChild(pfreq);
  // node.appendChild(textnode3);
  // node.appendChild(pstart);
  // node.appendChild(textnode4);
  // node.appendChild(pquantity);
  // node.appendChild(textnode5);
  // // node.appendChild(textnode4);
  var piey = document.getElementsByClassName("cardcolumn")[0];
  piey.appendChild(card);

  // Delete function and add delete button habi

  async function deleteHabit(hb) {
    // What should be in the brackets?
    try {
      const habitId = hb.id;
      const options = { method: "DELETE" };
      response = await fetch(`http://localhost:3000/habit/${habitId}`, options);

      if (response.status == 200) {
        window.location.reload();
      } else {
        console.log("Habit could not be deleted");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  // Adding delete button to habit card

  function renderDelButton(hb) {
    // What should be here?
    const del = document.createElement("button");
    del.textContent = "Delete Habit";
    del.onclick = () => deleteHabit(hb.habit_id);
    card.appendChild(del);
  }
};

