import { JsonFetch } from "./utils/jsonfetch.js";

const devs = $id("devs") as HTMLElement;

const devTemplate = $id("dev")?.cloneNode(true) as HTMLElement;
devTemplate.removeAttribute("id");
devTemplate?.classList.remove("hidden");

devs.children[0].remove();

const devsData = (await JsonFetch.get<any[]>("../../lists/devs.json")).sort((a, b) => a.name.localeCompare(b.name));
devsData.forEach(dev => {
    const devElement = devTemplate.cloneNode(true) as HTMLAnchorElement;
    devElement.removeAttribute("id");
    devElement.href = dev.link;
    (devElement.$("img") as HTMLImageElement)!.src = dev.image;
    devElement.appendChild(document.createTextNode(dev.name));
    devs.appendChild(devElement);
});
