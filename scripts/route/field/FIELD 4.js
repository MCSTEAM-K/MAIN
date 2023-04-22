fetch('https://script.google.com/macros/s/AKfycbyCiCrM6qXz8UlKVpyVEJ4iIfWuDzT2sk3YRR_uTaZNgb2tLL6x6qy1DpmFB2Rd2mQC/exec')
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

