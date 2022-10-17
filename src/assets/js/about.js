/* TYPING */
class TextTyping {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="about__title-typeSymbol">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}

const phrases = [
    'Web',
    'Creative',
    'Front',
    'Back',
    'FullStack'
]

const el = document.querySelector('.about__title-type')
const fx = new TextTyping(el)

let counter = 0
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
}

next()

/* PICTURES */
const polaroidMe = document.querySelector('.about__profil-me')
const zoomMeSpeed = .001

let zoom = 1

document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        polaroidMe.style.transform = `scale(${(zoom += zoomMeSpeed)})`
    } else {
        polaroidMe.style.transform = `scale(${(zoom -= zoomMeSpeed)})`
    }
})