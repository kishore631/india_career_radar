/* India Career Radar — client-side functionality */

const fallbackJobs = [
  {
    id: 1,
    company: "HackerRank",
    initials: "HR",
    role: "Intern",
    location: "Bengaluru",
    state: "Karnataka",
    category: "Software & IT",
    type: "Internship",
    experience: "Fresher",
    salary: "₹25k - ₹30k / Month",
    posted: "25 Oct 2026",
    description:
      "HackerRank Off-Campus Hiring Drive for freshers. This internship opportunity is open to candidates with any Bachelor's or Master's degree. Check the official job posting for eligibility criteria and application details.",
    responsibilities: [
      "Work on assigned tasks and projects as part of the internship.",
      "Collaborate with team members to solve problems.",
      "Learn and apply relevant technical skills."
    ],
    qualifications: [
      "Any Bachelor's or Master's degree.",
      "Experience: Fresher.",
      "Review the official posting for complete eligibility requirements."
    ],
    link: "https://job-boards.greenhouse.io/hackerrank/jobs/8229735"
  },
  {
  id: 2,
  company: "HCLTech",
  initials: "HCL",
  role: "Analyst - Gen AI Intern",
  location: "Noida",
  state: "Uttar Pradesh",
  category: "Data & AI",
  type: "Internship",
  experience: "Fresher / 0-3 years",
  salary: "₹4–8 LPA",
  posted: "25 Oct 2026",
  description:
    "HCLTech hiring for Analyst – Gen AI Intern / Analyst roles. The supplied listing mentions Bachelor's or Master's degree eligibility and opportunities across Noida, Hyderabad, Chennai, Bengaluru, and Pune. Verify the exact role and eligibility on the official careers page.",
  responsibilities: [
    "Support assigned Generative AI and analyst-related tasks.",
    "Collaborate with team members on project activities.",
    "Learn relevant tools, processes, and technologies.",
    "Follow company quality and security guidelines."
  ],
  qualifications: [
    "Any Bachelor's or Master's degree, according to the supplied listing.",
    "Freshers and candidates with 0-3 years of experience, subject to the role requirements.",
    "Check the official posting for complete eligibility criteria."
  ],
  link: "https://careers.hcltech.com/job/Analyst-%28Support-%26-Operations%29/166721-en_US/"
},
  {
    id: 3,
    company: "Infosys",
    initials: "IN",
    role: "Systems Engineer",
    location: "Bengaluru",
    state: "Karnataka",
    category: "Software & IT",
    type: "Full-time",
    experience: "Fresher",
    salary: "As listed by employer",
    posted: "23 Oct 2026",
    description:
      "Sample fresher role for candidates interested in software delivery, application support, and enterprise technology.",
    responsibilities: [
      "Work with project teams on assigned technology tasks.",
      "Assist with development, testing, and troubleshooting.",
      "Document work and communicate progress clearly."
    ],
    qualifications: [
      "Degree and academic criteria as per the live job notice.",
      "Basic programming or technical knowledge where required.",
      "Verify the current vacancy and application deadline."
    ],
    link: "https://www.infosys.com/careers/"
  },
  {
    id: 4,
    company: "Wipro",
    initials: "W",
    role: "Project Engineer",
    location: "Hyderabad",
    state: "Telangana",
    category: "Software & IT",
    type: "Full-time",
    experience: "Fresher",
    salary: "As listed by employer",
    posted: "22 Oct 2026",
    description:
      "Illustrative entry-level engineering opportunity for graduates starting a career in IT services and project delivery.",
    responsibilities: [
      "Assist teams with project tasks and technical documentation.",
      "Learn client processes and relevant tools.",
      "Work with colleagues to deliver assigned outcomes."
    ],
    qualifications: [
      "Meet the role-specific degree and eligibility criteria.",
      "Strong learning mindset and communication skills.",
      "Confirm the official listing for location and selection steps."
    ],
    link: "https://careers.wipro.com/"
  },
  {
    id: 5,
    company: "Microsoft",
    initials: "M",
    role: "Software Engineering Intern",
    location: "Bengaluru",
    state: "Karnataka",
    category: "Internship",
    type: "Internship",
    experience: "Student / Fresher",
    salary: "As listed by employer",
    posted: "21 Oct 2026",
    description:
      "Example internship listing for students who want practical software engineering experience. Availability varies by team and season.",
    responsibilities: [
      "Build or improve software with guidance from a mentor.",
      "Write readable code and participate in code reviews.",
      "Collaborate with engineers to test and debug features."
    ],
    qualifications: [
      "Currently enrolled in a relevant degree, where required.",
      "Programming fundamentals and problem-solving ability.",
      "Check official internship eligibility and dates."
    ],
    link: "https://careers.microsoft.com/"
  },
  {
    id: 6,
    company: "Accenture",
    initials: "A",
    role: "Application Development Associate",
    location: "Pune",
    state: "Maharashtra",
    category: "Software & IT",
    type: "Full-time",
    experience: "Entry level",
    salary: "As listed by employer",
    posted: "20 Oct 2026",
    description:
      "Sample application development role covering software delivery, testing, maintenance, and collaboration with project teams.",
    responsibilities: [
      "Support application development and maintenance activities.",
      "Help investigate defects and document fixes.",
      "Work with teammates to deliver reliable solutions."
    ],
    qualifications: [
      "Meet the exact degree and graduation-year criteria in the live listing.",
      "Programming and analytical skills are helpful.",
      "Review the official job page before applying."
    ],
    link: "https://www.accenture.com/in-en/careers"
  },
  {
    id: 7,
    company: "Deloitte",
    initials: "D",
    role: "Analyst — Data & Analytics",
    location: "Hyderabad",
    state: "Telangana",
    category: "Data & AI",
    type: "Full-time",
    experience: "Entry level",
    salary: "As listed by employer",
    posted: "19 Oct 2026",
    description:
      "Illustrative analytics opportunity for candidates interested in data preparation, reporting, and turning information into useful insights.",
    responsibilities: [
      "Assist with data preparation and analysis.",
      "Create reports and communicate findings.",
      "Collaborate with project teams and document processes."
    ],
    qualifications: [
      "Analytical thinking and attention to detail.",
      "SQL, spreadsheets, or Python may be useful depending on the role.",
      "Confirm requirements on the official careers page."
    ],
    link: "https://www.deloitte.com/global/en/careers.html"
  },
  {
    id: 8,
    company: "Flipkart",
    initials: "F",
    role: "Operations Executive",
    location: "Bengaluru",
    state: "Karnataka",
    category: "Sales & Marketing",
    type: "Full-time",
    experience: "Entry level",
    salary: "As listed by employer",
    posted: "18 Oct 2026",
    description:
      "Example operations role focused on coordination, reporting, process execution, and customer-oriented operations.",
    responsibilities: [
      "Coordinate daily operational activities.",
      "Track metrics and maintain accurate records.",
      "Communicate issues and help improve processes."
    ],
    qualifications: [
      "Communication and organization skills.",
      "Comfort with spreadsheets and operational tools.",
      "Check official requirements and shift details."
    ],
    link: "https://www.flipkartcareers.com/"
  },
  {
    id: 9,
    company: "Zoho",
    initials: "Z",
    role: "Software Developer",
    location: "Chennai",
    state: "Tamil Nadu",
    category: "Software & IT",
    type: "Full-time",
    experience: "Fresher / Entry level",
    salary: "As listed by employer",
    posted: "17 Oct 2026",
    description:
      "Sample developer role for candidates interested in building software products and strengthening programming fundamentals.",
    responsibilities: [
      "Develop and maintain application features.",
      "Write tests and debug software issues.",
      "Work with the team to improve product quality."
    ],
    qualifications: [
      "Programming fundamentals and problem-solving skills.",
      "Degree and selection criteria depend on the live role.",
      "Apply only through official hiring channels."
    ],
    link: "https://www.zoho.com/careers/"
  },
  {
    id: 10,
    company: "DataMinds",
    initials: "DM",
    role: "Data Analyst Intern",
    location: "Remote",
    state: "India",
    category: "Data & AI",
    type: "Internship",
    experience: "Student / Fresher",
    salary: "As listed by employer",
    posted: "16 Oct 2026",
    description:
      "Illustrative remote internship example for learning data cleaning, spreadsheet analysis, SQL, and dashboard basics.",
    responsibilities: [
      "Clean and organize datasets.",
      "Support reports and dashboards.",
      "Summarize trends for project stakeholders."
    ],
    qualifications: [
      "Basic Excel or spreadsheet skills.",
      "SQL or Python knowledge is helpful.",
      "This is a fictional sample employer and listing."
    ],
    link: ""
  },
  {
    id: 11,
    company: "HDFC Bank",
    initials: "H",
    role: "Customer Relationship Executive",
    location: "Mumbai",
    state: "Maharashtra",
    category: "Finance",
    type: "Full-time",
    experience: "Entry level",
    salary: "As listed by employer",
    posted: "15 Oct 2026",
    description:
      "Example customer relationship role. Actual duties, eligibility, and licensing requirements depend on the specific opening.",
    responsibilities: [
      "Help customers understand products and services.",
      "Maintain records and follow compliance procedures.",
      "Escalate customer concerns to relevant teams."
    ],
    qualifications: [
      "Customer service and communication skills.",
      "Review the exact role criteria on the official careers page.",
      "Never pay a fee to secure a job offer."
    ],
    link: "https://www.hdfcbank.com/personal/about-us/careers"
  },
  {
    id: 12,
    company: "Freshworks",
    initials: "FW",
    role: "Technical Support Engineer",
    location: "Chennai",
    state: "Tamil Nadu",
    category: "Customer Support",
    type: "Full-time",
    experience: "Entry level",
    salary: "As listed by employer",
    posted: "14 Oct 2026",
    description:
      "Example technical support role for candidates who enjoy troubleshooting, customer communication, and software products.",
    responsibilities: [
      "Investigate product and technical questions.",
      "Explain solutions clearly to customers.",
      "Document issues and collaborate with engineering teams."
    ],
    qualifications: [
      "Clear written and spoken communication.",
      "Basic troubleshooting and analytical skills.",
      "Confirm requirements and shifts on the official job page."
    ],
    link: "https://www.freshworks.com/company/careers/"
  }
];

