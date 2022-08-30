let input = document.getElementById("the-input"),
  allSpans = document.querySelectorAll(".buttons span"),
  result = document.getElementById("results"),
  arr;

allSpans.forEach((span) => {
  span.addEventListener("click", function (e) {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    } else if (e.target.classList.contains("add-item")) {
      addItem();
      clearInput();
    } else if (e.target.classList.contains("remove-item")) {
      removeItem();
    } else if (e.target.classList.contains("show-item")) {
      showItme();
    }
    input.focus();
  });
});

function showMessage() {
  result.innerHTML = "Input Cant Be Empty";
}

function checkItem() {
  if (input.value != "") {
    if (localStorage.getItem(input.value)) {
      result.innerHTML = `this item is exist`;
    } else {
      result.innerHTML = "this item is not exist";
    }
  } else {
    showMessage();
  }
}

function addItem() {
  if (input.value !== "") {
    window.localStorage.setItem(input.value, "test");
    result.innerHTML = `Done, "${input.value}" Added`;
  } else {
    showMessage();
  }
}

function removeItem() {
  if (input.value != "") {
    if (window.localStorage.getItem(input.value)) {
      window.localStorage.removeItem(input.value);
      result.innerHTML = `Done, "${input.value}" Deleted`;
    } else {
      result.innerHTML = `Error, "${input.value}" Is Not Found`;
    }
  } else {
    showMessage();
  }
}

function showItme() {
  result.innerHTML = "";
  if (localStorage.length) {
    for (let [key, value] of Object.entries(localStorage)) {
      result.innerHTML += `<span class="show">${key}</span>`;
    }
  } else {
    result.innerHTML = `No Elements Found In Local Storage`;
  }
}

function clearInput() {
  input.value = "";
  input.focus();
}
