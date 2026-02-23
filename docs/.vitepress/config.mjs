import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenClaw',
  description: 'Open source project documentation',
  cleanUrls: true,
  themeConfig: {
    logo: '/200x109-claw.png',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'GitHub', link: 'https://github.com/sleddogrob/openclaw-docs' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: 'What is OpenClaw?', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/quick-start' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'Core Concepts',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/guide/concepts' },
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Architecture', link: '/guide/architecture' }
          ]
        },
        {
          text: 'Customization',
          collapsed: false,
          items: [
            { text: 'Theming', link: '/guide/theming' },
            { text: 'Plugins', link: '/guide/plugins' }
          ]
        },
        {
          text: 'Advanced',
          collapsed: true,
          items: [
            { text: 'Advanced Usage', link: '/guide/advanced' },
            { text: 'FAQ', link: '/guide/faq' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Overview', link: '/reference/' },
            { text: 'Configuration', link: '/reference/config' },
            { text: 'CLI', link: '/reference/cli' },
            { text: 'Site Config', link: '/reference/site-config' },
            { text: 'Frontmatter Config', link: '/reference/frontmatter' },
            { text: 'Runtime API', link: '/reference/runtime-api' }
          ]
        },
        {
          text: 'Default Theme Config',
          items: [
            { text: 'Overview', link: '/reference/default-theme' },
            { text: 'Nav', link: '/reference/default-theme-nav' },
            { text: 'Sidebar', link: '/reference/default-theme-sidebar' },
            { text: 'Home Page', link: '/reference/default-theme-home' },
            { text: 'Footer', link: '/reference/default-theme-footer' },
            { text: 'Search', link: '/reference/default-theme-search' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sleddogrob/openclaw-docs' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 OpenClaw Contributors'
    },
    search: { provider: 'local' }
  }
})
