function createAppearanceInfantry(element) {
    return `
        <div class="appearance-item">
            <div class="appearance">
                <img style="object-position: 55% 0;" data-title="${element.name}" src="${element.image}">
                <h4><b>${element.name}</b></h4>
            </div>
        </div>
    `;
}

fetch("../../lists/appearances.json").then(response => response.json()).then(data => {
    const infantryIDs = [
        'clones-assault',
        'clones-heavy',
        'clones-officer',
        'clones-specialist',

        'clones-clonejettrooper',
        'clones-combatengineer',
        'clones-clonecommando',
        'clones-cloneflametrooper',
        'clones-clonesharpshooter',

        'droids-assault',
        'droids-heavy',
        'droids-officer',
        'droids-specialist',
        'droids-b2',
        'droids-combatmagnaguard',
        'droids-tacticaldroid',

        'rebels-rebelcommando',
        'rebels-rebelpilot',
        'rebels-rebelsaboteur',

        'empire-assault',
        'empire-heavy',
        'empire-officer',
        'empire-specialist',
        'empire-imperialjumptrooper',
        'empire-royalguard',
        'empire-purgetroopercommander',
        'empire-viperprobedroid',

        'resistance-combatmedic',
        'resistance-niktosmuggler',

        'firstorder-assault',
        'firstorder-heavy',
        'firstorder-officer',
        'firstorder-specialist',
        'firstorder-firstorderjettrooper',
        'firstorder-guaviansecurity',
        'firstorder-riotcontroltrooper',
        'firstorder-stormtroopercommander',
    ];

    for (const infantryID of infantryIDs) {
        data[infantryID.split('-')[0]][infantryID.split('-')[1]]
            .forEach(element => document.getElementById(infantryID).innerHTML += createAppearanceInfantry(element));
    }
});