disintegrate.init()

document.getElementById('image').addEventListener('click', e => {
    const disObj = disintegrate.getObj(e.target)
    disintegrate.createSimultaneousParticles(disObj)
})