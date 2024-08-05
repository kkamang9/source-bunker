$(function(){
    // $(function(){}); = $(document).ready(function(){ }); = document.onload()
    var $copyBox = $('.copy_box');
    $copyBox.each(function(){
        var $copyButton = $(this).find('.copy'),
            $copyTextarea = $(this).find('textarea.copy_text');
        $copyButton.on('click',function(){
            $copyTextarea.select();
            var copyClipboard = document.execCommand('copy');
        });
    });
});




/*템플릿 코드 복사 코드
    
    @name code-copy
    * @author Kwon Oh Hwan
    * @since 2020-09-16
    
    1. 복사할 코드에 attribute로 copy-attr='yes' 기입
    2. <textarea id="ClipBoard" style="display:none"></textarea> html 파일에 넣기
    3. <div class="copy_clone" style="display:none;"></div> html 파일에 넣기
    
    */

$("[copy-attr='yes']").on('click', function() {
    var findHtml = $(this).clone();
    
    
    $('.copy_clone').append(findHtml);
    $('.copy_clone *').removeAttr('copy-attr style');
    
    var copyHtml = $('.copy_clone').html();
    
    
    $('#ClipBoard').css('display', 'block').val(copyHtml).select();
    
    var succeed;
    try {
        succeed = document.execCommand("copy");
        $('#ClipBoard').css('display', 'none');
        $('.copy_clone').html('');
    } catch(e) {
        succeed = false;
    }
    if(succeed) {
        alert('복사 되었습니다');
    }
    return false;
});