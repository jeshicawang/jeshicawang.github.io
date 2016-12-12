var icons = document.getElementsByClassName('icon');
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('mouseenter', function(e) { colorIcon(e.target) });
  icons[i].addEventListener('mouseout', function(e) { whiteIcon(e.target) });
}

function colorIcon(element) {
  var svg = element.firstChild.firstChild;
  svg.contentDocument.querySelector('path').setAttribute('class', 'color');
}

function whiteIcon(element) {
  var svg = element.firstChild.firstChild;
  svg.contentDocument.querySelector('path').setAttribute('class', 'white');
}
