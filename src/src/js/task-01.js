const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);

const firstItem = items[0];
const firstItemChildFirst = firstItem.firstElementChild;
console.log("Category:", firstItemChildFirst.textContent);

const firstItemChildLast = firstItem.lastElementChild;
const firstItemChildLastChildren = firstItemChildLast.children;
console.log("Elements:", firstItemChildLastChildren.length);

const secondItem = items[1];
const secondItemChildFirst = secondItem.firstElementChild;
console.log("Category:", secondItemChildFirst.textContent);

const secondItemChildLast = secondItem.lastElementChild;
const secondItemChildLastChildren = secondItemChildLast.children;
console.log("Elements:", secondItemChildLastChildren.length);

const lastItem = items[items.length - 1];
const lastItemChildFirst = lastItem.firstElementChild;
console.log("Category:", lastItemChildFirst.textContent);

const lastItemChildLast = lastItem.lastElementChild;
const lastItemChildLastChildren = lastItemChildLast.children;
console.log("Elements:", lastItemChildLastChildren.length);
