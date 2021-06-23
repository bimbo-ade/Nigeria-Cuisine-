window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const arrow = document.querySelector(".arrow");

  const scrollHeight = this.window.scrollY;
  const headers = header.getBoundingClientRect().height;
  if (scrollHeight > headers) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  if (scrollHeight > 500) {
    arrow.classList.add("arrowshow");
  } else {
    arrow.classList.remove("arrowshow");
  }
});
const navCont = document.querySelector(".nav");
const icon = document.querySelector(".icon");
const close = document.querySelector(".close");

icon.addEventListener("click", function () {
  // icon. src="images/close.png";
  navCont.classList.toggle("navvs");
});

//add event listener to social icons
const twitter = document.querySelector(".twitter");
const text = document.querySelector(".text1");

twitter.addEventListener("click", function () {
  text.classList.toggle("showH3");
});
const ig = document.querySelector(".ig");
const textTwo = document.querySelector(".text2");

ig.addEventListener("click", function () {
  textTwo.classList.toggle("showH3");
});

const mail = document.querySelector(".mail");
const textThree = document.querySelector(".text3");

mail.addEventListener("click", function () {
  textThree.classList.toggle("showH3");
});
