$(document).ready(function() {
    $("#modal").iziModal({
        title: 'Заказать товар',
        headerColor: '#262d31',
        width: 1000,
     });


     var el;
    $( document ).on("click", ".grid-item", function( event ) {
        el = $(event.currentTarget).next();
        $('#modal').iziModal('setContent', {
            content: el.html()
        });
    });



    $(document).on('click', '.submit-btn', function(e) {
        e.preventDefault();
        var phone = $(this).parents('.main-form').find('input[name="phone"]');
        var name = $(this).parents('.main-form').find('input[name="name"]');
        var email = $(this).parents('.main-form').find('input[name="email"]');



        var checkPhone = validator.isMobilePhone(phone.val(),'uk-UA');
        var checkName = !validator.isEmpty(name.val());
        var checkEmail = validator.isEmail(email.val());

        if (!checkName) {
            $(name).css("border-bottom-color", "red");
        }else {
            $(name).css("border-bottom-color", "transparent");
        }

        if (!checkPhone) {
            $(phone).css("border-bottom-color", "red");
        }else {
            $(phone).css("border-bottom-color", "transparent");
        }

        if (!checkEmail) {
            $(email).css("border-bottom-color", "red");
        }else {
            $(email).css("border-bottom-color", "transparent");
        }

        

        if (checkPhone && checkName && checkEmail) {
            $(this).parents('form').hide();

            $(this).parents('.main-form').find('.after-form').addClass('show');

            // $.ajax({
            //     url: "https://formspree.io/delf.faith@gmail.com", 
            //     method: "POST",
            //     data: $(this).parents('form').serializeArray(),
            //     dataType: "json",
            //     success: function () {
            //         $(this).parents('form')
            //     }
            // })
        }
    });

    $(document).on('click', '.make-order', function() {
        var form = $(this).parents('.modal-content-info').next();
        form.addClass('show');
    });

    $(document).on('click', '#cancel-order', function(e) {
        e.preventDefault();
        var form = $(this).parents('.main-form');
        form.removeClass('show');
    });

    $(document).on('click', '.btn-ok', function(e) {
        e.preventDefault();
        var form = $(this).parents('.main-form');
        form.removeClass('show');

        setTimeout(function() {
            $('form').show();
            $('.after-form').removeClass('show');
        }, 300);
    });
});
   