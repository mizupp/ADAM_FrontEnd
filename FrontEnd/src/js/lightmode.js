//dark mode storage
const toggleBtn = document.getElementById("chk");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
	document.body.classList.add('dark');
	localStorage.setItem("dark-mode", "enabled");
  };

  const disableDarkMode = () => {
	document.body.classList.remove('dark');
 	localStorage.setItem("dark-mode", "disabled");
  };
  
  if (darkMode === "enabled") {
	enableDarkMode(); // set state of darkMode on page load
  }
  
  toggleBtn.addEventListener("change", (e) => {
	darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
	if (darkMode === "disabled") {
	  enableDarkMode();
	} else {
	  disableDarkMode();
	}
  });
  