(function ($) {
    'use strict';
    $(function() {
        
        $.ajax({
            url : '../layout/header.html', // 읽어올 파일의 경로 (클라이언트가 요청을 보낼 서버의 URL 주소)
            data : { name: "홍길동" }, // HTTP 요청과 함께 서버로 보낼 데이터
            //data : JSON.stringify(requestParam), // data 를 넘겨줄때 post 타입은 body 에 붙기 때문에 JSON.stringify 를 해줘서 body 에 변수를 넣어줘야한다
            type : 'GET', // 데이터를 읽어오는 방식 (HTTP 요청 방식(GET, POST, DELETE, PUT))
            dataType : 'json', // 서버에서 받아올 데이터 형식 (json, text, html, script, jsonp, xml)
            async : false, // 서버 호출 방식 설정 (true(비동기식), false(동기식))(기본값 true)
            timeout : 10000, // 제한시간 (밀리초)
            contentType : "application/json", // 서버에 데이터를 보낼 때 사용
            beforeSend:function(){ // ajax 요청이 전송되기 전
                $('.wrap-loading').removeClass('display-none');
            },
            complete:function(){ // ajax 통신이 완료될 때
                $('.wrap-loading').addClass('display-none');
            },
            success : function (data) { // 데이터 주고받기 성공했을 경우
                $('#header').prepend(data);
            },
            error : function (request, status, error) { // 데이터 주고받기 실패했을 경우
                console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                alert('실패');
            },
            fail : function() {
                alert("인터넷 연결 상태를 확인해주세요.");
                $('.wrap-loading').addClass('display-none');
            }
        })
        
        // HTTP 요청이 성공하면 요청한 데이터가 done() 메소드로 전달됨.
        .done(function(json) {
            $("<h1>").text(json.title).appendTo("body");
            $("<div class=\"content\">").html(json.html).appendTo("body");
        })
        // HTTP 요청이 실패하면 오류와 상태에 관한 정보가 fail() 메소드로 전달됨.
        .fail(function(xhr, status, errorThrown) {
            $("#text").html("오류가 발생했습니다.<br>")
            .append("오류명: " + errorThrown + "<br>")
            .append("상태: " + status);
        })
        // HTTP 요청이 성공하거나 실패하는 것에 상관없이 언제나 always() 메소드가 실행됨.
        .always(function(xhr, status) {
            $("#text").html("요청이 완료되었습니다!");
        });
        
        // url 인식 ajax
        // url replace
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        // menu type
        var menuType = getParameterByName('type');
        // sub contents
        if(menuType){
            $.ajax({
                url : '/rere/sub/'+menuType+'.html',
                async: false,
                success : function (data) {
                    $('#sub_content').addClass('menu_'+menuType).prepend(data);
                },
                error:function(request, status, error){
                    console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                }
            });
        }
        
    });
})(jQuery);
