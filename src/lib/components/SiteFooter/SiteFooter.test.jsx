import React from 'react';
import renderer from 'react-test-renderer';

import FooterLogo from '../../../edx-footer.png';
import SiteFooter from '../../index';

describe('<SiteFooter />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SiteFooter
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
        googlePlusUrl="https://plus.google.com"
        redditUrl="https://reddit.com"
        appleAppStoreUrl="https://store.apple.com"
        googlePlayUrl="https://play.google.com"
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('does not render social links', () => {
    const tree = renderer
      .create(<SiteFooter
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
        googlePlusUrl="https://plus.google.com"
        redditUrl="https://reddit.com"
        appleAppStoreUrl="https://store.apple.com"
        googlePlayUrl="https://play.google.com"
        showSocialLinks={false}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('does not render mobile links', () => {
    const tree = renderer
      .create(<SiteFooter
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
        googlePlusUrl="https://plus.google.com"
        redditUrl="https://reddit.com"
        appleAppStoreUrl="https://store.apple.com"
        googlePlayUrl="https://play.google.com"
        showMobileLinks={false}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
