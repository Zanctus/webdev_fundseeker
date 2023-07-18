item = document.getElementById("voice-audio").src
audio = document.getElementById("recording")

let value = 0
function toggle() {
    if (value % 2 == 0) {
        document.getElementById("voice-audio").src = "./assets/Pause Button.png"
        audio.play()
    }

    else {
        document.getElementById("voice-audio").src = "./assets/Circled Play.png"
        audio.pause()
    }
    value++
}

audio.addEventListener("ended", function(){
    audio.currentTime = 0;
    document.getElementById("voice-audio").src = "./assets/Circled Play.png"
    value++
});