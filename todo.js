var create_li_event = function () {
  var $input = document.querySelector('input');
  var result = document.querySelector('.result');

  var $li = document.createElement('li');
  $li.innerText = $input.value;

  result.appendChild($li);
  $input.value = '';
}

// var $button = document.querySelector('button');
// $button.addEventListener('click', create_li_event);

var $input = document.querySelector('input');
$input.addEventListener('keydown', function (e) {
  if (e.keyCode !== 13) return;
  create_li_event();
})
