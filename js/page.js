$(document).ready(function () {
    var $title1 = $(".title1"),
      $title2 = $(".title2"),
      $parentTitle1 = $(".parent-title1"),
      $parentTitle2 = $(".parent-title2"),
      $window = $(window),
      parentOffset1 = $parentTitle1.offset(),
      parentOffset2 = $parentTitle2.offset(),
      offset1 = $title1.offset(),
      offset2 = $title2.offset(),
      topPadding = 96;
  
    $window.scroll(function () {
      var scrollTop = $window.scrollTop();
      console.log($parentTitle1.height());
  
      if (
          scrollTop > offset1.top - topPadding &&
          scrollTop < offset1.top - topPadding + $parentTitle1.height()
      ) {
          $title1.css({
              top: scrollTop - parentOffset1.top + topPadding,
          });
      } else if (scrollTop < offset1.top - topPadding) {
          $title1.css({
              top: 0,
          });
      }
  
      if (
          scrollTop > offset2.top - topPadding &&
          scrollTop < offset2.top - topPadding + $parentTitle2.height()
        ) {
          $title2.css({
              top: scrollTop - parentOffset2.top + topPadding,
          });
        } else if (scrollTop < offset2.top - topPadding) {
          $title2.css({
              top: 0,
          });
      }
    });
  });
  