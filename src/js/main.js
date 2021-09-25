const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const blacks = ['w', 'e', 't', 'y', 'u'];
const allKeys = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];

const notes = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'];

notes.forEach((key) => {

    let div = document.createElement('div');

    div.classList.add('key');
    if (key.indexOf('s') == -1) 
        div.classList.add('white');
    else
        div.classList.add('black');

    div.id = key;
    div.dataset.note = key;

    let h1 = document.createElement('h1');
    h1.innerText = 

    document.getElementsByClassName('piano')[0].appendChild(div)

    console.log(key);

});

const keys = document.querySelectorAll('.key');

const regulars = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');

keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
    
});

document.addEventListener('keyup', (e) => {
    const key = e.key;
    const keyIndex = allKeys.indexOf(key); 
    if (keyIndex > -1) keys[keyIndex].classList.remove('active');
})

let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add('active');
    /*noteSound.addEventListener('ended', () => {
      key.classList.remove('active');
    });*/
};

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const key = e.key;
    const keyIndex = allKeys.indexOf(key);
    if(keyIndex > -1) playNote(regulars[keyIndex])
    //const blackKeyIndex = blacks.indexOf(key);
  
    /*if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]);*/
});