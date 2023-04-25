const topSection = document.getElementById('top-section-container')
const { height } = topSection.getBoundingClientRect()

let lastScroll = 0

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset

  if (currentScroll > lastScroll && currentScroll > height + 200) {
    topSection.classList.add('hide')
  } else if (currentScroll < lastScroll && currentScroll <= height + 200) {
    topSection.classList.remove('hide')
  }
  lastScroll = currentScroll
})
