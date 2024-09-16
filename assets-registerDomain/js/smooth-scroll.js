const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    lerp = 0.2
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)