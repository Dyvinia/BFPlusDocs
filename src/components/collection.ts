import "../utils/utils.js";

class Collection extends HTMLElement {
    private resizeObserver: ResizeObserver;

    constructor() {
        super();
        this.fillEmpty = this.fillEmpty.bind(this);
        this.resizeObserver = new ResizeObserver(this.fillEmpty);
    }

    connectedCallback() {
        this.fillEmpty();
        this.resizeObserver.observe(this);
    }
    disconnectedCallback() {
        this.resizeObserver.disconnect();
    }

    fillEmpty() {
        this.$$('.empty').forEach(slot => slot.remove());
    
        const items = this.$$('collection-item');
        
        const columnCount = [...items].filter(item => item.offsetTop === items[0].offsetTop).length;
        const remainder = items.length % columnCount;
        
        for (let i = 0; i < (remainder === 0 ? 0 : columnCount - remainder); i++) {
            const empty = document.createElement('collection-item');
            empty.toggleAttribute('empty', true);
            this.appendChild(empty);
        }
    }
}
class CollectionItem extends HTMLElement {
    private static readonly classes: Record<string, string> = {
        "enforcer": "/assets/abilities/reinfocements/Class_Enforcer.svg",
    };
    private static readonly factions: Record<string, string> = {
        "republic": "/assets/factions/Factions_GalacticRepublic.svg",
        "rebel": "/assets/factions/Factions_RebelAlliance.svg",
        "resistance": "/assets/factions/Factions_Resistance.svg",

        "separatists": "/assets/factions/Factions_Separatists.svg",
        "empire": "/assets/factions/Factions_GalacticEmpire.svg",
        "firstorder": "/assets/factions/Factions_FirstOrder.svg",
    };

    connectedCallback() {
        if (this.hasAttribute('empty'))
            return;
        const link = this.getAttribute('link');
        const image = this.getAttribute('image');
        const classIcon = this.getAttribute('class') ? CollectionItem.classes[this.getAttribute('class')!] : null;
        const factionIcon = this.getAttribute('faction') ? CollectionItem.factions[this.getAttribute('faction')!] : null;
        this.innerHTML = `
            <a href="${link}" style="display: block; width: 100%; height: 100%;">
                <img class="portrait no-lb" src="${image}">
                ${classIcon ? `<img class="class no-lb" src="${classIcon}">` : ''}
                ${factionIcon ? `<img class="faction no-lb" src="${factionIcon}">` : ''}
            </a>
        `;
    }
}
customElements.define('bf-collection', Collection);
customElements.define('collection-item', CollectionItem);