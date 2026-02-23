# Default Theme: Search

> **Coming soon.** Built-in search configuration.

OpenClaw includes a built-in local search that indexes all your pages.

## Enabling Search

```js
themeConfig: {
  search: {
      provider: 'local'
        }
        }
        ```

        ## Options

        ### `provider`
        - **Type:** `'local'`

        The search provider to use. Currently only `local` is supported.

        ### `options`

        Additional options passed to the search provider.

        ```js
        search: {
          provider: 'local',
            options: {
                locales: {
                      root: {
                              translations: {
                                        button: { buttonText: 'Search docs' }
                                                }
                                                      }
                                                          }
                                                            }
                                                            }
                                                            ```