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
    connectedCallback() {
        if (this.hasAttribute('empty'))
            return;
        this.innerHTML = `
            <a href="${this.getAttribute('link')}" style="display: block; width: 100%; height: 100%;">
                <img class="no-lb" src="${this.getAttribute('image')}" alt="Collection item">
            </a>
        `;
    }
}
customElements.define('bf-collection', Collection);
customElements.define('collection-item', CollectionItem);