// create a functional calendar using javascript
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDate = date.getDate();
let currentDay = date.getDay();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendar = document.getElementById("calendar");

function createCalendar(year, month) {
  let firstDay = new Date(year, month).getDay();
  let lastDate = new Date(year, month + 1, 0).getDate();

  let monthName = monthNames[month];
  let monthYear = `${monthName} ${year}`;

  let calendarHeader = document.getElementById("calendar-header");
  calendarHeader.textContent = monthYear;

  let date = 1;
  let calendarBody = "";

  for (let i = 0; i < 6; i++) {
    let row = "";

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        // row += "<td></td>";
      } else if (date > lastDate) {
        break;
      } else {
        if (date === currentDate) {
          row += `<td class="active">${date}</td>`;
        }
        row += `<td>${date}</td>`;
        date++;
      }
    }

    // row += "</tr>";
    calendarBody += row;
  }

  calendar.innerHTML = calendarBody;
}

createCalendar(currentYear, currentMonth);

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", function () {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  createCalendar(currentYear, currentMonth);
});

nextBtn.addEventListener("click", function () {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  createCalendar(currentYear, currentMonth);
});

// get today
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth();
const todayDate = today.getDate();

$("#calendar td").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// get the selected date
const selectedDate = new Date(todayYear, todayMonth, todayDate);

const selectedDay = document.getElementById("selected-day");
selectedDay.textContent = todayDate + " " + monthNames[todayMonth].slice(0, 3);