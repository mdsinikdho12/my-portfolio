var tl = gsap.timeline()
tl.from(".home-text",{
    y:-20,
    opacity:0,
    duration:0.5,
    stager:0.3
})

tl.from(".logo1-gif",{
    y:-20,
    opacity:0,
    duration:0.5,
    
})
tl.from(".gif-logo",{
    y:-20,
    opacity:0,
    duration:0.5,
    stager:0.3
})

tl.from(".wel-text",{
    y:-20,
    opacity:0,
    duration:0.4,
    stager:0.3,
    scale:0.5
})

gsap.from(".About-img",{
    opacity: 0.5,
    x: -400,
    duration:1,
    scrollTrigger: {
        trigger: ".About-img",
        scroller:"body",
        start: "top 90%",  // `.box` যখন স্ক্রিনের ৮০% জায়গায় আসবে তখন শুরু হবে
        end: "bottom 30%", // `.box` যখন স্ক্রিনের ২০% এ পৌঁছাবে তখন শেষ হবে
        scrub: true,
        markers: true,
         // স্ক্রিনে লাল, সবুজ, নীল লাইন দিয়ে পজিশন দেখাবে
      }
        
        
    
})

