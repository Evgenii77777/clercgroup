const range = document.getElementById("range");
const percent = document.getElementById("percent");
range.addEventListener("input", () => {
  percent.textContent = range.value + "%";
});

const fileInput = document.getElementById("fileInput");
const fileLabel = document.getElementById("fileLabel");

fileInput.addEventListener("change", () => {
  const fileName = fileInput.files[0] ? fileInput.files[0].name : "Прикрепить файл";
  const fileText = fileLabel.querySelector(".file__text");
  fileText.textContent = fileName;
});

const select = document.querySelector(".select");
const selectHeader = select.querySelector(".select__header");
const selectList = select.querySelector(".select__list");

selectHeader.addEventListener("click", () => {
  const isOpen = selectList.classList.contains("select__list--visible");
  selectList.classList.toggle("select__list--visible");
  selectHeader.classList.toggle("select__header--open", !isOpen);
});

selectList.addEventListener("click", (e) => {
  if (e.target.classList.contains("select__item")) {
    selectHeader.textContent = e.target.textContent;
    selectList.classList.remove("select__list--visible");
    selectHeader.classList.remove("select__header--open");

    selectList.querySelectorAll(".select__item").forEach((item) => {
      item.classList.remove("select__item--active");
    });
    e.target.classList.add("select__item--active");
  }
});

document.addEventListener("click", (e) => {
  if (!select.contains(e.target)) {
    selectList.classList.remove("select__list--visible");
    selectHeader.classList.remove("select__header--open");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
      burger.classList.remove("active");
      navMenu.classList.remove("open");
    }
  });
});
