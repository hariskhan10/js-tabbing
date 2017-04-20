/**
 * Created by harishasankhan on 4/20/17.
 */

$( document ).ready(function() {
    // Travel Offer Tabs start
    $(".trv-tab-box > ul > li:not(:first)").hide();
    $(".trv-tab-list > ul > li:first-child").addClass('active');
    $(".trv-tab-list > ul > li").click(function () {
        var index = $(".trv-tab-list > ul > li").index(this) + 1;
        var tabselc = $(".trv-tab-box li:nth-child(" + index + ")");
        tabselc.fadeIn();
        tabselc.siblings().hide();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
    
});