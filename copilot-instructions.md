# Copilot instructions

## Project structure

This repository contains standalone browser exercises rather than a shared application or package:

- `javascript/console/` contains a prompt-and-console exercise. Its `index.html` loads the local `index.css` and `index.js`.
- `javascript/var/` contains variable and prompt exercises. `index.html` currently loads `index2.js`; `index.js` and `index1.js` are separate exercise examples.
- `rewive/` contains the mole game. `game.html` loads `game.css` and, with `defer`, `game.js`. The script controls the nine-hole board, score, 30-second countdown, and start/restart button.

Keep each exercise self-contained. Connect page assets with relative paths from that page, and avoid introducing a shared build/runtime layer unless the project grows to need one.

## Build, test, and lint

There is no package manifest, build configuration, test runner, or linter configured in the repository. No automated build, test, or lint command is available.

To manually check a page, open its HTML file in a browser. For the mole game, open `rewive/game.html`, start the game, confirm the mole appears in changing holes, click an active mole to check scoring, and let the timer reach zero to check game completion. For a JavaScript exercise, open the corresponding HTML page and follow its prompt/console behavior; use the browser developer console to inspect output.

## Code conventions

- Implement interactions with browser-native JavaScript and DOM APIs; there are no framework or package dependencies.
- Keep selectors and markup aligned: the mole game uses `.hole`, `.start-button`, `#score`, and `#time`; its JavaScript toggles `.hole--active` and updates hole labels.
- Keep page-specific styles in the CSS file linked by that page. The game uses a 3-column CSS Grid and a small-screen media query.
- Preserve the exercise separation and existing asset loading style. The game script uses `defer`; the JavaScript exercise pages load their scripts directly from their own HTML files.
- User-facing text in the mole game and prompt exercises is Korean. Preserve the language already used by the page when changing its UI.
