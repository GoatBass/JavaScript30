window.addEventListener('keydown', function(e){
    const music = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!music) return //stop function from running all together
    music.currentTime = 0 //rewind audio to the start
    music.play() //plays sound
    key.classList.add('playing')
})

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return //skip it if it's not a transform
    this.classList.remove('playing')
}