// JS Drum Kit App
// Project 1 of 30

window.onload = function() {
    window.addEventListener('keydown', function(e){
        //const audio = document.getElementById('music');
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);       
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);        
 
        //console.log(audio);
        //console.log(e);
        audio.play();
        
        if(!audio) {
            return;
        }
        
        audio.currentTime = 0; // sets time to 0s
        key.classList.add('active-key');
        //key.classList.remove('active-key');
        //key.classList.toggle('active-key');
    });

    function removeTransition(e) {
        if (e.propertyName != 'transform') return;
        this.classList.remove('active-key');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
};
