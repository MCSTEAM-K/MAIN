fetch('https://script.google.com/macros/s/AKfycbzJmBSX88R_Un42AswjUzGIEOZ1qw0WL3bxQyjAOffrPQJo22K-IVqobDsPzrkF34f1sw/exec')
.then(res => res.json())
.then(data => {
    let tr = data.content.reduce((prev,cur)=>
    {
        let td = cur.map(e=>`<td>${e}</td>`)
        return prev + `<tr>${td.join("")}</tr>`
    }, "\r")
    // console.log(tr)
    document.getElementById("dashboard").innerHTML = tr;
})

