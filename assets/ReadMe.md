***1. In JavaScript, there are several methods to select elements from the DOM. Some of the most commonly used ones are getElementById, getElementsByClassName, and querySelector / querySelectorAll.

First, getElementById("id") is used to find an element by its unique ID. Since an ID should only exist once in a webpage, this method always returns just one single element. If no element is found with that ID, it returns null.

Second, getElementsByClassName("className") is used to select all elements that share a specific class name. It returns an HTMLCollection, which is a live collection—meaning if the DOM changes, the collection automatically updates. Since it can return multiple elements, you need to use an index to access a specific one, for example: document.getElementsByClassName("item")[0].

Third, querySelector("selector") is a more flexible method because it accepts any CSS selector. However, it only returns the first matching element. For example, document.querySelector(".item") will return only the first element with the class .item.

Finally, querySelectorAll("selector") is used to select all elements that match a given CSS selector. It returns a NodeList, which is static—unlike getElementsByClassName, it does not update automatically if the DOM changes. For instance, document.querySelectorAll(".item") will return a list of all elements with the .item class.



**2. How to create and insert a new element into the DOM

// Step 1: Create a new element
let newDiv = document.createElement("div");

// Step 2: Add content or attributes
newDiv.textContent = "Hello, I am new here!";
newDiv.className = "new-box";

// Step 3: Insert into the DOM
document.body.appendChild(newDiv); // Adds at the end of <body>

// Alternative insert positions
let container = document.getElementById("container");
container.prepend(newDiv);   // Insert at the beginning
container.append(newDiv);    // Insert at the end
container.before(newDiv);    // Insert before container
container.after(newDiv);     // Insert after container




***3. What is Event Bubbling and how does it work?

Event Bubbling is the process where an event starts from the target element (where it occurred) and bubbles up through its ancestors (parent → grandparent → document).

Example: Clicking on a <button> inside a <div> → event fires on button → then on div → then on body.
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});




****4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means attaching a single event listener to a parent element instead of multiple children, and using event bubbling to handle events for child elements.

Example:document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});




**** 5. Difference between preventDefault() and stopPropagation()

preventDefault()

Prevents the default browser behavior of an element.

Example: Stop form submission, prevent link navigation.

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault(); // stops navigation
  console.log("Link clicked but not followed");
});


stopPropagation()

Stops the event from bubbling up to parent elements.


Example: Only child handles the click, parent won’t.

child.addEventListener("click", (e) => {
  e.stopPropagation(); // stops event bubbling
  console.log("Only child handles this");
});
