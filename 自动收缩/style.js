$(function () {
    $('li.d-sideNav > span').on('click', function (e) {
        var parent = $(this).parent('li.d-sideNav'),
            children = parent.find('.d-sideItem'),
            siblings = parent.siblings().find('.d-sideItem');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).find(' > i').addClass('glyphicon-plus').removeClass('glyphicon-remove');
        } else {
            siblings.hide('fast');
            $(this).parent('li.d-sideNav').siblings().find(' > span > i').addClass('glyphicon-plus').removeClass('glyphicon-remove');
            children.show('fast');
            $(this).find(' > i').addClass('glyphicon-remove').removeClass('glyphicon-plus');
        }
        e.stopPropagation();
    });
    $('.d-dashboard').on('click', function (e) {
        $('li.d-sideNav').find('.d-sideItem').hide('fast');
        $(this).parent('li').siblings().find(' > span > i').addClass('glyphicon-plus').removeClass('glyphicon-remove');
        e.stopPropagation();
    });
});