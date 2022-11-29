let aboutUsImage = $('.about-right-image');
let aboutUsImageSubwrap = $('.about-right-image-subwrap');
if ((aboutUsImage.length) && (aboutUsImageSubwrap.length)) {
    // image zoom
    gsap.from('.about-right-image', {
        scale: 1.5,
        scrollTrigger: {
            trigger: ".about-right-image-subwrap",
            toggleActions: "play complete reverse pause",
            start: "top 80%",
            end: "top 20%",
            delay: 0.2,
            scrub: true
        }
    });
    // image wrapper height
    gsap.from('.about-right-image-subwrap', {
        scrollTrigger: {
            trigger: ".about-right-image-subwrap",
            toggleActions: "play complete reverse pause",
            start: "top 80%",
            end: "top 20%",
            scrub: true
        },
        height: 0,
        ease: "power1"
    });
}