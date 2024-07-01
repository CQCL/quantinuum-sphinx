rm -rf ./demo/build/html
./build-ui.sh
poetry install
cd ./demo && poetry run make html
cd ../
