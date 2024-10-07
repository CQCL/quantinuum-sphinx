@echo off
echo Building dist
IF exist .\dist (rmdir /s /q .\dist)
mkdir .\dist
xcopy /q /y /v /i /s /e .\quantinuum_sphinx\* .\dist
echo "Generating UI assets..."
cd .\react
call npm ci
call npm run build
echo "Copying UI assets to dist..."
copy /y /v .\build\injectNav.global.js ..\dist\_static\injectNav.global.js
copy /y /v .\build\injectFooter.global.js ..\dist\_static\injectFooter.global.js
copy /y /v .\build\syncTheme.global.js ..\dist\_static\syncTheme.global.js
copy /y /v .\node_modules\@cqcl\quantinuum-ui\dist\tokens.css ..\dist\_static\tokens.css
call npx tailwindcss --postcss .\postcss.config.cjs -i .\index.css -o ..\dist\_static\tailwind.css
echo "Done. Added UI assets to dist."
cd ..
pause