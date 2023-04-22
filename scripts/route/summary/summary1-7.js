let SHEET_ID = '1HD_QfZOfsCeuwRFhzpmBQ1qoIm0ZvG_hktJTs4BbQMI'
let SHEET_TITLE = 'SUMMARY';
let SHEET_RANGE = 'A1:H20'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
.then(res =>  res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));

    let field = document.getElementById('field7');

    field.innerText = data.table.rows[8].c[6].v
})


    



