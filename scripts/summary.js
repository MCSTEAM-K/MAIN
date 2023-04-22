let SHEET_ID = '1HD_QfZOfsCeuwRFhzpmBQ1qoIm0ZvG_hktJTs4BbQMI'
let SHEET_TITLE = 'SUMMARY';
let SHEET_RANGE = 'A1:D20'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res =>  res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    let forfield = document.getElementById('forfield');
    let released = document.getElementById('released');
    let remaining = document.getElementById('remaining');
    let forfield2 = document.getElementById('forfield2');
    let released2 = document.getElementById('released2');
    let remaining2 = document.getElementById('remaining2');


    forfield.innerText = data.table.rows[0].c[1].v;
    released.innerText = data.table.rows[0].c[2].v;
    remaining.innerText = data.table.rows[0].c[3].v;
    forfield2.innerText = data.table.rows[0].c[1].v;
    released2.innerText = data.table.rows[0].c[2].v;
    remaining2.innerText = data.table.rows[0].c[3].v;
})