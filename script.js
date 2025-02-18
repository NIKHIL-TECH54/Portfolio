const menu = document.querySelector("#menu");
const nav =document.querySelector(".links");

menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
const education=document.querySelector(".education-item");
education.addEventListener("")


// document.getElementById("btn").addEventListener("click", function() {
//     document.getElementById("customAlert").classList.remove("hidden");
// });

// document.getElementById("closeAlert").addEventListener("click", function() {
//     document.getElementById("customAlert").classList.add("hidden");
// });
const btn = document.querySelector("#subbtn");
btn.addEventListener("click", () =>{
    alert("ThankYou for Submmiting");
})
gsap.from(".info-box h1",{
    opacity:0,
    duration:1,
    delay:1,
    x:200,
    scrollTrigger:{
       scroll:"body",
       trigger:".info-box h1",
       markers:true,
       stagger:0.5
    }
})
gsap.from(".info-box h3",{
    opacity:0,
    x:-200,
    duration:1,
    delay:1,
    scrollTrigger:{
       scroll:"body",
       trigger:".info-box h3",
       markers:true,
       stagger:0.5
    }
})
gsap.from(".info-box p",{
    opacity:0,
    y:-20,
    duration:1,
    delay:1,
    scrollTrigger:{
        scroll:"body",
        trigger:".info-box h3",
        markers:true,
        stagger:0.5,
    }
})


var tl = gsap.timeline()

tl.from(".education-item",{
    y:-100,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        scroll:"body",
        trigger:".education-item",
        // markers:true,
        stagger:0.5,
        scrub:2

    }
})

