document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link");
  const pageSections = document.querySelectorAll(".page-section");
  
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      // Remove "active" class from all nav links
      navLinks.forEach(function(navLink) {
        navLink.classList.remove("active");
      });

      // Add "active" class to the clicked nav link
      link.classList.add("active");

      // Hide all page sections
      pageSections.forEach(function(section) {
        section.style.display = "none";
      });

      // Show the corresponding page section
      const targetSectionId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);
      targetSection.style.display = "block";
    });
  });
});