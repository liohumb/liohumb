import gsap from "gsap"

gsap.to(".loader", {
    duration: 3,
    delay: 6,
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