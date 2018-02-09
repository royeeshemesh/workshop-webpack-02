import {myList} from "./appLoader";

function addListItem() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("New LI");
    node.appendChild(textnode);

    myList.appendChild(node);
}

addListItem();
addListItem();
addListItem();
