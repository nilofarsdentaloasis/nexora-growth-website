---
name: website-development
description: Builds, modifies, debugs, and validates production-ready websites with a mobile-first approach. Use for frontend development, responsive UI, existing-theme customization, component architecture, performance, accessibility, SEO, testing, and deployment preparation.
---

# Website Development Skill

## Purpose

Build and maintain high-quality websites with a strong focus on:

- Mobile-first user experience
- Clean and maintainable code
- Reusable components
- Existing-theme preservation when a reference theme is provided
- Performance
- Accessibility
- SEO
- Responsive behavior
- Production readiness
- Easy future updates

The agent must prefer a simple, reliable implementation over unnecessary complexity.

---

# 1. CORE RULES

## Inspect before changing

Before modifying an existing website:

1. Inspect the repository structure.
2. Identify the framework and build system.
3. Inspect package.json and relevant configuration files.
4. Identify routing.
5. Identify reusable components.
6. Identify styling architecture.
7. Identify asset/media handling.
8. Identify existing data structures.
9. Identify the current responsive behavior.
10. Run the existing application when practical.

Do not immediately rewrite the project.

## Preserve working code

When modifying an existing project:

- Make the smallest reasonable change.
- Reuse existing components.
- Reuse existing utilities.
- Reuse the existing styling system.
- Avoid replacing working architecture without a clear reason.
- Do not introduce dependencies unnecessarily.

---

# 2. EXISTING THEME PRESERVATION

If the user provides an existing website theme, screenshot, template, or reference design and asks to use it:

## Highest priority

Preserve the existing visual identity unless the user explicitly asks for a redesign.

Keep:

- Layout
- Color palette
- Typography
- Spacing
- Grid system
- Card design
- Buttons
- Navigation
- Section structure
- Borders
- Shadows
- Radius
- Animations
- Transitions
- Visual hierarchy

If the user asks to change only content/data:

DO NOT redesign the interface.

Change:

- Text
- Images
- Videos
- Project data
- Service data
- Contact information
- Links
- Required functionality

Do not turn an existing theme into a different design.

---

# 3. MOBILE-FIRST DEVELOPMENT

Mobile is the primary experience unless the user explicitly says otherwise.

Design and verify for:

- 320px
- 360px
- 375px
- 390px
- 412px
- 430px

Then enhance for:

- Tablet
- Laptop
- Desktop
- Large desktop

Check:

- No horizontal scrolling
- No clipped text
- No overlapping elements
- Buttons are easy to tap
- Navigation is usable
- Images scale correctly
- Videos fit correctly
- Cards remain readable
- Forms are usable
- Modals fit the viewport
- Sticky elements do not obstruct content

Do not treat mobile as a desktop layout squeezed into a smaller width.

---

# 4. RESPONSIVE DESIGN

Use responsive layouts rather than device-specific hacks.

Prefer:

- CSS Grid
- Flexbox
- Responsive typography
- Relative sizing
- Container-based layouts
- Responsive images
- Appropriate breakpoints

Avoid:

- Fixed widths that cause overflow
- Excessive absolute positioning
- Device-specific hacks
- Unnecessary JavaScript for responsive layout

Use touch-friendly controls.

Interactive elements should have comfortable tap areas.

---

# 5. COMPONENT ARCHITECTURE

Build reusable components.

Typical examples:

- Header
- Navigation
- Hero
- Section
- Button
- Card
- ServiceCard
- ProjectCard
- Gallery
- VideoCard
- Modal
- ContactForm
- Footer

Do not create a separate component for every tiny visual element unless it improves maintainability.

Avoid giant components that contain an entire website in one file.

---

# 6. DATA-DRIVEN CONTENT

When a website contains repeated content, use data structures.

Examples:

- Services
- Projects
- Testimonials
- Team members
- FAQs
- Blog posts
- Portfolio items

Prefer:

```ts
const projects = [
  {
    id: "project-1",
    title: "Project Name",
    category: "Website",
    description: "Project description",
    thumbnail: "/images/project-1.webp",
    images: ["/images/project-1-1.webp"],
    videos: [],
    technologies: ["React", "TypeScript"],
    liveUrl: "",
    featured: true
  }
];
```

The UI should map over the data.

Adding new content should not require rebuilding the layout.

---

# 7. MEDIA HANDLING

Optimize images and videos.

Use:

- WebP or AVIF where appropriate
- Responsive image sizes
- Lazy loading for below-the-fold media
- Appropriate image dimensions
- Poster images for videos
- Compressed media

