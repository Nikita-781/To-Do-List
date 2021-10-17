let notes = {
    monday: ['note1', 'note1'],
    tuesday: ['note2', 'note2', 'note2', 'note2', 'note2', 'note2', 'note2', 'note2'],
    wednesday: ['note3', 'note3'],
    thursday: ['note4', 'note4'],
    friday: ['note5', 'note5'],
    saturday: ['note6', 'note6'],
    sunday: ['note7', 'note7']
}

const block_notes = document.querySelector('.n-notes');
const popap = document.querySelector('.popap');
const btn_create = document.querySelector('.create');
btn_create.addEventListener('click', function () {
    popap.style.display = 'block';
});

const btns = document.querySelectorAll('.btn');
btns.forEach(el => {
    el.addEventListener('click', function () {
        this.classList.add('active');
        let dataDay = [];
        removeNotes();
        for (const key in notes) {
            if (this.getAttribute('data-value') == key) {
                dataDay = notes[key];
                if (dataDay.length > 7) {
                    getScrollBlock(block_notes);
                }
                for (const val in dataDay) {
                    let item = document.createElement('div');
                    item.classList.add('item');
                    item.innerHTML = dataDay[val];
                    block_notes.append(item);
                }
            }
        }
    });
});

function removeNotes() {
    block_notes.innerHTML = '';
}

function getScrollBlock(ele) {
    ele.classList.toggle('scroll');
}

