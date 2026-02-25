const collection = $('bf-collection');

fillEmpty();
new ResizeObserver(fillEmpty).observe(collection!);

function fillEmpty() {
    if (!collection)
        return;

    collection.$$('.empty').forEach(slot => slot.remove());
    
    const items = collection.$$('.item');
    
    const columnCount = [...items].filter(item => item.offsetTop === items[0].offsetTop).length;
    const remainder = items.length % columnCount;
    
    for (let i = 0; i < (remainder === 0 ? 0 : columnCount - remainder); i++) {
        const empty = document.createElement('div');
        empty.className = 'item empty';
        collection.appendChild(empty);
    }

    collection.removeAttribute('unloaded');
}