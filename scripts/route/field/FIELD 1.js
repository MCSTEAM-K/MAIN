fetch('https://script.google.com/macros/s/AKfycbwZVluh7Q6rfJolALqmRv6dyloH8QwnCEjPLoA6uAQLvFXEgltMsOA_45x4mQOEpUNvRQ/exec')
.then(res => res.json())
.then(data => {
    let tr = data.content.reduce((prev,cur)=>
    {
        let td = cur.map(e=>`<td>${e}</td>`)
        return prev + `<tr>${td.join("")}</tr>`
    }, "\r")
    // console.log(tr)
    document.getElementById("fieldDashboardList").innerHTML = tr;
})

