# goit-markup-team-project

## Development environment setup

### NodeJS

Download LTS version (currently: v20) of NodeJS from [official website](https://nodejs.org/en/download/current) and install it according to your platform manuals.

### Setup project

Open terminal on project directory and run

```sh
npm install
```

for downloading NodeJS dependencies.

## Code

### Project Structure

Project has one main `index.html` page.
All sections, header and footer must be loaded using `load` function, like

```html
<load src="src/partials/header.html" />
```

All partials resources (html sections, css, images) must be located on `src/partials`, `src/css`, `src/images` respectively.

CSS for sections must be added as a separate files and included to `main.css`.

### Local run

Open terminal on project directory and run

```sh
npm run dev
```

Open URL from command output log, like `Local:   http://localhost:5173` on browser.
