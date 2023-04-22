fetch('https://script.google.com/macros/s/AKfycbxpCQffCRHjVTRyZYqx0-thZQC-5wHB2ScQ7KRSCvWbyPt43irBrYZM3FcnfYglTThtqQ/exec')
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

