#########################
frontend-component-footer
#########################

|Build Status| |Codecov| |npm_version| |npm_downloads| |license| |semantic-release|

********
Overview
********

A generic footer for Open edX micro-frontend applications.  It includes a logo and an optional language selector dropdown.

************
Requirements
************

This component uses ``@edx/frontend-platform`` services such as i18n, analytics, configuration, and the ``AppContext`` React component, and expects that it has been loaded into a micro-frontend that has been properly initialized via ``@edx/frontend-platform``'s ``initialize`` function.  `Please visit the frontend template application to see an example. <https://github.com/edx/frontend-template-application/blob/3355bb3a96232390e9056f35b06ffa8f105ed7ca/src/index.jsx>`_

Environment Variables
=====================

This component requires that the following environment variable be set by the consuming micro-frontend.

* ``LMS_BASE_URL`` - The URL of the LMS of your Open edX instance.
* ``LOGO_TRADEMARK_URL`` - This is a URL to a logo for use in the footer.  This is a different environment variable than ``LOGO_URL`` (used in frontend-component-header) to accommodate sites that would like to have additional trademark information on a logo in the footer, such as a (tm) or (r) symbol.

************
Installation
************

To install this footer into your Open edX micro-frontend, run the following command in your MFE:

``npm i --save @edx/frontend-component-footer``

This will make the component available to be imported into your application.

*****
Usage
*****

This library has the following exports:

* ``(default)``: The footer as a React component.
* ``messages``: Internationalization messages suitable for use with `@edx/frontend-platform/i18n <https://edx.github.io/frontend-platform/module-Internationalization.html>`_
* ``dist/footer.scss``: A SASS file which contains style information for the component.  It should be imported into the micro-frontend's own SCSS file.

<Footer /> component props
==========================

* onLanguageSelected: Provides the footer with an event handler for when the user selects a
  language from its dropdown.
* supportedLanguages: An array of objects representing available languages.  See example below for object shape.

Examples
========

Component Usage Example::

  import Footer, { messages } from '@edx/frontend-component-footer';

  ...

  <Footer
    onLanguageSelected={(languageCode) => {/* set language */}}
    supportedLanguages={[
      { label: 'English', value: 'en'},
      { label: 'Español', value: 'es' },
    ]}
  />

* `An example of minimal component and messages usage. <https://github.com/edx/frontend-template-application/blob/3355bb3a96232390e9056f35b06ffa8f105ed7ca/src/index.jsx#L23>`_
* `An example of SCSS file usage. <https://github.com/edx/frontend-template-application/blob/3cd5485bf387b8c479baf6b02bf59e3061dc3465/src/index.scss#L9>`_

***********
Development
***********

Install dependencies::

  npm i

Start the development server::

  npm start

Build a production distribution::

  npm run build

.. |Build Status| image:: https://api.travis-ci.com/edx/frontend-component-footer.svg?branch=master
   :target: https://travis-ci.com/edx/frontend-component-footer
.. |Codecov| image:: https://img.shields.io/codecov/c/github/edx/frontend-component-footer
   :target: @edx/frontend-component-footer
.. |npm_version| image:: https://img.shields.io/npm/v/@edx/frontend-component-footer.svg
   :target: @edx/frontend-component-footer
.. |npm_downloads| image:: https://img.shields.io/npm/dt/@edx/frontend-component-footer.svg
   :target: @edx/frontend-component-footer
.. |license| image:: https://img.shields.io/npm/l/@edx/frontend-component-footer.svg
   :target: @edx/frontend-component-footer
.. |semantic-release| image:: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
   :target: https://github.com/semantic-release/semantic-release
