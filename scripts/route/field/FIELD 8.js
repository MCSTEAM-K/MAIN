fetch('https://script.google.com/macros/s/AKfycbyHNIq7Jbp4vijhaoDzLBDbkRRmL7Y3G70wpptUmnSM1VJkvkqdSUjp6u184NXC5psz/exec')
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

