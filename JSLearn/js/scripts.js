var ourHeadline = document.querySelector("#our-headline");
var ourButton = document.querySelector("#our-button");
var itemAdd = 0;

var listItems = document.querySelector("#ourList");
listItems.addEventListener("click", listItemClick);
ourButton.addEventListener("click", createNewItem);


function createNewItem() {
    listItems.innerHTML += "<li class= " + " list-group-item  > SomeThing New " + ++itemAdd + "</li>";
}

function listItemClick(e) {

    if (e.target.nodeName === "LI") {

        for (var i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        ourHeadline.innerHTML = e.target.innerHTML;
        e.target.classList.add("active");
    }
}