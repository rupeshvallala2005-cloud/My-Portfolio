// Show a welcome message in the browser console
console.log("Welcome to Rupesh's Portfolio!");

// Highlight navigation links when clicked
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});

// Display the current year automatically
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = "© " + new Date().getFullYear() +
        " Rupesh Vallala. All Rights Reserved.";
}