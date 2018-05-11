
  new globalNavDropdowns('.globalNav');

  /*
    Attempt to detect when user is navigating with keyboard to
    enable focus highlights on nav elements
  */

  document.body.addEventListener('keydown', function(e) {
    var TAB = 9;
    if (e.keyCode == TAB) document.body.classList.add('keyboard-navigation');
  });

  document.body.addEventListener('click', function(e) {
    document.body.classList.remove('keyboard-navigation');
  });
