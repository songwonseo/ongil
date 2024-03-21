$(function(){
    $("section").mousewheel(function(event, delta){ //마우스휠을 얼만큼 굴렸는지의 좌표. 매개변수 delta:방향
        if(delta>0){
            var prev=$(this).prev().offset().top; //prev: 현재 선택 되어 있는 것(section)의 이전(형)0, offset top: 위에서 얼마나 떨어져 있는지
            $("html,body").stop().animate({scrollTop:prev},1000); //밑에 있는 것을 보기 위함. stop: 화면상에서 눈으로 볼때의 애니메이션은 끝났지만 실제로는 그렇지 않기 때문에
        } else if(delta<0){
            var next=$(this).next().offset().top; //next:동생 this: section 5개 중에 현재 내가 보고 있는 section. 화면상 보여지고 있는 section
            $("html,body").stop().animate({scrollTop:next},1000)
        }
    });

});
