window.onload = function() {
    let random = ~~(Math.random() * 9 + 1);
    document.querySelector(`#back-video > video`).src = `ba-${random}.mp4`;
}