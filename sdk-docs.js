// LangStitch SDK docs — sidebar scrollspy, copy buttons, mobile Contents toggle.
(function () {
  'use strict'

  // ── Copy buttons on code blocks ──
  document.querySelectorAll('.docs-code').forEach(function (block) {
    var pre = block.querySelector('pre')
    if (!pre) return
    var btn = document.createElement('button')
    btn.className = 'docs-copy'
    btn.type = 'button'
    btn.textContent = 'Copy'
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(pre.innerText).then(function () {
        btn.textContent = 'Copied'
        setTimeout(function () { btn.textContent = 'Copy' }, 1500)
      })
    })
    block.appendChild(btn)
  })

  // ── Scrollspy: highlight active section in sidebar + TOC ──
  var sections = Array.prototype.slice.call(document.querySelectorAll('.docs-section[id]'))
  var sideLinks = {}
  var tocLinks = {}
  document.querySelectorAll('.docs-sidebar a[href^="#"]').forEach(function (a) {
    sideLinks[a.getAttribute('href').slice(1)] = a
  })
  document.querySelectorAll('.docs-toc a[href^="#"]').forEach(function (a) {
    tocLinks[a.getAttribute('href').slice(1)] = a
  })

  var current = null
  function setActive(id) {
    if (id === current) return
    current = id
    Object.keys(sideLinks).forEach(function (k) {
      sideLinks[k].classList.toggle('active', k === id)
    })
    Object.keys(tocLinks).forEach(function (k) {
      tocLinks[k].classList.toggle('active', k === id)
    })
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
  )
  sections.forEach(function (s) { observer.observe(s) })

  // ── Mobile Contents button → docs sidebar (nav-burger stays for site links) ──
  var menuBtn = document.querySelector('.docs-contents-btn') || document.querySelector('.docs-sidebar-toggle')
  var sidebar = document.querySelector('.docs-sidebar')
  var scrim = document.querySelector('.docs-scrim')

  function setSidebarOpen(open) {
    if (!sidebar) return
    sidebar.classList.toggle('open', open)
    if (scrim) scrim.classList.toggle('open', open)
    if (menuBtn) menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false')
  }

  function closeSidebar() {
    setSidebarOpen(false)
  }

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', function () {
      setSidebarOpen(!sidebar.classList.contains('open'))
    })
  }
  if (scrim) scrim.addEventListener('click', closeSidebar)
  document.querySelectorAll('.docs-sidebar a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', closeSidebar)
  })
})()
