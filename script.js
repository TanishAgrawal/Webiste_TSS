var img = document.getElementById("banner");

var slides = ["banner-1.png", "banner-2.png", "banner-3.png"];

let banner = 1;
document.getElementById("right-button").addEventListener("click", function () {
  if (banner < 3) {
    banner++;
  } else {
    banner = 1;
  }
  img.style.backgroundImage = `url(./images/banner-${banner}.png)`;
});

document.getElementById("left-button").addEventListener("click", function () {
  banner--;
  if (banner == 0) {
    banner = 3;
  }
  img.style.backgroundImage = `url(./images/banner-${banner}.png)`;
});

const input = document.querySelector(".send-input");

input.addEventListener("click", function () {
  if (
    document.querySelector(".name-input").value == "" ||
    document.querySelector(".phone-input").value == "" ||
    document.querySelector(".email-input").value == ""
  ) {
    document.getElementById("message-shown").classList.remove("hidden");
    document.getElementById("message-shown").textContent = "Details not filled";
  } else {
    document.getElementById("message-shown").classList.remove("hidden");
    document.getElementById("message-shown").textContent = "Details Sent";
    document.querySelector(".name-input").value = "";
    document.querySelector(".phone-input").value = "";
    document.querySelector(".email-input").value = "";
    document.querySelector(".allow").checked = false;
  }
});

const reveal = function () {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal_overlay");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelectorAll(".know_more_button");

const open = function () {
  modal.classList.remove("hidden");
  document.querySelector(".modal_overlay").classList.add("overlay");
};

const close = function () {
  modal.classList.add("hidden");
  document.querySelector(".modal_overlay").classList.remove("overlay");
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", open);
}

closeModal.addEventListener("click", close);
overlay.addEventListener("click", close);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
});

const headers = [
  "Startups",
  "Education",
  "Sustainable Development goals",
  "Employment & Skilling",
  "Women-led Development",
  "LiFE",
];

const p = [
  "Startups have become the engine for innovation-fueled economic recovery, reorientation, and growth for nations around the world. Startup20 is the first of its kind official engagement group initiated under the Indian presidency of the G20 2023. The engagement group would act as the voice of the global startup ecosystem bringing together varied stakeholders on a common platform.",
  "All the G20 members fully endorsed and adopted outcomes pertaining to the 4 priorities identified by the Indian Presidency for the Education Working Group, as all of them joined consensus on all the technical issues and agreed to an “Outcome Document and Chair’s Summary”, which was adopted during the meeting. The G20 Ministers also unanimously adopted the G20 Education Working Group Report and the G20 Education Working Group Compendium on Education Policies and Programmes in G20 Countries.",
  "The G20’s comparative advantage lies in its convening power and its collective ability to adopt and support initiatives at the highest global level, including those that involve macro-economic framework, and to create the global enabling environment, that will help achieve the 2030 Agenda and its SDGs. There is unprecedented urgency for the G20 to take coordinated, swift and tangible actions using all available policy tools to accelerate achievement of the SDGs, while taking into account national circumstances, and needs. ",
  "The Business 20 (B20) is the official G20 dialogue forum with the global business community. Established in 2010, B20 is among the most prominent Engagement Groups in G20, with companies and business organizations as participants. The B20 leads the process of galvanizing global business leaders for their views on issues of global economic and trade governance and speaks in a single voice for the entire G20 business community.",
  "India’s revolutionary leaps in financial inclusion has led it to the paradigm of women-led development, which can become the defining mantra of this age. G20 must pick up the baton and keep pushing women-led development, where women aren’t just beneficiaries of development but are setting the agenda, as leaders and equal participants.",
  "As it takes the G20 Presidency, India is on a mission to bring about a shared global future for all through the Amrit Kaal initiative with a focus on the LiFE movement which aims to promote environmentally-conscious practices and a sustainable way of living. With a clear plan and a development-oriented approach, India aims to promote a rules-based order, peace and just growth for all. The 200+ events planned in the run up to the 2023 Summit will strengthen India’s agenda and the six thematic priorities of India’s G20 presidency.",
];

const e0 = document.querySelector(".btn-0");
const e1 = document.querySelector(".btn-1");
const e2 = document.querySelector(".btn-2");
const e3 = document.querySelector(".btn-3");
const e4 = document.querySelector(".btn-4");
const e5 = document.querySelector(".btn-5");
e0.addEventListener("click", function () {
  document.querySelector(".modal-h1").textContent = headers[0];
  document.querySelector(".modal-p").textContent = p[0];
});

e1.addEventListener("click", function () {
  document.querySelector(".modal-h1").textContent = headers[1];
  document.querySelector(".modal-p").textContent = p[1];
});
e2.addEventListener("click", function () {
  document.querySelector(".modal-h1").textContent = headers[2];
  document.querySelector(".modal-p").textContent = p[2];
});
e3.addEventListener("click", function () {
  document.querySelector(".modal-h1").textContent = headers[3];
  document.querySelector(".modal-p").textContent = p[3];
});
e4.addEventListener("click", function () {
  document.querySelector(".modal-h1").textContent = headers[4];
  document.querySelector(".modal-p").textContent = p[4];
});
e5.addEventListener("click", function () {
  document.querySelector(".modal-h1").textContent = headers[5];
  document.querySelector(".modal-p").textContent = p[5];
});
