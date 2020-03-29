const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const vueBar = document.querySelector('.bar-vue')

var t1 = new TimelineLite()

t1.fromto(htmlBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(90% - 6px', ease: Power4.easeOut})
    .fromto(cssBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(95% - 6px', ease: Power4.easeOut})
    .fromto(jsBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(75% - 6px', ease: Power4.easeOut})
    .fromto(vueBar, .75, {width: 'calc(0% - 6px)'}, {width: 'calc(70% - 6px', ease: Power4.easeOut})


const controller = new ScrollMagic.controllerr()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
setTween(t1)
    .addto(controller)

const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for (i = 0; i < links.length; i++) {
        if (links [i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }


        event.classlist.add('active')
        const getcategory = document.querySelector('.category-${getId}')
        const categories = document.querySelectorAll('div[class ^= "category-"]')
        for (i = 0; i < categories.length; i++) {
            if (categories[i].hasAttribute('class')) {
                categories[i].classList.remove('showCategory')
                categories[i].classList.add('hideCategory')
            }

        }
        getcategory.classList.remove('hideCategory')
        getcategory.classList.add('showCategory')
    }