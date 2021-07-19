// MODULOS EN JS
function videoPlay(id){
    const urlsecret = "https://platzisecretvideo.com/" + id ;
    console.log("Se está reproduciendo desde la url " + urlsecret);
}
function videoStop(id){
    const urlsecret = "https://platzisecretvideo.com/" + id ;
    console.log("Se pauso la reproducción de la url " + urlsecret);
}

export class PlatziClass{
    constructor({
        name,
        videoID,
    }) {
        this.nameClass = name,
        this.video = videoID
        }
    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}
