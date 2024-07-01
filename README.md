# Quantinuum Docs Sphinx Templates

This theme is intended to customize [furo](https://pradyunsg.me/furo/).


### Using the templates in your Sphinx docs code

Add the following git URL as a submodule in the same directory as `conf.py`

```bash
git submodule add git+https://github.com/aidanCQ/qui-sphinx.git@dist
```

In `conf.py` add:

```python
html_theme = "furo"
templates_path = ["quantinuum_sphinx/_templates"]
html_static_path = ['quantinuum_sphinx/_static', '_static']
```

Create a file `./_static/nav-config.js` containing: 

```js
const navConfig = {
 "navTextLinks": [
        {
            "title": string,
            "href": string,
        },
    ],
 "navProductName": string,
 "navIconLinks": [
     {
         "title": string,
         "href": string,
         "iconImageURL": string (i.e. "/_static/github.svg"),
     },
 ],
}
```
