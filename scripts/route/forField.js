fetch('https://script.google.com/macros/s/AKfycbxlMTi17GXQm5WFyisQc7U4CVMnoTz6MPB3C0e5RobgqcK5DA3bVm-Hr3qVMDUv8EZ_/exec')
.then(res => res.json())
.then(data => {
    let tr = data.content.reduce((prev,cur)=>
    {
        let td = cur.map(e=>`<td>${e}</td>`)
        return prev + `<tr>${td.join("")}</tr>`
    }, "\r")
    // console.log(tr)
    document.getElementById("forfieldata").innerHTML = tr;
})

