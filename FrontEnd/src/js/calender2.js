
function calenderStuff(hb) {
  var eventsArray = [
    {
      title  : 'event1',
      start  : '2019-07-20'
    },
    {
      title  : 'event2',
      start  : '2019-08-05',
      end    : '2019-08-07'
    },
    {
      title  : 'event3',
      start  : '2019-09-03'
    },
    {
      title  : 'event3',
      start  : '2019-10-05'
    }
  ];


  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      height: 600,
      plugins: [ 'dayGrid', 'interaction' ],
      
      dateClick: function(info) {
          const cally = hb.calender;
          console.log("calender"+hb.name)
          alert('Habits for date: ' + info.dateStr);
          for (let i = 0; i < hb.length; i++) {
            for (let j = 0; j < hb.length; j++) {
              console.log(hb[i][j]);
              newcalenderStuff(hb[i][j])

          }
        }
        eventsArray.push({
          date: info.dateStr,
          title: "Habit has been added."
        });
        
        calendar.refetchEvents();
      },
    
      eventClick: function(info) {
        alert(info.event.title)
      },
    
      events: function(info, successCallback, failureCallback) {
        successCallback(eventsArray);
      }
  });

  calendar.render();

}

function newcalenderStuff(hb) {
  const card = document.createElement("div");
  card.classList.add("card");
  const header = document.createElement("header");
  const name = document.createElement("a");
  name.classList.add("title");
  name.textContent = hb.name;
  header.appendChild(name);
}
// var eventsArray = [
//     {
//       title  : 'event1',
//       start  : '2019-07-20'
//     },
//     {
//       title  : 'event2',
//       start  : '2019-08-05',
//       end    : '2019-08-07'
//     },
//     {
//       title  : 'event3',
//       start  : '2019-09-03'
//     },
//     {
//       title  : 'event3',
//       start  : '2019-10-05'
//     }
//   ];

// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');

//     var calendar = new FullCalendar.Calendar(calendarEl, {
//         height: 600,
//         plugins: [ 'dayGrid', 'interaction' ],
        
//         dateClick: function(info) {
//             alert('Clicked on: ' + info.dateStr);
          
//           eventsArray.push({
//             date: info.dateStr,
//             title: "test event added from click"
//           });
          
//           calendar.refetchEvents();
//         },
      
//         eventClick: function(info) {
//           alert(info.event.title)
//         },
      
//         events: function(info, successCallback, failureCallback) {
//           successCallback(eventsArray);
//         }
//     });

//     calendar.render();
//   });