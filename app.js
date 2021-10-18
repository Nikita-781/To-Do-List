let notes = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
}

const textAreaNote = document.querySelector('#text');
const blockNote = document.querySelector('.block-note');
const block_hello = document.querySelector('.hello');
const dayTitle = document.querySelector('.title');
const block_notes = document.querySelector('.n-notes');
const popap = document.querySelector('.popap');
const btn_create = document.querySelector('.create');
btn_create.addEventListener('click', function () {
    popap.style.display = 'block';
});
const btn_close = document.querySelector('.close');
btn_close.addEventListener('click', function () {
    popap.style.display = 'none';
});
const btn_add = document.querySelector('.add');
btn_add.addEventListener('click', addNote);

const btns = document.querySelectorAll('.btn');
btns.forEach(el => {
    el.addEventListener('click', function () {
        removeNotes();
        block_hello.style.display = 'none';
        blockNote.style.display = 'block';
        dayTitle.innerHTML = this.innerHTML;
        this.classList.add('active');
        createBlockWithNote(this.getAttribute('data-value'));
    });
});

function createBlockWithNote(day) {
    block_notes.innerHTML = '';
    let dataDay = [];
    for (const key in notes) {
        if (day == key) {
            dataDay = notes[key];
            if (dataDay.length > 7) {
                getScrollBlock(block_notes);
            }
            for (const val in dataDay) {
                let item = document.createElement('div');
                item.classList.add('item');
                item.innerHTML = dataDay[val];
                item.addEventListener('click', taskReady);
                let span_remove = document.createElement('span');
                span_remove.innerHTML = '⮿';
                span_remove.addEventListener('click', removeReadyNote);
                item.append(span_remove);
                block_notes.append(item);
            }
        }
    }
}

function taskReady() {
    if (this.style.textDecoration != 'line-through') {
        this.style.textDecoration = 'line-through';
    } else if (this.style.textDecoration == 'line-through') {
        clearReadyTask();
    }
}

function clearReadyTask() {
    let listNote = document.querySelectorAll('.item');
    listNote.forEach(el => {
        el.style.textDecoration = 'none';
    });
}

function removeNotes() {
    block_notes.innerHTML = '';
    block_notes.className = 'n-notes';
    btns.forEach(el => {
        el.classList.remove('active');
    });
}

function getScrollBlock(ele) {
    ele.classList.toggle('scroll');
}

function addNote() {
    let day, textForNote;
    textForNote = textAreaNote.value;
    btns.forEach(el => {
        if (el.classList.contains('active')) {
            day = el.getAttribute('data-value');
        }
    });
    for (const key in notes) {
        if (day == key) {
            notes[key].push(textForNote);
        }
    }
    console.log(notes);
    createBlockWithNote(day);
    textAreaNote.value = '';
    popap.style.display = 'none';
}

function removeReadyNote() {
    // let arr = [];
    // let nameDay;
    // btns.forEach(el => {
    //     if (el.classList.contains) {
    //         nameDay = el.getAttribute('data-value');
    //     }
    // })
    // for (const key in notes) {
    //     if (key == nameDay) {
    //         console.log(notes[key][0]);
    //     }
    // }

    // this.parentNode.remove();

    let a1 = 2;
    let a2 = 4;
    let [a3, a4] = [a2, a1];
    console.log(a3, a4);
}