let allJobs = [...fallbackJobs];
let filteredJobs = [...allJobs];
let showingAll = false;

const jobsContainer = document.getElementById("jobsContainer");
const resultsCount = document.getElementById("resultsCount");
const keywordInput = document.getElementById("keywordInput");
const locationFilter = document.getElementById("locationFilter");
const categoryFilter = document.getElementById("categoryFilter");

/* Safely escape text before inserting it into HTML. */
function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

/* Company logo background styles. */
function initialsClass(company) {
  const name = String(company).toLowerCase();

  if (name.includes("amazon")) return "orange-logo";
  if (name.includes("tcs") || name.includes("infosys")) {
    return "blue-logo";
  }
  if (name.includes("wipro") || name.includes("freshworks")) {
    return "green-logo";
  }
  if (name.includes("deloitte") || name.includes("dataminds")) {
    return "purple-logo";
  }
  if (name.includes("hdfc")) return "red-logo";

  return "dark-logo";
}

/* Build a job card for the homepage. */
function jobCard(job) {
  return `
    <article class="job-card">
      <div class="job-card-top">
        <div class="company-logo ${initialsClass(job.company)}">
          ${escapeHTML(job.initials || job.company.slice(0, 2).toUpperCase())}
        </div>

        <div>
          <div class="job-company">${escapeHTML(job.company)}</div>
          <h3>${escapeHTML(job.role)}</h3>
        </div>
      </div>

      <div class="job-meta">
        <span>⌖ ${escapeHTML(job.location)}</span>
        <span>◷ ${escapeHTML(job.experience)}</span>
      </div>

      <div class="job-tags">
        <span class="tag blue-tag">${escapeHTML(job.category)}</span>
        <span class="tag">${escapeHTML(job.type)}</span>
      </div>

      <div class="job-card-bottom">
        <div class="job-salary">
          ${escapeHTML(job.salary || "Check listing")}
          <small>Compensation</small>
        </div>

        <a class="details-link"
           href="job.html?id=${encodeURIComponent(job.id)}">
          View details <span>→</span>
        </a>
      </div>
    </article>
  `;
}

