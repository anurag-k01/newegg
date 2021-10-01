function add_to_kart(item) {
  let count = 0;
  let arr;
  arr = localStorage.getItem("kart");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("kart"));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === item.name) {
      arr[i].price * 2;
      return;
    }
  }

  arr.push(item);

  localStorage.setItem("kart", JSON.stringify(arr));
}
