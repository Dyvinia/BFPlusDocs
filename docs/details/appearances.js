function createAppearanceInfantry(element, index) {
    lightbox.insertSlide({'href': element.image}, index);
    return `
        <div class="appearance-item">
            <div class="appearance">
                <a onclick="lightbox.openAt(${index}); event.returnValue = false; return false;" href="${element.image}" data-type="image" data-width="100%" data-height="auto" data-title="Pilot" data-desc-position="bottom">
                    <img style="object-position: 50% 0;" data-title="${element.name}" src="${element.image}">
                </a>
                <h4><b>${element.name}</b></h4>
            </div>
        </div>
    `;
}
function createAppearanceHero(element, index) {
    lightbox.insertSlide({'href': element.image}, index);
    return `
        <div class="appearance-item">
            <div class="appearance-hero">
                <a onclick="lightbox.openAt(${index}); event.returnValue = false; return false;" href="${element.image}" data-type="image" data-width="100%" data-height="auto" data-title="Pilot" data-desc-position="bottom">
                    <img style="object-position: 50% 0;" data-title="${element.name}" src="${element.image}">
                </a>
                <h4><b>${element.name}</b></h4>
            </div>
        </div>
    `;
}

const lightbox = GLightbox({"touchNavigation": true, "loop": false, "zoomable": true, "draggable": false, "openEffect": "zoom", "closeEffect": "zoom", "slideEffect": "slide"});

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

    let index = 0;
    for (const infantryID of infantryIDs) {
        data[infantryID.split('-')[0]][infantryID.split('-')[1]]
            .forEach(element => document.getElementById(infantryID).innerHTML += createAppearanceInfantry(element, index++));
    }

    const heroIDs = [
        'heroes-ahsoka',
    ];
    
    for (const heroID of heroIDs) {
        data[heroID.split('-')[0]][heroID.split('-')[1]]
            .forEach(element => document.getElementById(heroID).innerHTML += createAppearanceHero(element, index++));
    }
});