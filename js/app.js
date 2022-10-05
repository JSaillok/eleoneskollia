const sr = ScrollReveal({
    duration: 2500,
    reset: true,
    distance: '60px',
    delay: 400
});


sr.reveal('.content', {origin: 'top'});

sr.reveal('.maintitle', { delay: 500, origin: 'left'});
sr.reveal('.about .image', { delay: 600, origin: 'bottom'});
sr.reveal('.textbox', { delay: 700, origin: 'right'});
