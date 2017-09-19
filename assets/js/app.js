$(function() {
  // Hamburger toggle
  var $hamb = $(".hamburger"),
      $close = $(".close-menu"),
      $menu = $(".mobile-menu");

  $hamb.on("click", function() {
    $menu.fadeIn(200);
  
  });

  $close.on("click", function() {
    $menu.fadeOut(200);
  });

  // window.onresize = function() {
  //   if ($(window).width() > 865) {
  //     $menu.show();
  //   } else {
  //     $menu.hide();
  //   };
  // }
});