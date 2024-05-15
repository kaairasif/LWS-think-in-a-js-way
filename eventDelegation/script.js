const list = document.getElementById("list");
const modal = document.querySelector(".modal");

list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    if (e.target.innerText === "জাভাস্ক্রিপ্ট") {
      e.target.style.backgroundColor = "yellow";
    } else if (e.target.className === "python") {
      e.target.style.backgroundColor = "teal";
      e.target.style.color = "white";
    } else {
      e.target.style.backgroundColor = "blue";
      e.target.style.color = "white";
    }
  }
});

function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "ডট নেট";
  list.appendChild(newElement);
}

document.addEventListener("click", (e) => {
  if (e.target.matches("#show-modal")) {
    modal.classList.add("show");
  }

  if (modal.classList.contains("show")) {
    if (e.target.matches(".modal button")) {
      console.log("modal button");
      modal.classList.remove("show");
    }
  }

  if (e.target.matches(".modal button")) {
    modal.classList.remove("show");
  }

  if (e.target.matches("h1")) {
    console.log(e.target);
  }
});
