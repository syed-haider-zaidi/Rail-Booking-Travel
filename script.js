// BOOKING FUNCTION
function login(){
  alert("login clicked")
}
function signuo(){
  alert("signup clicked")
}
function bookTicket() {
  const from = document.querySelector('input[placeholder="From"]').value.trim();
  const to = document.querySelector('input[placeholder="To"]').value.trim();
  const date = document.querySelector('input[type="date"]').value;
  const trainClass = document.querySelector('select').value;

  // Validation
  if (!from || !to || !date) {
    alert("Please fill all fields!");
    return;
  }

  if (from.toLowerCase() === to.toLowerCase()) {
    alert("From and To cannot be same!");
    return;
  }

  // Fake train data
  const trains = [
    { name: "Rajdhani Express", time: "06:00 AM" },
    { name: "Shatabdi Express", time: "09:00 AM" },
    { name: "Duronto Express", time: "11:30 AM" }
  ];

  let resultHTML = `<h3>Available Trains from ${from} to ${to}</h3>`;

  trains.forEach(train => {
    resultHTML += `
      <div style="background:white; padding:10px; margin:10px 0;">
        <strong>${train.name}</strong> - ${train.time} - ${trainClass}
        <button onclick="confirmBooking('${train.name}')">Book</button>
      </div>
    `;
  });

  // Show result
  let resultBox = document.getElementById("results");

  if (!resultBox) {
    resultBox = document.createElement("div");
    resultBox.id = "results";
    resultBox.style.padding = "20px";
    document.body.appendChild(resultBox);
  }

  resultBox.innerHTML = resultHTML;
}


// CONFIRM BOOKING
function confirmBooking(trainName) {
  alert(`✅ Ticket booked successfully in ${trainName}`);
}


// SUBSCRIBE FUNCTION
document.addEventListener("DOMContentLoaded", () => {
  const subBtn = document.querySelector(".subscribe button");

  subBtn.addEventListener("click", () => {
    const email = document.querySelector('.subscribe input').value;

    if (!email.includes("@")) {
      alert("Enter valid email!");
      return;
    }

    alert("Subscribed successfully!");
  });
});