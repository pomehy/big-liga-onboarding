const intro = document.querySelector('.intro');
const introAnimateEl = document.querySelector('.intro__animate');
const pageHeader = document.querySelector('.header');
const emblemLiga = document.querySelector('.emblem');

if (emblemLiga) {
  emblemLiga.classList.remove('emblem--nojs');
}

if (intro) {
  intro.classList.remove('intro--nojs');
}

const initialAnimation = () => {
  introAnimateEl.classList.add('intro__animate--show');
  pageHeader.classList.add('show');
  emblemLiga.classList.add('emblem--show');
};

const controlClassIntro = () => {
  if (introAnimateEl.classList.contains('intro__animate--show')) {
    if (introAnimateEl.classList.contains('intro__animate--show-description')) {
      setTimeout(() => {
        introAnimateEl.classList.add('intro__animate--hidden-description');
      }, 150);
    } else {
      introAnimateEl.classList.add('intro__animate--show-description');
    }
  }
};

introAnimateEl.addEventListener('click', (controlClassIntro));

export {
  initialAnimation
};
