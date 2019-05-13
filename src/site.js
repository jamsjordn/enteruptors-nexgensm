var observer = new IntersectionObserver(function (entries) {
    console.log((entries));
    entries.forEach(entry => {
        console.log({
            intersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
            name: entry.target.closest('section').dataset.section
        })
        if (entry.isIntersecting === true) {
            let sectionName = entry.target.closest('section').dataset.section;
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
}, { root: null, rootMargin: '-10% 0% -50% 0%', threshold: [0.1] });


document.querySelectorAll("main>article>section>*").forEach(section => {
    observer.observe(section);
})

function cycleHero() {
    setTimeout(() => {
        let currentHero = document.querySelectorAll('[data-section="hero"] p:not(.hidden)')[0]
        currentHero.classList.add('hidden');
        //console.log(currentHero);
        requestAnimationFrame(() => {
            setTimeout(() => {
                if (typeof currentHero.nextElementSibling !== 'undefined' && currentHero.nextElementSibling !== null) {
                    currentHero.nextElementSibling.classList.remove('hidden')
                } else {
                    document.querySelectorAll('[data-section="hero"] p:first-of-type')[0].classList.remove('hidden');
                };
                cycleHero();
            }, 600);
        });
    }, 5000);
}
cycleHero();