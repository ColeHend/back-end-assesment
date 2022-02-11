const baseLink = "http://localhost:4000";
// ---get compliment-----
document.getElementById("complimentButton").onclick = function () {
  axios.get(baseLink.concat("/api/compliment/")).then(function (response) {
    const data = response.data;
    alert(data);
  });
};
// ---get fortune---
document.getElementById("fortuneButton").onclick = () => {
  axios.get(baseLink.concat("/api/fortune")).then((res) => {
    const data = res.data;
    alert(data);
  });
};
// --------shopping list------------
const theList = document.getElementById("shoppingList");
function createList(res) {
  document.getElementById("shoppingList").innerHTML = "";
  res.data.forEach((listItem) => {
    let li = document.createElement("li");
    let text = listItem.id + ") " + listItem.text;
    li.innerText = text;
    theList.appendChild(li);
  });
}
// -- add to list
const addInput = document.getElementById("addInput");
const addListBtn = document.getElementById("addListBtn");
const addList = () => {
  axios
    .post(baseLink.concat("/api/list"), { text: addInput.value })
    .then(createList);
};
addListBtn.addEventListener("click", addList);

//-----remove from list
const removeInput = document.getElementById("removeInput");
const removeListBtn = document.getElementById("removeListBtn");

const removeFromList = () => {
  axios
    .delete(baseLink.concat(`/api/list/${removeInput.value}`))
    .then(createList);
};
removeListBtn.addEventListener("click", removeFromList);

//------edit list
const editNumInput = document.getElementById("editNumInput").value;
const editTxtInput = document.getElementById("editTxtInput").value;
const editListBtn = document.getElementById("editListBtn");
const sending = {
    text: editTxtInput
}
const editList = () => {
    // console.log(editTxtInput,editNumInput);
  axios.put(baseLink.concat(`/api/list/${editNumInput}`),sending).then(createList)
};
editListBtn.addEventListener('click',editList);