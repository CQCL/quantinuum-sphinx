echo "🔨 Building UI assets..."
STATIC_DIR=./quantinuum_sphinx/_static
cd ./react
npm i
npm run build
cp ./node_modules/@cqcl/quantinuum-ui/dist/tokens.css ../$STATIC_DIR/tokens.css
npx tailwindcss --postcss ./postcss.config.cjs -i ./index.css -o ../$STATIC_DIR/tailwind.css
cp -a ./out/index.global.js ../$STATIC_DIR/index.global.js
echo ✅ "Done. Added UI assets to theme"
cd ../

