# Default Theme: Nav

> **Coming soon.** Navigation bar configuration reference.

Configure the top navigation bar in your theme config.

```js
export default defineConfig({
  themeConfig: {
      nav: [
            { text: 'Guide', link: '/guide/' },
                  { text: 'Reference', link: '/reference/' },
                        {
                                text: 'v1.0.0',
                                        items: [
                                                  { text: 'Changelog', link: '/changelog' },
                                                            { text: 'Contributing', link: '/contributing' }
                                                                    ]
                                                                          }
                                                                              ]
                                                                                }
                                                                                })
                                                                                ```

                                                                                ## Nav Item Types

                                                                                ### Link

                                                                                ```js
                                                                                { text: 'Guide', link: '/guide/' }
                                                                                ```

                                                                                ### Dropdown

                                                                                ```js
                                                                                {
                                                                                  text: 'Dropdown',
                                                                                    items: [
                                                                                        { text: 'Item A', link: '/item-a' },
                                                                                            { text: 'Item B', link: '/item-b' }
                                                                                              ]
                                                                                              }
                                                                                              ```