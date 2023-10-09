const button = document.getElementById("button");
const text = document.getElementById("text");

// debounce handler
function debounce(fn, delay) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

button.addEventListener(
  "click",
  debounce(function () {
    console.log("click");
  }, 1000)
);
text.addEventListener(
  "input",
  debounce(function () {
    console.log(text.value);
  }, 2000)
);
