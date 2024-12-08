// Přiřazení tlačítek a seznamu
const pridatZnamkuBtn = document.getElementById('pridatZnamku');
const spocitatPrumerBtn = document.getElementById('spocitatPrumer');
const vymazatZnamkyBtn = document.getElementById('vymazatZnamky');
const seznamZnamek = document.getElementById('seznamZnamek');
const vysledek = document.getElementById('vysledek');

// Seznam pro známky a váhy
let znamky = [];
let vahy = [];

// Funkce pro přidání známky do seznamu
pridatZnamkuBtn.addEventListener('click', function() {
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

// Funkce pro výpočet průměru
spocitatPrumerBtn.addEventListener('click', function() {
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


