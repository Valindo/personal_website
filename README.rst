.. image:: https://travis-ci.org/tanayseven/personal_website.svg?branch=master
    :target: https://travis-ci.org/tanayseven/personal_website
    :alt: tests

Static Website Generator
========================

This repository contains a very small yet powerful static website generator which is used to make static website by
using reusable components that will be used across the website and uses ``make`` as a tool to have incremental builds of
the website. The attempt is to keep things very clean and do it the "Unix way" by representing everything in files. This
repository is currently used to build my personal website and is open for other to use to build their website as it is
MIT license. This website uses Jinja2 as a templating engine for generating the intermediate components and websites.
Please submit a pull request if you want to fix any issue or submit any feature you feel to be missing.

Inspired from the following websites:

1.  `Nelkinda`_
2.  `alice_maz`_

.. _Nelkinda: http://nelkinda.com

.. _alice_maz: https://www.alicemaz.com/


Tanay's Personal Website
========================

To know how to do different actions using the make file, please use ``make help``. Most of all you can do with ``make``
will be documented there.

Advantages of using ``make`` and different internal workings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1.  **Incremental building** make offers incremental building and or compiling of files. This means that if there are
    multiple files, then it will build the necessary files purely based on the changes that have been recently made.
    Performing a ``make build`` will run this incremental build, it uses ``rsync`` to perform the actual incremental
    build.

2.  **Serving website locally** has a command called ``make serve`` which expects the ``_build`` directory to exist and
    if it exists then it just starts a server to serve the contents of that directory, else it actually performs a build
    and then serves the files from that directly in that server.

3.  **Deploying the website** has a command to deploy the website to the static website that is hosted on github pages.
    This command performs ``rsync`` of the files to the the actual repository and then does a commit in that repository
    and pushes the newly committed changes to the repository which automatically makes it live on the website.

4.  **Splitting web pages into components** The use of Jinja2 helps me to split the Makefile into components into
    multiple directories in ``templates/components/`` directory, this makes the components be reusable across different
    pages in the website.

5.  **Minification of CSS and JS** The JS and CSS is minified before making it available to the website to use.


LICENSE
~~~~~~~

The MIT License (MIT)

Copyright (c) 2018 Tanay PrabhuDesai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
