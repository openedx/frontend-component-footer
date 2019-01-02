import React from 'react';
import { render } from 'react-dom';
import SiteFooter from './lib';
import './index.scss';

import FooterLogo from './edx-footer.png';

const App = () => (
  <SiteFooter
    siteName="edX"
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
  />
);

render(<App />, document.getElementById('root'));
