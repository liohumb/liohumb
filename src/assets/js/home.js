/* IMPORT */
import * as THREE from 'three'
import {FontLoader} from "three/examples/jsm/loaders/FontLoader"
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

/* CANVAS */
const canvas = document.querySelector('canvas.home__container-background')

/* SIZES */
// size
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
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
scene.background = new THREE.Color(0x0a1724)

/* FONT */
const fontLoader = new FontLoader()
fontLoader.load(
    '/fonts/Unnamed Light_Regular.json',
    (font) => {
        const textGeometry = new TextGeometry(
            "HELLO,   MY\nNAME  IS  LIO\nHUMB  AND  I \nWANT TO WORK\nWITH   YOU  : )",
            {
                font: font,
                size: .6,
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
        const matcapTexture = textureLoader.load('/textures/matcap/2.png')
        const textMaterial = new THREE.MeshMatcapMaterial({matcap: matcapTexture})
        const text = new THREE.Mesh(textGeometry, textMaterial)
        scene.add(text)
        // clock
        const clock = new THREE.Clock

        // tick
        const tick = () => {
            // elapsed time
            const elapsedTime = clock.getElapsedTime()

            text.rotation.y = - elapsedTime / 12

            // render
            renderer.render(scene, camera)
            // call tick again on the next frame
            window.requestAnimationFrame(tick)
        }
        tick()
    }
)

/* LOGOS */
// plane geometry
const geometry = new THREE.PlaneGeometry
//loader
const loader = new THREE.TextureLoader
const textureLoader = new THREE.TextureLoader
const matcapTexture = textureLoader.load('/textures/matcap/2.png')
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
const afterMaterial = new THREE.MeshMatcapMaterial({
    map: afterTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const blenderMaterial = new THREE.MeshMatcapMaterial({
    map: blenderTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const cssMaterial = new THREE.MeshMatcapMaterial({
    map: cssTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const figmaMaterial = new THREE.MeshMatcapMaterial({
    map: figmaTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const gitMaterial = new THREE.MeshMatcapMaterial({
    map: gitTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const githubMaterial = new THREE.MeshMatcapMaterial({
    map: githubTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const herokuMaterial = new THREE.MeshMatcapMaterial({
    map: herokuTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const htmlMaterial = new THREE.MeshMatcapMaterial({
    map: htmlTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const intellijMaterial = new THREE.MeshMatcapMaterial({
    map: intellijTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const jsMaterial = new THREE.MeshMatcapMaterial({
    map: jsTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const logicMaterial = new THREE.MeshMatcapMaterial({
    map: logicTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const mysqlMaterial = new THREE.MeshMatcapMaterial({
    map: mysqlTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const nextMaterial = new THREE.MeshMatcapMaterial({
    map: nextTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const nodeMaterial = new THREE.MeshMatcapMaterial({
    map: nodeTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const notionMaterial = new THREE.MeshMatcapMaterial({
    map: notionTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const npmMaterial = new THREE.MeshMatcapMaterial({
    map: npmTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const photoshopMaterial = new THREE.MeshMatcapMaterial({
    map: photoshopTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true,
})
const phpMaterial = new THREE.MeshMatcapMaterial({
    map: phpTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const phpstormMaterial = new THREE.MeshMatcapMaterial({
    map: phpstormTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const premiereMaterial = new THREE.MeshMatcapMaterial({
    map: premiereTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const reactMaterial = new THREE.MeshMatcapMaterial({
    map: reactTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const sassMaterial = new THREE.MeshMatcapMaterial({
    map: sassTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const symfonyMaterial = new THREE.MeshMatcapMaterial({
    map: symfonyTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const terminalMaterial = new THREE.MeshMatcapMaterial({
    map: terminalTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const threeMaterial = new THREE.MeshMatcapMaterial({
    map: threeTexture,
    matcap: matcapTexture,
    side: THREE.DoubleSide,
    transparent: true
})
const vercelMaterial = new THREE.MeshMatcapMaterial({
    map: vercelTexture,
    matcap: matcapTexture,
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
css.position.x = 0
css.position.y = 3
css.position.z = - 3
figma.position.x = - 3.5
figma.position.y = - 2
figma.position.z = 3
git.position.x = 3
git.position.y = - 1
git.position.z = 2
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
logic.position.x = 0
logic.position.y = - 5
logic.position.z = - 3
mysql.position.x = 4
mysql.position.y = 1
mysql.position.z = - 1
next.position.x = 5
next.position.y = - 1
next.position.z = 2
node.position.x = - 6
node.position.y = 3
node.position.z = - 1
notion.position.x = - 3
notion.position.y = - 4
notion.position.z = - 2
npm.position.x = 3
npm.position.y = 2
npm.position.z = 4
photoshop.position.x = - 3
photoshop.position.y = 1
photoshop.position.z = 4
php.position.x = 1
php.position.y = - 2
php.position.z = 3
phpstorm.position.x = - 1
phpstorm.position.y = - 2
phpstorm.position.z = - 3
premiere.position.x = - 2
premiere.position.y = 0
premiere.position.z = - 4
react.position.x = 4
react.position.y = 1
react.position.z = 2
sass.position.x = - 2
sass.position.y = - 3
sass.position.z = 2
symfony.position.x = - 3
symfony.position.y = 4
symfony.position.z = - 3
terminal.position.x = 4
terminal.position.y = - 2
terminal.position.z = - 3
three.position.x = 2
three.position.y = 3
three.position.z = 1
vercel.position.x = 2
vercel.position.y = - 1
vercel.position.z = - 3
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
css.scale.set(1.5, 1.5, 1.5)
figma.scale.set(.75, .75, .75)
git.scale.set(1, 1, 1)
github.scale.set(1, 1, 1)
heroku.scale.set(.5, .5, .5)
html.scale.set(1.5, 1.5, 1.5)
intellij.scale.set(.75, .75, .75)
js.scale.set(1.5, 1.5, 1.5)
logic.scale.set(.75, .75, .75)
mysql.scale.set(1.25, 1.25, 1.25)
next.scale.set(1.25, 1.25, 1.25)
node.scale.set(1.25, 1.25, 1.25)
notion.scale.set(.75, .75, .75)
npm.scale.set(1.5, 1.5, 1.5)
photoshop.scale.set(.75, .75, .75)
php.scale.set(1.25, 1.25, 1.25)
phpstorm.scale.set(.75, .75, .75)
premiere.scale.set(.75, .75, .75)
react.scale.set(1.5, 1.5, 1.5)
sass.scale.set(1.5, 1.5, 1.5)
symfony.scale.set(1.5, 1.5, 1.5)
terminal.scale.set(.75, .75, .75)
three.scale.set(1.5, 1.5, 1.5)
vercel.scale.set(.75, .75, .75)

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
    logic,
    mysql,
    next,
    node,
    notion,
    npm,
    photoshop,
    php,
    phpstorm,
    premiere,
    react,
    sass,
    symfony,
    terminal,
    three,
    vercel
)


/* CAMERA */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
camera.position.x = - 2
camera.position.y = - 1
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