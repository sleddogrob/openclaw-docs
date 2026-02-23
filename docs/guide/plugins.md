# Plugins

> **Coming soon.** This page will cover how to extend OpenClaw with plugins.

## Overview

Plugins let you add new functionality to OpenClaw without modifying the core.

## Using a Plugin

```js
import { defineConfig } from 'openclaw'
import myPlugin from 'openclaw-plugin-example'

export default defineConfig({
  plugins: [myPlugin()]
  })
  ```

  ## Official Plugins

  | Plugin | Description |
  |--------|-------------|
  | `plugin-a` | Does something useful |
  | `plugin-b` | Does something else |

  ## Writing Your Own Plugin

  [Guide for authoring custom plugins]