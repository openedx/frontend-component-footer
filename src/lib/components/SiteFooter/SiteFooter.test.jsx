import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import FooterLogo from '../../../edx-footer.png';
import SiteFooter, { EVENT_NAMES } from './index';

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
        facebookUrl="https://www.facebook.com"
        twitterUrl="https://www.twitter.com"
        youTubeUrl="https://www.youtube.com"
        linkedInUrl="https://www.linkedin.com"
        redditUrl="https://reddit.com"
        googlePlusUrl="https://plus.google.com"
        appleAppStoreUrl="https://store.apple.com"
        googlePlayUrl="https://play.google.com"
        handleAllTrackEvents={mockHandleAllTrackEvents}
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
              facebookUrl="https://www.facebook.com"
              twitterUrl="https://www.twitter.com"
              youTubeUrl="https://www.youtube.com"
              linkedInUrl="https://www.linkedin.com"
              redditUrl="https://reddit.com"
              googlePlusUrl="https://plus.google.com"
              appleAppStoreUrl="https://store.apple.com"
              googlePlayUrl="https://play.google.com"
              handleAllTrackEvents={jest.fn()}
              showSocialLinks={false}
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
              facebookUrl="https://www.facebook.com"
              twitterUrl="https://www.twitter.com"
              youTubeUrl="https://www.youtube.com"
              linkedInUrl="https://www.linkedin.com"
              redditUrl="https://reddit.com"
              googlePlusUrl="https://plus.google.com"
              appleAppStoreUrl="https://store.apple.com"
              googlePlayUrl="https://play.google.com"
              handleAllTrackEvents={jest.fn()}
              showMobileLinks={false}
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
