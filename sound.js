class Sound {
    constructor() {

    }
    startSound() {
        var snd2 = new Audio("dzwiek.mp3");
        this.loop = false;
        this.autoplay = false;
        snd2.play()

    }
}