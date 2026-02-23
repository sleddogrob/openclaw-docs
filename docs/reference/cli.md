# CLI Reference

> **Coming soon.** Full CLI documentation.

## Commands

### `openclaw dev`

Start the development server.

```bash
openclaw dev [root]
```

**Options:**
- `--port, -p` — Port to listen on (default: `5173`)
- `--host` — Specify hostname to listen on
- `--open` — Open browser on startup

### `openclaw build`

Build for production.

```bash
openclaw build [root]
```

**Options:**
- `--outDir` — Output directory (default: `./dist`)

### `openclaw preview`

Preview the production build locally.

```bash
openclaw preview [root]
```