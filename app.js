const inputBox = document.querySelector(".input-box");
const addBtn = document.querySelector(".add-btn");
const wordCont = document.querySelector(".added-words");
const buttons = document.querySelectorAll(".btns button");
const msg = document.querySelector(".msg p");

let wordsArray = [];

function addWords() {
  wordCont.innerHTML = "";
  wordsArray.forEach((word) => {
    const p = document.createElement("p");
    p.textContent = word;
    wordCont.appendChild(p);
  });
}

function addWord() {
  const word = inputBox.value.trim();
  if (word) {
    wordsArray.push(word);
    inputBox.value = "";
    addWords();
 showmsg("Add Word Successfully");
  }
}

function popWord() {
  wordsArray.pop();
  addWords();
  if(wordCont.innerHTML === null){
    alert("Add a word here to pop ");
  }
  else{

 showmsg("pop(): Remove from the last of Array");
  }
}

function pushWord() {
  const wordToPush = prompt("Enter a word to push:");
  if (wordToPush) {
    wordsArray.push(wordToPush);
    addWords();
    showmsg("push(): Add in the last of Array");
  }
}

function shiftWord() {
  wordsArray.shift();
  addWords();
  showmsg("shift(): Remove from the beginning of Array");
}

function unshiftWord() {
  const wordToUnshift = prompt("Enter a word to unshift:");
  if (wordToUnshift) {
    wordsArray.unshift(wordToUnshift);
    addWords();
    showmsg("unshift(): Add in the beginning of Array");
  }
}

function sliceArray() {
  const start = parseInt(prompt("Enter start index for slice:"), 10);
  const end = parseInt(prompt("Enter end index for slice:"), 10);
  wordsArray = wordsArray.slice(start, end);
  addWords();
}

function spliceArray() {
  const index = parseInt(prompt("Enter index for splice:"), 10);
  const deleteCount = parseInt(prompt("Enter delete count:"), 10);
  const wordToAdd = prompt("Enter words to add (comma-separated):").split(",");
  wordsArray.splice(
    index,
    deleteCount,
    ...wordToAdd.map((word) => word.trim())
  );
  addWords();
}

function showmsg(text) {
  msg.innerHTML = text;
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);
}

addBtn.addEventListener("click", addWord);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.textContent) {
      case "Pop":
        popWord();
        break;
      case "Push":
        pushWord();
        break;
      case "Shift":
        shiftWord();
        break;
      case "Unshift":
        unshiftWord();
        break;
      case "Slice":
        sliceArray();
        break;
      case "Splice":
        spliceArray();
        break;
    }
  });
});

addWords();
