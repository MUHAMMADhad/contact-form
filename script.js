// Basic Validation for the form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const inputFields = form.querySelectorAll("input, textarea");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById("FullName").value.trim();
    const email = document.getElementById("Email").value.trim();
    const subject = document.getElementById("Subject").value.trim();
    const message = document.getElementById("Message").value.trim();

    if (!fullName || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // If validation passes
    alert("Form submitted successfully!");
    form.reset(); // Reset the form after submission
  });
});
