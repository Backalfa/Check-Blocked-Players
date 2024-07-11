let discordlead = "https://discordapp.com/api/webhooks/1084067798860451911/7lLG8mCvSB1WiQ12gT_5GNasU7_xlee2ZsPQxJ7A9vn02iKMHiZOyBI7UWqLhZfHsgO9";
 
$.getAll = function (
urls, // array of URLs
 onLoad, // called when any URL is loaded, params (index, data)
 onDone, // called when all URLs successfully loaded, no params
 onError // called when a URL load fails or if onLoad throws an exception, params (error)
) {
    var numDone = 0;
    var lastRequestTime = 0;
    var minWaitTime = 200; // ms between requests
    loadNext();
 
    function loadNext() {
        if (numDone == urls.length) {
            onDone();
            return;
        }
 
        let now = Date.now();
        let timeElapsed = now - lastRequestTime;
        if (timeElapsed < minWaitTime) {
            let timeRemaining = minWaitTime - timeElapsed;
            setTimeout(loadNext, timeRemaining);
            return;
        }
        lastRequestTime = now;
        $.get(urls[numDone])
            .done((data) => {
            try {
                onLoad(numDone, data);
                ++numDone;
                loadNext();
            } catch (e) {
                onError(e);
            }
        })
            .fail((xhr) => {
            onError(xhr);
        })
    }
};
 
function SendMessageLead(title, content, footer) {
    var params = {
        embeds: [
            {
                title: title,
                description: content,
                footer: {
                    text: footer
                }
            }
        ]
    };
 
 
    $.ajax({
        type: "POST",
        url: discordlead,
        contentType: "application/json",
        data: JSON.stringify(params)
    });
}
 
 
function loadlead() {
 
 
    // Obter a data atual
    const currentDate = new Date();
    const dia = currentDate.getDate();
    const mes = currentDate.getMonth() + 1; // getMonth retorna de 0 a 11, por isso +1
    const ano = currentDate.getFullYear();
 
    // Armazenar a data no localStorage
    const lastLeadData = `${dia}/${mes}/${ano}`;
    localStorage.setItem('lastlead', lastLeadData);
 
    var urlGeralTropa = "/game.php?village=" + game_data.village.id + "&screen=overview_villages&mode=combined";
    var urlGeralNobre = "/game.php?village=" + game_data.village.id + "&screen=snob";
    var urlGeralFarm = "/game.php?village=" + game_data.village.id + "&screen=ranking&mode=in_a_day&type=loot_res";
    var urlGeralRec = "/game.php?village=" + game_data.village.id + "&screen=ranking&mode=in_a_day&type=scavenge";
 
    if (game_data.player.sitter != "0") {
        urlGeralTropa += "&t=" + game_data.player.id;
        urlGeralNobre += "&t=" + game_data.player.id;
        urlGeralTropaVilla += "&t=" + game_data.player.id;
    }
 
    // Primeira requisição
    var requestTropa = $.get(urlGeralTropa).then((data) => {
        var table = $(data).find('#combined_table');
        var rows = table.find('tbody tr').slice(1, -1);
 
        // Inicializar acumuladores para cada coluna desejada
        var totals = {
            col9Total: 0,
            col10Total: 0,
            col11Total: 0,
            col12Total: 0,
            col13Total: 0,
            col14Total: 0,
            col15Total: 0,
            col16Total: 0,
            col17Total: 0,
            col18Total: 0,
        };
 
        // Iterar sobre as linhas da tabela
        rows.each(function () {
            var cols = $(this).find('td');
            totals.col9Total += parseInt(cols.eq(8).text().trim()) || 0;
            totals.col10Total += parseInt(cols.eq(9).text().trim()) || 0;
            totals.col11Total += parseInt(cols.eq(10).text().trim()) || 0;
            totals.col12Total += parseInt(cols.eq(11).text().trim()) || 0;
            totals.col13Total += parseInt(cols.eq(12).text().trim()) || 0;
            totals.col14Total += parseInt(cols.eq(13).text().trim()) || 0;
            totals.col15Total += parseInt(cols.eq(14).text().trim()) || 0;
            totals.col16Total += parseInt(cols.eq(15).text().trim()) || 0;
            totals.col17Total += parseInt(cols.eq(16).text().trim()) || 0;
            totals.col18Total += parseInt(cols.eq(17).text().trim()) || 0;
        });
 
        return totals;
    });
 
    // Segunda requisição
    var requestNobre = $.get(urlGeralNobre).then((data) => {
        var main = $(data).find('#content_value');
        var nobre = main.children().eq(1).children().eq(0).children().eq(0).children().eq(1).children().eq(4).children().eq(0).children().eq(4).children().eq(1).text();
        return nobre;
    });
 
    // Terceira requisição
    var requestFarm = $.get(urlGeralFarm).then((data) => {
        var main = $(data).find('#content_value');
        var farm = main.children().eq(1).children().eq(0).children().eq(0).children().eq(1).children().eq(3).children().eq(0).text();
 
        return farm;
    });
 
    // Quarta requisição
    var requestRec = $.get(urlGeralRec).then((data) => {
        var main = $(data).find('#content_value');
        var Rec = main.children().eq(1).children().eq(0).children().eq(0).children().eq(1).children().eq(3).children().eq(0).text();
 
        return Rec;
    });
 
    // Executar todas as requisições em paralelo e processar os resultados
    Promise.all([requestTropa, requestNobre, requestFarm, requestRec])
        .then((results) => {
            var totals = results[0];
            var nobre = results[1];
            var farm = results[2];
            var Rec = results[3];
            var playerName = game_data.player.name;
 
            var content = "";
            var title = `${playerName}\n`;
            var footer = "Made by Always Alone";
 
            content += `**Unidades Ofensivas (na aldeia):** \n\n Viking: ${totals.col11Total} \n Cavalaria leve: ${totals.col13Total} \n Aríete: ${totals.col15Total} \n Catapulta: ${totals.col16Total} \n\n **Unidades Defensivas (na aldeia):** \n\n Lanceiro: ${totals.col9Total} \n Espadachim: ${totals.col10Total} \n Batedor: ${totals.col12Total} \n Cavalaria Pesada: ${totals.col14Total} \n Catapulta: ${totals.col16Total} \n\n **Outras Unidades (na aldeia):** \n\n Paladino: ${totals.col17Total} \n Nobre: ${totals.col18Total} \n \n\n`;
 
            if (nobre != 0) {
                content += `\n Ainda podem ser produzidos **${nobre} nobres**\n\n`;
            } else {
                console.log('Sem nobres');
            }
            content += `\n **Farm:** ${farm}\n\n **Recolhidos:** ${Rec}\n\n`;
 
 
            // Adicionar conteúdo adicional baseado em 'tropas' se necessário
 
            SendMessageLead(title, content, footer, "");
            console.log("Message sent successfully for lead");
        })
        .catch((xhr) => {
            onError(xhr);
        });
}
 
loadlead();
