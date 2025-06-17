jQuery(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })
    $(".main>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })

    setInterval(function(){
        $(".imglen").delay(1200)
        $(".imglen").animate({marginTop:-400},1000,function(){
            $(".imglen li:first").appendTo(".imglen")
            $(".imglen").css({marginTop:0})
        })
    })

    $(".notice li:first").click(function(){
        $(".popup").show()
    })
    $(".p_bottom button").click(function(){
        $(".popup").hide()
    })

    $("#tab2").click(function(){
        $(".notice").hide()
        $(".gallery").show()
        $("#tab1").removeClass("on").addClass("off")
        $("#tab2").removeClass("off").addClass("on")
    })
    $("#tab1").click(function(){
        $(".gallery").hide()
        $(".notice").show()
        $("#tab2").removeClass("on").addClass("off")
        $("#tab1").removeClass("off").addClass("on")
    })
})