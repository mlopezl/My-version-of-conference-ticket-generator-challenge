const form = document.getElementById("form");
const formAvatar = document.getElementById("form-avatar");
const avatarLabel = document.querySelector(".section__avatar");
const uploadLabel = document.querySelector(".upload__label");
const preview = document.getElementById("preview");
const previewContainer = document.querySelector(".preview__container");
const dragDrop = document.querySelector(".drag__drop");
const buttonsContainer = document.getElementById("buttons-container");
const removeImageButton = document.getElementById("remove__image");
const inputAvatarImage = document.getElementById("avatar__image");
const inputEmail = document.getElementById("input-email");
const errorEmail = document.querySelector(".error__email");
const errorName = document.querySelector(".error__name");
const errorGithub = document.querySelector(".error__github");
const uploadDescription = document.querySelector(".upload__description");
const headerTitle = document.querySelector(".header__title");
const headerDescription = document.querySelector(".header__description");
const inputName = document.getElementById("input-name");
const githubInput = document.getElementById("github-input");
const ticketSection = document.querySelector(".ticket__section");
const ticketName = document.getElementById("ticket-name");
const ticketImage = document.getElementById("ticket-image");
const ticketGitHubUser = document.getElementById("ticket-github-user");
const ticketNumber = document.getElementById("ticket-number");

formAvatar.addEventListener("dragover", (e) => {
  e.preventDefault();
});

formAvatar.addEventListener("drop", (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.src = e.target.result;
        preview.style.width = "100%";
        dragDrop.classList.add("hidden");
        buttonsContainer.classList.remove("hidden");
        avatarLabel.removeAttribute("for");
        uploadLabel.removeAttribute("for");
      };
      reader.readAsDataURL(file);
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      inputAvatarImage.files = dataTransfer.files;
    }

    if (file.size / 1024 > 500) {
      let icon = uploadDescription.children[0];
      let text = uploadDescription.children[1];
      icon.src = "./assets/images/icon-info-orange.svg";
      text.innerText = "File too large. Please upload a photo under 500 KB.";
      text.classList.add("error__email__text");
    }
  }
  window.scrollTo({
    top: 265,
    behavior: "smooth",
  });
});

inputAvatarImage.addEventListener("change", () => {
  const file = inputAvatarImage.files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.style.width = "100%";
      dragDrop.classList.add("hidden");
      buttonsContainer.classList.remove("hidden");
      avatarLabel.removeAttribute("for");
      uploadLabel.removeAttribute("for");
    };
    reader.readAsDataURL(file);
  }

    if (file.size / 1024 > 500) {
      let icon = uploadDescription.children[0];
      let text = uploadDescription.children[1];
      icon.src = "./assets/images/icon-info-orange.svg";
      text.innerText = "File too large. Please upload a photo under 500 KB.";
      text.classList.add("error__email__text");
    }
});

removeImageButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputAvatarImage.value = "";

  preview.src = "./assets/images/icon-upload.svg";

  dragDrop.classList.remove("hidden");
  avatarLabel.setAttribute("for", "inputAvatarImage");

  buttonsContainer.classList.add("hidden");
});

form.addEventListener("focusin", (e) => {
  const el = e.target;
  const elParent = el.parentNode;
  if (el.tagName === "INPUT") {
    el.classList.add("input__focus");
    elParent.classList.add("input__container__focus");
  } else if (el.tagName === "BUTTON") {
    el.classList.add("button__focus");
    elParent.classList.add("input__container__focus");
  } else {
    elParent.classList.add("avatar__image__container__focus");
  }
  window.scrollTo({
    top: 265,
    behavior: "smooth",
  });
});

form.addEventListener("focusout", (e) => {
  const el = e.target;
  const elParent = el.parentNode;
  if (el.tagName === "INPUT") {
    el.classList.remove("input__focus");
    elParent.classList.remove("input__container__focus");
  } else if (el.tagName === "BUTTON") {
    el.classList.remove("button__focus");
    elParent.classList.remove("input__container__focus");
  } else {
    elParent.classList.remove("avatar__image__container__focus");
  }
});

uploadLabel.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputAvatarImage.click();
  }
});

inputEmail.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(inputValue) === false) {
    errorEmail.classList.remove("hidden");
  } else {
    errorEmail.classList.add("hidden");
  }
});

inputName.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ' -]+$/;
  if (!regexNombre.test(inputValue)) {
    errorName.classList.remove("hidden");
    validForm = false;
  } else {
    errorName.classList.add("hidden");
  }
});

githubInput.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  if (!inputValue.startsWith("@")) {
    errorGithub.classList.remove("hidden");
    validForm = false;
  } else {
    errorGithub.classList.add("hidden");
  }
});

function generarTicket() {
  const numero = Math.floor(Math.random() * 100000);
  const cincoDigitos = String(numero).padStart(5, "0");
  return "#" + cincoDigitos;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formInputs = document.querySelectorAll("input");
  let validForm = true;
  console.log(formInputs);
  Array.from(formInputs).forEach((el) => {
      if (!el.value.trim()) {
      if (el.type === "email") errorEmail.classList.remove("hidden");
      if (el.id === "github-input") errorGithub.classList.remove("hidden");
      if (el.type === "text") errorName.classList.remove("hidden");
      if (el.type === 'file') {
        uploadDescription.children[0].src = "./assets/images/icon-info-orange.svg";
        uploadDescription.children[1].classList.add('error__email__text')
      }
      validForm = false;
      return;
  }

    if (el.type === "email") {
      let elValue = el.value;
      let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regex.test(elValue) === false) {
        errorEmail.classList.remove("hidden");
        validForm = false;
      } else {
        errorEmail.classList.add("hidden");
      }
    } else if (el.id === "github-input") {
      let elValue = el.value;
      if (!elValue.startsWith("@")) {
        errorGithub.classList.remove("hidden");
        validForm = false;
      } else {
        errorGithub.classList.add("hidden");
      }
    } else if (el.type === "text") {
      elValue = el.value;
      const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ' -]+$/;
      if (!regexNombre.test(elValue)) {
        errorName.classList.remove("hidden");
        validForm = false;
      } else {
        errorName.classList.add("hidden");
      }
    }
  });

   const file = inputAvatarImage.files[0];
  if (file) {
    const fileSizeKB = file.size / 1024;
    if (fileSizeKB > 500) {
      let icon = uploadDescription.children[0];
      let text = uploadDescription.children[1];
      icon.src = "./assets/images/icon-info-orange.svg";
      text.innerText = "File too large. Please upload a photo under 500 KB.";
      text.classList.add("error__email__text");
      validForm = false;
    }
  } else {
    validForm = false;
  }

  if (validForm) {
    form.remove();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    headerTitle.innerHTML = `Congrats, <span>${inputName.value}</span> Your ticket is ready.`;
    headerDescription.innerHTML = `We've emailed your ticket to <br> <span>${inputEmail.value}</span> and will send updates <br>  in the run up to the event.`;
    ticketSection.classList.remove("hidden");
    ticketName.innerHTML = inputName.value;
    ticketImage.src = URL.createObjectURL(inputAvatarImage.files[0]);
    ticketNumber.innerText = generarTicket();
    ticketGitHubUser.innerText = githubInput.value;
  }
});
