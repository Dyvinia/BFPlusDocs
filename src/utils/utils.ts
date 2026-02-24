export class Utils {
    static testAppend(text: string) {
        $(".md-content__inner.md-typeset div")?.appendHtml(`<p>${text}</p>`);
    }
}

declare global {
    interface HTMLElement {
        $<T extends HTMLElement>(selector: string): T | null;
        $id<T extends HTMLElement>(id: string): T | null;
        $$<T extends HTMLElement>(selector: string): NodeListOf<T>;
        appendHtml(htmlString: string): void;
    }

    interface Object {
        toJson(): string;
    }

    interface String {
        parseJson(): any | null;
        parseFloat(): number | null;
    }

    function $<T extends HTMLElement>(selector: string): T | null;
    function $id<T extends HTMLElement>(id: string): T | null;
    function $$<T extends HTMLElement>(selector: string): NodeListOf<T>;
}


Object.defineProperty(HTMLElement.prototype, '$', { value: function(this: HTMLElement, selector: string) { return this.querySelector(selector); } });
Object.defineProperty(HTMLElement.prototype, '$id', { value: function(this: HTMLElement, id: string) { return this.querySelector("#" + id); } });
Object.defineProperty(HTMLElement.prototype, '$$', { value: function(this: HTMLElement, selector: string) { return this.querySelectorAll(selector); } });

Object.defineProperty(HTMLElement.prototype, 'appendHtml', { 
    value: function(this: HTMLElement, htmlString: string) { this.insertAdjacentHTML('beforeend', htmlString); } 
});

Object.defineProperty(Object.prototype, 'toJson', { 
    value: function(this: object) { 
        return JSON.stringify(this);
    }
});

Object.defineProperty(String.prototype, 'parseJson', { 
    value: function(this: string) { 
        try {
            return JSON.parse(this);
        }
        catch {
            return null;
        }
    }
});

window.$ = (selector) => document.querySelector(selector);
window.$id = (id) => document.querySelector("#" + id);
window.$$ = (selector) => document.querySelectorAll(selector);