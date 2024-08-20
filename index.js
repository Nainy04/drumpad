function produceSound(btn){
    const sound =document.getElementById("audio");
    switch (btn) {
        case 'a':
            sound.src = "sounds/clap.wav";
            sound.play();
            break;
        case 's':
            audio.src = "sounds/hihat.wav";
            sound.play();
            break;
        case 'd':
            audio.src = "sounds/kick.wav";
            sound.play();
            c
            break;
        case 'f':
            audio.src = "sounds/openhat.wav";
            sound.play();
           
            break;
        case 'g':
            audio.src = "sounds/boom.wav";
            sound.play();
            
            break;
        case 'h':
            audio.src = "sounds/ride.wav";
            sound.play();
            break;
        case 'j':
            audio.src = "sounds/snare.wav";
            sound.play();
            break;
        case 'k':
            audio.src = "sounds/tom.wav";
            sound.play();
            
            break;
        case 'l':
            audio.src = "sounds/tink.wav";
            sound.play();
            
            break;

    }

    
}

