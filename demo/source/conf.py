# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Quantinuum Sphinx Demo'
copyright = '2024, Quantinuum'
author = 'aidan.keay@quantinuum.com'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

html_theme = "furo"
templates_path = ["../../dist/_templates"]
html_static_path = ['../../dist/_static', '_static']
html_favicon = '../../dist/_static/assets/quantinuum_favicon.svg'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'furo'
