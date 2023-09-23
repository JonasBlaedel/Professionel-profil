let mybutton = document.getElementById("scrolltop");
const logo = document.querySelector("#home");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
scrollFunction();

mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
logo.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    let panel = e.target.nextElementSibling;
    let targetAccordion = e.target;
    let plusElement = targetAccordion.querySelector(".plus");

    if (panel.style.height <= "0px") {
      panel.classList.add("activePanel");
      panel.style.height = "auto";
      targetAccordion.classList.add("open"); // Add "open" class to the accordion
    } else {
      panel.style.height = 0;
      panel.classList.remove("activePanel");
      targetAccordion.classList.remove("open"); // Remove "open" class from the accordion
    }
  });
});
