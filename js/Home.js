

$("#homeSection>a").on('mouseenter', () =>{
    $("#homeSection>a>span").addClass("hoverBtn")
})
$("#homeSection>a").on('mouseleave', () =>{
    $("#homeSection>a>span").removeClass("hoverBtn")
})

var num = 0 ;
$("#burgerbtn").on('click' ,() =>{
    if (num == 0 ){
        $("header > nav").css({
            opacity: 1
        })
        $("#burgerbtn>div").eq(1).css({
            opacity : 0
        })
        $("#burgerbtn>div").eq(0).addClass("rotate1");
        $("#burgerbtn>div").eq(2).addClass("rotate3");
        num = 1;
    }else {
        $("header > nav").css({
            opacity: 0
        })
        $("#burgerbtn>div").eq(1).css({
            opacity : 1
        })
        $("#burgerbtn>div").eq(0).removeClass("rotate1");
        $("#burgerbtn>div").eq(2).removeClass("rotate3");
        num = 0;
    }

})