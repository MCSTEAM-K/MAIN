fetch('https://script.google.com/macros/s/AKfycbxDSIquSevnAPws9GCA8wIUn6WMZLhxTI-0Eaz6NgsOQQUmf0pxceVFOhtcRXAGxSVVjA/exec')
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

