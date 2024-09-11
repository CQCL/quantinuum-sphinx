import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['scripts/nav'],
  outDir: 'build',
  minify: true,
  skipNodeModulesBundle: false,
  target: "es2015",
  platform: "browser",
  format: ["iife"],
})
