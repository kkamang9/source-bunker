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
            $tabBtn = $this.find('.tab_menu > .tab_list > .tab_item > button.btn');
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
    
});