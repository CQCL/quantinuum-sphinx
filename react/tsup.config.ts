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
},
// Script for building shared ui assets
{
  entry: ['./src'],
  outDir: 'ui',
  minify: false,
  skipNodeModulesBundle: true,
  target: "esnext",
  platform: "node",
  format: ["esm"],
  dts: {
    entry: "./src/index.ts"
  }, // Add this to generate the code below
  clean: true,
  
}])
