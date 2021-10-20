const button = document.querySelector(".slideToUp")

export function slideToUp() {
  function visible() {
    const validade = window.scrollY >= 1400
    if (validade) {
      button.style.display = "block"
    } else {
      button.style.display = "none"
    }
  }
  window.onscroll = visible
}

export function upAnimation() {
  const logoTop = document.querySelector(".get-shape-logo")
  logoTop.scrollIntoView({
    behavior: "smooth"
  })
  button.addEventListener('click', upAnimation)
}