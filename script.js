const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const toggleMenu = document.getElementById("menu-toggle");
// const navLinks = document.getElementById("nav-links");

/* THEME */
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.classList.remove("fa-moon");
  toggleBtn.classList.add("fa-sun");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.classList.remove("fa-moon");
    toggleBtn.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.classList.remove("fa-sun");
    toggleBtn.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});

/* MOBILE MENU */
toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
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



document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let index = 0;

  function showSlide(i) {
    const offset = -i * 100;
    slider.style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[i].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    });
  });

  // Optional: Auto-slide every 5s
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);
});

// ----scroll button bottom to top------
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Click event: scroll to top smoothly
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  git
  // Optional: button visibility on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex"; // show button after 300px scroll
    } else {
      scrollBtn.style.display = "none"; // hide button at top
    }
  });

  // Initially hide button
  scrollBtn.style.display = "none";
});


// ----menu-toggle----
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  if (navLinks.classList.contains("active")) {
    menuToggle.innerHTML = "✖";
  } else {
    menuToggle.innerHTML = "&#9776;";
  }
});
