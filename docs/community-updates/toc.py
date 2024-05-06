from mkdocs.structure.toc import AnchorLink

def on_page_content(html, page, **kwargs):
    if page.file.src_uri == "community-updates/v10.md":
        for link in page.toc:
            link.children.append(AnchorLink('Kyber V2', 'kyber-v2', 0))
            link.children.append(AnchorLink('Weather Variants', 'weather', 0))
            link.children.append(AnchorLink('Blasters', 'blasters', 0))
            link.children.append(AnchorLink('Appearances', 'appearances', 0))
            link.children.append(AnchorLink('Heroes', 'heroes', 0))
            link.children.append(AnchorLink('Release And The Future', 'future', 0))

            patchAnchor = AnchorLink('Patch Notes', 'patch-notes', 0)
            patchAnchor.children.append(AnchorLink('Bug Fixes', 'bug-fixes', 1))
            link.children.append(patchAnchor)