let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearButton = document.querySelector(".clear-history");

const heartButtons = document.querySelectorAll(".heart-btn");
const copyButtons = document.querySelectorAll(".copy-btn");
const callButtons = document.querySelectorAll(".call-btn");

// Heart Button
heartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    heartCount++;
    heartDisplay.textContent = heartCount;
  });
});

// Copy Button
copyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.parentElement.parentElement;
    const number = card.getAttribute("data-number");
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);
    copyCount++;
    copyDisplay.textContent = copyCount;
  });
});

// Call Button
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

    textContainer.appendChild(nameHeading);
    textContainer.appendChild(numberPara);

    const timeSpan = document.createElement("span");
    timeSpan.classList.add("text-gray-400", "text-xs");
    timeSpan.innerText = time;

    historyItem.appendChild(textContainer);
    historyItem.appendChild(timeSpan);

    historyList.appendChild(historyItem);
  });
});

// Clear History
clearButton.addEventListener("click", function () {
  historyList.innerHTML = "";
});
