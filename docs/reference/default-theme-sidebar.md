# Default Theme: Sidebar

> **Coming soon.** Sidebar configuration reference.

The sidebar is the main navigation panel on the left side of the page.

## Basic Sidebar

```js
themeConfig: {
  sidebar: [
      { text: 'Introduction', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' }
            ]
            }
            ```

            ## Grouped Sidebar

            ```js
            sidebar: [
              {
                  text: 'Guide',
                      items: [
                            { text: 'Introduction', link: '/guide/' },
                                  { text: 'Getting Started', link: '/guide/getting-started' }
                                      ]
                                        }
                                        ]
                                        ```

                                        ## Collapsible Groups

                                        ```js
                                        {
                                          text: 'Advanced',
                                            collapsed: true,
                                              items: [...]
                                              }
                                              ```

                                              ## Multiple Sidebars

                                              Use an object keyed by path prefix to show different sidebars per section.

                                              ```js
                                              sidebar: {
                                                '/guide/': [...],
                                                  '/reference/': [...]
                                                  }
                                                  ```