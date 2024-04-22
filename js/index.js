$("#homeSection>a").on('mouseenter', () => {
    $("#homeSection>a>span").addClass("hoverBtn")
})
$("#homeSection>a").on('mouseleave', () => {
    $("#homeSection>a>span").removeClass("hoverBtn")
})

var num = 0;
$("#burgerbtn").on('click', () => {
    if (num == 0) {
        $("header > nav").css({
            opacity: 1
        })
        $("#burgerbtn>div").eq(1).css({
            opacity: 0
        })
        $("#burgerbtn>div").eq(0).addClass("rotate1");
        $("#burgerbtn>div").eq(2).addClass("rotate3");
        num = 1;
    } else {
        $("header > nav").css({
            opacity: 0
        })
        $("#burgerbtn>div").eq(1).css({
            opacity: 1
        })
        $("#burgerbtn>div").eq(0).removeClass("rotate1");
        $("#burgerbtn>div").eq(2).removeClass("rotate3");
        num = 0;
    }

})

const srtop = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    reset: true
});
srtop.reveal('#homeSection > h3', {delay: 200});
srtop.reveal('#homeSection>a', {delay: 200});
srtop.reveal('#homeImage', {delay: 200});
srtop.reveal('#socials', {delay: 200});

srtop.reveal('#blogSection>div>h1', {delay: 200});
srtop.reveal('#blogSection>div>p', {delay: 200});

srtop.reveal('#educationSection>div:first-child>h1', {delay: 200});
srtop.reveal('#educationSection>div:first-child>h3', {delay: 200});
srtop.reveal('#educationSection>div:first-child>p', {delay: 200});
srtop.reveal('#educationSection>div:first-child>input', {delay: 200});
srtop.reveal('#educationSection>div:nth-child(2)', {delay: 200});


VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});


let imgs = ["assets/ijse.png","assets/pmv.png","assets/pwc.png"];
let logo = ["assets/ijsebadge.png","assets/pmvbadge.png","assets/pwcbagde.png"];
let dates = ["March 2023" , "January 2007 - March 2013","March 2013 - January 2023"];
let names = ["Institute Of Software Engineering","Pothuwila Maha Vidyalaya","Prince Of Wales College"];
let para = ["I do my O/L and A/L examinations in this school. I passed my Ol exam in 5 A`s, 2 b`s and 2 C`s. and also i passed my Al exam with # S`s.","",""];
var  index = 0;
document.querySelector("#educationSection>div:first-child>input").addEventListener('click',async () => {
    if (index == 0){
        $('#educationSection>div:nth-child(2)>img:first-child').css({
            top:"calc(25vh + 5px)"
        })
        $('#educationSection>div:nth-child(2)>img:nth-child(2)').css({
            top: "6vh"
        })

    }else {
        $('#educationSection>div:nth-child(2)>img:first-child').css({
            top: "calc(19vh + 4px)"
        })
        $('#educationSection>div:nth-child(2)>img:nth-child(2)').css({
            top: "4vh"
        })
    }
    $('#educationSection>div:nth-child(2)>img:nth-child(2)').attr('src', logo[index]);
    $('#educationSection>div:nth-child(2)>img:nth-child(2)').addClass("fade")

    $('#educationSection>div:nth-child(2)>img:first-child').addClass("fade")
    $('#educationSection>div:nth-child(2)>img:first-child').attr('src', imgs[index]);

    $('#educationSection>div:first-child>h3').text(dates[index]);
    $('#educationSection>div:first-child>h3').addClass("fade");

    $('#educationSection>div:first-child>h1').text(names[index]);
    $('#educationSection>div:first-child>h1').addClass("fade");

    $('#educationSection>div:first-child>p').text(para[index]);
    $('#educationSection>div:first-child>p').addClass("fade");

    if (index == 2) {
        index = -1;
    }
    index++;
    await sleep(1000);
    $('#educationSection>div:nth-child(2)>img:nth-child(2)').removeClass("fade")
    $('#educationSection>div:nth-child(2)>img:first-child').removeClass("fade")
    $('#educationSection>div:first-child>h3').removeClass("fade");
    $('#educationSection>div:first-child>h1').removeClass("fade");
    $('#educationSection>div:first-child>p').removeClass("fade");

})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$("#educationSection>div:first-child").on('mouseenter',()=>{
    $("#educationSection>div:first-child>input").addClass("btn");
})
$("#educationSection>div:first-child").on('mouseleave',()=>{
    $("#educationSection>div:first-child>input").removeClass("btn");
})

$("#resumeSection>div>div").on('mouseenter',()=>{
   $("#resumeSection>div>div>div:first-child").addClass("showIcon") ;
   $("#resumeSection>div>div>div:nth-child(2)").addClass("hidetext") ;
});
$("#resumeSection>div>div").on('mouseleave',()=>{
    $("#resumeSection>div>div>div:first-child").removeClass("showIcon") ;
    $("#resumeSection>div>div>div:nth-child(2)").removeClass("hidetext") ;
});

