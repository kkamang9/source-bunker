(function ($) {
    'use strict';
    $(function(){
        // copy button script - S
        $('.copy_box').each(function(){
            var $copyButton = $(this).find('.copy'),
                $copyTextarea = $(this).find('textarea.copy_text').text();
            $copyButton.on('click',function(){
                navigator.clipboard.writeText($copyTextarea).then();
            });
        });
        // copy button script - E
        
        // 반응형 테이블
        $('table.table.responsive').not($('.prettyprint').children()).each(function () {
            var RowSpanExist = $(this).find('td, th').is('[rowspan]'),
                TheadExist = $(this).find('thead').length;
            if ((RowSpanExist == false) && (TheadExist != 0)) {//rowspan이 없을 경우만 실행 (rowspan이 있으면 지원불가)
                $(this).children('tbody').children('tr').find('th, td').each(function () {
                    var ThisIndex = $(this).index(),
                        TheadText = $(this).parents('tbody').siblings('thead').find('th').eq(ThisIndex).text();
                    $(this).attr('data-content', TheadText);
                });
                $(this).children('tfoot').children('tr').find('th, td').each(function () {
                    var ThisIndex = $(this).index(),
                        TheadText = $(this).parents('tfoot').siblings('thead').find('th').eq(ThisIndex).text();
                    $(this).attr('data-content', TheadText);
                });
            }
        });
        
        // tab menu - S
        $('.tab_wrap').each(function(){
            var $this = $(this),
                $tabMenu = $this.children('.tab_menu'),
                $tabOpen = $tabMenu.find('.tab_open'),
                $tabItem = $tabMenu.find('.tab_list .tab_item'),
                $tabActive = $tabMenu.find('.tab_list .tab_item.active'),
                $tabBtn = $tabItem.find('button.btn'),
                $tabContents = $this.children('.tab_contents'),
                $contentItem = $tabContents.children('.content_item'),
                $contentActive = $tabContents.children('.content_item.active');
            $tabOpen.find('span em').text($tabActive.find('span em').text());
            $tabBtn.removeAttr('title');
            $tabActive.find('.btn').attr('title','선택됨');
            if($tabMenu.is('.effect_fade') === true){$contentActive.addClass('on');}
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
                    $thisIndex = $thisBtn.parent().index(),
                    $thisText = $thisBtn.find('span > em').text(),
                    $indexContent = $contentItem.eq($thisIndex);
                $thisBtn.attr('title','선택됨').parent().addClass('active').siblings().removeClass('active').children('.btn').removeAttr('title');
                if($tabMenu.is('.effect_fade') === true){
                    $indexContent.addClass('active').siblings().removeClass('on');
                    setTimeout(function(){
                        $indexContent.addClass('on');
                    },1);
                    setTimeout(function(){
                        $indexContent.siblings().removeClass('active');
                    },300);
                }else{
                    $indexContent.addClass('active').siblings().removeClass('active');
                }
                if($tabOpen.is('.active')){
                    $tabOpen.removeClass('active').attr('title','탭메뉴 열기').next().stop().slideUp();
                }
                $tabOpen.find('span > em').text($thisText);
                $indexContent.find('.slick-slider').each(function(){$(this).slick('setPosition');});
            });
        });
        // tab menu - E
        
        // slick slide - S
        // slick type full
        $('.test_slide01 .slide_list').slick({
            accessibility: true,
            speed: 1000,
            arrows: true,
            prevArrow: $('.test_slide01 .button_wrap .button_box.prev .btn'),
            nextArrow: $('.test_slide01 .button_wrap .button_box.next .btn'),
            autoArrow: $('.test_slide01 .control_box .button_box.auto .btn'),
            pauseText: '정지',
            playText: '재생',
            total: $('.test_slide01 .control_box .num_box .number.total'),
            current: $('.test_slide01 .control_box .num_box .number.current'),
            dots: true,
            appendDots: $('.test_slide01 .button_wrap'),
        });
        // slick type full
        $('.test_slide02 .slide_list').slick({
            accessibility: true,
            slidesToShow: 3,
            speed: 1000,
            arrows: true,
            prevArrow: $('.test_slide02 .button_wrap .button_box.prev .btn'),
            nextArrow: $('.test_slide02 .button_wrap .button_box.next .btn'),
        });
        // slick slide - E
    });
})(jQuery);