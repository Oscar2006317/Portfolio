# Oscar Liang portfolio

A responsive personal portfolio inspired by the warm palette, editorial typography, spacious composition, and restrained motion of Son Daven. All copy, layout, and interface code are specific to Oscar's portfolio. No Son Daven imagery, proprietary fonts, or source code are included.

## Open the website

Open `index.html` in a modern browser. The complete site is static and does not require a build step, package installation, database, or API key. A local web server enables clipboard copying; the email link also works directly from the file.

For a local server, run `python3 -m http.server 8765` in this folder, then open `http://localhost:8765`.

For hosting, upload this folder's contents to a static website host. It has not been published to a public domain.

## Editing

- `index.html`: biography, experience, education, skills, contact, and page metadata.
- `projects.js`: seven project descriptions, media, tags, and external links.
- `style.css`: responsive styling and reduced-motion support.
- `app.js`: filters, accessible project dialogs, mobile menu, and email copying.
- `assets/`: locally bundled media and the original master resume.

## Content sources

Provided master and Honda resumes, past cover letters, project PDFs, and the user's description of weekly laboratory work. Additional biography, early leadership, and project photographs were drawn from:

- https://oscarliangc.wixsite.com/oscarliang/about
- https://oscarliangc.wixsite.com/oscarliang/general-clean
- https://oscarliangc.wixsite.com/oscarliang/general-clean-1
- https://oscarliangc.wixsite.com/oscarliang/general-clean-2
- https://devpost.com/software/bracketbutler

LinkedIn is linked as a destination but its profile content was not accessible during creation.

## Content decisions

- Research publication status is described as a poster manuscript because acceptance was not confirmed.
- AEGIS uses the general YOLO label while the supplied documents disagree on the model version.
- PINN dates and a broad “100x accuracy” claim are omitted because the supplied sources need reconciliation.
- SENA is described as a team project; specific personal ownership is not asserted.
- SENA test results retain the 15-case sample size and single-node prototype scope.
- BracketButler's award is second place in the Robotics Track, as stated on Devpost.
- The resume download is the user's supplied original, not a newly revised resume.

## Verification

Checked in a browser at 1440px desktop and 390px mobile widths: no horizontal page overflow; project filtering; project detail opening and next navigation; Escape dismissal; mobile menu and section navigation; expandable experience. All local asset and anchor references checked. Includes semantic landmarks, visible keyboard focus, native modal dialogs, image descriptions, and a reduced-motion mode.
