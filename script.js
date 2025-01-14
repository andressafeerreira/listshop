function addItem() {
  const inputItem = document.getElementById('item-name');
  const itemList = inputItem.value;
  
  const newItemList = `<div class="item-list"><div class="item-description"><input type="checkbox" name="list" class="morning"><label for="">${itemList}</label><div><a href="" class="delete"><i class="ph ph-trash"></i></a></div>`;

  const list = document.getElementById('shop-list');
  list.innerHTML += newItemList;
  console.log(list)
}