import React from 'react';
import { render } from 'react-dom';

/* eslint-disable import/no-extraneous-dependencies */
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faLinkedin,
  faRedditSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-enable import/no-extraneous-dependencies */

import SiteFooter from './lib';
import './index.scss';
import FooterLogo from './edx-footer.png';


const edXLinks = [
  {
    title: 'About',
    url: 'https://www.example.com/about-us',
  },
  {
    title: 'edX for Business',
    url: 'https://business.edx.org',
    queryParams: { utm_test: 'utm_test_value' },
  },
  {
    title: 'Affiliates',
    url: 'https://www.example.com/affiliate-program',
  },
  {
    title: 'Open edX',
    url: 'https://www.example.com/open',
  },
  {
    title: 'Careers',
    url: 'https://www.example.com/careers',
  },
  {
    title: 'News',
    url: 'https://www.example.com/news-announcements',
  },
];

const legalLinks = [
  {
    title: 'Terms of Service & Honor Code',
    url: 'https://www.example.com/terms-of-service',
  },
  {
    title: 'Privacy Policy',
    url: 'https://www.example.com/privacy-policy',
  },
  {
    title: 'Accessibility Policy',
    url: 'https://www.example.com/accessibility',
  },
  {
    title: 'Trademark Policy',
    url: 'https://www.example.com/trademarks',
  },
  {
    title: 'Sitemap',
    url: 'https://www.example.com/sitemap',
  },
];

const connectLinks = [
  {
    title: 'Blog',
    url: 'https://www.example.com/blog',
  },
  {
    title: 'Contact Us',
    url: 'https://www.example.com/contact',
  },
  {
    title: 'Help Center',
    url: 'https://www.example.com/support',
  },
  {
    title: 'Media Kit',
    url: 'https://www.example.com/media-kit',
  },
  {
    title: 'Donate',
    url: 'https://www.example.com/donate',
  },
];

const socialLinks = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com',
    icon: <FontAwesomeIcon icon={faFacebookSquare} className="social-icon" size="2x" />,
    screenReaderText: 'Like edX on Facebook',
  },
  {
    title: 'Twitter',
    url: 'https://www.twitter.com',
    icon: <FontAwesomeIcon icon={faTwitterSquare} className="social-icon" size="2x" />,
    screenReaderText: 'Follow edX on Twitter',
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com',
    icon: <FontAwesomeIcon icon={faYoutubeSquare} className="social-icon" size="2x" />,
    screenReaderText: 'Subscribe to the edX YouTube channel',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com',
    icon: <FontAwesomeIcon icon={faLinkedin} className="social-icon" size="2x" />,
    screenReaderText: 'Follow edX on LinkedIn',
  },
  {
    title: 'Reddit',
    url: 'https://reddit.com',
    icon: <FontAwesomeIcon icon={faRedditSquare} className="social-icon" size="2x" />,
    screenReaderText: 'Subscribe to the edX subreddit',
  },
];


const App = () => (
  <SiteFooter
    siteLogo={{
      src: FooterLogo,
      altText: 'edx Logo',
      ariaLabel: 'edX Home',
    }}
    ariaLabel="Page Footer"
    marketingSiteBaseUrl="https://www.example.com"
    appleAppStore={{
      url: 'https://store.apple.com',
      altText: 'Download the edX mobile app from the Apple App Store',
    }}
    googlePlay={{
      url: 'https://play.google.com',
      altText: 'Download the edX mobile app from Google Play',
    }}
    handleAllTrackEvents={() => {}}
    linkSectionOne={{
      title: 'edX',
      linkList: edXLinks,
    }}
    linkSectionTwo={{
      title: 'Legal',
      linkList: legalLinks,
    }}
    linkSectionThree={{
      title: 'Connect',
      linkList: connectLinks,
    }}
    socialLinks={socialLinks}
    supportedLanguages={[
      {
        label: 'English',
        value: 'en',
      }, {
        label: 'español',
        value: 'es-419',
      },
    ]}
    languageForm={{
      activeLanguage: 'en',
      screenReaderLabel: 'Choose Language',
      submitLabel: 'Apply',
      icon: <FontAwesomeIcon icon={faLanguage} size="2x" className="text-primary" />,
      onLanguageSelected: () => {},
    }}
    copyright="© 2012–2019 edX Inc."
    trademark={(
      <React.Fragment>EdX, Open edX, and MicroMasters are registered trademarks of edX Inc. | 深圳市恒宇博科技有限公司 <a href="http://www.beian.miit.gov.cn">粤ICP备17044299号-2</a></React.Fragment>
    )}
  />
);

render(<App />, document.getElementById('root'));
