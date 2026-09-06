// Nexora Growth - Portfolio Showcase & Interactive Controls
// Data-driven architecture supporting dynamic filtering, lazy loaded media, and modal showcases.

document.addEventListener('DOMContentLoaded', () => {
  // Page reveal trigger
  setTimeout(() => {
    document.body.classList.add('page-loaded');
  }, 80);

  // --- Mobile Navigation Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mainNavMenu = document.getElementById('main-nav-menu');

  if (mobileMenuBtn && mainNavMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mainNavMenu.classList.toggle('active');
    });

    // Close menu when clicking nav links
    const navLinks = mainNavMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNavMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Portfolio Category Fields & Projects Rendering ---
  const projectsGrid = document.getElementById('portfolio-projects-grid');
  const filterTabsContainer = document.getElementById('portfolio-filter-tabs');
  const categoryFieldsWrapper = document.getElementById('category-fields-wrapper');
  const activeCategoryContainer = document.getElementById('active-category-container');
  const backToFieldsBtn = document.getElementById('back-to-fields-btn');
  const activeCategoryTitle = document.getElementById('active-category-title');
  const activeCategoryCount = document.getElementById('active-category-count');
  const activeCategoryTag = document.getElementById('active-category-tag');

  const categoryMeta = {
    'Websites': { title: 'Websites & Web Applications', count: '6 Projects', tag: 'Web Development' },
    'Software': { title: 'Custom Enterprise Software', count: '10 Projects', tag: 'Software Engineering' },
    'AI': { title: 'AI Solutions & Automation', count: 'Featured AI Pipeline', tag: 'Artificial Intelligence' },
    'Videos': { title: 'AI Video Generation & Media', count: '3 Video Shows', tag: 'Video Production' },
    'Branding': { title: 'Branding & Creative Design', count: 'Design System', tag: 'Brand Identity' },
    'Marketing': { title: 'Digital Marketing & Growth', count: '5 Growth Campaigns', tag: 'Growth Marketing' }
  };

  // Modal elements
  const modalBackdrop = document.getElementById('project-detail-modal');
  const modalCloseBtn = document.getElementById('project-modal-close-btn');
  const modalCategory = document.getElementById('modal-project-category');
  const modalTag = document.getElementById('modal-project-tag');
  const modalTitle = document.getElementById('modal-project-title');
  const modalMediaContainer = document.getElementById('modal-media-container');
  const modalGalleryContainer = document.getElementById('modal-gallery-container');
  const modalDescription = document.getElementById('modal-project-description');
  const modalClient = document.getElementById('modal-project-client');
  const modalYear = document.getElementById('modal-project-year');
  const modalDiscipline = document.getElementById('modal-project-discipline');
  const modalTechContainer = document.getElementById('modal-tech-container');
  const modalLiveLink = document.getElementById('modal-live-link');

  // Function to render project cards
  function renderProjects(category = 'All') {
    if (!projectsGrid || !window.NEXORA_PROJECTS) return;

    const filtered = (category === 'All') 
      ? window.NEXORA_PROJECTS 
      : window.NEXORA_PROJECTS.filter(p => p.category.toLowerCase() === category.toLowerCase());

    projectsGrid.innerHTML = '';

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--_colors-plates---gray);">
          <p>No projects found under this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = 'portfolio-card-single';
      card.setAttribute('data-project-id', project.id);

      const hasVideo = project.videos && project.videos.length > 0;

      const hasDirectLive = project.liveUrl && !project.liveUrl.includes('example.com') && project.liveUrl !== '#';
      const liveBtnLabel = project.liveUrl && project.liveUrl.includes('youtube.com') ? 'Watch on YouTube ↗' : 'Visit Live Website ↗';

      card.innerHTML = `
        <div class="portfolio-thumbnail-wrapper" role="button" tabindex="0" aria-label="View ${escapeHTML(project.title)}">
          <img src="${project.thumbnail}" alt="${escapeHTML(project.title)}" class="portfolio-thumbnail" loading="lazy">
          <div class="portfolio-thumbnail-overlay"></div>
          <div class="portfolio-view-button">
            ${hasVideo 
              ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' 
              : 'View'}
          </div>
          ${hasVideo ? '<div class="portfolio-video-badge"><span class="video-dot"></span>Video Demo</div>' : ''}
          <div class="portfolio-category-date">
            <span>${escapeHTML(project.category)}</span>
            <span class="portfolio-category-date-circle"></span>
            <span>${escapeHTML(project.tag)}</span>
          </div>
        </div>
        <div class="portfolio-typography">
          <h3 class="work-name" role="button" tabindex="0">${escapeHTML(project.title)}</h3>
          <div class="work-mini-description">${escapeHTML(project.description)}</div>
          <div class="work-card-footer">
            <button class="card-details-btn" type="button">View Details</button>
            ${hasDirectLive ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-direct-live-btn" onclick="event.stopPropagation()">${liveBtnLabel}</a>` : ''}
          </div>
        </div>
      `;

      // Event listener to open modal
      const openModalHandler = () => openProjectModal(project.id);
      card.querySelector('.portfolio-thumbnail-wrapper').addEventListener('click', openModalHandler);
      card.querySelector('.work-name').addEventListener('click', openModalHandler);
      const detailsBtn = card.querySelector('.card-details-btn');
      if (detailsBtn) detailsBtn.addEventListener('click', openModalHandler);

      // Keyboard accessibility
      card.querySelector('.portfolio-thumbnail-wrapper').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModalHandler();
        }
      });

      projectsGrid.appendChild(card);
    });
  }

  // --- Category Field Open & Switch Functions ---
  function openCategoryField(category, shouldScroll = true) {
    if (!categoryFieldsWrapper || !activeCategoryContainer) return;

    // Switch view: hide 6 category fields, show active category view
    categoryFieldsWrapper.style.display = 'none';
    activeCategoryContainer.style.display = 'block';

    // Update title, tag, and project count
    const meta = categoryMeta[category] || { title: category, count: '', tag: 'Field' };
    if (activeCategoryTitle) activeCategoryTitle.textContent = meta.title;
    if (activeCategoryCount) activeCategoryCount.textContent = meta.count;
    if (activeCategoryTag) activeCategoryTag.textContent = meta.tag;

    // Update quick switch pills
    if (filterTabsContainer) {
      const filterButtons = filterTabsContainer.querySelectorAll('.portfolio-filter-btn');
      filterButtons.forEach(btn => {
        const isMatch = btn.getAttribute('data-category').toLowerCase() === category.toLowerCase();
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });
    }

    // Render projects for this category
    renderProjects(category);

    // Smooth scroll to projects section
    if (shouldScroll) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const topOffset = projectsSection.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }
  }

  function closeCategoryField(shouldScroll = true) {
    if (!categoryFieldsWrapper || !activeCategoryContainer) return;

    // Switch view: restore 6 category fields, hide active category container
    categoryFieldsWrapper.style.display = 'block';
    activeCategoryContainer.style.display = 'none';

    if (shouldScroll) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const topOffset = projectsSection.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }
  }

  // Bind category field cards
  const fieldCards = document.querySelectorAll('.category-field-card');
  fieldCards.forEach(card => {
    const category = card.getAttribute('data-category');
    card.addEventListener('click', () => openCategoryField(category, true));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCategoryField(category, true);
      }
    });
  });

  // Bind back button
  if (backToFieldsBtn) {
    backToFieldsBtn.addEventListener('click', () => closeCategoryField(true));
  }

  // Quick switch pills click
  if (filterTabsContainer) {
    const filterButtons = filterTabsContainer.querySelectorAll('.portfolio-filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        openCategoryField(category, false);
      });
    });
  }

  // Bind Service links with data-open-category
  const serviceCategoryLinks = document.querySelectorAll('.services-single[data-open-category]');
  serviceCategoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const category = link.getAttribute('data-open-category');
      if (category) {
        openCategoryField(category, true);
      }
    });
  });

  // --- Project Modal Logic ---
  function openProjectModal(projectId) {
    if (!window.NEXORA_PROJECTS) return;
    const project = window.NEXORA_PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    if (modalCategory) modalCategory.textContent = project.category;
    if (modalTag) modalTag.textContent = project.tag;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.fullDescription || project.description;
    if (modalClient) modalClient.textContent = project.client || 'Confidential Client';
    if (modalYear) modalYear.textContent = project.year || '2026';
    if (modalDiscipline) modalDiscipline.textContent = `${project.category} / ${project.tag}`;

    // Technologies badges
    if (modalTechContainer) {
      modalTechContainer.innerHTML = '';
      if (project.technologies && project.technologies.length > 0) {
        project.technologies.forEach(tech => {
          const badge = document.createElement('span');
          badge.className = 'tech-badge';
          badge.textContent = tech;
          modalTechContainer.appendChild(badge);
        });
      }
    }

    // Media Showcase (Video or Image) - Lazy Loaded
    if (modalMediaContainer) {
      modalMediaContainer.innerHTML = '';
      if (project.videos && project.videos.length > 0) {
        const videoData = project.videos[0];
        modalMediaContainer.innerHTML = `
          <video class="project-modal-video" controls playsinline preload="metadata" poster="${videoData.poster}">
            <source src="${videoData.url}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      } else {
        const heroImg = (project.images && project.images.length > 0) ? project.images[0] : project.thumbnail;
        modalMediaContainer.innerHTML = `
          <img src="${heroImg}" alt="${escapeHTML(project.title)}" class="project-modal-main-img" id="modal-active-img" loading="lazy">
        `;
      }
    }

    // Screenshot Gallery
    if (modalGalleryContainer) {
      modalGalleryContainer.innerHTML = '';
      if (project.images && project.images.length > 1) {
        project.images.forEach(imgUrl => {
          const gImg = document.createElement('img');
          gImg.src = imgUrl;
          gImg.alt = `${project.title} screenshot`;
          gImg.className = 'project-modal-gallery-img';
          gImg.loading = 'lazy';
          gImg.addEventListener('click', () => {
            // Swap main media view to this image
            modalMediaContainer.innerHTML = `
              <img src="${imgUrl}" alt="${escapeHTML(project.title)}" class="project-modal-main-img" id="modal-active-img">
            `;
          });
          modalGalleryContainer.appendChild(gImg);
        });
      }
    }

    // Live link button
    if (modalLiveLink) {
      if (project.liveUrl && project.liveUrl !== '#') {
        modalLiveLink.style.display = 'inline-block';
        modalLiveLink.href = project.liveUrl;
        modalLiveLink.target = '_blank';
        modalLiveLink.rel = 'noopener noreferrer';
        
        const btnSpans = modalLiveLink.querySelectorAll('.primary-button-text-block');
        const linkLabel = project.liveUrl.includes('youtube.com') ? 'Watch on YouTube Channel' : 'Visit Live Project';
        if (btnSpans.length > 0) {
          btnSpans.forEach(span => span.textContent = linkLabel);
        } else {
          modalLiveLink.textContent = linkLabel;
        }
      } else {
        modalLiveLink.style.display = 'none';
      }
    }

    // Show modal
    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeProjectModal() {
    if (!modalBackdrop) return;
    
    // Pause any playing video inside modal
    const activeVideo = modalBackdrop.querySelector('video');
    if (activeVideo) {
      activeVideo.pause();
    }

    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // Helper function for HTML escaping
  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Initial State ---
  // The home page displays the 6 Category Field Cards by default, keeping the section sleek.
  // If the page loads with a specific hash (e.g., from a shared link or external navigation), open that field.
  const initialHash = window.location.hash.toLowerCase();
  if (initialHash.includes('websites')) {
    openCategoryField('Websites', false);
  } else if (initialHash.includes('software')) {
    openCategoryField('Software', false);
  } else if (initialHash.includes('ai')) {
    openCategoryField('AI', false);
  } else if (initialHash.includes('videos')) {
    openCategoryField('Videos', false);
  } else if (initialHash.includes('branding')) {
    openCategoryField('Branding', false);
  } else if (initialHash.includes('marketing')) {
    openCategoryField('Marketing', false);
  }

  // ---- Pinned Scroll-Driven Working Process (from team-carousel.html) ----
  const processSteps = [
    { 
      step: "01",
      name: "Understand", 
      role: "Discovery & Requirements", 
      desc: "We understand your business, goals, target users, and technical requirements to define a clear scope and blueprint.",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
      color1: "#3aa0e8", 
      color2: "#0b3d67", 
      initials: "01" 
    },
    { 
      step: "02",
      name: "Plan", 
      role: "Strategy & Architecture", 
      desc: "We define the right strategy, interactive user wireframes, technology stack, and predictable sprint milestones.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      color1: "#e8433a", 
      color2: "#5c0e0b", 
      initials: "02" 
    },
    { 
      step: "03",
      name: "Build", 
      role: "Design & Development", 
      desc: "We engineer pixel-perfect responsive interfaces, custom business logic, clean code, and robust APIs.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      color1: "#e8a13a", 
      color2: "#7a3d05", 
      initials: "03" 
    },
    { 
      step: "04",
      name: "Launch", 
      role: "Testing & Deployment", 
      desc: "We test across real devices, optimize performance and SEO, and launch to cloud infrastructure with zero downtime.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      color1: "#3ae8c0", 
      color2: "#0b6754", 
      initials: "04" 
    },
    { 
      step: "05",
      name: "Grow", 
      role: "Continuous Scaling", 
      desc: "We continue improving, scaling, monitoring performance metrics, and providing long-term maintenance support.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
      color1: "#4caf50", 
      color2: "#0b3d1a", 
      initials: "05" 
    }
  ];

  const track = document.getElementById('processTrack');
  const nameEl = document.getElementById('nameEl');
  const roleEl = document.getElementById('roleEl');
  const descEl = document.getElementById('descEl');
  const textWrap = document.getElementById('textWrap');
  const dotsEl = document.getElementById('dots');
  const pinOuter = document.getElementById('process');
  const progressFill = document.getElementById('progressFill');
  const processPrevBtn = document.getElementById('processPrevBtn');
  const processNextBtn = document.getElementById('processNextBtn');

  if (track && pinOuter) {
    let active = 0;
    let lastActive = -1;
    const n = processSteps.length;
    const SCROLL_UNITS_PER_SLIDE = 0.85;

    function setPinHeight() {
      pinOuter.style.height = `${(n - 1) * SCROLL_UNITS_PER_SLIDE * 100 + 100}vh`;
    }
    setPinHeight();
    window.addEventListener('resize', setPinHeight);

    // Build cards
    track.innerHTML = '';
    processSteps.forEach((m, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.index = i;
      card.style.background = `linear-gradient(135deg, ${m.color1}, ${m.color2})`;
      card.innerHTML = `
        <img src="${m.img}" alt="${escapeHTML(m.name)}" loading="lazy">
        <span class="card-step-badge">Step ${m.step}</span>
      `;
      card.addEventListener('click', () => scrollToSlide(i));
      track.appendChild(card);
    });

    // Build dots
    if (dotsEl) {
      dotsEl.innerHTML = '';
      processSteps.forEach((m, i) => {
        const d = document.createElement('button');
        d.className = 'dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Go to ' + m.name);
        d.addEventListener('click', () => scrollToSlide(i));
        dotsEl.appendChild(d);
      });
    }

    function scrollToSlide(index) {
      const clampedIndex = Math.max(0, Math.min(n - 1, index));
      const total = pinOuter.offsetHeight - window.innerHeight;
      const targetProgress = clampedIndex / (n - 1);
      const sectionTop = pinOuter.getBoundingClientRect().top + window.pageYOffset;
      const targetY = sectionTop + targetProgress * total;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }

    if (processPrevBtn) {
      processPrevBtn.addEventListener('click', () => scrollToSlide(active - 1));
    }
    if (processNextBtn) {
      processNextBtn.addEventListener('click', () => scrollToSlide(active + 1));
    }

    function renderCards() {
      const cards = track.querySelectorAll('.card');
      cards.forEach(card => {
        const i = parseInt(card.dataset.index, 10);
        const diff = i - active;
        let pos;
        if (diff === 0) pos = "0";
        else if (diff === 1) pos = "1";
        else if (diff === -1) pos = "-1";
        else if (diff === 2) pos = "2";
        else if (diff === -2) pos = "-2";
        else pos = "far";
        card.dataset.pos = pos;
      });

      if (dotsEl) {
        const dots = dotsEl.querySelectorAll('.dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === active));
      }
    }

    function updateText() {
      if (!textWrap) return;
      textWrap.classList.add('fading');
      setTimeout(() => {
        if (nameEl) nameEl.textContent = processSteps[active].name;
        if (roleEl) roleEl.textContent = processSteps[active].role;
        if (descEl) descEl.textContent = processSteps[active].desc;
        textWrap.classList.remove('fading');
      }, 220);
    }

    function setActive(index) {
      active = Math.max(0, Math.min(n - 1, index));
      renderCards();
      if (active !== lastActive) {
        updateText();
        lastActive = active;
      }
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = pinOuter.getBoundingClientRect();
        const total = pinOuter.offsetHeight - window.innerHeight;
        if (total <= 0) {
          ticking = false;
          return;
        }
        const raw = -rect.top / total;
        const progress = Math.max(0, Math.min(1, raw));

        if (progressFill) {
          progressFill.style.width = (progress * 100) + '%';
        }

        const index = Math.round(progress * (n - 1));
        setActive(index);

        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial setup
    if (nameEl) nameEl.textContent = processSteps[0].name;
    if (roleEl) roleEl.textContent = processSteps[0].role;
    if (descEl) descEl.textContent = processSteps[0].desc;
    lastActive = 0;
    renderCards();
    onScroll();
  }

  // --- Active Nav Link Highlighting on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('w--current');
        } else {
          matchingLink.classList.remove('w--current');
        }
      }
    });
  });
});

