const h1 = document.querySelector('.information-h1')
const container = document.querySelector('.particles-container')

function spawnParticle() {
    const p = document.createElement('span')
    p.className = 'particle'
    p.textContent = '?'

    const rect = h1.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const startX = (Math.random() - 0.5) * width
    const startY = (Math.random() - 0.5) * height
    const endX = startX * 2
    const endY = startY * 2

    p.style.left = `50%`
    p.style.top = `50%`
    p.style.setProperty('--start-x', `${startX}px`)
    p.style.setProperty('--start-y', `${startY}px`)
    p.style.setProperty('--end-x', `${endX}px`)
    p.style.setProperty('--end-y', `${endY}px`)
    p.style.animationDuration = `${2 + Math.random() * 3}s`

    container.appendChild(p)

    setTimeout(() => p.remove(), 5000)
}

function loop() {
    spawnParticle()
    setTimeout(loop, Math.random() * 300) 
}

loop()
