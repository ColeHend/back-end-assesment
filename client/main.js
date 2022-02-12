const baseLink = "http://localhost:4000";
const errCallback = err => console.log(err)
// ---get compliment------------------------------
document.getElementById("complimentButton").onclick = function () {
  axios.get(baseLink.concat("/api/compliment/")).then(function (response) {
    const data = response.data;
    alert(data);
  }).catch(errCallback);
};
// ---get fortune-----------------
document.getElementById("fortuneButton").onclick = () => {
  axios.get(baseLink.concat("/api/fortune")).then((res) => {
    const data = res.data;
    alert(data);
  }).catch(errCallback);
};
// -----------------------shopping list-----------------------
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
// ------------- add to list--------
const addInput = document.getElementById("addInput");
const addListBtn = document.getElementById("addListBtn");
const addList = () => {
  console.log("adding...");
  axios
    .post(baseLink.concat("/api/list"), { text: addInput.value })
    .then(createList)
    .catch(errCallback)
};
addInput.value = '';
addListBtn.addEventListener("click", addList);

//--------remove from list-------------
let removeInput = document.getElementById("removeInput");
const removeListBtn = document.getElementById("removeListBtn");

const removeFromList = () => {
  console.log("removing...");
  axios
    .delete(baseLink.concat(`/api/list/${removeInput.value}`))
    .then(createList)
    .catch(errCallback)
  };
  removeInput.value = '';
  removeListBtn.addEventListener("click", removeFromList);
  
  //------------edit list-----------
  let editNumInput = document.getElementById("editNumInput");
  let editTxtInput = document.getElementById("editTxtInput");
  const editListBtn = document.getElementById("editListBtn");

  const editList = (body) => {
    console.log("editing...");
    axios
    .put(baseLink.concat(`/api/list/${editNumInput.value}`),body)
    .then(createList).catch(errCallback)
  };

function submitHand(ev) {
  ev.preventDefault()
  console.log(editTxtInput.textContent);
  
  const sending = {
    text: editTxtInput.value
  }
  
  editList(sending)
  
}

axios.get(baseLink.concat('/api/list')).then(createList)

editNumInput.value ='';
editTxtInput.value = '';
editListBtn.addEventListener('click',submitHand);
