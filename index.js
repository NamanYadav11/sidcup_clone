var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-190+"px"
    blur.style.top=dets.y-190+"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11E";
        crsr.style.backgroundColor = "#95c11E";
    })
})



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11",
        scrub:1,
    }
  
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})


gsap.from("#about-us,about-us-in",{
    y:50,
    opacity:0,
    stragger:0.6,
    duration:1.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers: true,
        start:"top 75%",
        end:"top 60%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    stragger:0.6,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers: true,
        start:"top 75%",
        end:"top 60%",
        scrub:3
    }
})

gsap.from("#tag-line",{
    y:70,
    stragger:0.6,
    duration:1.5,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }

})



gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})



