let frames = document.querySelectorAll('.section');

window.addEventListener('scroll', () => rotateFrame())

rotateFrame();

function rotateFrame() {
  for (let i = 0; i < frames.length; i++) {

    let frame = frames[i].querySelector('.section__wrapper');
    let frameTop = frames[i].getBoundingClientRect().top;
    let distance = frameTop / window.innerHeight;

    frame.style.transform = frameTop > 0 ? `rotateX(${40 * distance}deg)` : "rotateX(0deg)";
    frame.style.opacity = frameTop > 0 ? 1 - (1 * distance) : 1;
  }

}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = this.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let loadText = 'myPortfolio'

let preloader = document.querySelector('.preloader div')
let letterIndex = 0;

let loadAnim = setInterval(() => {
  if (letterIndex < loadText.length) {
    if (letterIndex < 2) {
      preloader.insertAdjacentHTML('beforeend', `<span class="selected-text ">${loadText[letterIndex]}</span>`)
    } else {
      preloader.append(loadText[letterIndex])
    }
    letterIndex++;
  } else if (document.readyState == "complete") {
    window.scrollTo(0, 0)

    clearInterval(loadAnim)
    document.querySelector('.preloader').style.transform = 'translateX(-100%)';
    setTimeout(() => {
      document.querySelectorAll('.anim').forEach(item => {
        item.style.cssText = `
    opacity: 1;
    transform: translate(0);`})
    }, 600)
  } else {

    preloader.innerText = '';
    letterIndex = 0;
  }
}, 100)
