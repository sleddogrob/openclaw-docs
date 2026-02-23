import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync } from 'fs'
import { resolve, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const docsDir = resolve(__dirname, '..')

function getTitle(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8')
    const match = content.match(/^#\s+(.+)$/m)
    return match ? match[1].trim() : basename(filePath, '.md')
  } catch {
    return basename(filePath, '.md')
  }
}

function getSidebarItems(dirPath, urlBase) {
  try {
    return readdirSync(dirPath)
      .filter(f => f.endsWith('.md') && f !== 'index.md')
      .sort()
      .map(file => ({
        text: getTitle(resolve(dirPath, file)),
        link: `${urlBase}/${basename(file, '.md')}`
      }))
  } catch {
    return []
  }
}

export default defineConfig({
  title: 'OpenClaw',
  description: 'Open source project documentation',
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API Reference', link: '/api/' },
      { text: 'GitHub', link: 'https://github.com/sleddogrob/openclaw-docs' }
    ],
    sidebar: {
      '/guide/': [{
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          ...getSidebarItems(resolve(docsDir, 'guide'), '/guide')
        ]
      }],
      '/api/': [{
        text: 'API Reference',
        items: [
          { text: 'Overview', link: '/api/' },
          ...getSidebarItems(resolve(docsDir, 'api'), '/api')
        ]
      }]
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
