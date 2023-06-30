const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Fetches and display's the stored browser data when called.
showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};

showNotes();

// Stores the data from the notes-container to the browser local storage.
updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  // Creates two HTML elements ('p', 'img') and assign a className, attribute i.e src, to the element.
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  // Appends the 'p' element to the notesContainer and the 'img' element to the 'h1' element.
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (item) {
  if (item.target.tagName === "IMG") {
    // Removes the parent element ('p) of the 'img' element when clicked.
    item.target.parentElement.remove();
    updateStorage();
  } else if (item.target.tagName === "P") {
    // Stores the data when the user is typing.
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
