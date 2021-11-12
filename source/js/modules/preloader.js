import {initialAnimation} from '../page-controler/animation-controller';

const preloader = () => {
  const breakpointLG = window.matchMedia('(min-width: 1024px)');
  const breakpointMD = window.matchMedia('(max-width: 1023px)');
  const preloaderNode = document.querySelector('.js-preloader');
  const preloaderActionText = document.querySelector('.preloader__action-text');

  if (breakpointMD.matches) {
    preloaderActionText.textContent = preloaderActionText.dataset.tabletText;
  }

  window.addEventListener('resize', () => {
    if (breakpointMD.matches) {
      preloaderActionText.textContent = preloaderActionText.dataset.tabletText;
    } else {
      preloaderActionText.textContent = preloaderActionText.dataset.desktopText;
    }
  });

  if (!preloaderNode) return;

  class Preloader {
    constructor(el) {
      this.el = el;
      this.durationFadeout = this.el.dataset.durationFadein;
      this.durationFadein = this.el.dataset.durationFadeout;

      this.load();
    }

    load() {
      document.body.classList.add('scroll-lock');
      this.el.classList.add('is-loading');

      setTimeout(() => {
        this.el.classList.add('is-ready');
      }, this.durationFadeout);

      const hidePreloader = () => {
        this.el.classList.add('is-hidden');
      };

      const closePreloader = () => {
        document.body.classList.remove('scroll-lock');
        this.el.classList.add('is-fade');
        setTimeout(hidePreloader, 10);

        initialAnimation();
      };

      preloaderNode.addEventListener('click', () => {
        if (preloaderNode.classList.contains('is-ready')) {
          closePreloader();
        }
      });

      document.addEventListener('keydown', (evt) => {
        const isEnterKey = evt.code;
        if (breakpointLG.matches) {
          if (isEnterKey === 'Enter') {
            if (preloaderNode.classList.contains('is-ready')) {
              closePreloader();
            }
          }
        }
      });
    }
  }

  new Preloader(preloaderNode);
};

export {preloader};
