const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  duration = 3.2
  lerp = 0.2
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('.models .item').forEach((item) => {
  let image = item.querySelector('img');
  
  let xTransform = gsap.utils.random(-100, 100);

  let tl = gsap.timeline();
  tl
    .set(image, {
      transformOrigin: ` ${xTransform < 0 ? 0 : '100%'}`,
    })

    .to(image, {
      scale: 0, 
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: 'top top',
        end: 'bottom 50%',
        scrub: true
      }
    })
    .to(item, {
      xPercent: xTransform,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
    
})