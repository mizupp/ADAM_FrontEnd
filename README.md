# ADAM_FrontEnd

:apple: :leaves: :apple: :leaves: :apple:

Active Day, Active Mind is a habit tracking website aimed at helping users maintain healthy habits. Users are able to track a maximum of 5 habits and can create thier own personalised habits.

This repo contains the HTML, CSS and JavaScript files for the website.

## Motivation :muscle:

## Installation and usage 

### Installation :inbox_tray:

Note: You can find the repository for the connected API [here](https://github.com/adamminchella/adam_backend).

- Clone or download this repository.
- Ensure you have [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser) extension installed in VSCode.
- Ensure the server in the [backend repository](https://github.com/adamminchella/adam_backend) is running.


### Usage :open_file_folder:

- (In VSCode): Right-click on `newmain.html` in the root directory and choose `Open in Other Brousers` to launch the website in the browser of you choice (Google Chrome is recommended). 


## Technologies :desktop_computer:

- HTML
- Javascript
- CSS
- Deployment: [Netlify](https://www.netlify.com/)


## Process :bar_chart:

- Started with a day planning, using tools such as Figma and creating todo tasks in a Trello board.
- Split up work into backend and frontend:
  - Frontend was split up into the different webpages.
- Once server was working, testing was done.
- Connected up frontend and backend.
- Worked together to fix any bugs and finalise small featues.
- Deployed website.


## Challeges and Wins

### Challenges :no_entry:


- Streaks :cut_of_meat:

The implimentation of the streaks was a challenge on a couple of levels as well as on both the fontend and backend.

We first had to find a way of implimenting a count on top of the streak value which was already in the database and displaying it when the "completed task" button was clicked. 
This was relatively easily acheived, however ensuring that the streak could only increment by one, once a day involved using a timestamp. 
When a user clicks the "completed task" button, the timestamp of the that click will be compared to the timestamp of the previous click.
Then, only if the timestamp of the previous is the previous date or before, will the streak count increment by one.
The website will also check if the last click was over a day ago and if so, it will start the count back to 1.

### Wins :trophy:

Avatar 

## Bugs :bug:

None so far :crossed_fingers:


## Future Features :timer_clock:

Currently, progress on the habits is dislpayed by a streak giivng the number of days ina row a habit has been completed.

- Progress bar
- Calandar ???
 


## Contributors 

[adamminchella](https://github.com/adamminchella) :man_technologist:
[mizupp](https://github.com/mizupp) :woman_technologist:
[PollyFenne](https://github.com/PollyFenne) :woman_technologist:
[Adam-Dowsett](https://github.com/Adam-Dowsett) :man_technologist: