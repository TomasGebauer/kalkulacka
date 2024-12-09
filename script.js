
const pridatZnamku = document.getElementById('pridatZnamku');
const spocitatPrumer = document.getElementById('spocitatPrumer');
const vymazatZnamky = document.getElementById('vymazatZnamky');
const seznamZnamek = document.getElementById('seznamZnamek');
const vysledek = document.getElementById('vysledek');


let znamky = [];
let vahy = [];


pridatZnamku.addEventListener('click', function() {
    const znamka = document.getElementById('znamka').value;
    const vaha = document.getElementById('vaha').value;

    if (znamka && vaha) {
        znamky.push(parseInt(znamka));
        vahy.push(parseInt(vaha));

        const listItem = document.createElement('li');
        listItem.textContent = `Známka: ${znamka}, Váha: ${vaha}`;
        seznamZnamek.appendChild(listItem);

        document.getElementById('znamka').value = '';
        document.getElementById('vaha').value = '';
    }
});

spocitatPrumer.addEventListener('click', function() {
    if (znamky.length === 0 || vahy.length === 0) {
        vysledek.textContent = 'Prosím, přidejte nějaké známky.';
        return;
    }

    let soucetZnamek = 0;
    let soucetVah = 0;

    for (let i = 0; i < znamky.length; i++) {
        soucetZnamek += znamky[i] * vahy[i];
        soucetVah += vahy[i];
    }

    const prumer = soucetZnamek / soucetVah;
    vysledek.textContent = `Vážený průměr: ${prumer.toFixed(2)}`;
});