Do not load every large video when the page initially opens.

Avoid storing unnecessarily large original media files in the repository.

For large media, prefer an appropriate CDN, object storage, or video hosting solution.

Never compromise initial page performance for decorative media.

---

# 8. VIDEO UX

For portfolio and marketing websites:

- Do not autoplay videos with sound.
- Prefer muted previews when autoplay is genuinely useful.
- Provide visible playback controls.
- Use poster images.
- Lazy-load non-critical videos.
- Support fullscreen where appropriate.
- Ensure videos work on mobile.
- Avoid layout shifts when video loads.

---

# 9. ACCESSIBILITY

Build accessible interfaces by default.

Use:

- Semantic HTML
- Proper heading hierarchy
- Labels for form fields
- Alt text for meaningful images
- Empty alt attributes for decorative images
- Keyboard navigation
- Visible focus states
- Accessible buttons
- Sufficient color contrast
- Reduced-motion support

Do not use color alone to communicate important information.

Do not use clickable divs when a semantic button or link is appropriate.

---

# 10. SEO

For public websites, implement appropriate SEO.

Check:

- Page title
- Meta description
- Canonical URL where appropriate
- Heading hierarchy
- Semantic HTML
- Descriptive URLs
- Image alt text
- Open Graph metadata
- Social sharing image
- Favicon
- robots.txt when appropriate
- sitemap when appropriate

Avoid keyword stuffing.

SEO content should remain natural and useful.

---

# 11. PERFORMANCE

Prioritize:

- Fast initial rendering
- Small JavaScript payloads
- Optimized images
- Lazy loading
- Minimal unnecessary dependencies
- Efficient rendering
- Stable layouts
- Good Core Web Vitals

Avoid:

- Large libraries for tiny features
- Unnecessary animation libraries
- Huge background videos
- Blocking third-party scripts
- Loading content that is not needed immediately

When performance and visual effects conflict, prefer performance unless the user explicitly prioritizes the effect.

---

# 12. UI / UX

Prioritize:

1. Clarity
2. Usability
3. Visual hierarchy
4. Speed
5. Consistency
6. Accessibility

Every page should have a clear primary action.

Avoid:

- Excessive popups
- Unnecessary loading screens
- Confusing navigation
- Tiny text
- Overcrowded sections
- Excessive animation
- Decorative elements that reduce usability

---

# 13. FORMS

Forms should:

- Have clear labels
- Validate user input
- Show useful errors
- Show success feedback
- Prevent accidental duplicate submissions
- Work well on mobile
- Have accessible controls

Do not collect unnecessary personal information.

---

# 14. NAVIGATION

Navigation should be predictable.

On mobile:

- Use a clean mobile navigation pattern.
- Make menu controls easy to tap.
- Avoid overcrowding.
- Keep important actions accessible.

If the website is a portfolio, make the work/projects easy to reach.

---

# 15. ANIMATION

Use animation intentionally.

Good uses:

- Subtle entrance animations
- Hover feedback
- Button interaction
- Image reveals
- Smooth transitions

Avoid:

- Long loading animations
- Constant movement
- Excessive parallax
- Animation on every element
- Animations that delay access to content

Respect:

`prefers-reduced-motion`

---

# 16. SECURITY

Do not expose secrets in frontend code.

Never hard-code:

- API secrets
- Private keys
- Passwords
- Tokens
- Database credentials

Use environment variables for sensitive configuration.

Validate untrusted input.

Do not trust client-side validation alone for security-sensitive operations.

---

# 17. DEPENDENCIES

Before installing a dependency:

1. Check whether the project already has a solution.
2. Check whether native browser/CSS functionality is sufficient.
3. Consider bundle size.
4. Consider maintenance.
5. Install only when it provides meaningful value.

Do not install libraries simply for convenience when a small reusable utility is enough.

---

# 18. ERROR HANDLING

Handle failures gracefully.

Examples:

- Image fails to load
- Video fails to load
- API fails
- Form submission fails
- Network unavailable
- Missing project data
- Invalid route

Never leave users with a broken or blank interface when a useful fallback can be provided.

---

# 19. ROUTING

Use the project's existing routing system.

Routes should:

- Be predictable
- Be shareable
- Avoid unnecessary nesting
- Handle missing pages
- Work after production deployment

Portfolio project pages should have stable URLs when applicable.

---