/* Display the current job listings. */
function renderJobs() {
  if (!jobsContainer) return;

  const visibleJobs = showingAll
    ? filteredJobs
    : filteredJobs.slice(0, 6);

  jobsContainer.innerHTML = visibleJobs.map(jobCard).join("");

  if (resultsCount) {
    resultsCount.textContent =
      `${filteredJobs.length} opportunity${filteredJobs.length === 1 ? "" : "ies"} found`;
  }

  const emptyState = document.getElementById("emptyState");

  if (emptyState) {
    emptyState.classList.toggle("hidden", filteredJobs.length > 0);
  }

  const showMoreButton = document.getElementById("showMoreBtn");

  if (showMoreButton) {
    showMoreButton.classList.toggle("hidden", filteredJobs.length <= 6);

    showMoreButton.innerHTML = showingAll
      ? 'Show fewer opportunities <span>↑</span>'
      : 'Show all opportunities <span>↓</span>';
  }
}

/* Search by keyword, location, and category. */
function applyFilters() {
  const keyword = (keywordInput?.value || "").trim().toLowerCase();
  const location = locationFilter?.value || "";
  const category = categoryFilter?.value || "";

  filteredJobs = allJobs.filter((job) => {
    const searchableText = [
      job.role,
      job.company,
      job.location,
      job.state,
      job.category,
      job.type,
      job.experience,
      job.description
    ].join(" ").toLowerCase();

    const locationMatches =
      !location ||
      job.location === location ||
      job.state === location;

    const categoryMatches =
      !category || job.category === category;

    return (
      (!keyword || searchableText.includes(keyword)) &&
      locationMatches &&
      categoryMatches
    );
  });

  showingAll = false;
  renderJobs();
}

