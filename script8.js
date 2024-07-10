function page1animation(){
    

var tl = gsap.timeline()
tl.from("nav h1,nav h4, nav button",{
   y:-40,
   duration:0.8,
   delay:1,
   opacity:0,
   stagger:0.15
   

})
tl.from(".centerpart1 h1",{
   x:-200,
   opacity:0,
   duration:0.4

})
tl.from(".centerpart1 p",{
   x:-100,
   opacity:0,
   duration:0.4

})
tl.from(".centerpart1 button",{
   opacity:0,
   duration:0.1
})
tl.from(".centerpart2 img",{
   opacity:0,
   duration:0.5,
   x:100
},"-=0.5")


}

var tol = gsap.timeline({
    scrollTrigger:{
        trigger:".section1bottom img",
        scroller:"body",
        start:"top 40%",
        scrub:2

    }


})
tol.from(".section1bottom img",{
    y:30,
    opacity:0,
    duration:0.5
})
page1animation()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        end:"top 0"
    }
})
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5

})
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1,

     
},"anim1")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"anim1")
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1,

     
},"anim2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"anim2")



var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        marker:true,
        start:"top 70%",
        scrub:2,
        end:"top 0"
    }
})

tl3.from(".section3diiv",{
   x:-500,
    opacity:0,
    duration:0.5
})
tl3.from(".section3diiv h3,.section3diiv p,.section3diiv button",{
    opacity:0,
    y:30
  
})
tl3.from(".section3img img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6

})


var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        marker:true,
        start:"top 70%",
        scrub:2,
        end:"top 0"
    }

})

tl4.from(".case",{
    x:-500,
    opacity:0,
    duration:1
})
tl4.from(".boxcase",{
  x:-500,
    duration:1,
    opacity:0

})
tl4.from(".boxcase h2,.boxcase p",{
    y:30,
    opacity:0,
    duration:1
})