$(document).ready(function () {
    $('#menu ul li a').click(function (ev) {
        $('#menu ul li').removeClass('button-orange');
        $(ev.currentTarget).parent('li').addClass('button-orange');
    });
});