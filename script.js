const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.classList.replace("fa-moon", "fa-sun");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggle.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    toggle.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

// ----skill-section----


  const skillsHeader = document.querySelectorAll(".skills-header");

  skillsHeader.forEach(item => {
    item.addEventListener("click", () => {
      const parent = item.parentElement;
      parent.classList.toggle("active");
    });
  });

  // -------qualification-section------

   const tabs = document.querySelectorAll(".qualification__button");
  const contents = document.querySelectorAll(".qualification__content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("qualification__active"));
      contents.forEach(c => c.classList.remove("qualification__active"));

      tab.classList.add("qualification__active");
      document
        .querySelector(tab.dataset.target)
        .classList.add("qualification__active");
    });
  });

  // ----service-section----
  const modal = document.getElementById("service-modal");
const title = document.getElementById("modal-title");
const list = document.getElementById("modal-list");

const servicesData = {
  1: {
    title: "Frontend Developer",
    items: [
      "I develop the user interface.",
      "Web page development.",
      "I create UX element interaction.",
      "I position your company brand."
    ]
  },
  2: {
    title: "UI/UX Designer",
    items: [
      "User research",
      "Wireframing & Prototyping",
      "User interface design",
      "Visual communication"
    ]
  },
  3: {
    title: "Branding Designer",
    items: [
      "Brand identity",
      "Logo design",
      "Visual guidelines",
      "Marketing design"
    ]
  }
};

function openModal(id) {
  title.innerText = servicesData[id].title;
  list.innerHTML = "";

  servicesData[id].items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}


// ------portfolio-section------
const slides = document.querySelectorAll(".portfolio__slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

  document.getElementById("next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  };

  document.getElementById("prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  };

  dots.forEach((dot, i) => {
    dot.onclick = () => {
      index = i;
      showSlide(index);
    };
  });
  function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }


     (function(){
    emailjs.init("fkXMyhpsHTBflUyuZ"); 
  })();

  // -----contect-section------
    emailjs.init("YOUR_PUBLIC_KEY"); // ← replace with your EmailJS Public Key

  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",   // ← replace with your Service ID
      "YOUR_TEMPLATE_ID",  // ← replace with your Template ID
      this
    ).then(
      function(){
        alert("✅ Message sent successfully!");
        document.getElementById("contactForm").reset();
      },
      function(error){
        console.log(error);
        alert("❌ Message failed. Try again!");
      }
    );
  });

  // ------testimonial-section------
 
document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
  }

  // Dot click
  dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
      index = i;
      showSlide(index);
    });
  });

  // Auto slide
  setInterval(function () {
    index++;
    if (index >= slides.length) index = 0;
    showSlide(index);
  }, 5000);

});
