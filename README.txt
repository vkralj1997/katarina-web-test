HAIRDRESSER KATARINA WEBSITE
============================

This version includes:
- German as main language
- English switch
- Croatian switch
- live date and time on the top left
- appointment section
- opening times
- gallery
- price list
- contact section

FILES
-----
index.html  -> main website
styles.css  -> design
script.js   -> mobile menu, live time/date, language switch, form
assets/     -> add your future images here

HOW TO ADD PICTURES
-------------------
1. Put images into the assets folder.
2. Example names:
   hero.jpg
   gallery-1.jpg
   gallery-2.jpg
   gallery-3.jpg
   gallery-4.jpg

3. HERO IMAGE
   In index.html find:
   <div class="hero-image image-placeholder">

   Replace that whole DIV with:

   <div class="hero-image" style="padding:0; overflow:hidden; border:none;">
     <img src="assets/hero.jpg" alt="Hairdresser Katarina" style="width:100%; height:100%; min-height:360px; object-fit:cover; display:block; border-radius:18px;">
   </div>

4. GALLERY IMAGES
   In index.html find each gallery placeholder and replace with:

   <div class="gallery-item" style="padding:0; overflow:hidden; border:none; background:#fff;">
     <img src="assets/gallery-1.jpg" alt="Friseur Arbeit Beispiel 1" style="width:100%; height:220px; object-fit:cover; display:block; border-radius:16px;">
   </div>

   Then change gallery-1.jpg to gallery-2.jpg, gallery-3.jpg and gallery-4.jpg.

WHAT TO CHANGE FIRST
--------------------
Open index.html and replace:
- +49 000 0000000
- info@example.com
- WhatsApp link
- opening times
- available times
- city / salon address
- prices if needed

IMPORTANT LINKS TO CHANGE
-------------------------
Phone link:
  tel:+490000000000

WhatsApp link:
  https://wa.me/490000000000

Email link:
  mailto:info@example.com

HOW LANGUAGE SWITCH WORKS
-------------------------
- German is the default language.
- The top right buttons switch the page to German, English or Croatian.
- Text is prepared in all 3 languages in index.html.

PRICE NOTE
----------
The prices are example values only.
Change them to the real prices before publishing.

IMPORTANT BEFORE PUBLISHING IN GERMANY
--------------------------------------
Add real pages for:
- Impressum
- Datenschutzerklärung

HOW TO OPEN THE SITE
--------------------
Just double click index.html
or right click -> open with browser.

HOW TO PUT IT ONLINE FOR TESTING
--------------------------------
FASTEST FREE WAY WITH NETLIFY:
1. Go to netlify.com
2. Create a free account
3. Press "Add new site" -> "Deploy manually"
4. Drag the whole website folder there or upload the ZIP contents
5. Netlify gives you a test link immediately
6. When you change files later, upload again

FASTEST WAY WITH GITHUB PAGES:
1. Create a GitHub account if you do not have one
2. Create a new repository
3. Upload index.html, styles.css, script.js and assets folder
4. Open repository settings -> Pages
5. Enable GitHub Pages from the main branch
6. You get a public test link

VERY SIMPLE LOCAL TEST ON YOUR PC:
1. Unzip the folder
2. Open index.html in Chrome or Edge
3. Or use VS Code with the Live Server extension for a local test URL

IMPORTANT:
Do not upload only index.html.
Always upload:
- index.html
- styles.css
- script.js
- assets folder
