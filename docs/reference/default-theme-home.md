# Default Theme: Home Page

> **Coming soon.** Home page layout configuration.

Use `layout: home` in frontmatter to activate the home page layout.

```yaml
---
layout: home

hero:
  name: OpenClaw
    text: Open source · Built to last
      tagline: Add your tagline here
        actions:
            - theme: brand
                  text: Get Started
                        link: /guide/
                            - theme: alt
                                  text: View on GitHub
                                        link: https://github.com/sleddogrob/openclaw-docs

                                        features:
                                          - icon: ⚡
                                              title: Feature One
                                                  details: Describe the first key feature here.
                                                    - icon: 🔧
                                                        title: Feature Two
                                                            details: Describe the second key feature here.
                                                              - icon: 🌐
                                                                  title: Feature Three
                                                                      details: Describe the third key feature here.
                                                                      ---
                                                                      ```