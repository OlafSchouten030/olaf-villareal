# olaf-villareal

Persoonlijke promotiesite van Olaf Schouten voor de Fontys-studiereis naar Villarreal (januari 2027).

Statische site zonder build-stap: `index.html`, `styles.css`, `script.js`, `404.html` en afbeeldingen in `assets/`.

## Lokaal bekijken
Open `index.html` in je browser.

## Online zetten (Netlify)
1. Log in op netlify.com met GitHub.
2. Kies **Add new site → Import an existing project → GitHub** en selecteer deze repository.
3. Laat build command leeg en zet publish directory op `.` (staat ook in `netlify.toml`).
4. Klik op **Deploy**. Elke push naar `main` gaat daarna automatisch live.

## Pagina's
`index.html` (home), `over-mij.html`, `werk.html`, `ervaring.html`, `villarreal.html` en `contact.html`. Gedeelde stijl staat in `styles.css`, interactie (menu, tellers, scroll-animaties, filter) in `script.js`. Lettertypes worden zelf gehost in `assets/fonts`.
