# Quantinuum Sphinx

This repo contains templates and static assets that are intended to customize the theme [furo](https://pradyunsg.me/furo/).


### Using the templates in your Sphinx configuration

Add the following git URL as a submodule in the same directory as `conf.py`


In `conf.py` add:

```python
extensions ['quantinuum_sphinx']
html_theme = 'quantinuum_sphinx'
html_favicon = '<path to your favicon file>'
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
            "iconImageURL": string (i.e. "_static/assets/github.svg"),
        },
    ],
}
```

Rebuild your docs and you should have a navbar:
![Screenshot 2024-07-01 at 14 07 19](https://github.com/CQCL/quantinuum-sphinx/assets/104831665/1dfda0e7-accc-428c-bccd-b489913bf9aa)
