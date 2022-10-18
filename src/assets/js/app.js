// import js
import './loader.js'
import './home.js'
import './about.js'
import './work.js'
// import scss
import '../scss/style.scss'
import '../scss/loader.scss'
import '../scss/home.scss'
import '../scss/about.scss'
import '../scss/work.scss'
import '../scss/contact.scss'
import '../scss/footer.scss'
// import aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// Animate On Scroll
AOS.init({
    offset: 60,
    once: false,
    disable: 'phone',
    duration: 300,
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99
})