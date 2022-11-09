// ==UserScript==
//name         Check % Blocked Players
//author       Im Kumin
//author       Always Alone AKA Alfa
//include      **screen=info_player&id*
//==/UserScript==


/* BLOQUEIO DE ATAQUES */
let blockPercentage = 20 ;

/* PROGRAMAÇÃO */

let blockRatio = blockPercentage / 100;
let playerName = jQuery('#player_info tbody tr:eq(0) th').text().trim();
let playerposition = jQuery('#player_info tbody tr:eq(3) td:eq(1)').text().trim();
let playerPoints = parseInt(jQuery('#player_info tbody tr:eq(2) td:eq(1)').text().trim().replaceAll('.',''));
let playerDown = parseInt(playerPoints - (playerPoints * blockRatio));
let playerUp = parseInt(playerPoints + (playerPoints * blockRatio));

let missaoplayer = `<div class="quest opened" id="player20" style="background-image: url('https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/att.png');"><div class="quest_progress"></div><div class="quest_new pt">Novo</div></div>`
$(".questlog").eq(0).prepend(missaoplayer);
let boxplayer = document.querySelector("#player20");
if (boxplayer) {
    boxplayer.addEventListener("click", createInterface);
}

function onClickGenerateBtn(villages, players, tribes) {
    jQuery(this).addClass('btn-confirm-yes');
    let addnumber = document.querySelector("#numbers").textContent;
    const popupContent = `
	   <h1 align=center>Atacáveis</h1>
       <table id="minimo" class="vis" align=center>
          <tr>
              <th width="120" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/unit_knight.png" alt=""> Jogador</th>
              <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/unit/att.png" alt=""> Pontos</th>
              <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/icons/account.png" alt=""> Tribo</th>
              <th width="100" class="nowrap" style="text-align:center"><img src="https://dspt.innogamescdn.com/asset/${game_data.version.split(" ")[0]}/graphic/icons/map2.png" alt=""> Aldeias</th>
           </tr>
        </table>
     </div>
     `;
    Dialog.show('content', popupContent);
    fetchPlayers();
}

function createInterface() {
        var loadscript = document.createElement('div');
        htmlString = '<div>\
        <h1 align=center>Check % Blocked Players</h1>\
        <table id="player" class="vis" align=center>\
           <tr>\
              <th width="100" class="nowrap"><img src="https://dspt.innogamescdn.com/asset/'+ game_data.version.split(" ")[0] +'/graphic/unit/unit_knight.png" alt=""> Jogador</th>\
              <th width="100" class="nowrap"><img src="https://dspt.innogamescdn.com/asset/'+ game_data.version.split(" ")[0] +'/graphic/unit/att.png" alt=""> Posição</th>\
              <th width="100" class="nowrap"><img src="https://dspt.innogamescdn.com/asset/'+ game_data.version.split(" ")[0] +'/graphic/unit/att.png" alt=""> Pontos</th>\
           </tr>\
           <tr>\
              <td style="text-align: center"><a>'+ playerName +'</a></td>\
              <td style="text-align: center">'+ playerposition +'</td>\
              <td style="text-align: center">'+ playerPoints +'</td>\
           </tr>\
           <tr>\
              <td></td>\
              <td></td>\
              <td>\
                 <input type="number" placeholder="points to insert" id="numbers" style="text-align:center">\
              </td>\
           </tr>\
           <tr>\
              <td></td>\
              <td style="text-align:center">\
                 <div>\
				    <a class="btn" id="confir">Submit</a>\
			     </div>\
              </td>\
              <td></td>\
           </tr>\
        </table>\
    </div>\
         ';
        loadscript.innerHTML = htmlString;
        content_value.prepend(loadscript.firstChild);

        let boxsubmit = document.querySelector("#confir");
        if (boxsubmit) {
            boxsubmit.addEventListener("click", onClickGenerateBtn);
}
    }

function fetchPlayers(){
    const playersUrl = "https://" + window.location.host + "/map/player.txt";
    $.get(playersUrl, function (data) {
        const lines = data.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].split(",");
            const playerObject = {
                id: line[0],
                name: line[1],
                tribe: line[2],
                aldeias: line[3],
                points: line[4],
                rank: line[5]
            };
            if(playerObject.name == playerName)
                continue;
            if(playerObject.points <= parseInt(playerUp) && playerObject.points >= parseInt(playerDown))
                addPlayerToTable("minimo", playerObject);
        }
    });
}

function addPlayerToTable(elemId, playerObject) {
    console.log(playerObject);
    document.getElementById(elemId).innerHTML += `
       <tr>
          <td style="text-align: center">
             <a target="_blank" href="/game.php?village=${game_data.village.id}&screen=info_player&id=${playerObject.id}">
                ${(playerObject.name).replaceAll('+',' ').replaceAll('%C3%A3','ã').replaceAll('%C3%A9','é').replaceAll('%3F','?').replaceAll('%2A','*').replaceAll('%C3%AA','ê').replaceAll('%C3%A1','á').replaceAll('%C3%BA','ú')}
             </a>
          </td>
          <td style="text-align: center">${playerObject.points}</td>
          <td style="text-align: center">
             <a target="_blank" href="/game.php?village=${game_data.village.id}&screen=info_ally&id=${playerObject.tribe}">
                ${playerObject.tribe}
             </a>
          </td>
          <td style="text-align: center">${playerObject.aldeias}</td>
       </tr>
    `;
}
