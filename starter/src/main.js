import './style.css'

// Everything in one file, global scope
var form = document.getElementById("todo-form");
var input = document.getElementById("todo-input");
var list = document.getElementById("todo-list");
var emptyMessage = document.getElementById("empty-message");

// Initial check
checkEmpty();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var val = input.value;

  // Validation
  if (val.trim() === "") {
    return;
  }

  // Creating DOM elements manually - very verbose compared to JSX
  var li = document.createElement("li");
  li.className = "todo-item";
  // We have to manage IDs manually if we need them, or just rely on DOM reference
  var id = new Date().getTime().toString();
  li.setAttribute("data-id", id);

  var contentDiv = document.createElement("div");
  contentDiv.className = "todo-content";

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // We have to manually add event listeners for every interactive element
  checkbox.addEventListener("change", function (e) {
    // Traversing DOM to find what to style - fragile!
    var textSpan = e.target.nextElementSibling;
    if (e.target.checked) {
      textSpan.classList.add("completed");
    } else {
      textSpan.classList.remove("completed");
    }
  });

  var span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = val;

  // Appending children - easy to get order wrong or miss one
  contentDiv.appendChild(checkbox);
  contentDiv.appendChild(span);

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  // Delete logic coupled right here
  deleteBtn.addEventListener("click", function (e) {
    // Verify we are deleting the right thing

    var item = e.target.closest(".todo-item");
    item.remove();
    checkEmpty(); // Must remember to call this update every time state changes
  });

  li.appendChild(contentDiv);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  // Reset input
  input.value = "";

  // Update UI state
  checkEmpty();
});

function checkEmpty() {
  // Relying on DOM state to determine if message should show
  if (list.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}
