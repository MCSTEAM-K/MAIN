let SHEET_ID = '1HD_QfZOfsCeuwRFhzpmBQ1qoIm0ZvG_hktJTs4BbQMI'
let SHEET_TITLE = 'SUMMARY';
let SHEET_RANGE = 'A1:H20'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

const formatter = new Intl.NumberFormat('en',{
    style: 'percent',
    useGrouping: 'true',
});

fetch(FULL_URL)
.then(res =>  res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    let finished = document.getElementById('finished');
    let accounts = document.getElementById('accounts');
    let remaining = document.getElementById('remaining');
    let cRate = document.getElementById('cRate');

    finished.innerText = data.table.rows[2].c[6].v;
    accounts.innerText = data.table.rows[2].c[7].v;
    remaining.innerText = data.table.rows[2].c[7].v - data.table.rows[2].c[6].v;
    cRate.innerText = formatter.format(data.table.rows[2].c[6].v / data.table.rows[2].c[7].v);
})


    





