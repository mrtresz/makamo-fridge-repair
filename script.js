document.addEventListener("DOMContentLoaded", () => {
  const headline = document.querySelector(".headline");
  const subline = document.querySelector(".subline");
  const servicesHeading = document.querySelector(".services-heading");
  const makeAQuoteBtn = document.querySelector(".make-a-quote");

  const quoteForm = document.querySelector(".quote-form");
  const successMessage = document.createElement("p");
  successMessage.textContent = "Thank you for your submission!";
  successMessage.style.color = "green";
  successMessage.style.fontWeight = "bold";
  successMessage.style.marginTop = "1rem";
  successMessage.style.opacity = "0";
  quoteForm.appendChild(successMessage);

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    // Optionally, perform form validation before proceeding

    // Clear form fields
    quoteForm.reset();

    // Show success message with fade-in animation
    successMessage.style.opacity = "1";
    setTimeout(() => {
      successMessage.style.opacity = "0";
    }, 3000); // Hide success message after 3 seconds
  });

  // Function to animate elements on scroll
  function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    elementsToAnimate.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("animate");
      }
    });
  }

  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Initial animation check on page load
  animateOnScroll();

  // Listen for scroll events to trigger animations
  document.addEventListener("scroll", animateOnScroll);

  // Add hover animation to services heading
  servicesHeading.addEventListener("mouseenter", () => {
    servicesHeading.style.transform = "translateY(-2px)";
  });

  servicesHeading.addEventListener("mouseleave", () => {
    servicesHeading.style.transform = "rotate(0deg)";
  });

  // Button click effect
  makeAQuoteBtn.addEventListener("click", () => {
    makeAQuoteBtn.style.backgroundColor = "var(--color-secondary)";
    setTimeout(() => {
      makeAQuoteBtn.style.backgroundColor = "var(--color-complementary)";
    }, 200);
  });
});
