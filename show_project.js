const projects = [
    {
        name: "NeoFarm",
        tech: "Rust, Bevy, ECS",
        contributors: [
            { name: "Shamit Fatin", link: "https://shamit.dev" },
            { name: "X", link: "#" }
        ],
        link: "https://github.com/shamit/neofarm",
        image: "project/dummy.png",
        description: "A relaxing farming sim with pixel chaos and modern ECS design in Rust using Bevy."
    },
    {
        name: "LLM Chat UI",
        tech: "TypeScript, Next.js, Tailwind, OpenAI",
        contributors: [
            { name: "Shamit Fatin", link: "https://shamit.dev" }
        ],
        link: "https://github.com/shamit/llm-chat-ui",
        image: "project/dummy.png",
        description: "A sleek chat interface for interacting with LLMs, focusing on prompt engineering and token tracing."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.querySelector(".project-list");

    projects.forEach((proj) => {
        const card = document.createElement("div");
        card.className = "project-card";

        const contributorsHTML = proj.contributors
            .map(c => `<a href="${c.link}" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--bittersweet)] transition-all">${c.name}</a>`)
            .join(", ");

        card.innerHTML = `
        <div class="flex flex-row justify-between items-center">
          <p class="project-name">${proj.name}</p>
          <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="ml-2">
            <span class="material-symbols-outlined">share</span>
          </a>
        </div>
        <div class="flex flex-row gap-4">
          <p class="project-tech">${proj.tech}</p>
          <p class="project-contributors">${contributorsHTML}</p>
        </div>
  
        <div class="project-detail mt-2">
          <div class="flex flex-col md:flex-row gap-4">
            <img loading="lazy" src="${proj.image}" alt="${proj.name} image" class="w-32 h-auto border-2 border-black shadow-[4px_4px_0_0_black]">
            <p class="text-sm leading-snug">${proj.description}</p>
          </div>
        </div>
      `;

        projectList.appendChild(card);
    });

    projectList.addEventListener("click", (event) => {
        const card = event.target.closest(".project-card");
        if (card) {
            const detail = card.querySelector(".project-detail");
            if (detail) {
                const isCollapsed = detail.style.maxHeight === "" || detail.style.maxHeight === "0px";
                detail.style.maxHeight = isCollapsed ? detail.scrollHeight + "px" : "0px";
                detail.style.opacity = isCollapsed ? "1" : "0";
            }
        }
    });
});
