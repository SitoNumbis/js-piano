const keys = document.querySelectorAll('.key');

const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');

const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const blacks = ['w', 'e', 't', 'y', 'u'];

const notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'];

notes.forEach((key) => {

    let div = document.createElement('div');

    div.classList.add('key');
    if (key.indexOf('s') == -1) 
        div.classList.add('white');
    else
        div.classList.add('black');

    div.dataset.note = key;

    document.getElementsByClassName('piano')[0].appendChild(div)

    console.log(key);

});

keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
});

let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add('active');
    noteSound.addEventListener('ended', () => {
      key.classList.remove('active');
    });
};

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = whites.indexOf(key);
    const blackKeyIndex = blacks.indexOf(key);
  
    if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]);
});