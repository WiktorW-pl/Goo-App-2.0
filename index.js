import barba from 'https://unpkg.com/@barba/core@2.9.7/dist/barba.mjs';
import barbaCss from 'https://unpkg.com/@barba/css@2.1.15/dist/barba-css.mjs';
barba.use(barbaCss);

barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }]
  });