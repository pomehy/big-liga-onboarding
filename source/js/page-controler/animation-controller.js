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
  if (introAnimateEl) {
    introAnimateEl.classList.add('intro__animate--show');
  }

  if (pageHeader) {
    pageHeader.classList.add('show');
  }

  if (emblemLiga) {
    emblemLiga.classList.add('emblem--show');
  }
};

if (introAnimateEl) {
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
}

export {
  initialAnimation
};
