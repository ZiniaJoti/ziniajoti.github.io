# Zinia Sultana Joti Academic Website

This is a plain HTML/CSS academic personal website for GitHub Pages. It was
converted away from the Academic Pages/Jekyll template to keep the site easy to
edit without a build step.

## 1. Website Structure

```text
/
|-- index.html
|-- publications.html
|-- projects.html
|-- teaching.html
|-- cv.html
|-- style.css
|-- script.js
|-- assets/
|   |-- images/
|   |-- pdfs/
|   `-- cv/
|-- projects/
|   |-- fire-fighting-robot.html
|   |-- line-following-robot.html
|   `-- solidworks-designs.html
`-- publications/
    |-- tensile-md-al-nanopillar.html
    |-- fe-cu-ni-nanopillar.html
    `-- metal-mechanical-properties-md.html
```

## 2. How to Edit the Homepage

Open `index.html`.

- Edit the sidebar profile information near the top of the file.
- Edit the About Me text inside the main `<main class="content">` area.
- Edit research interests in the `<ul class="plain-list">` list.
- Replace the featured image by changing `assets/images/with-robot.png`.

## 3. How to Add a New Project

1. Open `projects.html`.
2. Copy one existing `<article class="project-item">...</article>` block.
3. Change the title, summary, tags, and links.
4. Add buttons only for links that are available, such as GitHub,
   ResearchGate, PDF, or report links.

## 4. How to Add a New Publication

1. Open `publications.html`.
2. Copy one existing `<article class="publication-item">...</article>` block.
3. Update the title, authors, source, year, and links.
4. Create a detail page inside `publications/`.
5. Add citation text to `script.js` so the Cite button can show APA,
   Chicago/Turabian, MLA, and BibTeX in the popup.

## 5. How to Replace the Profile Photo

Replace this file:

```text
assets/images/profile.jpg
```

Use the same filename to avoid editing every page. If you use a different
filename, update all sidebar image paths.

## 6. How to Replace the CV

Replace this file:

```text
assets/cv/Zinia_Sultana_Joti_CV.pdf
```

The CV page already links to and embeds that PDF.

## 7. How to Test Locally

You can open `index.html` directly in a browser.

For a local server, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 8. How to Deploy Through GitHub Pages

1. Commit your changes.
2. Push to the GitHub repository.
3. GitHub Pages will publish the site from the repository root.

No Jekyll, npm, Ruby, or build step is required.

## Notes

- Placeholder links use `href="#"`. Replace these with real DOI, Google Scholar,
  ORCID, or GitHub links when available.
- Keep PDFs in `assets/pdfs/` and CV files in `assets/cv/`.
- Keep project and profile images in `assets/images/`.
