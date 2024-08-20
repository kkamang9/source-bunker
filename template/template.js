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
            $tabMenuItem = $this.find('.tab_menu .tab_list .tab_item'),
            $tabBtn = $tabMenuItem.find('.btn');
        $tabBtn.on('click',function(){
            var $thisBtn = $(this),
                $tabIndex = $thisBtn.parent().index(),
                $tabContentItem = $thisBtn.closest($tabWrap).find('.tab_contents .content_item');
            $thisBtn.attr('title','선택됨').parent().addClass('active').siblings().removeClass('active').find($tabBtn).removeAttr('title');
            $tabContentItem.removeClass('active').eq($tabIndex).addClass('active');
        });
    });
    // tab menu - E
    
});