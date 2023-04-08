const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const timeslot = document.getElementById("timeslot").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  const appointment = {
    name,
    date,
    timeslot,
    category,
    description
  };

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  const isBooked = appointments.some(function (appt) {
    return appt.date === date && appt.timeslot === timeslot;
  });

  if (isBooked) {
    alert("This time slot is already booked. Please select another one.");
  } else {
    appointments.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    alert("Registration successful!");
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("timeslot").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
  }
});


// Get the logout button
const logoutBtn = document.getElementById("logout-btn");

// Add a click event listener to the logout button
logoutBtn.addEventListener("click", function() {
  window.reload;
  // Redirect the user to the login page
  window.location.href = "login.html";
});

var swiper = new swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,

    },
    991: {
      slidesPerView: 3,
    },
  },
});