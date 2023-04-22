fetch('https://script.google.com/macros/s/AKfycbz65p0kgfe6bqE5_lzpGAEZphTdS2J5_PpgdSeqtw2pdewwQ5TJxmoEI-D6qdqE7R2gbg/exec')
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

