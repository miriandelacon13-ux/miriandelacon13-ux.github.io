# Portafolio de Mirian de la Cruz Condori

**Sitio:** https://miriandelacon13-ux.github.io

Economía aplicada y análisis de datos. El sitio reúne todos mis repositorios públicos de GitHub. Cada proyecto destacado
tiene su pregunta, un resultado verificable y enlaces al código, la demo o el video. También están mi experiencia,
mi formación y mi CV en PDF.

## Secciones

| Sección | Qué contiene |
|---|---|
| Inicio | Foto, bio breve, botón «Ver CV» y enlaces a GitHub y LinkedIn |
| Proyectos | 3 destacados (pobreza monetaria, MCP del BCRP e incendio de Chichas y Toro), «Todos mis proyectos» y «Material del curso» |
| Video | Reel sobre la pobreza en el Perú, reproducible en la página, con el aviso de voz generada con IA y los créditos |
| Experiencia | Banco de la Nación (Productos e Inclusión Financiera) y COREPUCP |
| Formación | Economía en la PUCP, herramientas e idiomas |

## Cómo editarlo

Todo el contenido está en [`src/config.ts`](src/config.ts): textos, proyectos, enlaces, experiencia y formación.

| Qué | Dónde |
|---|---|
| Colores (lila suave y violeta) | `@theme` en [`src/styles/global.css`](src/styles/global.css) |
| Imágenes de proyectos y foto | `public/images/` |
| CV público (sin teléfono) | `public/cv/` |
| Reel | `public/video/` |

## Verlo en local

Necesita [Node.js](https://nodejs.org/) 20 o más reciente.

```bash
npm install
npm run dev        # http://localhost:4321/
```

En PowerShell de Windows, usa `npm.cmd` en lugar de `npm` si la política de scripts bloquea `npm.ps1`.

## Publicación

Cada push a `main` ejecuta [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). El flujo compila el sitio
con [withastro/action](https://github.com/withastro/action) y lo publica en GitHub Pages (Settings → Pages → Source:
GitHub Actions).

## Créditos

- Plantilla: [devportfolio](https://github.com/RyanFitzgerald/devportfolio) de Ryan Fitzgerald, con licencia MIT
  ([`LICENSE.md`](LICENSE.md)). La adapté en diseño, idioma y estructura.
- Íconos: [Tabler Icons](https://tabler.io/icons) (MIT). Tipografía: IBM Plex Sans (Google Fonts).
- Reel: la narración es mi voz clonada con IA (Qwen3-TTS) a partir de una grabación propia. La música es «Dreamer», de
  Kevin MacLeod (CC BY 4.0).
- Hecho con ayuda de Claude Code. Revisé cada cambio antes de publicarlo.
