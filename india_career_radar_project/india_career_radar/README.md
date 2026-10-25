# India Career Radar — Job Portal Starter

A responsive multi-page job listing website built with plain HTML, CSS, and JavaScript.

## Files
- `index.html` — home page, search filters, job cards, category shortcuts
- `style.css` — shared responsive styling
- `script.js` — filtering, job detail rendering, mobile navigation, demo contact form
- `jobs.json` — editable sample job data (used when served over HTTP)
- `job.html` — job detail page
- `career-guide.html` — career preparation tips
- `salary-guide.html` — salary and offer explainer
- `about.html` — about and transparency note
- `contact.html` — demo contact form

## Run locally
**Recommended:** open the project folder in VS Code and use the Live Server extension, then open `index.html`.

Alternatively, with Python installed, open a terminal in this folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

Opening `index.html` directly with `file://` may block `fetch("jobs.json")` in some browsers. Built-in sample data is included in `script.js`, so the homepage still works. Run a local server to load `jobs.json`.

## Customize job listings
Edit `jobs.json`. Keep each job object in this shape:
```json
{
  "id": 101,
  "company": "Example Company",
  "initials": "EC",
  "role": "Junior Developer",
  "location": "Hyderabad",
  "state": "Telangana",
  "category": "Software & IT",
  "type": "Full-time",
  "experience": "Fresher",
  "salary": "As listed by employer",
  "posted": "25 Oct 2026",
  "description": "A clear description of the role.",
  "responsibilities": ["Responsibility one", "Responsibility two"],
  "qualifications": ["Qualification one", "Qualification two"],
  "link": "https://example.com/careers"
}
```
Use a unique numeric `id` for every listing. The `category` should match one of the filter options in `index.html` if you want it to be selectable via the category dropdown.

## Important before publishing
- Sample data is illustrative, not a verified live job feed. Check every vacancy, deadline, eligibility detail, and link with the employer.
- This is a front-end-only project. The contact form does not send or save messages.
- Job applications, user accounts, admin login, database storage, automated job imports, and real-time updates need a backend and/or trusted integrations.
- Add your own privacy policy, terms, moderation process, and contact details before collecting user information.
- Never ask candidates to pay money to apply for jobs.

## Deploy
You can deploy this static version using GitHub Pages, Netlify, or Vercel. Upload the project files as-is. Use a backend service if you later need an admin dashboard, database, accounts, or real contact-form submissions.
