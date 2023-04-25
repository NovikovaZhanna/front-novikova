const menuDrawer = document.getElementById('mobile-menu-drawer')
const mobileMenuContainer = document.getElementById('mobile-menu-container')
const headerBurgerButton = document.getElementById('header-burger')
const mobileMenuCloseButton = document.getElementById('mobile-menu-header-close-button')

let drawerOpen = false

const handleDrawerOpen = () => {
  document.body.style.overflowY = 'hidden'
  menuDrawer.classList.add('open')
  mobileMenuContainer.classList.add('open')
  drawerOpen = true
}

const handleDrawerClose = () => {
  document.body.style.overflowY = 'auto'
  menuDrawer.classList.remove('open')
  mobileMenuContainer.classList.remove('open')
  drawerOpen = false
}

const toggleDrawer = () => {
  if (drawerOpen) {
    handleDrawerClose()
  } else {
    handleDrawerOpen()
  }
}

headerBurgerButton.addEventListener('click', toggleDrawer)
mobileMenuCloseButton.addEventListener('click', toggleDrawer)

menuDrawer.addEventListener('click', (e) => {
  if (e.target == menuDrawer) {
    toggleDrawer()
  }
})
