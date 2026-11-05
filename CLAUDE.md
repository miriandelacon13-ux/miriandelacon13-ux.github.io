# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portafolio personal de Mirian de la Cruz Condori (tarea «Tu web en GitHub Pages», issue #203 de d2cml-ai/Data-Science-Python), adaptado de la plantilla devportfolio (MIT). El sitio está en español (`lang="es"`).

Cambios respecto de la plantilla original:

- Contenido en `src/config.ts` con claves en español: `nombre`, `encabezado`, `bio`, `foto`, `cv`, `redes`, `proyectos` (título, `repositorio`, resumen, pregunta, resultado con cifra, imagen, etiquetas y varios enlaces; `destacado` o `materialDelCurso` con `procedencia`), `video` (aviso de voz IA; `youtubeId` o `mp4` en `public/video/`), `experiencia`, `formacion`, `herramientas`, `idiomas`. El catálogo debe incluir todos los repositorios públicos de miriandelacon13-ux.
- Publicación: `.github/workflows/deploy.yml` (withastro/action) → GitHub Pages en https://miriandelacon13-ux.github.io (`site` en `astro.config.mjs`, sin `base`).
- Paleta lila suave definida con `@theme` en `src/styles/global.css` (fondo, lila, lila-borde, violeta, violeta-oscuro, tinta, tinta-suave). Ya no existe `accentColor`.
- Tipografía IBM Plex Sans (no monoespaciada) para que los textos se lean bien.
- Menú compacto también en celular (Proyectos, Video, CV). Ya no hay sección About: la bio va en el inicio.
- `public/cv/Mirian-de-la-Cruz-Condori-CV.pdf` es una copia pública del CV, sin teléfono: la línea de contacto se redactó con PyMuPDF y se reescribió solo con el correo y LinkedIn. El original queda fuera del repo y no se toca. Mirian aprobó la copia el 2026-11-04, así que ya no está en `.gitignore`. Nunca publicar el teléfono.
- Proyectos: `destacado: true` = tarjeta grande. Con imagen vertical va en un panel lateral que alterna de lado; con imagen ancha (proporción mayor que 1.3) va arriba a todo el ancho. `imagen.escritorio` sirve otra imagen desde 1024 px con `<picture>`. El resto de proyectos va en «Todos mis proyectos». Cada cifra de resultado está verificada con los datos publicados del repo de origen.
- `public/images/foto.webp`: recorte circular con fondo transparente y sin metadatos EXIF.
- Contacto en la web: solo GitHub y LinkedIn.

Lo que sigue en inglés describe la plantilla original.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, Experience, Education, Header, Footer)
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config propagates throughout the site via CSS custom properties

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin configuration
- No linting or testing framework is currently configured
- All components are in `.astro` format (not React/Vue/etc)
- The project uses IBM Plex Mono font loaded from Google Fonts
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:
1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling
3. Maintain the existing monospace font aesthetic
4. Use Tabler Icons for consistency with existing icons

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:
- Basic info: name, title, description, accentColor
- Social links: email, linkedin, twitter, github (all optional)
- aboutMe: string
- skills: string[]
- projects: array of {name, description, link, skills}
- experience: array of {company, title, dateRange, bullets}
- education: array of {school, degree, dateRange, achievements}