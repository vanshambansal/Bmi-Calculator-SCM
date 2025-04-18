gsap.from(".bmi-wrapper", {
    duration: 1.5,
    opacity: 0,
    scale: 0.95,
    ease: "elastic.out(1, 0.75)",    
});

document.querySelector("button.btn-primary").addEventListener("mouseenter", (e) => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1.1,
        boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.5)",
    });
});

document.querySelector("button.btn-primary").addEventListener("mouseleave", (e) => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1,
        boxShadow: "none",
    });
});

