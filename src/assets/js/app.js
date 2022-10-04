/* IMPORT */
import * as THREE from 'three'
import {FontLoader} from "three/examples/jsm/loaders/FontLoader"
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
// scss
import '../scss/style.scss'
import '../scss/home.scss'
import '../scss/about.scss'

/* CANVAS */
const canvas = document.querySelector('canvas.home__background')

/* SIZES */
// size
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
// scale
const scale = Math.random() + .25
// resize
window.addEventListener('resize', () => {
    // update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    // update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/* CURSOR */
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (e) => {
    cursor.x = -(e.clientX / sizes.width - .5)
    cursor.y = e.clientY / sizes.height - .5
})

/* SCENE */
const scene = new THREE.Scene

/* FONT */
const fontLoader = new FontLoader()
fontLoader.load(
    '/fonts/Unnamed Light_Regular.json',
    (font) => {
        const textGeometry = new TextGeometry(
            "HELLO,   MY\nNAME  IS  LIO\nHUMB  AND  I \nWANT TO WORK\nWITH   YOU  : )",
            {
                font: font,
                size: .75,
                height: .1,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: .2,
                bevelSize: 0,
                bevelOffset: .019,
                bevelSegments: 12
            }
        ).center()
        const textureLoader = new THREE.TextureLoader
        const matcapTexture = textureLoader.load('/textures/matcap/matcap.png')
        const textMaterial = new THREE.MeshMatcapMaterial({matcap: matcapTexture})
        const text = new THREE.Mesh(textGeometry, textMaterial)
        scene.add(text)
    }
)

/* LOGOS */
// plane geometry
const geometry = new THREE.PlaneGeometry
//loader
const loader = new THREE.TextureLoader
//textures
const afterTexture = loader.load('/textures/logo/after_effects.png')
const blenderTexture = loader.load('/textures/logo/blender.png')
const cssTexture = loader.load('/textures/logo/css.png')
const figmaTexture = loader.load('/textures/logo/figma.png')
const gitTexture = loader.load('/textures/logo/git.png')
const githubTexture = loader.load('/textures/logo/github.png')
const herokuTexture = loader.load('/textures/logo/heroku.png')
const htmlTexture = loader.load('/textures/logo/html.png')
const intellijTexture = loader.load('/textures/logo/intellij.png')
const jsTexture = loader.load('/textures/logo/js.png')
const logicTexture = loader.load('/textures/logo/logic.png')
const mysqlTexture = loader.load('/textures/logo/mysql.png')
const nextTexture = loader.load('/textures/logo/next.png')
const nodeTexture = loader.load('/textures/logo/node.png')
const notionTexture = loader.load('/textures/logo/notion.png')
const npmTexture = loader.load('/textures/logo/npm.png')
const photoshopTexture = loader.load('/textures/logo/photoshop.png')
const phpTexture = loader.load('/textures/logo/php.png')
const phpstormTexture = loader.load('/textures/logo/phpstorm.png')
const premiereTexture = loader.load('/textures/logo/premiere.png')
const reactTexture = loader.load('/textures/logo/react.png')
const sassTexture = loader.load('/textures/logo/sass.png')
const symfonyTexture = loader.load('/textures/logo/symfony.png')
const terminalTexture = loader.load('/textures/logo/terminal.png')
const threeTexture = loader.load('/textures/logo/three.png')
const vercelTexture = loader.load('/textures/logo/vercel.png')
// materials
const afterMaterial = new THREE.MeshBasicMaterial({
    map: afterTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const blenderMaterial = new THREE.MeshBasicMaterial({
    map: blenderTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const cssMaterial = new THREE.MeshBasicMaterial({
    map: cssTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const figmaMaterial = new THREE.MeshBasicMaterial({
    map: figmaTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const gitMaterial = new THREE.MeshBasicMaterial({
    map: gitTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const githubMaterial = new THREE.MeshBasicMaterial({
    map: githubTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const herokuMaterial = new THREE.MeshBasicMaterial({
    map: herokuTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const htmlMaterial = new THREE.MeshBasicMaterial({
    map: htmlTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const intellijMaterial = new THREE.MeshBasicMaterial({
    map: intellijTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const jsMaterial = new THREE.MeshBasicMaterial({
    map: jsTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const logicMaterial = new THREE.MeshBasicMaterial({
    map: logicTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const mysqlMaterial = new THREE.MeshBasicMaterial({
    map: mysqlTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const nextMaterial = new THREE.MeshBasicMaterial({
    map: nextTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const nodeMaterial = new THREE.MeshBasicMaterial({
    map: nodeTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const notionMaterial = new THREE.MeshBasicMaterial({
    map: notionTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const npmMaterial = new THREE.MeshBasicMaterial({
    map: npmTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const photoshopMaterial = new THREE.MeshBasicMaterial({
    map: photoshopTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const phpMaterial = new THREE.MeshBasicMaterial({
    map: phpTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const phpstormMaterial = new THREE.MeshBasicMaterial({
    map: phpstormTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const premiereMaterial = new THREE.MeshBasicMaterial({
    map: premiereTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const reactMaterial = new THREE.MeshBasicMaterial({
    map: reactTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const sassMaterial = new THREE.MeshBasicMaterial({
    map: sassTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const symfonyMaterial = new THREE.MeshBasicMaterial({
    map: symfonyTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const terminalMaterial = new THREE.MeshBasicMaterial({
    map: terminalTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const threeMaterial = new THREE.MeshBasicMaterial({
    map: threeTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const vercelMaterial = new THREE.MeshBasicMaterial({
    map: vercelTexture,
    side: THREE.DoubleSide,
    transparent: true
})
// meshes
const after = new THREE.Mesh(geometry, afterMaterial)
const blender = new THREE.Mesh(geometry, blenderMaterial)
const css = new THREE.Mesh(geometry, cssMaterial)
const figma = new THREE.Mesh(geometry, figmaMaterial)
const git = new THREE.Mesh(geometry, gitMaterial)
const github = new THREE.Mesh(geometry, githubMaterial)
const heroku = new THREE.Mesh(geometry, herokuMaterial)
const html = new THREE.Mesh(geometry, htmlMaterial)
const intellij = new THREE.Mesh(geometry, intellijMaterial)
const js = new THREE.Mesh(geometry, jsMaterial)
const logic = new THREE.Mesh(geometry, logicMaterial)
const mysql = new THREE.Mesh(geometry, mysqlMaterial)
const next = new THREE.Mesh(geometry, nextMaterial)
const node = new THREE.Mesh(geometry, nodeMaterial)
const notion = new THREE.Mesh(geometry, notionMaterial)
const npm = new THREE.Mesh(geometry, npmMaterial)
const photoshop = new THREE.Mesh(geometry, photoshopMaterial)
const php = new THREE.Mesh(geometry, phpMaterial)
const phpstorm = new THREE.Mesh(geometry, phpstormMaterial)
const premiere = new THREE.Mesh(geometry, premiereMaterial)
const react = new THREE.Mesh(geometry, reactMaterial)
const sass = new THREE.Mesh(geometry, sassMaterial)
const symfony = new THREE.Mesh(geometry, symfonyMaterial)
const terminal = new THREE.Mesh(geometry, terminalMaterial)
const three = new THREE.Mesh(geometry, threeMaterial)
const vercel = new THREE.Mesh(geometry, vercelMaterial)
// positions
after.position.x = 3
after.position.y = 3
after.position.z = - 3
blender.position.x = - 5
blender.position.y = - 1
blender.position.z = -1
css.position.x = 1
css.position.y = 3
css.position.z = 2
figma.position.x = - 3.5
figma.position.y = - 2
figma.position.z = 3
git.position.x = 3
git.position.y = - 2
git.position.z = 3
github.position.x = - 5
github.position.y = 0
github.position.z = 0
heroku.position.x = - 3
heroku.position.y = - 2
heroku.position.z = - 2
html.position.x = - 5
html.position.y = 2
html.position.z = - 3
intellij.position.x = 6
intellij.position.y = 3
intellij.position.z = - 2
js.position.x = - 4
js.position.y = - 1
js.position.z = 2
logic.position.x = (Math.random() - .5) * 10
logic.position.y = (Math.random() - .5) * 10
logic.position.z = (Math.random() - .5) * 10
mysql.position.x = (Math.random() - .5) * 10
mysql.position.y = (Math.random() - .5) * 10
mysql.position.z = (Math.random() - .5) * 10
next.position.x = (Math.random() - .5) * 10
next.position.y = (Math.random() - .5) * 10
next.position.z = (Math.random() - .5) * 10
node.position.x = (Math.random() - .5) * 10
node.position.y = (Math.random() - .5) * 10
node.position.z = (Math.random() - .5) * 10
notion.position.x = (Math.random() - .5) * 10
notion.position.y = (Math.random() - .5) * 10
notion.position.z = (Math.random() - .5) * 10
npm.position.x = (Math.random() - .5) * 10
npm.position.y = (Math.random() - .5) * 10
npm.position.z = (Math.random() - .5) * 10
photoshop.position.x = (Math.random() - .5) * 10
photoshop.position.y = (Math.random() - .5) * 10
photoshop.position.z = (Math.random() - .5) * 10
php.position.x = (Math.random() - .5) * 10
php.position.y = (Math.random() - .5) * 10
php.position.z = (Math.random() - .5) * 10
phpstorm.position.x = (Math.random() - .5) * 10
phpstorm.position.y = (Math.random() - .5) * 10
phpstorm.position.z = (Math.random() - .5) * 10
premiere.position.x = (Math.random() - .5) * 10
premiere.position.y = (Math.random() - .5) * 10
premiere.position.z = (Math.random() - .5) * 10
react.position.x = (Math.random() - .5) * 10
react.position.y = (Math.random() - .5) * 10
react.position.z = (Math.random() - .5) * 10
sass.position.x = (Math.random() - .5) * 10
sass.position.y = (Math.random() - .5) * 10
sass.position.z = (Math.random() - .5) * 10
symfony.position.x = (Math.random() - .5) * 10
symfony.position.y = (Math.random() - .5) * 10
symfony.position.z = (Math.random() - .5) * 10
terminal.position.x = (Math.random() - .5) * 10
terminal.position.y = (Math.random() - .5) * 10
terminal.position.z = (Math.random() - .5) * 10
three.position.x = (Math.random() - .5) * 10
three.position.y = (Math.random() - .5) * 10
three.position.z = (Math.random() - .5) * 10
vercel.position.x = (Math.random() - .5) * 10
vercel.position.y = (Math.random() - .5) * 10
vercel.position.z = (Math.random() - .5) * 10
// rotations
after.rotation.x = Math.random() * Math.PI
after.rotation.y = Math.random() * Math.PI
blender.rotation.x = Math.random() * Math.PI
blender.rotation.y = Math.random() * Math.PI
css.rotation.x = Math.random() * Math.PI
css.rotation.y = Math.random() * Math.PI
figma.rotation.x = Math.random() * Math.PI
figma.rotation.y = Math.random() * Math.PI
git.rotation.x = Math.random() * Math.PI
git.rotation.y = Math.random() * Math.PI
github.rotation.x = Math.random() * Math.PI
github.rotation.y = Math.random() * Math.PI
heroku.rotation.x = Math.random() * Math.PI
heroku.rotation.y = Math.random() * Math.PI
html.rotation.x = Math.random() * Math.PI
html.rotation.y = Math.random() * Math.PI
intellij.rotation.x = Math.random() * Math.PI
intellij.rotation.y = Math.random() * Math.PI
js.rotation.x = Math.random() * Math.PI
js.rotation.y = Math.random() * Math.PI
logic.rotation.x = Math.random() * Math.PI
logic.rotation.y = Math.random() * Math.PI
mysql.rotation.x = Math.random() * Math.PI
mysql.rotation.y = Math.random() * Math.PI
next.rotation.x = Math.random() * Math.PI
next.rotation.y = Math.random() * Math.PI
node.rotation.x = Math.random() * Math.PI
node.rotation.y = Math.random() * Math.PI
notion.rotation.x = Math.random() * Math.PI
notion.rotation.y = Math.random() * Math.PI
npm.rotation.x = Math.random() * Math.PI
npm.rotation.y = Math.random() * Math.PI
photoshop.rotation.x = Math.random() * Math.PI
photoshop.rotation.y = Math.random() * Math.PI
php.rotation.x = Math.random() * Math.PI
php.rotation.y = Math.random() * Math.PI
phpstorm.rotation.x = Math.random() * Math.PI
phpstorm.rotation.y = Math.random() * Math.PI
premiere.rotation.x = Math.random() * Math.PI
premiere.rotation.y = Math.random() * Math.PI
react.rotation.x = Math.random() * Math.PI
react.rotation.y = Math.random() * Math.PI
sass.rotation.x = Math.random() * Math.PI
sass.rotation.y = Math.random() * Math.PI
symfony.rotation.x = Math.random() * Math.PI
symfony.rotation.y = Math.random() * Math.PI
terminal.rotation.x = Math.random() * Math.PI
terminal.rotation.y = Math.random() * Math.PI
three.rotation.x = Math.random() * Math.PI
three.rotation.y = Math.random() * Math.PI
vercel.rotation.x = Math.random() * Math.PI
vercel.rotation.y = Math.random() * Math.PI
// scale
after.scale.set(.75, .75, .75)
blender.scale.set(.5, .5, .5)
css.scale.set(1, 1, 1)
figma.scale.set(.5, .5, .5)
git.scale.set(1, 1, 1)
github.scale.set(1, 1, 1)
heroku.scale.set(.5, .5, .5)
html.scale.set(1.5, 1.5, 1.5)
intellij.scale.set(.75, .75, .75)
js.scale.set(1, 1, 1)
logic.scale.set(scale, scale, scale)
mysql.scale.set(scale, scale, scale)
next.scale.set(scale, scale, scale)
node.scale.set(scale, scale, scale)
notion.scale.set(scale, scale, scale)
npm.scale.set(scale, scale, scale)
photoshop.scale.set(scale, scale, scale)
php.scale.set(scale, scale, scale)
phpstorm.scale.set(scale, scale, scale)
premiere.scale.set(scale, scale, scale)
react.scale.set(scale, scale, scale)
sass.scale.set(scale, scale, scale)
symfony.scale.set(scale, scale, scale)
terminal.scale.set(scale, scale, scale)
three.scale.set(scale, scale, scale)
vercel.scale.set(scale, scale, scale)

scene.add(
    after,
    blender,
    css,
    figma,
    git,
    github,
    heroku,
    html,
    intellij,
    js,
    // logic,
    // mysql,
    // next,
    // node,
    // notion,
    // npm,
    // photoshop,
    // php,
    // phpstorm,
    // premiere,
    // react,
    // sass,
    // symfony,
    // terminal,
    // three,
    // vercel
)


/* CAMERA */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
camera.position.z = 7

scene.add(camera)

/* CONTROLS */
const controls = new OrbitControls(camera, canvas)
controls.autoRotate = true
controls.autoRotateSpeed = .4
controls.enableDamping = true
controls.enableZoom = false

/* RENDERER */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
/* ANIMATE */
// clock
// const clock = new THREE.Clock

// tick
const tick = () => {
    // elapsed time
    // const elapsedTime = clock.getElapsedTime()

    // update controls
    controls.update()

    // render
    renderer.render(scene, camera)
    // call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()