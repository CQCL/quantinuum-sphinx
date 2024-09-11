import { defineConfig } from 'tsup'

export default defineConfig([{
  entry: ['./src/scripts/nav'],
  outDir: 'build',
  minify: true,
  skipNodeModulesBundle: false,
  target: "es2015",
  platform: "browser",
  format: ["iife"],
}, {
  entry: ['./syncTheme.ts'],
  outDir: 'build',
  minify: true,
  skipNodeModulesBundle: false,
  target: "es2015",
  platform: "browser",
  format: ["iife"],
}])
