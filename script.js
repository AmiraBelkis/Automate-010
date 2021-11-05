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
let item = document.getElementById("word");
item.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        let result = ReadWord(item.value);
        if (result) alert(item.value + " appartient à la langage de cette automate");
        else alert(item.value + " n'appartient pas à la langage de cette automate");
    }
});
//------Automate code
const automate = [
    { Si: 'PP', Li: '0', Sj: "PI" },
    { Si: 'PP', Li: '1', Sj: "IP" },
    { Si: 'PI', Li: '0', Sj: "IP" },
    { Si: 'PI', Li: '1', Sj: "II" },
    { Si: 'II', Li: '0', Sj: "IP" },
    { Si: 'II', Li: '1', Sj: "PI" },
    { Si: 'IP', Li: '0', Sj: "II" },
    { Si: 'IP', Li: '1', Sj: "PP" }
];

function ReadWord(mot) {
    let word = mot.split('');
    let Si = 'PP';
    for (let index = 0; index < word.length; index++) {
        const li = word[index];
        // console.log("Si :" + Si);
        // console.log("li :" + li);
        for (let j = 0; j < automate.length; j++) {
            const element = automate[j];
            if ((element.Si === Si) && (element.Li === li)) {
                Si = element.Sj;
                // console.log("Sj :" + Si);
                // console.log("----------");
                break;
            }
        }
    }
    if (Si === 'IP')
        return true;
    else
        return false;
}