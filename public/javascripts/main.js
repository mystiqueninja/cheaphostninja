jQuery(function ($) {
  initNavbar($);
  var header = $('header.max-size');
  var nav = $('.navbar-default');
  var bod = $('body');
  var win = $(window);
  var doc = $(document);
  var isFixed = false;
  //$('#scene').parallax("100%", 0.1);
  header.css('height', win.height() - nav.height());
  win.on('resize', function () {
    header.css('height', win.height() - nav.height());
  });
  win.on('scroll', function () {
    var scrollTop = doc.scrollTop();
    if (scrollTop >= 200) {
      nav.addClass('navbar-fixed-top');
      if (isFixed === false) {
        nav.hide();
        nav.fadeIn(50, function () {
          isFixed = true;
        });
      }
      bod.css('paddingTop', nav.height());
    } else {
      nav.removeClass('navbar-fixed-top');
      bod.css('paddingTop', 0);
      isFixed = false;
    }
    $('.parallax').css('transform', 'translate(0px,' + scrollTop / 1.9 + 'px)');
  });
  $(".dropdown").hover(
    function () {
      $('.dropdown-menu', this).stop(true, true).slideDown(10);
      $(this).toggleClass('open');
    },
    function () {
      $('.dropdown-menu', this).stop(true, true).slideUp("fast");
      $(this).toggleClass('open');
    }
  );
});

function initNavbar($) {
  var path = window.location.pathname;
  path = path.replace(/\/$/, "");
  path = decodeURIComponent(path);
  if (path === '') path = '/';
  $("ul.nav.navbar-nav > li > a").each(function () {
    if (path == $(this).attr('href')) {
      $(this).closest('li').addClass('active');
    }
  });
}