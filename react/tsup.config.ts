import { defineConfig } from 'tsup'

export default defineConfig([
  // Script for injecting nav into sphinx build.
  {
  entry: ['./src/injectNav.tsx'],
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
  entry: ['./src/syncTheme.ts'],
  outDir: 'build',
  minify: true,
  skipNodeModulesBundle: false,
  target: "es2015",
  platform: "browser",
  format: ["iife"],
  clean: true,
},
{
  entry: ['./src/injectFooter.tsx'],
  outDir: 'build',
  minify: true,
  skipNodeModulesBundle: false,
  target: "es2015",
  platform: "browser",
  format: ["iife"],
  clean: true,
}, 
])
