window.addEventListener('DOMContentLoaded', function () {


    setTimeout(()=>{
        $('#intro').hide();
    },2000);

    const noScroll = setTimeout(()=>{

        $('#no_scroll').hide();

    },2500)



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)




        if(scrollTop >= 10900 && scrollTop <= 12667) {
            $('#section04 .left').addClass('on');
        }else {
            $('#section04 .left').removeClass('on');
        }



        if(scrollTop >= 15332 && scrollTop <= 21962) {
            $('#section05 .fix-this-05 .se05_cnt02 .left').addClass('on');
        }else {
            $('#section05 .fix-this-05 .se05_cnt02 .left').removeClass('on');
        }


        if(scrollTop >= 28850 && scrollTop <= 30585) {
            $('#section06 .top').addClass('on');
        }else {
            $('#section06 .top').removeClass('on');
        }




        if(scrollTop >= 52500 && scrollTop <= 57500) {
            $('#section08 .fix-this-08 .se08_cnt03').addClass('on');
        }else {
            $('#section08 .fix-this-08 .se08_cnt03').removeClass('on');
        }


        if(scrollTop >= 59000 && scrollTop <= 63432) {
            $('#section09 .inner .contact_us .hello').addClass('on');
        }else {
            $('#section09 .inner .contact_us .hello').removeClass('on');
        }

        if(scrollTop >= 60300 && scrollTop <= 63432) {
            $('#section09 .inner .contact_us .contact').addClass('on');
        }else {
            $('#section09 .inner .contact_us .contact').removeClass('on');
        }










    });



    /*  slide,click event section */

    var $mouseX = 0,
        $mouseY = 0,
        $xp = 0,
        $yp = 0,
        $flag =  $("#flag");

    $(document).mousemove(function (e) {
        $mouseX = e.pageX;
        $mouseY = e.pageY;
    });

    var $loop = setInterval(function () {
// change 12 to alter damping higher is slower
        $xp += (($mouseX - $xp) / 32);
        $yp += (($mouseY - $yp) / 32);
        $flag.css({left: ($xp-$flag.width()*0.5) + 'px', top: ($yp -$flag.height()*0.5) + 'px'});
    }, 1);



    const stage = document.querySelector('.stage');
    let elemStage;
    let dotStage;
    let index = 1;

    for (let i = 1; i < 2200; i++) {
        index++;

        const elem = document.createElement('div');
        elem.classList.add('line');
        elemStage = document.querySelector('.elem');
        stage.appendChild(elem);
    }




    $('#header .menu').click(function(){
        $('#mega').addClass('on');
    });

    $('#mega .top .close').click(function(){
        $('#mega').removeClass('on');
    });


    let value = 0;
    $('#mega .mega_box1 > div').click(function () {
        $('#mega').removeClass('on')
        let idx = $('#mega .mega_box1 > div').index(this);
        console.log(idx)

        if (idx === 0) value = 63432; //첫번쨰 메뉴 클릭했을 떄
        if (idx === 1) value = 6207;//두번쨰 메뉴 클릭했을 떄
        if (idx === 2) value = 35892;//세번쨰 메뉴 클릭했을 떄

        container.scrollTo(0, value, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });
    });


    let value2 = 0;
    $('#mega .mega_box2 > div').click(function () {
        $('#mega').removeClass('on')

        let idx = $('#mega .mega_box2 > div').index(this);
        console.log(idx)

        if (idx === 0) value2 = 35892;//첫번쨰 메뉴 클릭했을 떄
        if (idx === 1) value2 = 63432;//두번쨰 메뉴 클릭했을 떄
        if (idx === 2) value2 = 6207;//세번쨰 메뉴 클릭했을 떄

        container.scrollTo(0,value2, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });

    });


    gsap.to("#intro .stage .line", {
        opacity:0,
        each:2,
        duration:0,
        stagger: {
            from: "random",
            amount: 1.5
        },
    });



    gsap.to('#section01 .main .main_mid >div:nth-child(2)', {
        y:400,
        scale: 1.3,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 600,
            // end: 'bottom bottom',
            scrub: true,
            // markers:true,
        }
    });

    gsap.to('#section01 .main >div:nth-child(3)', {
        y:450,
        scale: 1.3,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('#section01 .gradient > div:nth-child(2)', {
        y:-300,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 700,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section01 .gradient > div:nth-child(3)', {
        y:-500,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 600,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section01 .main >div:nth-child(4)', {
        y:500,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 700,
            // end: 'bottom bottom',
            scrub: true,
        }
    });




    //     gsap.to('#section07 .inner01 > div:nth-child(2)', {
    //         scale:200,
    //         scrollTrigger: {
    //             trigger: "#section07",
    //             start: "1000 top",
    //             end: () => "+=" + 1500,
    //             // end: 'bottom bottom',
    //             scrub: true,
    //         }
    //     });     참고





//sec2
    gsap.to('#section02 .fix-this-02', {
        scrollTrigger: {
            trigger: "#section02 .trigger-this-02",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            scrub: true,
        }
    });



    //sec2 검은색 블럭5개
    gsap.to('#section02 .left >div:nth-child(1)', {
        opacity:1,
        x:0,
        scrollTrigger: {
            trigger: "#section02",
            start: "10 top",
            end: () => "+=" + 500,
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .left >div:nth-child(2)', {
        opacity:1,
        x:0,
        scrollTrigger: {
            trigger: "#section02",
            start: "10 top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .left >div:nth-child(3)', {
        opacity:1,
        x:0,
        scrollTrigger: {
            trigger: "#section02",
            start: "10 top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .left >div:nth-child(4)', {
        opacity:1,
        x:0,
        scrollTrigger: {
            trigger: "#section02",
            start: "10 top",
            end: () => "+=" + 2000,
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });




    gsap.to('#section02 .right .black_box .black_bg > div:nth-child(1)', {
        y:0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "10 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to('#section02 .right .black_box .black_bg > div:nth-child(2)', {
        y:0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "100 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to('#section02 .right .black_box .black_bg > div:nth-child(3)', {
        y:0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "220 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to('#section02 .right .black_box .black_bg > div:nth-child(4)', {
        y:0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "320 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });
    gsap.to('#section02 .right .black_box .black_bg > div:nth-child(5)', {
        y:0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "380 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    //sec2 오른쪽 아이콘
    gsap.to('#section02 .right .black_box .bg .icon1', {
        y: 0,  //원래 -30
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "1200 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .right .black_box .bg .font1', {
        y: 0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "1500 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .right .black_box .bg .gra1', {
        y: 0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "2200 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .right .black_box .bg .icon2', {
        y: 0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "2000 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .right .black_box .bg .icon3', {
        y: 0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "2500 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .right .black_box .bg .gra2', {
        y: 0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "3000 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .right .black_box .bg .font2', {
        y: 0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "2800 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section02 .right .black_box .bg .icon3_2', {
        y: 0,
        scrollTrigger: {
            trigger: "#section02", //기준점
            start: "3500 top", //시작점
            end: () => "+=" + 1700, //종료지점
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    // gsap.to('#section02 .right .black_box .bg .icon1_2', {
    //     y: 0,
    //     scrollTrigger: {
    //         trigger: "#section02", //기준점
    //         start: "3800 top", //시작점
    //         end: () => "+=" + 1700, //종료지점
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });











//section02마지

    gsap.to('#section03 .fix-this-03', {
        scrollTrigger: {
            trigger: "#section03 .trigger-this-03",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section03 .top_03 > div:nth-child(1)', {
        scale:0.3,
        y:1000, //움직임
        scrollTrigger: {
            trigger: "#section03", //기준점
            start: "top top", //시작점
            end: () => "+=" + 6500, //종료지점 5500
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section03 .top_03 > div:nth-child(2)', {
        x:-150,  //-150
        // y:-10,
        scrollTrigger: {
            trigger: "#section03",
            start: "550 top",  //350
            end: () => "+=" + 1500,  //1500
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section03 .top_03 > div:nth-child(3)', {
        x:-2800,
        // y:-600,
        scrollTrigger: {
            trigger: "#section03",
            start: "450 top",  //350
            end: () => "+=" + 3000,  //1000
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    gsap.to('#section03 .top_03 > div:nth-child(1) > img', {
        y: 3000, //움직임2000
        scrollTrigger: {
            trigger: "#section03", //기준점
            start: "top top", //시작점
            end: () => "+=" + 4700, //종료지점3700
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });





    gsap.to('#section03 .bottom_03', {
        y: 1624,  //1124
        scrollTrigger: {
            trigger: "#section03",
            start: "1500 top",  //50
            end: () => "+=" + 1000,  //6600
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });

    gsap.to('#section03 .bottom_03', {
        opacity:1,
        scrollTrigger: {
            trigger: "#section03",
            start: "1000 top",  //50
            end: () => "+=" + 1000,  //6600
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });    //스크롤하고 멈춰야됨

    gsap.to('#section04 .right > div:nth-child(2) ', {
        clipPath:"inset(0% 0% 0% 0%)",
        scrollTrigger: {
            trigger: "#section04",
            start: "-500 top",  //50
            end: () => "+=" + 1000,  //6600
            // end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });





    // gsap.to('#section02 .right .black_box .bg .icon1_2', {
    //     y: 0,
    //     scrollTrigger: {
    //         trigger: "#section02", //기준점
    //         start: "3800 top", //시작점
    //         end: () => "+=" + 1700, //종료지점
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });

    // gsap.to('#section02 .left >div:nth-child(2)', {
    //     opacity:1,
    //     x:0,
    //     scrollTrigger: {
    //         trigger: "#section02",
    //         start: "10 top",
    //         end: () => "+=" + 1500,
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });



    // gsap.to('#section04 .left>div:nth-child(2)', {
    //     opacity:1,
    //     x:0,
    //     scrollTrigger: {
    //         trigger: "#section04",
    //         start: "-200 top",
    //         end: () => "+=" + 20,
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });
    //
    // gsap.to('#section04 .left>div:nth-child(3)', {
    //     opacity:1,
    //     x:0,
    //     scrollTrigger: {
    //         trigger: "#section04",
    //         start: "-200 top",
    //         end: () => "+=" + 20,
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });
    //
    // gsap.to('#section04 .left>div:nth-child(4)', {
    //     opacity:1,
    //     x:0,
    //     scrollTrigger: {
    //         trigger: "#section04",
    //         start: "top top",
    //         end: () => "+=" + 100,
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });











    gsap.to('#section05 .fix-this-05', {
        scrollTrigger: {
            trigger: "#section05 .trigger-this-05",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });



    gsap.to('#section05 .inner01', {
        x:-1920,
        scrollTrigger: {
            trigger: "#section05",
            start: "2000 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('#section05 .fix-this-05 .se05_cnt01 .se05_img', {
        scale:3,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 3000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });  //이미지 커지는 걸 좀 느리게

    gsap.to('#section05 .fix-this-05 .se05_cnt01 .se05_img > div:nth-child(1)', {
        opacity:0,
        scrollTrigger: {
            trigger: "#section05",
            start: "top top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    let sc05 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc05,
        trigger: "#section05",
        start: "top top",
        end: () => "+=" + 1000,
        // end: 'bottom bottom',
        scrub: 1,
        ease:"ease",

        // onUpdate: self => {
        //     console.log("progress:", self.progress)
        // },

    });
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft2 > div:nth-child(9)", {y: -600, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft2 > div:nth-child(8)", {y: -600, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft2 > div:nth-child(7)", {y: -600, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft2 > div:nth-child(6)", {y: -600, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft2 > div:nth-child(5)", {y: -600, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft2 > div:nth-child(4)", {y: -600, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft2 > div:nth-child(3)", {y: -600, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft2 > div:nth-child(2)", {y: -600, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft2 > div:nth-child(1)", {y: -600, duration: 10});

    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft1 > div:nth-child(7)", {y: -700, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft1 > div:nth-child(6)", {y: -700, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft1 > div:nth-child(5)", {y: -700, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft1 > div:nth-child(4)", {y: -700, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft1 > div:nth-child(3)", {y: -700, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft1 > div:nth-child(2)", {y: -700, duration: 10});
    sc05.to("#section05 .fix-this-05 .se05_cnt01 .minecraft1 > div:nth-child(1)", {y: -700, duration: 10});



    gsap.to('#section05 .inner02', {
        x:-220,
        scrollTrigger: {
            trigger: "#section05",
            start: "3000 top",
            end: () => "+=" + 1000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('#section05 .fix-this-05 .se05_cnt02 .left .rotate_img > img', { //첫번쨰 이미지 돌아가는 구동
        rotate: 270,
        scrollTrigger: {
            trigger: "#section05",
            start: "3500 top",
            end: () => "+=" + 3000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('#section05 .fix-this-05 .se05_cnt02 .right .inner', { //오른쪽 이미지 들어오는 구동
        x:-372,
        scrollTrigger: {
            trigger: "#section05",
            start: "6500 top",
            end: () => "+=" + 1200,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('#section05 .inner03', { // 전체 가로 섹션 움직인느 구동
        x:-5060,
        scrollTrigger: {
            trigger: "#section05",
            start: "8800 top",
            end: () => "+=" + 4000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('#section05 .fix-this-05 .se05_cnt03 .invert02', { // 텍스트 반전 구동
        clipPath: "inset(0% 0% 0% 0%)",
        scrollTrigger: {
            trigger: "#section05",
            start: "12500 top",
            // end: () => "+=" + 1000,
            end: 'bottom bottom',
            scrub: true,
        }
    });






    gsap.to('#section07 .fix-this-07', {
        scrollTrigger: {
            trigger: "#section07 .trigger-this-07",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });



    gsap.to('#section07 .inner01 > div:nth-child(2)', {
        scale:200,
        scrollTrigger: {
            trigger: "#section07",
            start: "500 top",  //1000
            end: () => "+=" + 3000,  //1500
            // end: 'bottom bottom',
            scrub: true,
        }
    });




    //글자커지고 구동
    gsap.to('#section07 .inner02', {
        y:-7650,
        scrollTrigger: {
            trigger: "#section07",
            start: "3000 top",
            end: () => "+=" + 12000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('#section07 .inner02 > div:nth-child(1)', {
        y:500,
        scrollTrigger: {
            trigger: "#section07",
            start: "3700 top",
            end: () => "+=" + 900,
            // end: 'bottom bottom',
            scrub: true,
        }
    });


    gsap.to('#section07 .inner02 > div:nth-child(2)', {
        y:-300,
        scrollTrigger: {
            trigger: "#section07",
            start: "3500 top",
            end: () => "+=" + 1500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section07 .inner02>div:nth-child(3)', {
        y:350,
        scrollTrigger: {
            trigger: "#section07",
            start: "1500 top",
            end: () => "+=" + 2200,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section07 .inner02>div:nth-child(5)', {
        y:900,
        scrollTrigger: {
            trigger: "#section07",
            start: "3700 top",
            end: () => "+=" + 4500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section07 .inner02>div:nth-child(6)', {
        y:-700,
        scrollTrigger: {
            trigger: "#section07",
            start: "3800 top",
            end: () => "+=" + 3500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section07 .inner02>div:nth-child(7)', {
        y:350,
        scrollTrigger: {
            trigger: "#section07",
            start: "2700 top",
            end: () => "+=" + 3400,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section07 .inner02>div:nth-child(8)', {
        y:430,
        scrollTrigger: {
            trigger: "#section07",
            start: "5500 top",
            end: () => "+=" + 3500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section07 .inner02>div:nth-child(9)', {
        y:580,
        scrollTrigger: {
            trigger: "#section07",
            start: "5300 top",
            end: () => "+=" + 5800,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section07 .inner02>div:nth-child(10)', {
        y:800,
        scrollTrigger: {
            trigger: "#section07",
            start: "5500 top",
            end: () => "+=" + 8500,
            // end: 'bottom bottom',
            scrub: true,
        }
    });

    gsap.to('#section07 .inner02>div:nth-child(11)', {
        y:600,
        scrollTrigger: {
            trigger: "#section07",
            start: "6400 top",
            end: () => "+=" + 7000,
            // end: 'bottom bottom',
            scrub: true,
        }
    });














    gsap.to('#section08 .fix-this-08 ', {
        x:-4231,
        scrollTrigger: {
            trigger: "#section08 .trigger-this-08",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });






    gsap.to('#section09 .fix-this-09', {
        scrollTrigger: {
            trigger: "#section09 .trigger-this-09",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });


    let sc09 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc09,
        trigger: "#section09", //기준점
        start: "1000 top", //시작점
        end: () => "+=" + 3000, //종료지점 4000
        scrub: 1,
        onUpdate: self => {
            console.log("progress:", self.progress)
        }
    });

    sc09.to("#section09 .black_bg > div:nth-child(1)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(2)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(3)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(4)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(5)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(6)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(7)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(8)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(9)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(10)", {y:-980,});
    sc09.to("#section09 .black_bg > div:nth-child(11)", {y:-980,});



//덮여있던게 올라가면서



    // gsap.to('#section09 .black_bg > div:nth-child(1)', {
    //     y:0,
    //     scrollTrigger: {
    //         trigger: "#section09", //기준점
    //         start: "-700 top", //시작점
    //         end: () => "+=" + 500, //종료지점
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });
    //
    //
    // gsap.to('#section09 .black_bg > div:nth-child(2)', {
    //     y:0,
    //     scrollTrigger: {
    //         trigger: "#section09", //기준점
    //         start: "-600 top", //시작점
    //         end: () => "+=" + 500, //종료지점
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });
    //
    //
    // gsap.to('#section09 .black_bg > div:nth-child(3)', {
    //     y:0,
    //     scrollTrigger: {
    //         trigger: "#section09", //기준점
    //         start: "-500 top", //시작점
    //         end: () => "+=" + 500, //종료지점
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });
    //
    //
    // gsap.to('#section09 .black_bg > div:nth-child(4)', {
    //     y:0,
    //     scrollTrigger: {
    //         trigger: "#section09", //기준점
    //         start: "-400 top", //시작점
    //         end: () => "+=" + 500, //종료지점
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });
    // gsap.to('#section09 .black_bg > div:nth-child(5)', {
    //     y:0,
    //     scrollTrigger: {
    //         trigger: "#section09", //기준점
    //         start: "-300 top", //시작점
    //         end: () => "+=" + 1700, //종료지점
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });



    // gsap.to('#section09 .inner ', {
    //     y:-980,
    //     scrollTrigger: {
    //         trigger: "#section09", //기준점
    //         start: "2000 top", //시작점
    //         end: () => "+=" + 1000, //종료지점
    //         // end: 'bottom bottom',
    //         // pinSpace:false,
    //         pinSpacing: false,
    //         scrub: true,
    //     }
    // });



    $('#section08 .fix-this-08 .se08_cnt01 .inner .right_slide').slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $('#section08 .se08_cnt01 .prev'), //prev
        nextArrow: $('#section08 .se08_cnt01 .next'), //next
        autoplay: true, // autoplay mode
        autoplaySpeed: 3000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1000, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: false, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        $('.slider02 .slick-slide').removeClass('on');


    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {

        $('.slider02 .slick-current').addClass('on');

    });





})


