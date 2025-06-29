import { gsap } from 'gsap';

let registered = false;
async function registerScrollTrigger() {
    if (!registered) {
        const module = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(module.ScrollTrigger);
        registered = true;
    }
}

// Hero section animations
export const animateHero = async (element) => {
    await registerScrollTrigger();
    const title = element.querySelector('.title');
    const description = element.querySelector('.description');
    const heroImg = element.querySelector('.hero-img');
    const btn = element.querySelector('.btn');

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(title, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(description, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
      .fromTo(heroImg, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '-=0.8')
      .fromTo(btn, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.5');
};

// Methodology section animations
export const animateMethodology = async (element) => {
    await registerScrollTrigger();
    const title = element.querySelector('.bg-title');
    const description = element.querySelector('.header-description');
    const cards = element.querySelectorAll('.methodology-card');

    gsap.fromTo(title, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo(description, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    cards.forEach((card, index) => {
        gsap.fromTo(card, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.8, delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
};

// About section animations
export const animateAbout = async (element) => {
    await registerScrollTrigger();
    const title = element.querySelector('.bg-title');
    const description = element.querySelector('.header-description');
    const content = element.querySelector('.about-content');
    const image = element.querySelector('.about-img');

    gsap.fromTo([title, description], { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, stagger: 0.2,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo(content, { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo(image, { x: 50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
};

// Services section animations
export const animateServices = async (element) => {
    await registerScrollTrigger();
    const title = element.querySelector('.bg-title');
    const description = element.querySelector('.header-description');
    const cards = element.querySelectorAll('.service-card');

    gsap.fromTo([title, description], { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, stagger: 0.2,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    cards.forEach((card, index) => {
        gsap.fromTo(card, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.8, delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
};

// Blog section animations
export const animateBlog = async (element) => {
    await registerScrollTrigger();
    const title = element.querySelector('.bg-title');
    const description = element.querySelector('.header-description');
    const sliderBtns = element.querySelector('.slider-btn');
    const cards = element.querySelectorAll('.blog-card');

    gsap.fromTo([title, description], { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, stagger: 0.2,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo(sliderBtns, { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    cards.forEach((card, index) => {
        gsap.fromTo(card,
            {
                x: index % 2 === 0 ? -50 : 50,
                opacity: 0,
                rotateY: index % 2 === 0 ? -10 : 10
            },
            {
                x: 0,
                opacity: 1,
                rotateY: 0,
                duration: 1,
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
};

// Contact section animations
export const animateContact = async (element) => {
    await registerScrollTrigger();
    const title = element.querySelector('.bg-title');
    const description = element.querySelector('.header-description');
    const form = element.querySelector('form');
    const image = element.querySelector('.contact-img');

    gsap.fromTo([title, description], { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, stagger: 0.2,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo(form, { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: {
            trigger: form,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo(image, { x: 50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: {
            trigger: image,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
};

// Footer animations
export const animateFooter = async (element) => {
    await registerScrollTrigger();
    const content = element.querySelectorAll('.footer-content > *');
    const socialLinks = element.querySelectorAll('.social-links a');

    gsap.fromTo(content, { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2,
        scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo(socialLinks, { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1,
        scrollTrigger: {
            trigger: socialLinks,
            start: 'top 95%',
            toggleActions: 'play none none reverse'
        }
    });
};
