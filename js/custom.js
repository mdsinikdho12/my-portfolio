var tl = gsap.timeline();

tl.from(".home-text", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2, // একটু কম স্ট্যাগার করলে ফাস্ট আসবে
});

tl.from(".logo1-gif", {
    y: -20,
    opacity: 0,
    duration: 0.4, // সময় কমানো হলো যাতে দ্রুত আসে
}, "-=0.3"); // আগের animation-এর 0.3s পরে শুরু হবে (overlapping effect)

tl.from(".gif-logo", {
    y: -20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
}, "-=0.3"); // আগেরটার সাথে মিলিয়ে দ্রুত আসবে

tl.from(".wel-text", {
    y: -20,
    opacity: 0,
    duration: 0.3, // কম সময়
    stagger: 0.2,
    scale: 0.7, // একটু বড় করে শুরু করবে
}, "-=0.2"); // আগেরটার প্রায় সাথে সাথে আসবে

tl.from([".git-logo", ".socailmedia", ".welcome-img"], {
    opacity: 0,
    scale: 0.6, // শুরুতে ছোট রাখবে
    duration: 0.3, // দ্রুত শেষ হবে
    stagger: 0.1, // একটার পর আরেকটা খুব দ্রুত আসবে
}, "-=0.2"); // আগের animation-এর সাথে কিছুটা overlap করবে


gsap.registerPlugin(ScrollTrigger);

gsap.from(".About-img", {
    opacity: 0,
    x: -300, // একটু কমানো হলো যাতে মোবাইলে ভালো দেখায়
    duration: 1.2,
    ease: "power2.out", // স্মুথ ইফেক্টের জন্য
    scrollTrigger: {
        trigger: ".About-img",
        scroller: "body",
        start: "top 85%", // একটু আগেই শুরু হবে
        end: "bottom 40%", // বেশি সময় নিয়ে আসবে
        scrub: 1, // স্ক্রলিং স্মুথ করবে
        // markers: true,  // ডিবাগের জন্য চাইলে চালু করতে পারো
    }
});

gsap.from(".About-text", {
    opacity: 0,
    x: 300,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".About-text",
        scroller: "body",
        start: "top 85%",
        end: "bottom 40%",
        scrub: 1,
        // markers: true,
    }
});
let text = document.querySelector(".wel-text");
let letters = text.textContent.split(""); // প্রতিটি অক্ষর আলাদা করা
text.innerHTML = ""; // টেক্সট ফাঁকা করা

letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    text.appendChild(span);
});

gsap.from(".wel-text span", {
    opacity: 0,
    y: 10,
    duration: 0.005,
    stagger: 0.05,  // একটার পর একটা অক্ষর আসবে
    ease: "power2.out"
});




const cursor = document.querySelector(".cursor");
        
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
    });
});