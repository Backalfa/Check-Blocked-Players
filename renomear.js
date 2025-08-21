
function _0x145b() {
    return [
        ["QWlfRGU=", "Zl9vbGQ=", "X0F0YXE=", "dWVz"],
        ["I2luY28=", "bWluZ3M=", "X2Ftb3U=", "bnQ="],
        ["W0RlZmU=", "c2FdIEU=", "bGVtZW4=", "dG8gJyM=", "aW5jb20=", "aW5nc18=", "YW1vdW4=", "dCcgbsOj", "byBlbmM=", "b250cmE=", "ZG8u"],
        [],
        ["W0RlZmU=", "c2FdIFQ=", "b2RvcyA=", "b3MgYXQ=", "YXF1ZXM=", "IGRlc2E=", "cGFyZWM=", "ZXJhbS4="],
        ["MA=="],
        ["W0RlZmU=", "c2FdIE0=", "b25pdG8=", "cmFtZW4=", "dG8gZGU=", "IGF0YXE=", "dWVzIGk=", "bmljaWE=", "ZG8u"],
        ["L2dhbWU=", "LnBocD8=", "dmlsbGE=", "Z2U9"],
        ["JnNjcmU=", "ZW49b3Y=", "ZXJ2aWU=", "d192aWw=", "bGFnZXM=", "Jm1vZGU=", "PWluY28=", "bWluZ3M=", "JnN1YnQ=", "eXBlPWE=", "dHRhY2s=", "cw=="],
        ["X2JsYW4=", "aw=="],
        ["I2luY28=", "bWluZ3M=", "X3RhYmw=", "ZQ=="],
        ["I3NlbGU=", "Y3RfYWw=", "bA=="],
        ["W1JlbnU=", "bWVhcl0=", "IFNlbGU=", "Y2lvbmE=", "bmRvIGE=", "dGFxdWU=", "cyBlIGM=", "bGljYW4=", "ZG8gZW0=", "ICdFdGk=", "cXVldGE=", "Jy4uLg=="],
        ["W1JlbnU=", "bWVhcl0=", "IENvbmM=", "bHXDrWRv", "IGUgYWI=", "YSBmZWM=", "aGFkYS4="]
    ];
}
function _0x5213(n) {
    const e = _0x145b();
    return (_0x5213 = function(n) {
        return e[n - 396].map(c => Buffer.from(c, 'base64').toString('utf8')).join('');
    })(n);
}

function monitorAtaques() {
    const storageKey = _0x5213(396);
    let oldAtaques = parseInt(localStorage.getItem(storageKey)) || 0;

    const target = document.querySelector(_0x5213(397));
    if (!target) {
        console.log(_0x5213(398));
        return;
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            const novoValor = parseInt(target.innerText.replace(/\D/g, _0x5213(399))) || 0;

            if (novoValor < oldAtaques) {
                // Ataques diminuíram
                console.log(`[Defesa] Número de ataques diminuiu: ${oldAtaques} → ${novoValor}`);
                localStorage.setItem(storageKey, novoValor);
            } else if (novoValor === 0) {
                // Não existem mais ataques
                console.log(_0x5213(400));
                localStorage.setItem(storageKey, _0x5213(401));
            } else if (novoValor > oldAtaques) {
                // Novos ataques detectados
                console.log(`[Defesa] Novos ataques detectados: ${oldAtaques} → ${novoValor}`);
                setTimeout(() => {
                    RenumearAtaques();
                    localStorage.setItem(storageKey, novoValor); // Atualiza storage depois
                }, 500);
            }

            oldAtaques = novoValor;
        });
    });

    observer.observe(target, { childList: true, characterData: true, subtree: true });
    console.log(_0x5213(402));
}

// Chamar a função para começar a monitorar
monitorAtaques();

function RenumearAtaques() {
    const urlGeralIncome = _0x5213(403) + game_data.village.id + _0x5213(404);
    const win = window.open(urlGeralIncome, _0x5213(405));

    let scriptCheck = setInterval(() => {
        try {
            const doc = win.document;

            // Garante que a tabela e os elementos estão disponíveis
            const tabela = doc.querySelector(_0x5213(406));
            const botaoEtiqueta = doc.querySelector('.btn[value=Etiqueta]');
            const checkboxTodos = doc.querySelector(_0x5213(407));

            if (tabela && botaoEtiqueta && checkboxTodos) {
                console.log(_0x5213(408));

                checkboxTodos.click();
                botaoEtiqueta.click();

                // Aguarda 1 segundo após clicar, então fecha a aba
                setTimeout(() => {
                    win.close();
                    clearInterval(scriptCheck);
                    console.log(_0x5213(409));
                }, 1000);
            }
        } catch (e) {
            // A aba pode ainda estar carregando, ou não acessível ainda
        }
    }, 500);
}
