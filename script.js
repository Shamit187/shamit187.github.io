// Load and render publications
async function loadPublications() {
    try {
        const response = await fetch('data/publications.json');
        const publications = await response.json();
        const container = document.getElementById('publications-list');
        
        publications.forEach((pub, index) => {
            const item = document.createElement('div');
            item.className = 'publication-item';
            item.id = `pub-${index}`;
            
            const authors = pub.coAuthors.length > 0 
                ? `Shamit Fatin, ${pub.coAuthors.join(', ')}`
                : 'Shamit Fatin';
            
            item.innerHTML = `
                <div class="publication-content">
                    <div class="publication-year">
                        <div class="year-badge">
                            <span>${pub.year}</span>
                        </div>
                    </div>
                    
                    <div class="publication-details">
                        <div class="publication-title-row">
                            <svg class="icon icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <h3 class="publication-title">${pub.name}</h3>
                        </div>
                        
                        <p class="publication-authors">${authors}</p>
                        
                        <div class="publication-meta">
                            <span class="publication-venue">${pub.venue}</span>
                            <span class="publication-type">${pub.type}</span>
                        </div>
                        
                        <div class="publication-abstract" id="abstract-${index}" style="display: none;">
                            <p>${pub.abstract}</p>
                        </div>
                        
                        <button class="toggle-abstract-btn" onclick="toggleAbstract(${index})">
                            <svg class="icon" id="chevron-${index}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            <span id="toggle-text-${index}">Show Abstract</span>
                        </button>
                    </div>
                    
                    <div class="publication-link">
                        ${pub.link ? 
                            `<a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="link-btn">
                                <svg class="icon icon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </a>` :
                            `<div class="link-btn disabled">
                                <svg class="icon icon-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </div>`
                        }
                    </div>
                </div>
                <div class="publication-hover-border"></div>
            `;
            
            container.appendChild(item);
        });
    } catch (error) {
        console.error('Error loading publications:', error);
    }
}

// Load and render footer links
async function loadPersonalLinks() {
    try {
        const response = await fetch('data/personalLinks.json');
        const links = await response.json();
        const container = document.getElementById('footer-links');
        if (!container) {
            return;
        }
        
        links.forEach((link) => {
            const anchor = document.createElement('a');
            anchor.className = 'footer-link';
            anchor.href = link.href;
            anchor.textContent = link.label;

            const isExternal = typeof link.href === 'string' && link.href.startsWith('http');
            const isFile = typeof link.href === 'string' && link.href.toLowerCase().endsWith('.pdf');
            if (isExternal || isFile) {
                anchor.target = '_blank';
                anchor.rel = 'noopener noreferrer';
            }

            container.appendChild(anchor);
        });
    } catch (error) {
        console.error('Error loading personal links:', error);
    }
}

// Toggle abstract visibility
function toggleAbstract(index) {
    const abstract = document.getElementById(`abstract-${index}`);
    const chevron = document.getElementById(`chevron-${index}`);
    const text = document.getElementById(`toggle-text-${index}`);
    
    if (abstract.style.display === 'none') {
        abstract.style.display = 'block';
        text.textContent = 'Hide Abstract';
        chevron.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>';
    } else {
        abstract.style.display = 'none';
        text.textContent = 'Show Abstract';
        chevron.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>';
    }
}

// Load and render timeline
async function loadTimeline() {
    try {
        const response = await fetch('data/timeline.json');
        const timeline = await response.json();
        const container = document.getElementById('timeline-list');
        
        const iconMap = {
            education: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>',
            work: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',
            achievement: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>'
        };
        
        timeline.forEach((event, index) => {
            const isLeft = index % 2 === 0;
            const isCurrent = index === 0;
            
            const item = document.createElement('div');
            item.className = `timeline-item ${isLeft ? 'left' : ''}`;
            
            item.innerHTML = `
                <div class="timeline-content-wrapper">
                    <div class="timeline-period-badge ${event.type} ${isCurrent ? 'current' : ''}">
                        <span>${isCurrent ? '⚡ CURRENT' : event.period}</span>
                    </div>
                    
                    <div class="timeline-card ${isCurrent ? 'current' : ''}">
                        <div class="timeline-card-header">
                            <svg class="icon icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                ${iconMap[event.type]}
                            </svg>
                            <h3 class="timeline-card-title">${event.title}</h3>
                        </div>
                        
                        <p class="timeline-organization">${event.organization}</p>
                        
                        <p class="timeline-description">${event.description}</p>
                        
                        ${isCurrent ? `
                            <div class="timeline-current-period">
                                <span>${event.period}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="timeline-dot">
                    <div class="timeline-dot-inner ${isCurrent ? 'current' : ''}"></div>
                </div>
                
                <div class="timeline-spacer"></div>
            `;
            
            container.appendChild(item);
        });
    } catch (error) {
        console.error('Error loading timeline:', error);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPublications();
    loadTimeline();
    loadPersonalLinks();
});
