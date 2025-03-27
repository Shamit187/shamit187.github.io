const publications = [
    {
        title: "COMPASS: A Chain-of-Thought Approach toward Geo-Spatial Reasoning for Popular Path Query using LLMs",
        venue: "ECML PKDD 2025: Research Track",
        authors: [
            { name: "Shamit Fatin", link: "https://shamit.dev" },
            { name: "X", link: "#" },
            { name: "Y", link: "#" }
        ],
        link: "https://example.com/compass",
        image: "paper/dummy.png",
        abstract: "This paper presents COMPASS, a novel chain-of-thought method using LLMs to reason over geospatial data and generate optimal paths."
    },
    {
        title: "LELANTE: LEveraging LLM for Automated ANdroid TEsting",
        venue: "EASE 2025: Emerging Results",
        authors: [
            { name: "Shamit Fatin", link: "https://shamit.dev" },
            { name: "X", link: "#" },
            { name: "Y", link: "#" }
        ],
        link: "https://example.com/lelante",
        image: "paper/dummy.png",
        abstract: "LELANTE explores the use of large language models for generating automated tests in Android apps with minimal manual intervention."
    },
    {
        title: "Dummy Publication",
        venue: "NATURE",
        authors: [
            { name: "Shamit Fatin", link: "https://shamit.dev" },
            { name: "X", link: "#" },
            { name: "Y", link: "#" }
        ],
        link: "https://example.com/dummy",
        image: "paper/dummy.png",
        abstract: "This is a dummy abstract used to demonstrate rendering publication data dynamically in a neo-brutalist styled portfolio."
    }
];


document.addEventListener("DOMContentLoaded", () => {
    const pubList = document.querySelector(".publication-list");

    publications.forEach((pub) => {
        const card = document.createElement("div");
        card.className = "publication-card cursor-pointer";

        const authorsHTML = pub.authors
            .map(author => `<a href="${author.link}" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--bittersweet)] transition-all">${author.name}</a>`)
            .join(", ");

        card.innerHTML = `
        <div class="flex flex-row justify-between items-center">
          <p class="publication-name">${pub.title}</p>
          <a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="ml-2">
            <span class="material-symbols-outlined hover:text-[var(--bittersweet)] transition-colors">attach_file</span>
          </a>
        </div>
        <div class="flex flex-row gap-4">
          <p class="publication-conference">${pub.venue}</p>
          <p class="publication-authors">${authorsHTML}</p>
        </div>
  
        <div class="publication-abstract max-h-0 overflow-hidden mt-4 transition-all duration-500 ease-in-out">
          <div class="flex flex-row gap-4">
            <img src="${pub.image}" alt="Paper Image" class="w-32 h-auto border-2 border-black shadow-[4px_4px_0_0_black]">
            <p class="text-sm leading-snug">${pub.abstract}</p>
          </div>
        </div>
      `;

        pubList.appendChild(card);
    });

    pubList.addEventListener("click", (event) => {
        const card = event.target.closest(".publication-card");
        if (card) {
          const abstract = card.querySelector(".publication-abstract");
      
          if (abstract) {
            // If currently collapsed
            if (abstract.style.maxHeight === "" || abstract.style.maxHeight === "0px") {
              abstract.style.maxHeight = abstract.scrollHeight + "px";
              abstract.style.opacity = "1";
            } else {
              abstract.style.maxHeight = "0px";
              abstract.style.opacity = "0";
            }
          }
        }
      });
});
