const sortableList = document.querySelector(".sortableList");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // Adding dragging class to item after a delay
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

sortableList.addEventListener("dragover", (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  // Getting all items except dragging one and make array of them
  const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  // Finding the sibling after which dragging item should be placed
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  sortableList.insertBefore(draggingItem, nextSibling);
});

sortableList.addEventListener("dragenter", (e) => e.preventDefault());
