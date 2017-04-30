 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".li_a_text").toggleClass("link_text");
        $(".li_text_indent").toggleClass("link_text_indent");
        $(".icon-right").toggleClass("icon_left");
        $(".sub-menu").toggleClass("sub-menu-hidden");
    });
    $('#sidebar-nav a').click(function (e) {
          e.preventDefault()
          $(this).tab('show')
    });
    $(".li_text_indent").click(function () {
        event.stopPropagation();
         $(this).children('.sub-menu').toggle();
    });
    $('.sub-menu').toggle();
