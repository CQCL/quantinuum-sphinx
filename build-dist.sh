rm -rf ./dist
mkdir ./dist
cp -a quantinuum_sphinx/. dist/
echo "🔨 Generating UI assets..."
cd ./react
npm i
npm run build
cp ./build/index.global.js ../dist/_static/index.global.js
cp ./node_modules/@cqcl/quantinuum-ui/dist/tokens.css ../dist/_static/tokens.css
npx tailwindcss --postcss ./postcss.config.cjs -i ./index.css -o ../dist/_static/tailwind.css
echo ✅ "Done. Added UI assets to dist."
cd ../
