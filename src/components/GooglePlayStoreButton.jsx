import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-i18n';
import messages from './Footer.messages';

const GooglePlayStoreButton = ({ intl, ...props }) => (
  <a
    href="https://play.google.com/store/apps/details?id=org.edx.mobile"
    rel="noopener noreferrer"
    target="_blank"
    {...props}
  >
    <img
      className="max-height-39"
      alt={intl.formatMessage(messages['footer.mobileApp.google'])}
      src="https://prod-edxapp.edx-cdn.org/static/images/app/google_play_badge_45.6ea466e328da.png"
    />
  </a>
);

GooglePlayStoreButton.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(GooglePlayStoreButton);
