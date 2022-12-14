// const { text } = require("express");
const container = document.querySelector("main");
const search = document.querySelector(".search label");
const expander = document.querySelector("main .menu .expander");
const current = document.querySelector(".current");
const menuItems = document.querySelectorAll("main .menu .primary .menu-item");
const mainCards = document.querySelectorAll("main .dashboard .card");


const url = 'http://localhost:3000';

document.addEventListener("DOMContentLoaded", async () => {
    const accountId = window.location.href.split("=")[1];
    const options = {
        headers: {
            Authorization: window.localStorage.getItem("session")
        }
    };
    
    try{
        const habitResponse = await fetch(`${url}/users/habits/${accountId}`, options);
        const habitData = await habitResponse.json();
      

        // habitData.forEach((habit) => newCard(habit))
        // console.log(habitData)
        // console.log(habitData[0]);
        if(habitResponse.ok){
        // createHabitCard();
        for (let i =0; i < habitData.length; i++) {
          // console.log(habitData[i])
          newCard(habitData[i])
        }
        // habitData.forEach((habit) => newCard(habit));
        // newCard(habitData);
        // dummyData(habitData);
        
       } 
       else{
        
       }

    }
    catch (err){
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


})

const dummyData = (hb) => {
    console.log(hb)
    mainCards.forEach((card, i) => {
      card.querySelector(".title").innerText =
      `${hb.name}`;
      card.querySelector(".streak").innerText =
      `${hb.streak}`;
      card.querySelector(".frequency").innerText =
      `${hb.frequency}`;
      card.querySelector(".startDate").innerText =
      `${hb.id}`;
      
    });
  };

const newCard = (hb) => {

    const col = document.createElement("div")
    col.classList.add("column");
    const node = document.createElement("div");
    node.classList.add("card");
    const name = document.createElement("a");
    name.classList.add("title");
   
    const textnode = document.createTextNode(`${hb.name}`);
    name.appendChild(textnode);
    col.appendChild(node);
    node.appendChild(name);
    const pquantity = document.createTextNode("Quantity")
    const pstreak = document.createTextNode("Streak");
    const pfreq= document.createTextNode("Frequency");
    const pstart = document.createTextNode("Start");
    const textnode2 = document.createTextNode(`${hb.frequency}`);
    const textnode3 = document.createTextNode(`${hb.streak}`);
    const textnode4 = document.createTextNode(`${hb.id}`);
    const textnode5 = document.createTextNode(`${hb.id}`);

    node.appendChild(pstreak);
    node.appendChild(textnode2);
    node.appendChild(pfreq);
    node.appendChild(textnode3);
    node.appendChild(pstart);
    node.appendChild(textnode4);
    node.appendChild(pquantity);
    node.appendChild(textnode5);
    // node.appendChild(textnode4);
    var piey = document.getElementsByClassName("cardcolumn")[0];
    piey.appendChild(node);

  }