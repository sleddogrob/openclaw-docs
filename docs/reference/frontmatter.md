# Frontmatter Config

> **Coming soon.** Per-page frontmatter options reference.

Frontmatter is written at the top of each markdown file in YAML format.

```yaml
---
title: My Page
description: A description of this page
layout: doc
---
```

## title

- **Type:** `string`

Override the page title. If not set, falls back to the first `# Heading`.

## description

- **Type:** `string`

Override the page meta description.

## layout

- **Type:** `'doc' | 'home' | 'page'`
- **Default:** `'doc'`

The layout to use for this page.

## editLink

- **Type:** `boolean`

Whether to show an edit link on this page. Overrides the global setting.

## lastUpdated

- **Type:** `boolean | Date`

Whether to show last updated time. Can be a specific date to override auto-detection.

## sidebar

- **Type:** `boolean`

Set to `false` to hide the sidebar on this page.