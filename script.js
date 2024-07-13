const form = document.getElementById("form");
const success = document.getElementById("success");
document.addEventListener("DOMContentLoaded", function () {
    
    // Hide the success message and show the form on page load
    success.style.display = "none";
    form.style.display = "flex";
  });


// Add event listener to the form submission
document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const errorMessage = document.querySelector(".error-message");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const confirmationMessage = document.getElementById("confirmation");

    // Validate email format
    if (!emailPattern.test(emailValue)) {
      emailInput.classList.add("invalid");
      errorMessage.style.display = "flex";
      form.style.display = "flex";
      success.style.display = "none";
    } else {
      emailInput.classList.remove("invalid");
      errorMessage.style.display = "none";
      form.style.display = "none";
      success.style.display = "flex";
      // Set the confirmation message with the entered email
      confirmationMessage.textContent = `${emailValue}`;
    }
  });

document.getElementById("dismiss-button").addEventListener("click", function () {
  success.style.display = "none";
  form.style.display = "flex";
});
