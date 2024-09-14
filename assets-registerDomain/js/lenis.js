const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  // duration = 3.2
  lerp = 0.2
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)