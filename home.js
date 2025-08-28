
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// DOM Element References: Get references to the HTML elements where we'll display data.

const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearButton = document.querySelector(".clear-history");

// Interactive Element References: Get references to all the buttons that a user can click.
const heartButtons = document.querySelectorAll(".heart-btn");
const copyButtons = document.querySelectorAll(".copy-btn");
const callButtons = document.querySelectorAll(".call-btn");




// Heart Button Logic: Increments the heart count and updates the display when a heart button is clicked.
heartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    heartCount++;
    heartDisplay.textContent = heartCount;
  });
});


// Copy Button Logic: Copies a number to the clipboard, displays an alert, and updates the copy count.
copyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    
    const card = button.parentElement.parentElement;
    const number = card.getAttribute("data-number");
    
    
    navigator.clipboard.writeText(number);
    alert("Copied: " + number); 
    
    // Update the copy count and its display.
    copyCount++;
    copyDisplay.textContent = copyCount;
  });
});


// Call Button Logic: Handles the call functionality, including coin deduction and adding to history.
callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    
    const card = button.parentElement.parentElement;
    const name = card.getAttribute("data-name");
    const number = card.getAttribute("data-number");

    
    if (coinCount < 20) {
      alert("Not enough coins to make a call.");
      return; 
    }

    
    coinCount -= 20;
    coinDisplay.textContent = coinCount;

    
    const time = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });


    const historyItem = document.createElement("div");
    
    historyItem.classList.add(
      "bg-[#f2f2f2]",
      "p-4",
      "rounded-lg",
      "flex",
      "justify-between",
      "items-center",
      "mb-2"
    );

    const textContainer = document.createElement("div");
    
    const nameHeading = document.createElement("h2");
    nameHeading.classList.add("font-semibold", "text-lg");
    nameHeading.innerText = name;

    const numberPara = document.createElement("p");
    numberPara.classList.add("text-gray-500", "text-sm");
    numberPara.innerText = number;

    // Assemble the text content for the history item.
    textContainer.appendChild(nameHeading);
    textContainer.appendChild(numberPara);

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("text-gray-400", "text-xs");
    timeSpan.innerText = time;

    // Append all the created elements to the history item.
    historyItem.appendChild(textContainer);
    historyItem.appendChild(timeSpan);

    // Add the new history item to the top of the history list.
    historyList.appendChild(historyItem);
  });
});


// Clear History Logic: Clears the entire history list by setting its inner HTML to an empty string.
clearButton.addEventListener("click", function () {
  historyList.innerHTML = "";
});