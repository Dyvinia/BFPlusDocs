function createAppearanceInfantry(element, index) {
    lightbox.insertSlide({
        'title': element.name,
        'href': element.image,
        'type': 'image',
    }, index);
    return `
        <div class="appearance-item">
            <div class="appearance">
                <a onclick="lightbox.openAt(${index}); event.returnValue = false; return false;" href="${element.image}">
                    <img style="object-position: 50% 0;" src="${element.image}">
                </a>
                <h4><b>${element.name}</b></h4>
            </div>
        </div>
    `;
}
function createAppearanceHero(element, index) {
    lightbox.insertSlide({
        'title': element.name,
        'href': element.image,
        'type': 'image',
    }, index);
    return `
        <div class="appearance-item">
            <div class="appearance-hero">
                <a onclick="lightbox.openAt(${index}); event.returnValue = false; return false;" href="${element.image}">
                    <img style="object-position: 50% 0;" src="${element.image}">
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
        'heroes-anakin',
        'heroes-calkestis',
        'heroes-captainrex',
        'heroes-chewbacca',
        'heroes-commandercody',
        'heroes-dindjarin',
        'heroes-finn',
        'heroes-hansolo',
        'heroes-hunter',
        'heroes-leia',
        'heroes-luke',
        'heroes-maz',
        'heroes-merrin',
        'heroes-niennunb',
        'heroes-obiwan',
        'heroes-padme',
        'heroes-shriv',

        'villains-asajjventress',
        'villains-boba',
        'villains-bossk',
        'villains-captaincardinal',
        'villains-commanderpyre',
        'villains-countdooku',
        'villains-dagan',
        'villains-darthmaul',
        'villains-darthvader',
        'villains-emperorpalpatine',
        'villains-generalgrievous',
        'villains-grandadmiralthrawn',
        'villains-gideonhask',
        'villains-greedo',
        'villains-jango',
        'villains-secondsister',
        'villains-zam',
    ];
    
    for (const heroID of heroIDs) {
        data[heroID.split('-')[0]][heroID.split('-')[1]]
            .forEach(element => document.getElementById(heroID).innerHTML += createAppearanceHero(element, index++));
    }
});