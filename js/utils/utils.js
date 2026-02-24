export class Utils {
    static testAppend(text) {
        $(".md-content__inner.md-typeset div")?.appendHtml(`<p>${text}</p>`);
    }
}
Object.defineProperty(HTMLElement.prototype, '$', { value: function (selector) { return this.querySelector(selector); } });
Object.defineProperty(HTMLElement.prototype, '$id', { value: function (id) { return this.querySelector("#" + id); } });
Object.defineProperty(HTMLElement.prototype, '$$', { value: function (selector) { return this.querySelectorAll(selector); } });
Object.defineProperty(HTMLElement.prototype, 'appendHtml', {
    value: function (htmlString) { this.insertAdjacentHTML('beforeend', htmlString); }
});
Object.defineProperty(Object.prototype, 'toJson', {
    value: function () {
        return JSON.stringify(this);
    }
});
Object.defineProperty(String.prototype, 'parseJson', {
    value: function () {
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
