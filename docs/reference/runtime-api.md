# Runtime API

> **Coming soon.** The programmatic JavaScript API.

## `useData()`

Returns reactive data for the current page.

```js
import { useData } from 'openclaw'

const { page, theme, frontmatter } = useData()
```

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| `page` | `Ref<PageData>` | Current page metadata |
| `theme` | `Ref<ThemeConfig>` | Theme configuration |
| `frontmatter` | `Ref<Record<string, any>>` | Page frontmatter |

## `useRoute()`

Returns the current route object.

```js
import { useRoute } from 'openclaw'

const route = useRoute()
console.log(route.path)
```

## `withBase()`

Prepend the configured `base` path to a URL.

```js
import { withBase } from 'openclaw'

const url = withBase('/logo.png') // '/base/logo.png'
```