// Getting all elements with the class "linkDontMove"
const stopLinkMovePage = document.getElementsByClassName("linkDontMove");

// Looping through each element and attaching a event listener
for (let i = 0; i < stopLinkMovePage.length; i++) {
    stopLinkMovePage[i].addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of the anchor element
    });
  }

// Dialog Box Window When Team Setup and Booking Buttons Are Clicked
const bookingTeamsButton = document.getElementsByClassName("booking-teams-button");

for (let i = 0; i < bookingTeamsButton.length; i++) {
    bookingTeamsButton[i].addEventListener("click", function(event) {
        alert("Welcome To Workflow!");
    })
}

// Getting References To The Header Button And The Team/Booking Section Container
const button = document.getElementById('popup-button');
const popup = document.getElementById('popup-container');

// Add click event listener to the button
button.addEventListener('click', function() {
    // Toggle the display of the popup container
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});