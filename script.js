function Start() {
    let main = document.getElementById('main'),
        start = document.getElementById('start'),
        title = document.getElementById('title'),
        subtitle = document.getElementById('subTitle');
    start.classList.add('moved');
    subtitle.classList.add("moved");
    title.classList.add('centred');
    setTimeout(() => {
        main.classList.add('show');
    }, 500);
}