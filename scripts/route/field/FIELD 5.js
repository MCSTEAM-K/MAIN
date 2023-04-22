fetch('https://script.google.com/macros/s/AKfycbx0AvbXyHFI8wQuK2URPeq4zYzDt9kKXqT6kvivFr9CKi1GNLJYiNn2sZzb0LB2_j9mpg/exec')
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

