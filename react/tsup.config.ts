import { defineConfig } from 'tsup'

export default defineConfig([
  // Script for injecting nav into sphinx build.
  {
  entry: ['./src/scripts/nav'],
  outDir: 'build',
  minify: true,
  skipNodeModulesBundle: false,
  target: "es2015",
  platform: "browser",
  format: ["iife"],
  clean: true,
}, 
// Script for syncing dark mode preference
{
  entry: ['./syncTheme.ts'],
  outDir: 'build',
  minify: true,
  skipNodeModulesBundle: false,
  target: "es2015",
  platform: "browser",
  format: ["iife"],
  clean: true,
}])
