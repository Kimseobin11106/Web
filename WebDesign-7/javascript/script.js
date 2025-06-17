jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").delay(1200)
        $(".imglen").animate({marginTop:-300},1000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginTop:0})
        })
    })

    $(".no li:first").click(function(){
        $(".popup").show()
    })
    $("button").click(function(){
        $(".popup").hide()
    })
})