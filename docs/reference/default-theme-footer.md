# Default Theme: Footer

> **Coming soon.** Footer configuration reference.

Add a footer message and copyright notice to the bottom of every page.

```js
themeConfig: {
  footer: {
      message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026 OpenClaw Contributors'
            }
            }
            ```

            ## Options

            ### `message`
            - **Type:** `string`

            Text shown above the copyright line.

            ### `copyright`
            - **Type:** `string`

            Copyright text shown in the footer.

            ::: tip
            The footer is only shown on pages that use the `doc` layout and do not have a sidebar displayed.
            :::