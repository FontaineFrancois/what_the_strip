$(function() {
  $(window).scroll(function() { //Au scroll dans la fenetre on déclenche la fonction
    if ($(this).scrollTop() > 40) { //si on a défilé de plus de 40px du haut vers le bas
      $('#barre_nav_header_2').addClass("fixNavigation"); //on ajoute la classe "fixNavigation"
    } else {
      $('#barre_nav_header_2').removeClass("fixNavigation"); //sinon on retire la classe "fixNavigation"
    }
  });
});
