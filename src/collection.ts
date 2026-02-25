class BfCollection extends HTMLElement {
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
    
        const items = this.$$('.item');
        
        const columnCount = [...items].filter(item => item.offsetTop === items[0].offsetTop).length;
        const remainder = items.length % columnCount;
        
        for (let i = 0; i < (remainder === 0 ? 0 : columnCount - remainder); i++) {
            const empty = document.createElement('div');
            empty.className = 'item empty';
            this.appendChild(empty);
        }
    }
}
customElements.define('bf-collection', BfCollection);