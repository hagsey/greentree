$(function() {

    // Hamburger toggle
  (function() {
    var $hamb = $(".hamburger"),
        $menu = $(".nav-items");

    $hamb.on("click", function() {
      $menu.slideToggle(200);
    });

    window.onresize = function() {
      if ($(window).width() > 865) {
        $menu.show();
      } else {
        $menu.hide();
      };
    }
  }());
});