# 20. CODE STYLE

Follow the existing project's conventions.

Prefer:

- Clear names
- Small focused functions
- Reusable components
- Typed data where supported
- Minimal duplication
- Clear separation of concerns

Avoid:

- Huge functions
- Duplicate UI
- Magic values scattered throughout the project
- Dead code
- Unused imports
- Unnecessary comments

Comments should explain why something is unusual, not restate obvious code.

---

# 21. TESTING

After meaningful changes:

1. Run the project's available lint/type checks.
2. Run tests if available.
3. Run a production build.
4. Check browser behavior.
5. Verify responsive layouts.

At minimum verify:

- Home page
- Navigation
- Main CTA
- Important forms
- Portfolio/project interactions
- Mobile layout
- Desktop layout
- Production build

Fix errors before declaring the task complete.

---

# 22. BROWSER VERIFICATION

When browser tooling is available, use it to verify visual and interactive behavior.

Check:

- Page loads
- No console errors
- No broken images
- No broken links
- Navigation works
- Buttons work
- Forms work
- Mobile layout works
- Desktop layout works
- Project pages work
- Media works

For visual changes, inspect the actual rendered page instead of relying only on source code.

---

# 23. GIT SAFETY

Before making large changes:

- Inspect git status.
- Understand existing changes.
- Do not overwrite unrelated user work.
- Do not reset or delete user changes without permission.

After implementation:

- Review changed files.
- Remove accidental files.
- Check for secrets.
- Ensure the project still builds.

Do not create commits unless the user asks or the project's workflow explicitly requires it.

---

# 24. DEPLOYMENT READINESS

Before deployment:

- Run the production build.
- Check environment variables.
- Check asset paths.
- Check routing behavior.
- Check production URLs.
- Check mobile behavior.
- Check SEO metadata.
- Check for console errors.
- Check for broken links.

For Vercel deployments, ensure the project uses a supported build configuration and does not depend on local-only paths or files.

---

# 25. EXISTING WEBSITE MODIFICATION WORKFLOW

When the user gives an existing theme and asks to modify it:

### Phase 1 — Understand

Inspect the project.

### Phase 2 — Map

Identify:

- Header
- Hero
- Services
- Portfolio
- About
- Process
- Contact
- Footer

### Phase 3 — Preserve

Keep the original design system.

### Phase 4 — Replace

Replace only the requested content/data.

### Phase 5 — Add

Add only the requested functionality.

### Phase 6 — Verify

Run the application and test responsive behavior.

### Phase 7 — Build

Run the production build.

### Phase 8 — Report

Summarize:

- What changed
- Files changed
- Tests/checks run
- Any remaining issues

---

# 26. PORTFOLIO WEBSITE STANDARD

For portfolio/showcase websites, prioritize:

- Strong first impression
- Fast project discovery
- Large high-quality project visuals
- Mobile-friendly media galleries
- Video support
- Clear project categories
- Easy filtering
- Project detail pages
- Strong contact CTA
- WhatsApp/call/email actions when requested
- Easy addition of future projects

The portfolio should demonstrate the quality of the business itself.

---

# 27. QR-CODE LANDING EXPERIENCE

If a website is intended to be opened from a QR code:

The first screen should immediately communicate:

- Brand
- What the company does
- Main value proposition
- Primary action

Avoid:

- Login requirements
- Registration
- Long splash screens
- Unnecessary popups
- Heavy initial media
- Blocking cookie dialogs unless legally necessary

The user should reach meaningful content immediately.

---

# 28. DECISION RULES

When deciding between multiple implementation options:

1. Preserve the user's existing design if one exists.
2. Prefer mobile usability.
3. Prefer existing project architecture.
4. Prefer reusable components.
5. Prefer data-driven content.
6. Prefer native browser/CSS features when sufficient.
7. Prefer performance.
8. Prefer accessibility.
9. Prefer the simplest reliable solution.
10. Avoid unnecessary rewrites.

---

# 29. DEFINITION OF DONE

Do not consider a website task complete until:

- Requested functionality works.
- Existing design is preserved when required.
- Mobile layout is verified.
- Desktop layout is verified.
- No obvious overflow exists.
- Images and videos work.
- Navigation works.
- Important links work.
- No obvious console errors remain.
- Type/lint checks pass when available.
- Production build succeeds when applicable.
- No secrets were introduced.
- Future content can be added cleanly.

When reporting completion, be honest about anything that could not be verified.
