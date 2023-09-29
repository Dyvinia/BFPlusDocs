from mkdocs.structure.toc import AnchorLink

def on_page_content(html, page, **kwargs):
    if page.file.src_uri != "Details/Heroes.md":
        return
    for link in page.toc:
        for child in link.children:
            if (child.title == "Heroes"):
                child.children.append(AnchorLink('Ahsoka Tano', 'ahsoka', 1))
                child.children.append(AnchorLink('Cal Kestis', 'cal', 1))
                child.children.append(AnchorLink('Captain Rex', 'rex', 1))
                child.children.append(AnchorLink('Commander Cody', 'cody', 1))
                child.children.append(AnchorLink('Din Djarin', 'mando', 1))
                child.children.append(AnchorLink('Maz Kanata', 'maz', 1))
                child.children.append(AnchorLink('Nein Nunb', 'nein', 1))
                child.children.append(AnchorLink('Shriv Suurgav', 'shriv', 1))

            if (child.title == "Villains"):
                child.children.append(AnchorLink('Captain Cardinal', 'cardinal', 1))
                child.children.append(AnchorLink('Commander Pyre', 'pyre', 1))
                child.children.append(AnchorLink('Dengar', 'dengar', 1))
                child.children.append(AnchorLink('Gideon Hask', 'hask', 1))
                child.children.append(AnchorLink('Greedo', 'greedo', 1))
                child.children.append(AnchorLink('Jango Fett', 'jango', 1))
                child.children.append(AnchorLink('The Second Sister', 'trilla', 1))