const pages = [
  { id: "home", title: "Home", route: "/", note: "The first viewport establishes studio, game, genre, status, and the current action without autoplay.", modules: ["Trash Dash hero", "Current status", "Game promise", "Gameplay media", "Meet Trashy", "The Gunk", "Development proof", "Studio introduction", "Studio principles", "Latest Journal", "Closing action"] },
  { id: "trash-dash", title: "Trash Dash", route: "/trash-dash", note: "Only public-safe story facts appear. Tier 2 and Tier 3 story content stays out of the rendered site.", modules: ["Game hero", "Overview", "Core experience", "Trashy", "Jimothy", "The Gunk", "World progression", "Gameplay", "Gallery", "Development status", "Credits", "Closing action"] },
  { id: "journal", title: "Journal Index", route: "/journal", note: "If no approved posts exist, use the candid empty state instead of publishing sample entries.", modules: ["Journal introduction", "Filters", "Featured entry", "Entry list", "Pagination / empty state"] },
  { id: "article", title: "Journal Article", route: "/journal/[slug]", note: "The article sequence follows actual development reasoning and evidence.", modules: ["Article header", "Hero evidence", "Outline", "The problem", "What we observed", "What we tried", "What changed", "What improved", "What still needs work", "The next decision", "Article navigation"] },
  { id: "studio", title: "Studio", route: "/studio", note: "The only approved public roster is James, Emily, Ramona, and Matilda.", modules: ["Studio hero", "Why we exist", "Origin", "The name and REM", "Approach", "Team", "Studio principle", "Timeline", "Closing action"] },
  { id: "press", title: "Press", route: "/press", note: "Downloads remain coming soon until rights, contents, formats, dimensions, size, date, and credits are approved.", modules: ["Press hero", "Studio boilerplate", "Trash Dash boilerplate", "Game facts", "Asset packages", "Attribution", "Press contact"] },
  { id: "contact", title: "Contact", route: "/contact", note: "Without a configured provider, render the direct-email fallback and no simulated success state.", modules: ["Contact introduction", "Contact categories", "Form / email fallback", "Privacy guidance", "Submission states"] },
  { id: "accessibility", title: "Accessibility", route: "/accessibility", note: "State WCAG 2.2 AA as a target, not a conformance claim.", modules: ["Document header", "Accessibility approach", "Feedback instructions", "Contact action"] },
  { id: "privacy", title: "Privacy", route: "/privacy", note: "Public launch is blocked until the actual providers and practices are documented.", modules: ["Document header", "Pre-launch notice", "Provider-dependent content", "Privacy contact"] },
  { id: "not-found", title: "404", route: "404", note: "Offer three useful recovery paths.", modules: ["Recovery message", "Return Home", "Explore Trash Dash", "Browse the Journal"] },
  { id: "mobile-nav", title: "Mobile Navigation Open", route: "state", note: "Large direct links, utility links, focus management, escape-to-close, and background scroll lock.", modules: ["Logo and close", "Trash Dash", "Journal", "Studio", "Press", "Follow Development", "Contact / Accessibility / Privacy"] }
];

const pageControls = document.querySelector("#page-controls");
const frameModules = document.querySelector("#frame-modules");
const frameShell = document.querySelector("#review-frame");
const frameTitle = document.querySelector("#frame-title");
const frameRoute = document.querySelector("#frame-route");
const frameSize = document.querySelector("#frame-size");
const frameNote = document.querySelector("#frame-note");

function moduleClass(label, index) {
  const normalized = label.toLowerCase();
  if (index === 0 && /hero|introduction|header/.test(normalized)) return "wire-module hero";
  if (/media|gallery|evidence|art/.test(normalized)) return "wire-module media";
  if (/problem|observed|tried|changed|improved|work|decision/.test(normalized)) return "wire-module article";
  return "wire-module";
}

function renderPage(page) {
  frameTitle.textContent = page.title;
  frameRoute.textContent = page.route;
  frameNote.textContent = page.note;
  frameModules.replaceChildren(...page.modules.map((label, index) => {
    const section = document.createElement("section");
    section.className = moduleClass(label, index);
    const heading = document.createElement("div");
    heading.className = "label";
    heading.textContent = label;
    const placeholder = document.createElement("div");
    placeholder.className = "placeholder";
    placeholder.textContent = /media|gallery|evidence|art|hero/i.test(label) ? "Copy + approved media / honest fallback" : "Content region";
    section.append(heading, placeholder);
    return section;
  }));

  document.querySelectorAll(".page-control").forEach(button => {
    if (button.dataset.page === page.id) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

pages.forEach((page, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "page-control";
  button.dataset.page = page.id;
  button.textContent = page.title;
  button.addEventListener("click", () => renderPage(page));
  if (index === 0) button.setAttribute("aria-current", "page");
  pageControls.append(button);
});

document.querySelectorAll('input[name="viewport"]').forEach(input => {
  input.addEventListener("change", event => {
    const mobile = event.target.value === "mobile";
    frameShell.classList.toggle("mobile", mobile);
    frameShell.classList.toggle("desktop", !mobile);
    frameSize.textContent = mobile ? "390 px reference" : "1440 px reference";
  });
});

frameSize.textContent = "1440 px reference";
renderPage(pages[0]);
