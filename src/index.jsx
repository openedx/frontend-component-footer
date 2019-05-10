import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';

/* eslint-disable import/no-extraneous-dependencies */
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faLinkedin,
  faGooglePlusSquare,
  faRedditSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* eslint-enable import/no-extraneous-dependencies */

import SiteFooter from './lib';
import './index.scss';
import FooterLogo from './edx-footer.png';


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
    title: 'Google+',
    url: 'https://plus.google.com',
    icon: <FontAwesomeIcon icon={faGooglePlusSquare} className="social-icon" size="2x" />,
    screenReaderText: 'Follow edX on Google+',
  },
  {
    title: 'Reddit',
    url: 'https://reddit.com',
    icon: <FontAwesomeIcon icon={faRedditSquare} className="social-icon" size="2x" />,
    screenReaderText: 'Subscribe to the edX subreddit',
  },
];


const App = () => (
  <IntlProvider locale="en">
    <SiteFooter
      siteName="edX"
      siteLogo={FooterLogo}
      marketingSiteBaseUrl="https://www.example.com"
      supportUrl="https://www.example.com/support"
      contactUrl="https://www.example.com/contact"
      openSourceUrl="https://www.example.com/open"
      termsOfServiceUrl="https://www.example.com/terms-of-service"
      privacyPolicyUrl="https://www.example.com/privacy-policy"
      appleAppStoreUrl="https://store.apple.com"
      googlePlayUrl="https://play.google.com"
      handleAllTrackEvents={() => {}}
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
    />
  </IntlProvider>
);

render(<App />, document.getElementById('root'));
