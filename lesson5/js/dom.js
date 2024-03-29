const button = document.querySelector('button');

button.onclick = function () {
  const list = document.querySelector('ul');
  const input = document.getElementById("favchap");

  if (required(input)) {
    let myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.innerHTML = myItem;
    listItem.appendChild(listBtn);
    listBtn.innerHTML = '❌';
    list.appendChild(listItem);

    if (!listBtn.onclick) {
      listBtn.onclick = function (e) {
        list.removeChild(listItem);
      }
    }
    input.focus();
  }
}

// If the length of the element's string is 0 then display helper message 

function required(input) {

  if (input.value.length >= 6) {
    //don't use alerts stick to messages
    alert("Please, add your favorite chapter");
    return false;
  }
  return true;
}