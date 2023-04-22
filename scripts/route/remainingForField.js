fetch('https://script.google.com/macros/s/AKfycbygxNBUcVJ5xBt_axpdoIwjMwcNs4XqhU78oUMa35QLIUXi54A382IdzOrmi81vtqnxbA/exec')
.then(res => res.json())
.then(data => {
    let tr = data.content.reduce((prev,cur)=>
    {
        let td = cur.map(e=>`<td>${e}</td>`)
        return prev + `<tr>${td.join("")}</tr>`
    }, "\r")
    // console.log(tr)
    document.getElementById("remainingdata").innerHTML = tr;
})

