import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';

import messages from './Footer.messages';

import LanguageSelectorSlot from '../plugin-slots/LanguageSelectorSlot';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }

  render() {
    const {
      logo,
      intl,
    } = this.props;
    const { config } = this.context;
    return (
      <footer
        role="contentinfo"
        className="footer d-flex border-top py-3 px-4"
      >
        <div className="container-fluid d-flex">
          <a
            className="d-block"
            href={config.LMS_BASE_URL}
            aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
          >
            <img
              style={{ maxHeight: 45 }}
              src={logo || config.LOGO_TRADEMARK_URL}
              alt={intl.formatMessage(messages['footer.logo.altText'])}
            />
          </a>
          <div className="flex-grow-1" />
          <div className="mb-2">
            <LanguageSelectorSlot />
          </div>
        </div>
      </footer>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
};

SiteFooter.defaultProps = {
  logo: undefined,
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
