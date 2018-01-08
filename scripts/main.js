$(document).ready(function() {
    $("#modal").iziModal({
        title: 'Заказать товар',
        headerColor: '#262d31',
        width: 500
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
            $(name).css("border-bottom-color", "#ebebeb");
        }

        if (!checkPhone) {
            $(phone).css("border-bottom-color", "red");
        }else {
            $(phone).css("border-bottom-color", "#ebebeb");
        }

        if (!checkEmail) {
            $(email).css("border-bottom-color", "red");
        }else {
            $(email).css("border-bottom-color", "#ebebeb");
        }

        

        if (checkPhone && checkName && checkEmail) {
            $(this).parents('form').hide();
            $(this).parents('.main-form').find('.after-form').addClass('show');
            $.ajax({
                url: "https://formspree.io/autocareua@gmail.com", 
                method: "POST",
                data: $(this).parents('form').serializeArray(),
                dataType: "json",
                success: function () {
                    phone.val('');
                    name.val('');
                    email.val('');
                }
            })
        }
    });


    $(document).on('click', '#cancel-order', function(e) {
        e.preventDefault();
        var phone = $(this).parents('.main-form').find('input[name="phone"]');
        var name = $(this).parents('.main-form').find('input[name="name"]');
        var email = $(this).parents('.main-form').find('input[name="email"]');
        phone.val('');
        name.val('');
        email.val('');
        $('#modal').iziModal('close');
    });

    $(document).on('click', '.btn-ok', function(e) {
        e.preventDefault();
        $('#modal').iziModal('close');
    });

    $(document).on('closed', '#modal', function (e) {
        $('form').show();
        $('.main-form').find('.after-form').removeClass('show');
    });
});
   