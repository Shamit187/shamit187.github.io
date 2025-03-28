const projects = [
  {
    name: "Android Autotesting",
    tags: "LLM, VLM, Software Testing, Android",
    collaboration: [
      "Samsung",
      "BUET",
    ],
    contributors: [
      { name: "Shamit Fatin", link: "https://shamit.dev" },
      { name: "Haz Sameen Shahgir", link: "https://patchwork53.github.io/" },
      { name: "Mehbubul Hasan Al-Quvi", link: "https://quvi007.github.io/" },
      { name: "Md. Rownok Zahan Ratul", link: "https://scholar.google.com/citations?user=9QDkIn8AAAAJ&hl=en" },
      { name: "Md Toki Tahmid", link: "https://tokitahmid64.github.io/" },
      { name: "Sukarna Barua", link: "https://scholar.google.com/citations?user=hLEPDEIAAAAJ&hl=en" },
      { name: "Anindya Iqbal", link: "https://scholar.google.com/citations?user=jAuiNFgAAAAJ&hl=en" },
    ],
    link: "#",
    image: "project/android.png",
    description: "We present a novel framework for automated Android application testing using large language models (LLMs). The system takes natural language test objectives and autonomously executes corresponding actions within the app, eliminating the need for manual step definitions. By combining a self-guided exploration mechanism with a knowledge-guided execution module, our approach balances flexibility with efficiency. A retrieval-augmented generation (RAG) pipeline leverages pre-explored knowledge to reduce inference time and improve execution reliability. The system also performs post-execution verification to assess test success based on expected outcomes. Our hybrid model demonstrates strong performance under low-resource constraints and offers a scalable pathway for intelligent UI-level testing of mobile applications."
  },
  {
    name: "RTL Testbench Generation",
    tags: "LLM, RTL Design, SystemVerilog",
    collaboration: [
      "DSi",
      "BUET",
    ],
    contributors: [
      { name: "Shamit Fatin", link: "https://shamit.dev" },
      { name: "Aszadur Rahman Rakin", link: "https://rakin000.github.io/" },
      { name: "Anindya Kishore Choudhury", link: "https://github.com/anindyakchoudhury" },
      { name: "Foez Ahmed", link: "https://github.com/foez-ahmed" },
      { name: "Md. Ashraful Islam", link: "https://cse.buet.ac.bd/faculty/faculty_detail/mdashraful" },
      { name: "Anindya Iqbal", link: "https://scholar.google.com/citations?user=jAuiNFgAAAAJ&hl=en" },
    ],
    link: "#",
    image: "project/rtl.png",
    description: "This project explores the automatic generation of Register Transfer Level (RTL) testbenches from natural language descriptions using large language models (LLMs). By allowing designers to specify test intentions in plain English, the system translates high-level behavioral descriptions into executable testbench code, reducing manual effort and domain-specific scripting. The framework parses intent, infers signal interactions, and synthesizes Verilog/SystemVerilog-compatible testbenches. This approach accelerates verification cycles, enhances accessibility for non-expert users, and demonstrates the feasibility of LLMs as intelligent code-generation agents in hardware design workflows."
  },
  {
    name: "WebUi Testing",
    tags: "LLM, VLM, Software Testing, Web Development",
    collaboration: [
      "DSi",
      "Spectrum",
      "BUET",
    ],
    contributors: [
      { name: "Shamit Fatin", link: "https://shamit.dev" },
      { name: "Aszadur Rahman Rakin", link: "https://rakin000.github.io/" },
      { name: "Sadif-Ahmed", link: "https://github.com/Sadif-Ahmed" },
      { name: "Md. Nafiu Rahman", link: "https://nafiurahman77.github.io/" },
      { name: "Md. Ashraful Islam", link: "https://cse.buet.ac.bd/faculty/faculty_detail/mdashraful" },
      { name: "Anindya Iqbal", link: "https://scholar.google.com/citations?user=jAuiNFgAAAAJ&hl=en" },
    ],
    link: "#",
    image: "project/webui.png",
    description: "This project introduces an automated web UI testing framework powered by large language models (LLMs). It enables developers to describe test cases using natural language, which are then interpreted and translated into executable UI actions on web applications. The system simulates user interactions, monitors DOM changes, and verifies expected outcomes, streamlining the testing process without requiring manual scripting. By leveraging LLMs and a flexible execution backend, this approach significantly reduces the overhead of traditional web testing while improving accessibility and adaptability for dynamic front-end environments."
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const projectList = document.querySelector(".project-list");

  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const contributorsHTML = proj.contributors
      .map(c => `<a href="${c.link}" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--bittersweet)] transition-all">${c.name}</a>`)
      .join(", ");

    const collaborationHTML = proj.collaboration
      .map(c => `<div class="text-bold">${c}</div>`)
      .join(" ");

    card.innerHTML = `
        <div class="flex flex-row justify-between items-center">
          <p class="project-name">${proj.name}</p>
          <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="ml-2">
            <span class="material-symbols-outlined">share</span>
          </a>
        </div>
        <div class="flex flex-row gap-4">
          ${collaborationHTML}
          <p class="project-tech">${proj.tags}</p>
          <p class="project-contributors">${contributorsHTML}</p>
          
        </div>
        <div class="project-detail mt-2">
          <div class="flex flex-col md:flex-row gap-4">
            <img loading="lazy" src="${proj.image}" alt="Project Image" class="border-2 border-black shadow-[4px_4px_0_0_black]" style="width: 25rem; height: auto;">
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
