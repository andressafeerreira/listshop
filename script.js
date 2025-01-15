function addItem() {
  const inputItem = document.querySelector('#item-name');
  const itemList = inputItem.value.trim();
  if (itemList === '') return;

  const itemId = `item-${Date.now()}`;
  
  const newItemList = `<div class="item-list" id="${itemId}"><div class="item-description"><input type="checkbox" name="list" class="morning"><label for="">${itemList}</label></div><button onclick="deleteItem('${itemId}')" class="button-delete"><i class="ph ph-trash"></i></button></div>`;

  const list = document.querySelector('#shop-list');
  list.innerHTML += newItemList;

  inputItem.value = ""
}

function deleteItem(itemId) {
  document.querySelector(`#${itemId}`).remove();
  itemId = alert('Removendo item')

}

function toggleAddButton() {
  addButton.disabled = inputItem.value.trim() === '';
}



