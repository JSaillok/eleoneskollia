const sr = ScrollReveal({
    duration: 1500,
    reset: false,
    distance: '60px',
    delay: 400
});


sr.reveal('.content', {origin: 'top'});

sr.reveal('.maintitle', { delay: 500, origin: 'left'});
sr.reveal('.about .image', { delay: 600, origin: 'bottom'});
sr.reveal('.textbox', { delay: 700, origin: 'right'});
sr.reveal('.containerContact',{ delay: 500, origin: 'bottom'});


const header = document.querySelector("header");
const sectionOne = document.querySelector(".banner");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("navscrolled");
    } else {
      header.classList.remove("navscrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
