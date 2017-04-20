/**
 * Created by harishasankhan on 4/20/17.
 */

$( document ).ready(function() {
    // Travel Offer Tabs start
    $(".tab-box > ul > li:not(:first)").hide();
    $(".tab-list > ul > li:first-child").addClass('active');
    $(".tab-list > ul > li").click(function () {
        var index = $(".tab-list > ul > li").index(this) + 1;
        var tabselc = $(".tab-box li:nth-child(" + index + ")");
        tabselc.fadeIn();
        tabselc.siblings().hide();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

});