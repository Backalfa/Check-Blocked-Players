// ==UserScript==
// name         Check % Blocked Players
// author       Always Alone AKA Alfa
// author       Im Kumin
// version      2.3
// ==/UserScript==

const _0x573c3f=_0x1c0a;(function(_0x41e1e6,_0x94510){const _0x2e4f03=_0x1c0a,_0x346110=_0x41e1e6();while(!![]){try{const _0x2b7627=parseInt(_0x2e4f03(0xf2))/0x1*(-parseInt(_0x2e4f03(0xdf))/0x2)+parseInt(_0x2e4f03(0xda))/0x3+-parseInt(_0x2e4f03(0xe5))/0x4*(parseInt(_0x2e4f03(0xf7))/0x5)+-parseInt(_0x2e4f03(0xde))/0x6+-parseInt(_0x2e4f03(0xd4))/0x7*(parseInt(_0x2e4f03(0x102))/0x8)+-parseInt(_0x2e4f03(0xe8))/0x9*(-parseInt(_0x2e4f03(0xeb))/0xa)+parseInt(_0x2e4f03(0xe9))/0xb*(parseInt(_0x2e4f03(0xfc))/0xc);if(_0x2b7627===_0x94510)break;else _0x346110['push'](_0x346110['shift']());}catch(_0xe18ed9){_0x346110['push'](_0x346110['shift']());}}}(_0x1fbb,0x885c7));let blockPercentage=0x14,blockRatio=blockPercentage/0x64+0x1,playerName=jQuery(_0x573c3f(0x10c))[_0x573c3f(0x108)]()[_0x573c3f(0xef)](),playerposition=jQuery('#player_info\x20tbody\x20tr:eq(3)\x20td:eq(1)')[_0x573c3f(0x108)]()[_0x573c3f(0xef)](),playerPoints=parseInt(jQuery(_0x573c3f(0xe4))[_0x573c3f(0x108)]()[_0x573c3f(0xef)]()[_0x573c3f(0xd2)]('.','')),playerDown=parseInt(playerPoints/blockRatio),playerUp=parseInt(playerPoints*blockRatio);createInterface();function onClickGenerateBtn(_0xb30de2,_0x3279e0,_0x1e8da5){const _0x5dfcfe=_0x573c3f;jQuery(this)[_0x5dfcfe(0xf9)](_0x5dfcfe(0xf1));const _0x1e45ee='\x0a\x09\x20\x20\x20<h1\x20align=center>Attackable\x20Table</h1><br>\x0a\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22atmw\x22\x20class=\x22vis\x22\x20align=center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20width=\x22120\x22\x20class=\x22nowrap\x22\x20style=\x22text-align:center\x22><img\x20src=\x22https://dspt.innogamescdn.com/asset/'+game_data[_0x5dfcfe(0xd0)][_0x5dfcfe(0xfe)]('\x20')[0x0]+_0x5dfcfe(0xee)+game_data['version']['split']('\x20')[0x0]+'/graphic/unit/att.png\x22\x20alt=\x22\x22>\x20Points</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20width=\x22100\x22\x20class=\x22nowrap\x22\x20style=\x22text-align:center\x22><img\x20src=\x22https://dspt.innogamescdn.com/asset/'+game_data['version']['split']('\x20')[0x0]+'/graphic/icons/account.png\x22\x20alt=\x22\x22>\x20Tribe</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20width=\x22100\x22\x20class=\x22nowrap\x22\x20style=\x22text-align:center\x22><img\x20src=\x22https://dspt.innogamescdn.com/asset/'+game_data[_0x5dfcfe(0xd0)][_0x5dfcfe(0xfe)]('\x20')[0x0]+_0x5dfcfe(0xdb)+game_data[_0x5dfcfe(0xd0)][_0x5dfcfe(0xfe)]('\x20')[0x0]+_0x5dfcfe(0xfb);Dialog['show'](_0x5dfcfe(0xe1),_0x1e45ee),fetchPlayers();}function createInterface(){const _0x12cb77=_0x573c3f;var _0x363e3f=document[_0x12cb77(0xe2)]('div');htmlString=_0x12cb77(0xf6)+game_data[_0x12cb77(0xd0)][_0x12cb77(0xfe)]('\x20')[0x0]+_0x12cb77(0xf3)+game_data['version'][_0x12cb77(0xfe)]('\x20')[0x0]+_0x12cb77(0xe0)+game_data[_0x12cb77(0xd0)]['split']('\x20')[0x0]+_0x12cb77(0x101)+playerName+_0x12cb77(0xf0)+playerposition+'</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20center\x22>'+playerPoints+_0x12cb77(0x10b)+playerDown+_0x12cb77(0x105)+playerUp+_0x12cb77(0xe6),_0x363e3f[_0x12cb77(0x106)]=htmlString,content_value[_0x12cb77(0xd1)](_0x363e3f[_0x12cb77(0xf5)]);let _0x46c4dd=document[_0x12cb77(0xea)](_0x12cb77(0xff));_0x46c4dd&&_0x46c4dd['addEventListener'](_0x12cb77(0x100),onClickGenerateBtn);}function fetchPlayers(){const _0x26c67a=_0x573c3f,_0x406159=_0x26c67a(0x109)+window['location'][_0x26c67a(0xd8)]+'/map/player.txt';$[_0x26c67a(0xfd)](_0x406159,function(_0x36c501){const _0x2ea2f2=_0x26c67a,_0x4b21b0=_0x36c501[_0x2ea2f2(0xfe)]('\x0a');for(let _0x1afd37=0x0;_0x1afd37<_0x4b21b0['length'];_0x1afd37++){const _0x30f6af=_0x4b21b0[_0x1afd37][_0x2ea2f2(0xfe)](','),_0x56e2cf={'id':_0x30f6af[0x0],'name':_0x30f6af[0x1],'tribe':_0x30f6af[0x2],'aldeias':_0x30f6af[0x3],'points':_0x30f6af[0x4],'rank':_0x30f6af[0x5]};let _0x28a4c7=parseInt(document[_0x2ea2f2(0xea)](_0x2ea2f2(0xf4))['value']);$(_0x2ea2f2(0xf4))[_0x2ea2f2(0xec)]()['trim']()[_0x2ea2f2(0xe7)]===0x0&&$(_0x2ea2f2(0xf4))[_0x2ea2f2(0xec)](0x0);let _0x4408f9=parseInt(playerDown+_0x28a4c7),_0x4e514c=parseInt(playerUp+_0x28a4c7);if(_0x56e2cf[_0x2ea2f2(0xf8)]==playerName)continue;if(_0x56e2cf[_0x2ea2f2(0xd7)]<=parseInt(_0x4e514c)&&_0x56e2cf[_0x2ea2f2(0xd7)]>=parseInt(_0x4408f9))addPlayerToTable('atmw',_0x56e2cf);}});}function addPlayerToTable(_0x51e925,_0x48ef13){const _0xf12928=_0x573c3f;console[_0xf12928(0x104)](_0x48ef13),document[_0xf12928(0x103)](_0x51e925)[_0xf12928(0x106)]+=_0xf12928(0xd5)+game_data[_0xf12928(0x10a)]['id']+_0xf12928(0xe3)+_0x48ef13['id']+_0xf12928(0xdd)+_0x48ef13['name']['replaceAll']('+','\x20')['replaceAll']('%C3%A3','ã')['replaceAll'](_0xf12928(0x107),'é')[_0xf12928(0xd2)](_0xf12928(0xd3),'?')[_0xf12928(0xd2)](_0xf12928(0xdc),'*')['replaceAll']('%C3%AA','ê')['replaceAll'](_0xf12928(0xfa),'á')[_0xf12928(0xd2)](_0xf12928(0xd6),'ú')+_0xf12928(0xed)+_0x48ef13[_0xf12928(0xd7)]+_0xf12928(0xd9);}function _0x1c0a(_0x755e31,_0x3fc2ac){const _0x1fbb47=_0x1fbb();return _0x1c0a=function(_0x1c0a36,_0x3ed30c){_0x1c0a36=_0x1c0a36-0xd0;let _0x591399=_0x1fbb47[_0x1c0a36];return _0x591399;},_0x1c0a(_0x755e31,_0x3fc2ac);}function _0x1fbb(){const _0x2c36a1=['2847444keUPqF','</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td></td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x09\x09\x09\x09\x20\x20\x20\x20<a\x20class=\x22btn\x22\x20id=\x22confir\x22>Submit</a>\x09\x09\x09\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td></td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x20</table>\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20','length','91098XkFRds','696113qEyqOa','querySelector','730vPdkEj','val','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20center\x22>','/graphic/unit/unit_knight.png\x22\x20alt=\x22\x22>\x20Player</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20width=\x22100\x22\x20class=\x22nowrap\x22\x20style=\x22text-align:center\x22><img\x20src=\x22https://dspt.innogamescdn.com/asset/','trim','</a></td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20center\x22>','btn-confirm-yes','5XnHEJj','/graphic/unit/unit_knight.png\x22\x20alt=\x22\x22>\x20Player</th>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20width=\x22100\x22\x20class=\x22nowrap\x22\x20style=\x22text-align:center\x22><img\x20src=\x22https://dspt.innogamescdn.com/asset/','#numbers','firstChild','<div>\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20align=center>Blocked\x20Players</h1>\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22player\x22\x20class=\x22vis\x22\x20align=center>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20width=\x22100\x22\x20class=\x22nowrap\x22\x20style=\x22text-align:center\x22><img\x20src=\x22https://dspt.innogamescdn.com/asset/','5ffRDYu','name','addClass','%C3%A1','/graphic/icons/map2.png\x22\x20alt=\x22\x22>Message</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20','384uRZaBX','get','split','#confir','click','/graphic/unit/att.png\x22\x20alt=\x22\x22>\x20Points</th>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20center\x22><a>','4642216WzKniM','getElementById','log','</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20center\x22>','innerHTML','%C3%A9','text','https://','village','</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td></td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td></td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20placeholder=\x22points\x20to\x20insert\x22\x20id=\x22numbers\x22\x20style=\x22text-align:center\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td></td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20center\x22>Minimum\x20Attackable</th>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22text-align:\x20center\x22>Maximum\x20Attackable</th>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td></td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20center\x22>','#player_info\x20tbody\x20tr:eq(0)\x20th','version','prepend','replaceAll','%3F','7jQLMkg','\x0a\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:\x20center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20target=\x22_blank\x22\x20href=\x22/game.php?village=','%C3%BA','points','host','</td>\x0a\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20','1321029PBOAaE','/graphic/icons/map2.png\x22\x20alt=\x22\x22>\x20Villages</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20width=\x22100\x22\x20class=\x22nowrap\x22\x20style=\x22text-align:center\x22><img\x20src=\x22https://dspt.innogamescdn.com/asset/','%2A','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','2959512uhCrbf','344152JjApyp','/graphic/unit/att.png\x22\x20alt=\x22\x22>\x20Rank</th>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20width=\x22100\x22\x20class=\x22nowrap\x22\x20style=\x22text-align:center\x22><img\x20src=\x22https://dspt.innogamescdn.com/asset/','content','createElement','&screen=info_player&id=','#player_info\x20tbody\x20tr:eq(2)\x20td:eq(1)'];_0x1fbb=function(){return _0x2c36a1;};return _0x1fbb();}
