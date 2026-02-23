# Site Config

> **Coming soon.** Site-level configuration reference.

These options affect the entire site and are set in your config file.

## title

- **Type:** `string`

The site title. Used in page `<title>` tags and navigation.

## description

- **Type:** `string`

Site meta description, used for SEO.

## lang

- **Type:** `string`
- **Default:** `'en-US'`

The `lang` attribute of the `<html>` element.

## head

- **Type:** `HeadConfig[]`

Extra elements to inject into the `<head>` tag.

```js
head: [
  ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
  ```

  ## cleanUrls

  - **Type:** `boolean`
  - **Default:** `false`

  Remove `.html` from URLs.