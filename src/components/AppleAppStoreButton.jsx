import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-i18n';
import messages from './Footer.messages';

const AppleAppStoreButton = ({ intl, ...props }) => (
  <a
    href="https://itunes.apple.com/us/app/edx/id945480667?mt=8"
    rel="noopener noreferrer"
    target="_blank"
    {...props}
  >
    <img
      className="max-height-39"
      alt={intl.formatMessage(messages['footer.mobileApp.apple'])}
      src="https://prod-edxapp.edx-cdn.org/static/images/app/app_store_badge_135x40.d0558d910630.svg"
    />
  </a>
);

AppleAppStoreButton.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AppleAppStoreButton);
