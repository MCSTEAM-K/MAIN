fetch('https://script.google.com/macros/s/AKfycbycuWQP630WUlocVdBeuMz7YER8e7n4AtXphAIHzyiA1SZnoRJt32AfHxRdemjJT6NH0Q/exec')
.then(res => res.json())
.then(data => {
    let tr = data.content.reduce((prev,cur)=>
    {
        let td = cur.map(e=>`<td>${e}</td>`)
        return prev + `<tr>${td.join("")}</tr>`
    }, "\r")
    // console.log(tr)
    document.getElementById("releaseddata").innerHTML = tr;
})

