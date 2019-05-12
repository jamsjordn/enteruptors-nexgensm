var observer = new IntersectionObserver(function (entries) {
    console.log((entries));
    entries.forEach(entry => {
        console.log({
            intersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
            name: entry.target.dataset.section
        })
        if (entry.isIntersecting === true) {
            let sectionName = entry.target.dataset.section;
            document.querySelectorAll('header>nav>ul>li').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('header')[0].classList.add('small');

            if (sectionName === "brief") {
            } else if (sectionName === "hero") {
                document.querySelectorAll('header')[0].classList.remove('small');
            } else {
                document.querySelectorAll(`header > nav > ul > li[onclick="window.location.href='#${sectionName}'"]`)[0].classList.add('active');
            }
        }
    })
}, { root: null, threshold: [0.7] });


document.querySelectorAll("main>article>section").forEach(section => {
    //observer.observe(section);
})