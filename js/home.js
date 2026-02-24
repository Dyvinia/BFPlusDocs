import { JsonFetch } from "./utils/jsonfetch.js";
const devs = $id("devs");
const devTemplate = $id("dev")?.cloneNode(true);
devTemplate.removeAttribute("id");
devTemplate?.classList.remove("hidden");
devs.children[0].remove();
const devsData = (await JsonFetch.get("../../lists/devs.json")).sort((a, b) => a.name.localeCompare(b.name));
devsData.forEach(dev => {
    const devElement = devTemplate.cloneNode(true);
    devElement.removeAttribute("id");
    devElement.href = dev.link;
    devElement.$("img").src = dev.image;
    devElement.appendChild(document.createTextNode(dev.name));
    devs.appendChild(devElement);
});
