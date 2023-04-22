fetch('https://script.google.com/macros/s/AKfycbxJa46H9BMfmnJEDJ7a9v5FOeo7X-vjlH5CQi-ivulNJvo3EcRNXkqScnt9yxSkbSZhNg/exec')
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