/* Reset all search filters. */
function resetFilters() {
  if (keywordInput) keywordInput.value = "";
  if (locationFilter) locationFilter.value = "";
  if (categoryFilter) categoryFilter.value = "";

  applyFilters();
}

/* Homepage search form. */
const searchForm = document.getElementById("searchForm");

if (searchForm) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();

    document.getElementById("jobs")?.scrollIntoView({
      behavior: "smooth"
    });
  });
}

document.getElementById("resetFilters")
  ?.addEventListener("click", resetFilters);

document.getElementById("emptyReset")
  ?.addEventListener("click", resetFilters);

document.getElementById("showMoreBtn")
  ?.addEventListener("click", () => {
    showingAll = !showingAll;
    renderJobs();
  });

/* Category shortcut cards. */
document.querySelectorAll(".category-card[data-category]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      if (categoryFilter) {
        categoryFilter.value = button.dataset.category;
      }

      applyFilters();

      document.getElementById("jobs")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  });

/* Mobile navigation menu. */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  if (!mainNav) return;

  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

/* Automatically update the copyright year. */
document.getElementById("currentYear")
  ?.replaceChildren(document.createTextNode(new Date().getFullYear()));

/* Render an individual job details page. */
function renderJobDetail() {
  const target = document.getElementById("jobDetail");

  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const jobId = Number(params.get("id"));

  const job = allJobs.find((item) => Number(item.id) === jobId);

  if (!job) {
    target.innerHTML = `
      <div class="content-card">
        <h2>Job not found</h2>
        <p>This listing may have been removed or the link is incomplete.</p>
        <a class="btn btn-primary" href="index.html#jobs">
          Browse jobs
        </a>
      </div>
    `;
    return;
  }

  const responsibilities = (job.responsibilities || [])
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join("");

  const qualifications = (job.qualifications || [])
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join("");

  /*
   * UPDATED BUTTON:
   * Both the main content and sidebar use APPLY →.
   */
  const applyButton = job.link
    ? `<a class="btn btn-primary"
           href="${escapeHTML(job.link)}"
           target="_blank"
           rel="noopener noreferrer">APPLY →</a>`
    : `<p class="form-note">
         No application link is available for this sample listing.
       </p>`;

  target.innerHTML = `
    <div class="job-detail-layout">

      <div class="content-card job-detail-main">

        <div class="job-detail-header">
          <div class="company-logo ${initialsClass(job.company)}">
            ${escapeHTML(job.initials || job.company.slice(0, 2).toUpperCase())}
          </div>

          <div>
            <h1>${escapeHTML(job.role)}</h1>
            <p>
              ${escapeHTML(job.company)} ·
              ${escapeHTML(job.location)},
              ${escapeHTML(job.state || "India")}
            </p>
          </div>
        </div>

        <div class="job-tags" style="margin-top:18px">
          <span class="tag blue-tag">${escapeHTML(job.category)}</span>
          <span class="tag">${escapeHTML(job.type)}</span>
          <span class="tag">${escapeHTML(job.experience)}</span>
        </div>

        <h2>Job description</h2>
        <p>${escapeHTML(job.description)}</p>

        <h2>Key responsibilities</h2>
        <ul>${responsibilities}</ul>

        <h2>Qualifications and skills</h2>
        <ul>${qualifications}</ul>

        <h2>How to apply</h2>
        <p>
          Review the job details and eligibility criteria before applying.
          Use the Apply button to visit the application page.
          Never pay recruiters or individuals to secure a job.
        </p>

        ${applyButton}

        <p class="form-note">
          Verify the listing, eligibility, salary, and deadline
          using the employer's official information.
        </p>

      </div>

      <aside class="content-card job-sidebar">

        <h3 style="margin-top:0">Job overview</h3>

        <dl>
          <dt>Company</dt>
          <dd>${escapeHTML(job.company)}</dd>

          <dt>Location</dt>
          <dd>
            ${escapeHTML(job.location)},
            ${escapeHTML(job.state || "India")}
          </dd>

          <dt>Job category</dt>
          <dd>${escapeHTML(job.category)}</dd>

          <dt>Employment type</dt>
          <dd>${escapeHTML(job.type)}</dd>

          <dt>Experience</dt>
          <dd>${escapeHTML(job.experience)}</dd>

          <dt>Salary</dt>
          <dd>${escapeHTML(job.salary || "See official listing")}</dd>
        </dl>

        <div style="margin-top:22px">
          ${applyButton}
        </div>

      </aside>
    </div>
  `;
}

/* Load the latest job data from jobs.json. */
async function loadJobsFromJSON() {
  try {
    const response = await fetch("jobs.json", {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Could not load jobs.json: ${response.status}`);
    }

    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      allJobs = data;
      filteredJobs = [...allJobs];

      // Refresh the homepage if it exists.
      renderJobs();

      // Refresh the details page using the latest JSON data.
      renderJobDetail();
    }
  } catch (error) {
    console.warn(
      "Using built-in job listings because jobs.json could not be loaded.",
      error
    );

    // Keep the built-in sample data if JSON loading fails.
    renderJobs();
    renderJobDetail();
  }
}

/* Initial page rendering. */
renderJobs();
renderJobDetail();
loadJobsFromJSON();

/* Contact form demo functionality. */
const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = document.getElementById("contactMessage");

  if (message) {
    message.textContent =
      "Thanks! This demo form does not send messages yet. Connect it to a backend or form service to receive submissions.";
  }

  contactForm.reset();
});
