rm -rf ./dist
mkdir ./dist
cp -a quantinuum_sphinx/. dist/
echo "🔨 Generating UI assets..."
cd ./react
npm ci
npm run build
cp ./build/injectNav.global.js ../quantinuum_sphinx/static/injectNav.global.js
cp ./build/syncTheme.global.js ../quantinuum_sphinx/static/syncTheme.global.js
cp ./node_modules/@quantinuum/quantinuum-ui/dist/tokens.css ../quantinuum_sphinx/static/styles/quantinuum-ui-tokens.css
npx tailwindcss --postcss ./postcss.config.cjs -i ./index.css -o ../quantinuum_sphinx/static/styles/quantinuum-ui-tailwind.css
echo ✅ "Done. Added UI assets to dist."
cd ../
