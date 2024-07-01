import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['ui/index.tsx'],
  outDir: './quantinuum_sphinx/_static/',
  minify: true,
  skipNodeModulesBundle: false,
  target: "es2015",
  platform: "browser",
  format: ["iife"],
})
