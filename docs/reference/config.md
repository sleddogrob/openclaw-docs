# Configuration Reference

Complete list of all configuration options for OpenClaw.

## Basic Options

### `title`
- **Type:** `string`
- **Default:** `'My Site'`

The title of your site.

### `description`
- **Type:** `string`
- **Default:** `''`

The description of your site, used in meta tags.

### `base`
- **Type:** `string`
- **Default:** `'/'`

The base URL path your site will be deployed at.

## Build Options

### `outDir`
- **Type:** `string`
- **Default:** `'./dist'`

Output directory for the production build.

### `srcDir`
- **Type:** `string`
- **Default:** `'.'`

Directory where your markdown pages live.

## Advanced Options

### `plugins`
- **Type:** `Plugin[]`
- **Default:** `[]`

Array of plugins to apply. See [Plugins](/guide/plugins).