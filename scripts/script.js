document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".custom-accordion-button");
  const contents = document.querySelectorAll(".custom-accordion-content");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
      // Remove the active class from all buttons
      buttons.forEach(btn => {
        btn.classList.remove("active");
      });

      // Toggle the active class on the clicked button
      this.classList.add("active");

      // Hide all contents
      contents.forEach(content => {
        content.style.display = "none";
      });

      // Show the corresponding content based on the index
      contents[index].style.display = "block";
    });
  });
});
