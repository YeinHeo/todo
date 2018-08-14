
function deleteUpdate(){
  var buttonID = this.id.replace("button_", "");
  var itemText = document.getElementById("list_" + buttonID);

  this.parentNode.remove();
}

var create_li_event = function () {

  itemNum++;

  var $input = document.querySelector('input');
  var result = document.querySelector('.selected');
  var $li = document.createElement('li');
  var label = document.createElement("label");
  var $button = document.createElement('button') ;
  //$button.innerText='delete';

  //<input class="toggle" type="checkbox">
  //<button class="delete"></button>

  label.id="list_"+itemNum;
  $button.id="button_"+itemNum;
  //$button.onclick=deleteUpdate;

  label.innerText = $input.value;
  //span.innerHtml = '';

  $li.appendChild(label);
  $li.appendChild($button);
  console.log($li);
  (todo-list).appendChild($li);

  $input.value = '';
}

// var $button = document.querySelector('button');
// $button.addEventListener('click', create_li_event);

var itemNum = 0;

var $input = document.querySelector('input');
$input.addEventListener('keydown', function (e) {
  if (e.keyCode !== 13) return;
  create_li_event();
})
