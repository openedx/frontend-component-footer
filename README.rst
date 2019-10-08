frontend-component-footer
=========================

|Build Status| |Coveralls| |npm_version| |npm_downloads| |license|
|semantic-release|

frontend-component-footer is a library containing a site footer
component for use when building Open edX frontend applications.

Usage
-----

To install frontend-component-footer into your project::

   npm i --save @edx/frontend-component-footer

Component Usage::

   import Footer, { messages } from '@edx/frontend-component-footer';

   ...

   <Footer
      onLanguageSelected={(languageCode) => {/* set language */}}
      supportedLanguages={[
         { label: 'English', value: 'en'},
         { label: 'Español', value: 'es' },
      ]}
   />

- onLanguageSelected (optional)
- supportedLanguages (optional)

Styles (project.scss)::

   @import '@edx/frontend-component-footer/src/footer.scss';


Requirements
------------

This component uses ``@edx/frontend-i18n``. Any containing app must provide ``@edx/frontend-i18n`` as a peer dependency, and be wrapped inside an ``IntlProvider`` element, whether or not your consuming application is actually localized. For a basic default locale (English) version, follow the ``IntlProvider`` example in the sample application in `src/index.jsx <src/index.jsx>`__.

Development
-----------

Start the dev server::

   npm i && npm start

Build the component::

   npm run build

.. |Build Status| image:: https://api.travis-ci.org/edx/frontend-component-footer.svg?branch=master
   :target: https://travis-ci.org/edx/frontend-component-footer
.. |Coveralls| image:: https://img.shields.io/coveralls/edx/frontend-component-footer.svg?branch=master
   :target: https://coveralls.io/github/edx/frontend-component-footer
.. |npm_version| image:: https://img.shields.io/npm/v/@edx/frontend-component-footer.svg
   :target: @edx/frontend-component-footer
.. |npm_downloads| image:: https://img.shields.io/npm/dt/@edx/frontend-component-footer.svg
   :target: @edx/frontend-component-footer
.. |license| image:: https://img.shields.io/npm/l/@edx/frontend-component-footer.svg
   :target: @edx/frontend-component-footer
.. |semantic-release| image:: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
   :target: https://github.com/semantic-release/semantic-release
