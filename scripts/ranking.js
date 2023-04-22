fetch('https://script.google.com/macros/s/AKfycbxySdtPNyJfWUrB9rmO35Up2RrUhnB2mOxOYWSlX4LG99LfKMvcEPZN7yvIa5eOQkD6/exec')
.then(res => res.json())
.then(data => {
    let tr = data.content.reduce((prev,cur)=>
    {
        let td = cur.map(e=>`<td>${e}</td>`)
        return prev + `<tr>${td.join("")}</tr>`
    }, "\r")

    const formatter = new Intl.NumberFormat('en',{
        style: 'currency',
        currency: 'PHP',
        useGrouping: 'true',
        notation: 'compact'

    });

    const dashboard_earnings_collectionFee = document.getElementById('dashboard_earnings_collectionFee');
    const dashboard_earnings_expense = document.getElementById('dashboard_earnings_expense');
    const dashboard_earnings_net_profit = document.getElementById('dashboard_earnings_net_profit');
    const earnings_collectionFee = document.getElementById('earnings_collectionFee');
    const earnings_expense = document.getElementById('earnings_expense');
    const earnings_net_profit = document.getElementById('earnings_net_profit');
    const rankingCards = document.getElementById('rankingCards');
    const dashboard_rankingCards = document.getElementById('dashboard_rankingCards');
    const campaignCards = document.getElementById('campaignCards');


    dashboard_earnings_collectionFee.innerText = formatter.format(data.content[30][3]);
    dashboard_earnings_expense.innerText = formatter.format(data.content[30][7]);
    dashboard_earnings_net_profit.innerText = formatter.format(data.content[30][8]);
    earnings_collectionFee.innerText = formatter.format(data.content[30][3]);
    earnings_expense.innerText = formatter.format(data.content[30][7]);
    earnings_net_profit.innerText = formatter.format(data.content[30][8]);

    var ranking = "";

    for(x=1; x<data.content.length-1; x++){

        ranking += 
        `<div class="rankCard">
            <div class="rankLabel">Rank ${data.content[x][10]}</div>
            <div class="earningsCard">
                <div class="card-content">
                    <div class="bankLabel">${data.content[x][1]}</div>
                    <div class="productLabel">${data.content[x][2]}</div><br>
                    <div class="number">${formatter.format(Math.round(data.content[x][8]))}</div>
                    <div class="card-name">NET PROFIT</div>
                </div>
                <div class="icon-box-ranking">
                    <div class="card-name">${data.content[x][0]}</div><br>
                    <img src="img/${data.content[x][9]}" alt="">
                </div>
            </div>
        </div>`
    }
    rankingCards.innerHTML = ranking

    var dashboard_ranking = "";

    for(x=1; x<4; x++){

        dashboard_ranking += 
        `<div class="rankCard">
            <div class="rankLabel">Rank ${data.content[x][10]}</div>
            <div class="earningsCard">
                <div class="card-content">
                    <div class="bankLabel">${data.content[x][1]}</div>
                    <div class="productLabel">${data.content[x][2]}</div><br>
                    <div class="number">${formatter.format(Math.round(data.content[x][8]))}</div>
                    <div class="card-name">NET PROFIT</div>
                </div>
                <div class="icon-box-ranking">
                    <div class="card-name">${data.content[x][0]}</div><br>
                    <img src="img/${data.content[x][9]}" alt="">
                </div>
            </div>
        </div>`
    }
    dashboard_rankingCards.innerHTML = dashboard_ranking

    var campaign = "";

    for(x=1; x<data.content.length-1; x++){

        campaign += 
        `<div class="campaignCard">
            <img src="img/${data.content[x][9]}" alt="">
            <div class="campaignCard_label">
                <h2>${data.content[x][1]}</h2>
                <h3>${data.content[x][2]}</h2>
            </div>
        </div>`
    }
    campaignCards.innerHTML = campaign

})
