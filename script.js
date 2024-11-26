let crsr = document.querySelector("#cursor");
let crsrBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrBlur.style.left = dets.x - 200 + "px";
    crsrBlur.style.top = dets.y - 200 + "px";
})


let navLink = document.querySelectorAll("#nav h4");
navLink.forEach(element => {
    element.addEventListener("mouseenter", ()=> {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    element.addEventListener("mouseleave", ()=> {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    })
});


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px", 
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: false,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: false,
        start: "top -40%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us", // Target the about-us section
        scroller: "body", // Define the scroll container
        start: "top 80%", // Adjust start point
        end: "top 50%", // Adjust end point if needed
        scrub: 1, // Smooth animation sync with scroll
        markers: false, // Debug markers
    }
}) 

gsap.from("#cards-container #card1, #card2, #card3", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "card", // Target the about-us section
        scroller: "body", // Define the scroll container
        start: "top 70%", // Adjust start point
        end: "top 65%", // Adjust end point if needed
        scrub: 2, // Smooth animation sync with scroll
        markers: false, // Debug markers
    }
})



gsap.from("#colon1", {
    y: -70,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1", // Target the about-us section
        scroller: "body", // Define the scroll container
        start: "top 55%", // Adjust start point
        end: "top 45%", // Adjust end point if needed
        scrub: 4, // Smooth animation sync with scroll
        markers: false, // Debug markers
    }
})
gsap.from("#colon2", {
    y: 70,
    x:70,
    scrollTrigger: {
        trigger: "#colon1", // Target the about-us section
        scroller: "body", // Define the scroll container
        start: "top 55%", // Adjust start point
        end: "top 45%", // Adjust end point if needed
        scrub: 4, // Smooth animation sync with scroll
        markers: false, // Debug markers
    }
})


// Optional: If #page4 has an h1 element
gsap.to("#page4 h1", {
    y: -35, // Move upwards by 100px (adjust as needed)
    scrollTrigger: {
        trigger: "#page4 h1", // Target the h1 in #page4
        scroller: "body", // Define the scroll container
        start: "top 75%", // Start when h1 is near the viewport's bottom
        end: "top 70%", // End when h1 is in the middle of the viewport
        scrub: 3, // Smooth animation sync with scroll
        markers: false, // Enable for debugging
    },
});



