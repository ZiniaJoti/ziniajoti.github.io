const citations = {
  "tensile-md-al-nanopillar": {
    apa: "Hasan, M. S., & Joti, Z. S. (2025). Tensile mechanical performance of horizontally twinned Al nanopillar by molecular dynamics analysis. Scientific Computing and Simulation Engineering. https://doi.org/10.38032/scse.2025.3.41",
    chicago: "Hasan, M. S., and Z. S. Joti. \"Tensile Mechanical Performance of Horizontally Twinned Al Nanopillar by Molecular Dynamics Analysis.\" Scientific Computing and Simulation Engineering, 2025. https://doi.org/10.38032/scse.2025.3.41.",
    mla: "Hasan, M. S., and Z. S. Joti. \"Tensile Mechanical Performance of Horizontally Twinned Al Nanopillar by Molecular Dynamics Analysis.\" Scientific Computing and Simulation Engineering, 2025, doi:10.38032/scse.2025.3.41.",
    bibtex: "@article{hasan2025twinned_al_nanopillar,\n  title = {Tensile Mechanical Performance of Horizontally Twinned Al Nanopillar by Molecular Dynamics Analysis},\n  author = {Hasan, M. S. and Joti, Z. S.},\n  journal = {Scientific Computing and Simulation Engineering},\n  year = {2025},\n  doi = {10.38032/scse.2025.3.41}\n}"
  },
  "fe-cu-ni-nanopillar": {
    apa: "Joti, Z. S., & Hasan, M. S. (2024). A molecular dynamics study on the mechanical properties of Fe-Cu-Ni nanopillar under uniaxial tensile load. Book of Abstracts of the 3rd International Conference on Mathematical Analysis and Application Modeling.",
    chicago: "Joti, Z. S., and M. S. Hasan. \"A Molecular Dynamics Study on the Mechanical Properties of Fe-Cu-Ni Nanopillar Under Uniaxial Tensile Load.\" Book of Abstracts of the 3rd International Conference on Mathematical Analysis and Application Modeling, 2024.",
    mla: "Joti, Z. S., and M. S. Hasan. \"A Molecular Dynamics Study on the Mechanical Properties of Fe-Cu-Ni Nanopillar Under Uniaxial Tensile Load.\" Book of Abstracts of the 3rd International Conference on Mathematical Analysis and Application Modeling, 2024.",
    bibtex: "@inproceedings{joti2024fecuni_nanopillar,\n  title = {A Molecular Dynamics Study on the Mechanical Properties of Fe-Cu-Ni Nanopillar Under Uniaxial Tensile Load},\n  author = {Joti, Z. S. and Hasan, M. S.},\n  booktitle = {Book of Abstracts of the 3rd International Conference on Mathematical Analysis and Application Modeling},\n  year = {2024}\n}"
  },
  "metal-mechanical-properties-md": {
    apa: "Joti, Z. S. (2024). A comparison study of metals mechanical properties under tensile loading using molecular dynamics simulations. ResearchGate. https://doi.org/10.13140/RG.2.2.26771.28968/1",
    chicago: "Joti, Z. S. \"A Comparison Study of Metals Mechanical Properties Under Tensile Loading Using Molecular Dynamics Simulations.\" ResearchGate, 2024. https://doi.org/10.13140/RG.2.2.26771.28968/1.",
    mla: "Joti, Z. S. \"A Comparison Study of Metals Mechanical Properties Under Tensile Loading Using Molecular Dynamics Simulations.\" ResearchGate, 2024, doi:10.13140/RG.2.2.26771.28968/1.",
    bibtex: "@misc{joti2024metal_mechanical_properties_md,\n  title = {A Comparison Study of Metals Mechanical Properties Under Tensile Loading Using Molecular Dynamics Simulations},\n  author = {Joti, Z. S.},\n  year = {2024},\n  doi = {10.13140/RG.2.2.26771.28968/1},\n  note = {ResearchGate report}\n}"
  }
};

