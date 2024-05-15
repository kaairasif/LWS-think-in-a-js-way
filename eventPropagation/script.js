const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);

form.addEventListener("click", listener, true);

button.addEventListener("click", listener);

function listener(e) {
  //   e.stopPropagation();
  console.log(this.tagName);
}
