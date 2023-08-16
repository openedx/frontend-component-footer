2. Footer Links
########################

Status
******

**Draft (=> Accepted)**

.. **Accepted** *2023-05-11*

.. Standard statuses
    - **Draft** if the decision is newly proposed and in active discussion
    - **Provisional** if the decision is still preliminary and in experimental phase
    - **Accepted** *(date)* once it is agreed upon
    - **Superseded** *(date)* with a reference to its replacement if a later ADR changes or reverses the decision

    If an ADR has Draft status and the PR is under review, you can either use the intended final status (e.g. Provisional, Accepted, etc.), or you can clarify both the current and intended status using something like the following: "Draft (=> Provisional)". Either of these options is especially useful if the merged status is not intended to be Accepted.

Context
*******

The footer component is basic - it only has a trademark logo and a language
selector. It doesn't look similar to the legacy UI footer.

It also doesn't have many customization options. You can customize
LMS base URL and trade mark logo.

If you want to have more advanced customizations, it's necessary to fork the
component, modify it, and then install the fork as a package instead of the
default footer at build time of MFEs.

We want to make the MFE footer to closer resemble the legacy UI footer by
adding the same footer links as in the legacy UI, and to make it easier to
style the footer component. That would eliminating some of the frequent reasons
forking of the component would be necessary.

Decision
********

Links
=====

LMS already has an API that is used by the legacy UI footer. Since our goal is
to make the legacy and MFE footers similar, it only makes sense to use the same
API.

``<LMS_BASE>/api/branding/v1/footer`` is the endpoint that can be used to
retrieve the information about the footer. A GET request has to be made, with
``Accepts: application/json`` header, to get a JSON object with footer links.

Example:
.. code-block::

    GET /api/branding/v1/footer
    Accepts: application/json

    {
        "navigation_links": [
            {
              "url": "http://example.com/about",
              "name": "about",
              "title": "About"
            },
            # ...
        ],
        "social_links": [
            {
                "url": "http://example.com/social",
                "name": "facebook",
                "icon-class": "fa-facebook-square",
                "title": "Facebook",
                "action": "Sign up on Facebook!"
            },
            # ...
        ],
        "mobile_links": [
            {
                "url": "http://example.com/android",
                "name": "google",
                "image": "http://example.com/google.png",
                "title": "Google"
            },
            # ...
        ],
        "legal_links": [
            {
                "url": "http://example.com/terms-of-service.html",
                "name": "terms_of_service",
                "title': "Terms of Service"
            },
            # ...
        ],
        "openedx_link": {
            "url": "https://open.edx.org",
            "title": "Powered by Open edX",
            "image": "http://example.com/openedx.png"
        },
        "logo_image": "http://example.com/static/images/logo.png",
        "copyright": "edX, Open edX and their respective logos are registered trademarks of edX Inc."
    }


We are interested in the keys that end with ``_links``:

* ``social_links``
* ``buisiness_links``
* ``mobile_links``
* ``connect_links``
* ``openedx_links``
* ``navigation_links``
* ``legal_links``

The exception is ``edx_org_link``, which will be ignored in the base version of
the footer component. A logo image is already supplied via the MFE config, and
the footer will continue to adhere to that, so ``logo_image`` will be ignored
as well.

We want the footer to stay the same for the users who don't want to use this
feature. So we are going to hide it behind a feature flag, which we'll call
``ENABLE_BRANDING_API``. By default the flag will have value of ``false``, and
it will be possible to change it's value in any of the ways supported by the
`MFE's config mechanism`_.

If the feature flag is set to ``true`` or a truthy JavaScript value, we will
query the API endpoint and get the links from the response.

This will allow the links in the legacy and MFE footers to be the same, and
configured via the same parameters in the LMS configuration.

.. _MFE's config mechanism: https://github.com/openedx/frontend-platform/blob/master/src/config.js

Styles
======

Since the root of the footer component is rendered as a footer HTML element, it
is unique enough to use ``footer`` as a SCSS selector. To make styling footer's
children more convenient, we will add unique class names, which will simplify
the SCSS selectors.

These SCSS styles can be put in a custom `branding package`_ inside of
``paragon/_overrides.scss``.

.. _branding package: https://github.com/openedx/brand-openedx

Consequences
************

Positive
========

* Legacy and MFE footers will have the same links.
* No need to duplicate the configuration, since both footers will use the
  branding API as a source of truth.

Negative
========

* An additional API request will be required when an MFE is opened.
* Can't easily add custom links. In the future, to allow adding custom links,
  v2 of the branding API can be implemented, or the current method can be
  combined with the MFE Config API.
* Will have to deal with limitations of the branding API.

Rejected Alternatives
*********************

React component props API
=========================

Instead of reading the configuration values in the component, we could be
reading it somewhere else, and passing the values as props to the react
component. We couldn't identify any pros to this approach, and the cons are the
same as the cons from decoupling.

MFE Config API
==============

We could've used MFE Config API to pass the links to the footer. The main
advantage would be that easy to set custom links and text.

However, it would require duplication the configuration for the links. Also,
branding API has more data and internationalization for links text.

Third party footer
==================

The proposed changes won't affect anyone who won't use this feature. And these
changes eliminate some frequent reasons for forking the footer component. Thus
creating a third party footer for these features, instead of upstreaming them
seems unjustified.

References
**********

* `OEP-48: Brand Customization
  <https://open-edx-proposals.readthedocs.io/en/latest/architectural-decisions/oep-0048-brand-customization.html>`_
* `Alternate site for marketing links
  <https://github.com/openedx/edx-platform/wiki/Alternate-site-for-marketing-links>`_
  (documentation on how to configure links in the LMS footer)
