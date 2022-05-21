jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon2'),
        menu = $('.navigation ul');
       

        menuBtn.click(function() {

            if( menu.hasClass('show') ) {

                menu.removeClass('show');
            
            } else {

            menu.addClass('show');
            }


        });

});