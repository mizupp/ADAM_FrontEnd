const container = document.querySelector("main");
const search = document.querySelector(".search label");
const expander = document.querySelector("main .menu .expander");
const current = document.querySelector(".current");
const menuItems = document.querySelectorAll("main .menu .primary .menu-item");
const mainCards = document.querySelectorAll("main .dashboard .card");


// Fix :active touch on mobiles
document.addEventListener("touchstart", () => {}, true);

// Search Expand
search.addEventListener("click", () => container.classList.toggle("search"));

// Main Menu
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    current.innerText = item.querySelector(".desc").textContent;
    menuItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

// Set Date, Time
const today = new Date();
const formatZero = (value) => value<10 ? '0'+value : value;
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Populate News
const dummyData = () => {
  mainCards.forEach((card, i) => {
    card.querySelector(".title").innerText =
      "This is my Habit Title";
    card.querySelector(
      ".content"
    ).innerText = "This is some random information about my habit that no one is going to read. Aliquam vitae laoreet purus. Vivamus tincidunt nibh rhoncus, varius libero dignissim, molestie odio. Aenean sit amet felis et lectus viverra elementum. In quis tortor dignissim, ultrices odio et, dignissim quam. Donec scelerisque lacinia dolor, a pulvinar enim auctor quis. Sed mollis faucibus lacus id sagittis. Nunc et fringilla ipsum, et dignissim erat. Vivamus leo lorem, iaculis tempor quam nec, malesuada ullamcorper ipsum...".slice(
      0,
      Math.round(Math.random() * -200)
    );
  });
};
dummyData();
