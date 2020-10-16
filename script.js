samplePlayBD = () => {
    var sound = new Howl({
        src: ['BdBsc.wav']
    })
    sound.play();
}

samplePlaySD = () => {
    var sound = new Howl({
        src: ['SdBsc.wav']
    })
    sound.play();
}

playPattern = () => {

    // Clear listener after first call.
    sound.once('load', function() {
        document.getElementsByClassName("pattern");
        sound.play();
    });

    // Fires when the sound finishes playing.
    sound.on('end', function() {
        console.log('Finished!');
    });
}