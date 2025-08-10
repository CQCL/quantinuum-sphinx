from pathlib import Path

from sphinx.application import Sphinx


def setup(app: Sphinx):
    app.add_html_theme("quantinuum_sphinx", str(Path(__file__).resolve().parent))
    app.add_js_file("injectNav.global.js")
    app.add_js_file("syncTheme.global.js")
