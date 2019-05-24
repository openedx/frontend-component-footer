import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { IntlProvider } from '@edx/frontend-i18n';

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

import FooterLogo from '../../../edx-footer.png';
import SiteFooter, { EVENT_NAMES } from './index';


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

const supportedLanguages = [
  {
    label: 'English',
    value: 'en',
  }, {
    label: 'español',
    value: 'es-419',
  },
];

const languageForm = {
  activeLanguage: 'en',
  screenReaderLabel: 'Choose Language',
  submitLabel: 'Apply',
  icon: <FontAwesomeIcon icon={faLanguage} size="2x" className="text-primary" />,
  onLanguageSelected: () => {},
};

const completeSiteFooterComponent = mockHandleAllTrackEvents =>
  (
    <IntlProvider locale="en">
      <SiteFooter
        siteName="example"
        siteLogo={FooterLogo}
        marketingSiteBaseUrl="https://www.example.com"
        supportUrl="https://www.example.com/support"
        contactUrl="https://www.example.com/contact"
        openSourceUrl="https://www.example.com/open"
        termsOfServiceUrl="https://www.example.com/terms-of-service"
        privacyPolicyUrl="https://www.example.com/privacy-policy"
        socialLinks={socialLinks}
        appleAppStoreUrl="https://store.apple.com"
        googlePlayUrl="https://play.google.com"
        handleAllTrackEvents={mockHandleAllTrackEvents}
        supportedLanguages={supportedLanguages}
        languageForm={languageForm}
        enterpriseMarketingLink={{
          url: 'https://business.edx.org',
          queryParams: { utm_test: 'utm_test_value' },
        }}
      />
    </IntlProvider>
  );

describe('<SiteFooter />', () => {
  describe('renders correctly', () => {
    it('renders with social and mobile links', () => {
      const mockHandleAllTrackEvents = jest.fn();
      const tree = renderer
        .create(completeSiteFooterComponent(mockHandleAllTrackEvents))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('does not render social links', () => {
      const tree = renderer
        .create((
          <IntlProvider locale="en">
            <SiteFooter
              siteName="example"
              siteLogo={FooterLogo}
              marketingSiteBaseUrl="https://www.example.com"
              supportUrl="https://www.example.com/support"
              contactUrl="https://www.example.com/contact"
              openSourceUrl="https://www.example.com/open"
              termsOfServiceUrl="https://www.example.com/terms-of-service"
              privacyPolicyUrl="https://www.example.com/privacy-policy"
              appleAppStoreUrl="https://store.apple.com"
              googlePlayUrl="https://play.google.com"
              supportedLanguages={supportedLanguages}
              languageForm={languageForm}
              handleAllTrackEvents={jest.fn()}
              enterpriseMarketingLink={{
                url: 'https://business.edx.org',
                queryParams: { utm_test: 'utm_test_value' },
              }}
            />
          </IntlProvider>
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('does not render mobile links', () => {
      const tree = renderer
        .create((
          <IntlProvider locale="en">
            <SiteFooter
              siteName="example"
              siteLogo={FooterLogo}
              marketingSiteBaseUrl="https://www.example.com"
              supportUrl="https://www.example.com/support"
              contactUrl="https://www.example.com/contact"
              openSourceUrl="https://www.example.com/open"
              termsOfServiceUrl="https://www.example.com/terms-of-service"
              privacyPolicyUrl="https://www.example.com/privacy-policy"
              socialLinks={socialLinks}
              appleAppStoreUrl="https://store.apple.com"
              googlePlayUrl="https://play.google.com"
              supportedLanguages={supportedLanguages}
              languageForm={languageForm}
              handleAllTrackEvents={jest.fn()}
              showMobileLinks={false}
            />
          </IntlProvider>
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('does not render language selector', () => {
      const tree = renderer
        .create((
          <IntlProvider locale="en">
            <SiteFooter
              siteName="example"
              siteLogo={FooterLogo}
              marketingSiteBaseUrl="https://www.example.com"
              supportUrl="https://www.example.com/support"
              contactUrl="https://www.example.com/contact"
              openSourceUrl="https://www.example.com/open"
              termsOfServiceUrl="https://www.example.com/terms-of-service"
              privacyPolicyUrl="https://www.example.com/privacy-policy"
              appleAppStoreUrl="https://store.apple.com"
              googlePlayUrl="https://play.google.com"
              handleAllTrackEvents={jest.fn()}
            />
          </IntlProvider>
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('does not render business links', () => {
      const tree = renderer
        .create((
          <IntlProvider locale="en">
            <SiteFooter
              siteName="example"
              siteLogo={FooterLogo}
              marketingSiteBaseUrl="https://www.example.com"
              supportUrl="https://www.example.com/support"
              contactUrl="https://www.example.com/contact"
              openSourceUrl="https://www.example.com/open"
              termsOfServiceUrl="https://www.example.com/terms-of-service"
              privacyPolicyUrl="https://www.example.com/privacy-policy"
              appleAppStoreUrl="https://store.apple.com"
              googlePlayUrl="https://play.google.com"
              handleAllTrackEvents={jest.fn()}
            />
          </IntlProvider>
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('handles analytics', () => {
    it('calls handleAllTrackEvents prop when external links clicked', () => {
      const mockHandleAllTrackEvents = jest.fn();
      const footer = mount((completeSiteFooterComponent(mockHandleAllTrackEvents)));
      const externalLinks = footer.find("a[target='_blank']");

      expect(externalLinks).toHaveLength(8);
      externalLinks.forEach((externalLink) => {
        const callIndex = mockHandleAllTrackEvents.mock.calls.length;
        externalLink.simulate('click');
        expect(mockHandleAllTrackEvents.mock.calls[callIndex]).toEqual([
          EVENT_NAMES.FOOTER_LINK,
          {
            category: 'outbound_link',
            label: externalLink.prop('href'),
          },
        ]);
      });
    });
  });
});
