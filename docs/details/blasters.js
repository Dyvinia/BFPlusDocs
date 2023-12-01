function createBlaster(element) {
    // heat but human readable
    let heat = element.heat ?? -1;
    let shots = -1;
    if (!isNaN(heat)) {
        shots = Math.ceil(1/heat);
        heat = parseFloat((heat * 100).toFixed(4)) + '%';
    }
    else if (heat.includes(" | ")) {
        let heats = heat.split('|');
        let shotss = heat.split('|');
        for (let i = 0; i < heats.length; i++) {
            shotss[i] = Math.ceil(1/heats[i]);
            heats[i] = parseFloat((heats[i] * 100).toFixed(4)) + '%';
        }
        heat = heats.join(" | ");
        shots = shotss.join(" | ");
    }  

    return `
        <div class="item">
            <div class="trooper-blaster">
                <div>
                    <h3>
                        ${element.name}
                    </h3>
                    <img class="trooper-blaster-weapon" class="no-lb" style="margin-right: 0.1em; margin-left: 0; transform: translateY(-1px);" src="../../assets/blasters/${element.image}">
                    ${element.trait ? `<div class="blaster-trait">${element.trait}</div>` : ''}
                </div>
                <div class="text">
                    <a>
                        Damage: ${element.damage}<br>
                        ${element.range ? `Range: ${element.range}<br>` : ''}
                        ${element.radius ? `Radius: ${element.radius}<br>` : ''}
                        Firerate: ${element.rof}<br>
                        ${element.heat ? `
                        <span 
                        onmouseover="this.textContent = 'Total Shots: ${shots}';"
                        onmouseout="this.textContent = 'Heat Per Shot: ${heat}';">
                        Heat Per Shot: ${heat}
                        </span>` : ''}
                        ${element.ammo ? `Ammo Capacity: ${element.ammo}` : ''}
                    </a>
                    ${element.attachmentOne ? `
                    <div>
                        <div class="attachment-item" onclick="window.location='${element.attachmentOne.jumpto}';">
                            <img class="ability" class="no-lb" src="../../assets/attachments/${element.attachmentOne.image}">
                            <span class="ability-name">${element.attachmentOne.name}</span>
                        </div><div class="attachment-item" onclick="window.location='${element.attachmentTwo.jumpto}';">
                            <img class="ability" class="no-lb" src="../../assets/attachments/${element.attachmentTwo.image}">
                            <span class="ability-name">${element.attachmentTwo.name}</span>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

const json = fetch("../../lists/blasters.json").then(response => response.json());

// add universal sidearms
json.then(data => data.assault.secondary = data.universalSidearms.concat(data.assault.secondary));
json.then(data => data.heavy.secondary = data.universalSidearms.concat(data.heavy.secondary));
json.then(data => data.specialist.secondary = data.universalSidearms.concat(data.specialist.secondary));

// add blasters
json.then(data => data.assault.primary.forEach(element => document.getElementById('assault-primary').innerHTML += createBlaster(element)));
json.then(data => data.assault.secondary.forEach(element => document.getElementById('assault-secondary').innerHTML += createBlaster(element)));

json.then(data => data.heavy.primary.forEach(element => document.getElementById('heavy-primary').innerHTML += createBlaster(element)));
json.then(data => data.heavy.secondary.forEach(element => document.getElementById('heavy-secondary').innerHTML += createBlaster(element)));

json.then(data => data.officer.primary.forEach(element => document.getElementById('officer-primary').innerHTML += createBlaster(element)));

json.then(data => data.specialist.primary.forEach(element => document.getElementById('specialist-primary').innerHTML += createBlaster(element)));
json.then(data => data.specialist.secondary.forEach(element => document.getElementById('specialist-secondary').innerHTML += createBlaster(element)));

function search(id) {
    const containerID = id.replace("-search", "");
    const height = document.getElementById(containerID).offsetHeight;

    json.then(data => {
        document.getElementById(containerID).innerHTML = null;

        let filtered = data[containerID.split('-')[0]][containerID.split('-')[1]]
                        .filter(element => element.name.toLowerCase().replace("-", "").replace(" ", "").includes(document.getElementById(id).value.toLowerCase().replace("-", "").replace(" ", "")));

        if (filtered.length == 0) {
            document.getElementById(containerID).innerHTML = `<div style="height:${height}px">No Results</div>`;
        }
        
        filtered.forEach(element => document.getElementById(containerID).innerHTML += createBlaster(element));
    });
}

function toggleSearch(id) {
    console.log(document.activeElement);
    const searchID = id.replace("-toggle", "");
    let searchBox = document.getElementById(searchID);

    if (searchBox.style.display == "block") {
        searchBox.style.display = "none"
    }
    else {
        searchBox.style.display = "block"
        searchBox.focus();
    }
    searchBox.value = "";
    search(searchID);
}

function unfocus(id) {
    let searchBox = document.getElementById(id);
    if (searchBox.value == "")
        setTimeout(() => searchBox.style.display = "none", 100);
}