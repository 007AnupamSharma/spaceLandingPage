var tl = gsap.timeline();


tl.from("#nav img, #nav-part-2 h3, #nav-part-3 h4,#nav-part-3 button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5
})


tl.from("#main>h1",{
    y:150,
    opacity:0,
    stagger:0.5
})

tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3
})

tl.from("h5",{
    opacity:0,
    scale:0
})
tl.to("h5",{
    y:40,
    repeat:-1,
    duration:1,
    yoyo:true
})

