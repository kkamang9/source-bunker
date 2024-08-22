$(function(){
    // $(function(){}); = $(document).ready(function(){ }); = document.onload()
    
    // copy button script
    $('.copy_box').each(function(){
        var $copyButton = $(this).find('.copy'),
            $copyTextarea = $(this).find('textarea.copy_text').text();
        $copyButton.on('click',function(){
            navigator.clipboard.writeText($copyTextarea).then();
        });
    });
    
    // tab menu - S
    var $tabWrap = $('.tab_wrap');
    $tabWrap.each(function(){
        var $this = $(this),
            $tabOpen = $this.find('.tab_menu > .tab_open'),
            $tabBtnText = $this.find('.tab_menu > .tab_list > .tab_item.active').text(),
            $tabBtn = $this.find('.tab_menu > .tab_list > .tab_item > button.btn');
        $tabOpen.find('span > em').text($tabBtnText);
        $tabOpen.off().on('click',function(){
            var $thisOpen = $(this);
            if($thisOpen.is('.active') === true){
                $thisOpen.removeClass('active').attr('title','탭메뉴 열기').next().stop().slideUp();
            }else if($thisOpen.is('.active') === false){
                $thisOpen.addClass('active').attr('title','탭메뉴 닫기').next().stop().slideDown();
            }
        });
        $tabBtn.on('click',function(){
            var $thisBtn = $(this),
                $tabIndex = $thisBtn.parent().index(),
                $thisText = $thisBtn.find('span > em').text(),
                $prevOpen = $thisBtn.closest('.tab_list').prev();
            $thisBtn.attr('title','선택됨').parent().addClass('active').siblings().removeClass('active').children('.btn').removeAttr('title');
            $thisBtn.closest('.tab_menu').siblings('.tab_content').children('.content_item').removeClass('active').eq($tabIndex).addClass('active');
            if($prevOpen.is('.active')){
                $prevOpen.removeClass('active').attr('title','탭메뉴 열기').next().stop().slideUp();
                $prevOpen.find('span > em').text($thisText);
            }
        });
    });
    // tab menu - E
    
    // slick slide - S
    // slick type full
    $('.test_slide01 > .slide_list').slick({
        accessibility: true,
        speed: 1000,
        arrows: true,
        prevArrow: $('.test_slide01 > .button_wrap > .button_box.prev > .btn'),
        nextArrow: $('.test_slide01 > .button_wrap > .button_box.next > .btn'),
    });
    // slick type full
    $('.test_slide02 > .slide_list').slick({
        accessibility: true,
        slidesToShow: 3,
        speed: 1000,
        arrows: true,
        prevArrow: $('.test_slide02 > .button_wrap > .button_box.prev > .btn'),
        nextArrow: $('.test_slide02 > .button_wrap > .button_box.next > .btn'),
    });
    // slick slide - E
    
});