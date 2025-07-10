
var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"60% 50%",
    scrub:"true",

}})

tl.to("#Iphone",{
    top:"115%",
    left:"3%"
},'orange')

tl.to("#apple",{
    top:"160%",
    rotate:"370deg",
    left:"27%"
},'orange')

tl.to("#airpods",{
    width:"11%",
    rotate:"380deg",
    top:"170%",
    right:"10%"
},'orange')

tl.to("#airpods_max",{
    width:"10%",
    top:"116%",
    rotate:"326deg",
    left:"71%"
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:"true",

}})

tl2.from("#charger",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%"
},'ca')

tl2.from("#watch",{
    rotate:"90deg",
    left:"100%",
    top:"110%"
},'ca')

tl2.to("#apple",{
    left:"51.5%",
    top:"244%",
    rotate:"730deg",
    width:"9%"
},'ca')

tl2.to("#Iphone",{
    width:"27%",
    left:"36.5%",
    top:"215%"
},'ca')
