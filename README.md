# shilpakbanerjee.github.io

Personal academic website of Shilpak Banerjee (Mathematics and Statistics, IIT Tirupati),
served by GitHub Pages at <https://shilpakbanerjee.github.io>.

Plain HTML and CSS — no build step, no framework, nothing to install. Edit a file, commit,
and GitHub Pages republishes the site within a minute or two.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | Home: introduction, research summary, contact, profile links |
| `research.html` | Publications, preprints, talks and mini-courses |
| `teaching.html` | Students supervised and courses taught |
| `cv.html` | Employment, education, profiles |
| `seminars.html` | The Recurrent ETDS Seminar |
| `404.html` | Shown for missing pages |
| `assets/style.css` | All styling; colours are set once at the top (light and dark) |
| `assets/site.js` | Turns the obfuscated e-mail into a link; expands sections when printing |
| `assets/favicon.svg` | Browser-tab icon |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Common edits

**Add a paper.** In `research.html`, copy an existing `<li class="pub"> … </li>` block, paste it
at the top of the right list, and change the year, title, authors, venue and links.
Moving a preprint to "Journal articles" is a cut and paste.

**Add a talk.** In `research.html`, add a line to the right year inside the *Talks and
mini-courses* section (or copy a whole `<div class="year-group">` for a new year):

```html
<li class="entry"><span class="entry-when">Nov</span><span class="entry-what">Seminar, <span class="where">Institute name, City</span></span></li>
```

Add `<span class="tag">Online</span>` for an online talk.

**Add a course.** In `teaching.html`, same pattern as talks, under the right institution and year.

**Add a photo.** Save it as `assets/photo.jpg` (portrait, roughly 4:5) and uncomment the
`<img class="photo">` line in `index.html`.

**Add a PDF CV.** Save it as `assets/cv.pdf` and uncomment the button in `cv.html`.

**Change the menu.** The menu is repeated at the top of each page; edit it in every file.

After any edit, update "Last updated" in the footers if you like.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit
<http://localhost:8000>.

## Acknowledgments

Built with the help of Claude (Anthropic), from the content of the earlier Google Site.
