import gsap from "gsap"

gsap.to(".loader", {
    duration: 2.5,
    delay: 4,
    opacity: 0,
    display: "none"
})
gsap.to(".loader__img", {
    duration: 2,
    delay: 1.74
})
gsap.to('.home__arrows', {
    duration: 2,
    delay: 7,
    bottom: '22%'
})