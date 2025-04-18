const publications = [
    {
        title: "COMPASS: A Chain-of-Thought Approach toward Geo-Spatial Reasoning for Popular Path Query using LLMs",
        venue: "ECML PKDD 2025: Research Track (On Review)",
        authors: [
            { name: "Shamit Fatin", link: "#" },
            { name: "Nazmul Islam Ananto", link: "https://niananto.com/home/" },
            { name: "Md Rizwan Parvez", link: "https://scholar.google.com/citations?user=KhC8rtcAAAAJ&hl=en" },
            { name: "Mohammed Eunus Ali", link: "https://scholar.google.com/citations?user=wf8iK0sAAAAJ&hl=en" },
        ],
        link: "paper/compass.pdf",
        image: "paper/compass.png",
        abstract: "Geo-spatial reasoning problems, such as identifying popular paths from historical trajectory data, are challenging due to the complexity and limitations of traditional algorithms and machine learning methods. These approaches often fail when synthesizing novel paths under user-defined constraints or sparse data. We introduce COMPASS, a novel framework that intelligently leverages the reasoning capabilities of Large Language Models (LLMs) for complex geo-spatial tasks. COMPASS  employs a two-stage approach: a \"Search\" stage that identifies popular paths, and a \"Generate\" stage that synthesizes new paths, both harnessing LLMs' ability to understand and reason about spatial relationships, constraints, and graph structures from historical data. Extensive experiments on real and synthetic datasets show that COMPASS not only performs well in standard comparisons, it excels where traditional methods fail, especially in generating novel paths and responding with user defined constraints. We will open-source the implementation of COMPASS."
    },
    {
        title: "LELANTE: LEveraging LLM for Automated ANdroid TEsting",
        venue: "EASE 2025: Emerging Results",
        authors: [
            { name: "Shamit Fatin", link: "#" },
            { name: "Haz Sameen Shahgir", link: "https://patchwork53.github.io/" },
            { name: "Sukarna Barua", link: "https://scholar.google.com/citations?user=hLEPDEIAAAAJ&hl=en" },
            { name: "Anindya Iqbal", link: "https://scholar.google.com/citations?user=jAuiNFgAAAAJ&hl=en" },
        ],
        link: "paper/lelante.pdf",
        image: "paper/lelante.png",
        abstract: "Given natural language test case description for an Android application, existing testing approaches require developers to manually write scripts using tools such as Appium and Espresso to execute the corresponding test case. This process is labor-intensive and demands significant effort to maintain as UI interfaces evolve throughout development. In this work, we introduce LELANTE, a novel framework that utilizes large language models (LLMs) to automate test case execution without requiring pre-written scripts. LELANTE  interprets natural language test case descriptions, iteratively generate action plans, and perform the actions directly on the Android screen using its GUI. LELANTE employs a screen refinement process to enhance LLM interpretability, constructs a structured prompt for LLMs, and implements an action generation mechanism based on chain-of-thought reasoning of LLMs. To further reduce computational cost and enhance scalability, LELANTE utilizes model distillation using a foundational LLM. In experiments across 390 test cases spanning 10 popular Android applications, LELANTE achieved a 73% test execution success rate.  Our results demonstrate that LLMs can effectively bridge the gap between natural language test case description and automated execution, making mobile testing more scalable and adaptable."
    },
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
            <img src="${pub.image}" alt="Paper Image" class="border-2 border-black shadow-[4px_4px_0_0_black] hidden md:block" style="width: 25rem; height: auto;">
            <p class="text-xs md:text-sm leading-snug">${pub.abstract}</p>
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
