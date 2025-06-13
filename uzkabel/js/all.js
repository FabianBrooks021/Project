$('.product_item').on('click', function () {
    $('.modal').addClass('show');
});

$('body').on('click', '#modal', function (e) {
    if ($(e.target).hasClass('show')) {
        $('.modal').removeClass('show');
    }
});
