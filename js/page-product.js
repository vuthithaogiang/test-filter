var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll(){
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if(rootElement.scrollTop / scrollTotal > 0.15){
        scrollToTopBtn.classList.add("showBtn");
    } 
    else{
        scrollToTopBtn.classList.remove("showBtn");
    }
}

function scrollToTop(){
    rootElement.scrollTo({
        top: 0,
        bahavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

gsap.from("img",{
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.25,
    ease: "expo.out"

});