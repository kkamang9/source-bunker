(function ($) {
    'use strict';
    $(function() {
        $('#testBtn').on('click',function(){
            var $userNameValue = $('#userName').val();
            $.ajax({
                url:'getItem',
                dataType:'json',
                contentType:'application/json',
                data:JSON.stringify($userNameValue),
                method:'POST',
                success:function(t){
                    var itemData = t.itemData;
                    console.log(itemData);
                },
                error:function(t){
                    console.error("Error! Item load fail.");
                }
            });
        });
    });
})(jQuery);