function ensureCitationModal() {
  let modal = document.querySelector("[data-citation-modal]");
  if (modal) {
    return modal;
  }

  modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.setAttribute("data-citation-modal", "");
  modal.innerHTML = `
    <div class="citation-modal" role="dialog" aria-modal="true" aria-labelledby="citation-title">
      <div class="modal-header">
        <h2 id="citation-title">Cite</h2>
        <button class="modal-close" type="button" aria-label="Close citation popup">x</button>
      </div>
      <div class="citation-format">
        <h3>APA</h3><button class="copy-button" type="button" data-copy-format="apa">Click to copy</button>
        <p class="citation-text" data-citation-format="apa"></p>
      </div>
      <div class="citation-format">
        <h3>Chicago/Turabian</h3><button class="copy-button" type="button" data-copy-format="chicago">Click to copy</button>
        <p class="citation-text" data-citation-format="chicago"></p>
      </div>
      <div class="citation-format">
        <h3>MLA</h3><button class="copy-button" type="button" data-copy-format="mla">Click to copy</button>
        <p class="citation-text" data-citation-format="mla"></p>
      </div>
      <div class="citation-format">
        <h3>BibTeX</h3><button class="copy-button" type="button" data-copy-format="bibtex">Click to copy</button>
        <div class="citation-text"><pre data-citation-format="bibtex"></pre></div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function copyText(text, button) {
  const finish = () => {
    const original = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = original;
    }, 1200);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(finish);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  finish();
}

document.addEventListener("click", (event) => {
  const citeButton = event.target.closest("[data-citation-key]");

  if (citeButton) {
    const modal = ensureCitationModal();
    const citation = citations[citeButton.dataset.citationKey];
    if (!citation) {
      return;
    }
    modal.querySelector('[data-citation-format="apa"]').textContent = citation.apa;
    modal.querySelector('[data-citation-format="chicago"]').textContent = citation.chicago;
    modal.querySelector('[data-citation-format="mla"]').textContent = citation.mla;
    modal.querySelector('[data-citation-format="bibtex"]').textContent = citation.bibtex;
    modal.dataset.activeCitation = citeButton.dataset.citationKey;
    modal.classList.add("is-open");
    modal.querySelector(".modal-close").focus();
    return;
  }

  const modal = document.querySelector("[data-citation-modal]");
  if (!modal) {
    return;
  }

  const copyButton = event.target.closest("[data-copy-format]");
  if (copyButton && modal.dataset.activeCitation) {
    copyText(citations[modal.dataset.activeCitation][copyButton.dataset.copyFormat], copyButton);
    return;
  }

  if (event.target.matches(".modal-backdrop, .modal-close")) {
    modal.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const modal = document.querySelector("[data-citation-modal]");
    if (modal) {
      modal.classList.remove("is-open");
    }
    const lightbox = document.querySelector("[data-lightbox]");
    if (lightbox) {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  }
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxItems = Array.from(document.querySelectorAll("[data-lightbox-src]"));
let activeLightboxIndex = 0;

function showLightboxImage(index) {
  if (!lightbox || lightboxItems.length === 0) {
    return;
  }
  activeLightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[activeLightboxIndex];
  const image = lightbox.querySelector(".lightbox-image");
  image.src = item.dataset.lightboxSrc;
  image.alt = item.dataset.lightboxAlt || "";
}

function openLightbox(index) {
  if (!lightbox) {
    return;
  }
  showLightboxImage(index);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  lightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

lightboxItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target.matches("[data-lightbox], .lightbox-close")) {
      closeLightbox();
    }
    if (event.target.matches(".lightbox-prev")) {
      showLightboxImage(activeLightboxIndex - 1);
    }
    if (event.target.matches(".lightbox-next")) {
      showLightboxImage(activeLightboxIndex + 1);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (!lightbox || !lightbox.classList.contains("is-open")) {
    return;
  }
  if (event.key === "ArrowLeft") {
    showLightboxImage(activeLightboxIndex - 1);
  }
  if (event.key === "ArrowRight") {
    showLightboxImage(activeLightboxIndex + 1);
  }
});
