/*const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const blacks = ['w', 'e', 't', 'y', 'u'];*/
const allKeys = ['q', '2', 'w', '3', 'e', 'r', '5', 't', '6', 'y', '7', 'u',
                 'i', '9', 'o', '0', 'p', '[', '=', ']', 'Backspace', '.', ';', '/'];

const notes = ['C5', 'Cs5', 'D5', 'Ds5', 'E5', 'F5', 'Fs5', 'G5', 'Gs5', 'A5', 'As5', 'B5', 
               'C6', 'Cs6', 'D6', 'Ds6', 'E6', 'F6', 'Fs6', 'G6', 'Gs6', 'A6', 'As6', 'B6'];
let keyPressed = [];

var i = 0;

notes.forEach((key) => {

    let div = document.createElement('div');

    div.classList.add('key');
    if (key.indexOf('s') == -1) 
        div.classList.add('white');
    else
        div.classList.add('black');

    div.id = "k" + key;
    div.dataset.note = key;

    let h1 = document.createElement('h1');
    h1.innerText = allKeys[i];

    div.appendChild(h1);

    document.getElementsByClassName('piano')[0].appendChild(div)

    i++;

});

const keys = document.querySelectorAll('.key');

const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');

keys.forEach((key) => {
    key.addEventListener('mousedown', () => playNote(key));
    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });
});

document.addEventListener('keyup', (e) => {
    const key = e.key;
    const keyIndex = allKeys.indexOf(key);
    if (keyIndex > -1) {

        keys[keyIndex].classList.remove('active');
        keyPressed = keyPressed.filter(function (item) {
            return item != key
        })

    } //if
})

let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add('active');
    noteSound.addEventListener('ended', () => {
        if (keyPressed.indexOf(key.children[0].innerText) == -1)
            key.classList.remove('active');
    });
};

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const key = e.key;
    const keyIndex = allKeys.indexOf(key);
    if(keyIndex > -1) { 

        playNote(keys[keyIndex])
        keyPressed.push(e.key)

    } //if
    //const blackKeyIndex = blacks.indexOf(key);
  
    /*if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]);*/
});