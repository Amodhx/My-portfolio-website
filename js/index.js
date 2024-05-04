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

});

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


srtop.reveal('#certificateSection>div', {delay: 200});


srtop.reveal('#assignmentSection>div:first-child', {delay: 200});



srtop.reveal('#assignmentSection>div:first-child', {delay: 200});

srtop.reveal('#gallery', {delay: 200});





srtop.reveal('#projectSection>div>div', {delay: 200});


VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});


let imgs = ["assets/ijse.png", "assets/pmv.png", "assets/pwc.png"];
let logo = ["assets/ijsebadge.png", "assets/pmvbadge.png", "assets/pwcbagde.png"];
let dates = ["March 2023", "January 2007 - March 2013", "March 2013 - January 2023"];
let names = ["Institute Of Software Engineering", "Pothuwila Maha Vidyalaya", "Prince Of Wales College"];
let para = ["In 2021, I started going to IJSE for further education.", "I went to school for the first time at the age of 6 to Pothuwila Navodya School. At the grade of 5, I had to change schools because I passed on scholarship", "\n" +
"I took my O/L and A/L examinations at this school. I passed my O/L exams with 5 A's, 2 B's, and 2 C's. Additionally, I passed my A/L exams with # S's."];
var index = 0;
document.querySelector("#educationSection>div:first-child>input").addEventListener('click', async () => {
    if (index == 0) {
        $('#educationSection>div:nth-child(2)>img:first-child').css({
            top: "calc(25vh + 5px)"
        })
        $('#educationSection>div:nth-child(2)>img:nth-child(2)').css({
            top: "6vh"
        })

    } else {
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

$("#educationSection>div:first-child").on('mouseenter', () => {
    $("#educationSection>div:first-child>input").addClass("btn");
})
$("#educationSection>div:first-child").on('mouseleave', () => {
    $("#educationSection>div:first-child>input").removeClass("btn");
})

// resume
$("#resumeSection>div>div").on('mouseenter', () => {
    $("#resumeSection>div>div>div:first-child").addClass("showIcon");
    $("#resumeSection>div>div>div:nth-child(2)").addClass("hidetext");
});
$("#resumeSection>div>div").on('mouseleave', () => {
    $("#resumeSection>div>div>div:first-child").removeClass("showIcon");
    $("#resumeSection>div>div>div:nth-child(2)").removeClass("hidetext");
});


// projects
$("#projectSection>div>div:first-child").on('mouseenter', () => {
    $("#projectSection>div>div:first-child>div").addClass("fadeCir");

    $("#projectSection>div>div:first-child>h4").addClass("textClr");
    $("#projectSection>div>div:first-child>h1").addClass("textClr");
    $("#projectSection>div>div:first-child>p").addClass("textClr");

    $("#projectSection>div>div:first-child>img").addClass("imgClr");
});

$("#projectSection>div>div:nth-child(2)").on('mouseenter', () => {
    $("#projectSection>div>div:nth-child(2)>div").addClass("fadeCir");

    $("#projectSection>div>div:nth-child(2)>h4").addClass("textClr");
    $("#projectSection>div>div:nth-child(2)>h1").addClass("textClr");
    $("#projectSection>div>div:nth-child(2)>p").addClass("textClr");

    $("#projectSection>div>div:nth-child(2)>img").addClass("imgClr");
});
$("#projectSection>div>div:nth-child(3)").on('mouseenter', () => {
    $("#projectSection>div>div:nth-child(3)>div").addClass("fadeCir");

    $("#projectSection>div>div:nth-child(3)>h4").addClass("textClr");
    $("#projectSection>div>div:nth-child(3)>h1").addClass("textClr");
    $("#projectSection>div>div:nth-child(3)>p").addClass("textClr");

    $("#projectSection>div>div:nth-child(3)>img").addClass("imgClr");
});

$("#projectSection>div>div").on('mouseleave', () => {
    $("#projectSection>div>div>div").removeClass("fadeCir");

    $("#projectSection>div>div>h4").removeClass("textClr");
    $("#projectSection>div>div>h1").removeClass("textClr");
    $("#projectSection>div>div>p").removeClass("textClr");

    $("#projectSection>div>div>img").removeClass("imgClr");
});


// project section source code btn
$("#projectSection>div>div:first-child>nav").on('mouseenter', () => {
    $("#projectSection>div>div:first-child>nav>div:first-child").addClass("showicon");
    $(" #projectSection>div>div:first-child>nav>div:nth-child(2)").addClass("hideText");
    $(" #projectSection>div>div:first-child>nav").addClass("clr")
})
$("#projectSection>div>div:nth-child(2)>nav").on('mouseenter', () => {
    $("#projectSection>div>div:nth-child(2)>nav>div:first-child").addClass("showicon");
    $(" #projectSection>div>div:nth-child(2)>nav>div:nth-child(2)").addClass("hideText");
    $(" #projectSection>div>div:nth-child(2)>nav").addClass("clr")
})

$("#projectSection>div>div:nth-child(3)>nav").on('mouseenter', () => {
    $("#projectSection>div>div:nth-child(3)>nav>div:first-child").addClass("showicon");
    $(" #projectSection>div>div:nth-child(3)>nav>div:nth-child(2)").addClass("hideText");
    $(" #projectSection>div>div:nth-child(3)>nav").addClass("clr")
})
$("#projectSection>div>div>nav").on('mouseleave', () => {
    $("#projectSection>div>div>nav>div:first-child").removeClass("showicon");
    $(" #projectSection>div>div>nav>div:nth-child(2)").removeClass("hideText");
    $(" #projectSection>div>div>nav").removeClass("clr")
})
// project section source code btn end


// download resume
$("#resumeBtn").on('click', () => {
    const a = document.createElement('a')
    a.href = "assets/resume/Amodh Nanditha CV.pdf"
    a.download = "assets/resume/Amodh Nanditha CV.pdf".split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
});

// download resume end


// assignment description viewer

$("#assignmentSection>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>img").on('click', () => {
    textAppend(0);

});

$("#assignmentSection>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>img").on('click', () => {
    textAppend(1);

});

$("#assignmentSection>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>img").on('click', () => {
    textAppend(2);

});
$("#assignmentSection>div:nth-child(2)>div:nth-child(2)>div:nth-child(4)>img").on('click', () => {
    textAppend(3);

});
$("#assignmentSection>div:nth-child(2)>div:nth-child(2)>div:nth-child(5)>img").on('click', () => {
    textAppend(4);

});
$("#assignmentSection>div:nth-child(2)>div:nth-child(2)>div:nth-child(6)>img").on('click', () => {
    textAppend(5);

});
$("#assignmentSection>div:nth-child(2)>div:nth-child(2)>div:nth-child(7)>img").on('click', () => {
    textAppend(6);

});
$("#assignmentSection>div:nth-child(2)>div:nth-child(2)>div:nth-child(8)>img").on('click', () => {
    textAppend(7);
});

$("#assignmentSection>div:nth-child(2)>div:first-child>nav>img").on('click', () => {
    $("#assignmentSection>div:nth-child(2)>div:first-child").removeClass("showSQ");
})

let ar = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0];

function textAppend(index) {
    $("#assignmentSection>div:nth-child(2)>div:first-child").addClass("showSQ");

}

// assignment description viewer end


// project source code navigation

$("#studentCode").on('click', () => {
    window.open('https://github.com/Amodhx/Student_Management_System');
});

$("#libraryCode").on('click', () => {
    window.open('https://github.com/Amodhx/Library-management-System');
});

$("#inventoryCode").on('click', () => {
    window.open('https://github.com/Amodhx/Inventory-management-system');
});

// project source code navigation end
