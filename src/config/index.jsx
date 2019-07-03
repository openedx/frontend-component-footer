/* eslint-disable */

import React from 'react';
import pick from 'lodash.pick';

import FooterLogo from './edx-footer.png';

/* TODO: This file is incomplete/non-functional.  It needs some thougth about how to get
 * messages/intl into it so that we can localize our titles here.  I think the right answer is
 * for this file to directly import messages.js (next door) and be passed the app's `intl`
 * object, as shown below.  Then it can call formatMessage on `intl`.  Also, the JSX below
 * should be evaluated with the IntlProvider when it's actually rendered by the footer, so
 * that _should_ work.
 */


let config = {
  MARKETING_SITE_BASE_URL: null,
};

let intl = null;

function validateConfiguration(newConfig) {
  Object.keys(config).forEach((key) => {
    if (newConfig[key] === undefined) {
      throw new Error(`Footer configuration error: ${key} is required.`);
    }
  });
}


export function getDefaultConfiguration(newConfig, newIntl) {
  validateConfiguration(newConfig);
  config = pick(newConfig, Object.keys(config));
  intl = newIntl;

  const edXLinks = [
    {
      title: 'About',
      url: `${config.MARKETING_SITE_BASE_URL}/about-us`,
    },
    {
      title: 'edX for Business',
      url: config.ENTERPRISE_MARKETING_URL,
      queryParams: {
        utm_campaign: config.ENTERPRISE_MARKETING_UTM_CAMPAIGN,
        utm_medium: config.ENTERPRISE_MARKETING_FOOTER_UTM_MEDIUM,
        utm_source: config.ENTERPRISE_MARKETING_UTM_SOURCE,
      },
    },
    {
      title: 'Affiliates',
      url: `${config.MARKETING_SITE_BASE_URL}/affiliate-program`,
    },
    {
      title: 'Open edX',
      url: `${config.OPEN_SOURCE_URL}`,
    },
    {
      title: 'Careers',
      url: `${config.MARKETING_SITE_BASE_URL}/careers`,
    },
    {
      title: 'News',
      url: `${config.MARKETING_SITE_BASE_URL}/news-announcements`,
    },
  ];

  const legalLinks = [
    {
      title: 'Terms of Service & Honor Code',
      url: `${config.MARKETING_SITE_BASE_URL}/edx-terms-service`,
    },
    {
      title: 'Privacy Policy',
      url: `${config.MARKETING_SITE_BASE_URL}/edx-privacy-policy`,
    },
    {
      title: 'Accessibility Policy',
      url: `${config.MARKETING_SITE_BASE_URL}/accessibility`,
    },
    {
      title: 'Trademark Policy',
      url: `${config.MARKETING_SITE_BASE_URL}/trademarks`,
    },
    {
      title: 'Sitemap',
      url: `${config.MARKETING_SITE_BASE_URL}/sitemap`,
    },
  ];

  const connectLinks = [
    {
      title: 'Blog',
      url: `${config.MARKETING_SITE_BASE_URL}/blog`,
    },
    {
      title: 'Contact Us',
      url: `${config.LMS_BASE_URL}/support/contact_us`,
    },
    {
      title: 'Help Center',
      url: config.SUPPORT_URL,
    },
    {
      title: 'Media Kit',
      url: `${config.MARKETING_SITE_BASE_URL}/media-kit`,
    },
    {
      title: 'Donate',
      url: `${config.MARKETING_SITE_BASE_URL}/donate`,
    },
  ];

  const socialLinks = [
    {
      title: 'Facebook',
      url: config.FACEBOOK_URL,
      icon: <FontAwesomeIcon icon={faFacebookSquare} className="social-icon" size="2x" />,
      screenReaderText: 'Like edX on Facebook',
    },
    {
      title: 'Twitter',
      url: config.TWITTER_URL,
      icon: <FontAwesomeIcon icon={faTwitterSquare} className="social-icon" size="2x" />,
      screenReaderText: 'Follow edX on Twitter',
    },
    {
      title: 'Youtube',
      url: config.YOU_TUBE_URL,
      icon: <FontAwesomeIcon icon={faYoutubeSquare} className="social-icon" size="2x" />,
      screenReaderText: 'Subscribe to the edX YouTube channel',
    },
    {
      title: 'LinkedIn',
      url: config.LINKED_IN_URL,
      icon: <FontAwesomeIcon icon={faLinkedin} className="social-icon" size="2x" />,
      screenReaderText: 'Follow edX on LinkedIn',
    },
    {
      title: 'Reddit',
      url: config.REDDIT_URL,
      icon: <FontAwesomeIcon icon={faRedditSquare} className="social-icon" size="2x" />,
      screenReaderText: 'Subscribe to the edX subreddit',
    },
  ];


  const copyright = <FormattedMessage
    id="footer.site-footer.copyright-text"
    defaultMessage="{copyrightSymbol} {startDate}–{endDate} {siteName} Inc."
    values={{
      copyrightSymbol: '©',
      startDate: '2012',
      endDate: `${new Date().getFullYear()}`,
      siteName,
    }}
    description="Footer copyright text with copyright symbol and dates"
  />

  const trademark = <FormattedMessage
    id="footer.site-footer.trademark-text"
    defaultMessage="EdX, Open edX, and MicroMasters are registered trademarks of edX Inc. | 深圳市恒宇博科技有限公司 {icpLicense}"
    values={{ icpLicense: <a href="http://www.beian.miit.gov.cn">粤ICP备17044299号-2</a> }}
    description="Footer trademark text"
  />

  return {
    ariaLabel: "Page Footer",
    siteLogo: FooterLogo,
    marketingSiteBaseUrl: config.MARKETING_SITE_BASE_URL,
    linkSectionOne: edXLinks,
    linkSectionTwo: legalLinks,
    linkSectionThree: connectLinks,
    socialLinks,
    showMobileLinks: true,
    appleAppStore: {
      url: config.APPLE_APP_STORE_URL,
      altText: "Download the edX mobile app from the Apple App Store",
    },
    googlePlayUrl: {
      url: config.GOOGLE_PLAY_URL,
      altText: "Download the edX mobile app from Google Play",
    },
    supportedLanguages: [],
    languageForm: null,
    copyright,
    trademark,
  }
};

export default getDefaultConfiguration;
