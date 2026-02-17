export default function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const header = document.querySelector('header')
  const headerHeight = header ? header.getBoundingClientRect().height : 0
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12
  window.scrollTo({ top: y, behavior: 'smooth' })
}
