
function deleteUpdate(){
  var buttonID = this.id.replace("button_", "");
  var itemText = document.getElementById("list_" + buttonID);

  this.parentNode.remove();
}

var create_li_event = function () {

  itemNum++;

  var $input = document.querySelector('input');
  var result = document.querySelector('.result');

  var $li = document.createElement('li');

  var span = document.createElement("span");
  var $button = document.createElement('button') ;
  $button.innerText='delete';

  span.id="list_"+itemNum;
  $button.id="button_"+itemNum;

  $button.onclick=deleteUpdate;

  span.innerText = $input.value;

  //span.innerHtml = '';

  $li.appendChild(span);
  $li.appendChild($button);
  console.log($li);

  result.appendChild($li);

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
