import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';
import { Image } from '@edx/paragon';
import { getConfig } from '@edx/frontend-platform';

import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';

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
      supportedLanguages,
      onLanguageSelected,
      logo,
      intl,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
    const config = getConfig();

    return (
      <div className="wrapper wrapper-footer">
        <footer id="footer" className="tutor-container">
          <div className="footer-top">
            <div className="powered-area">
              <ul className="logo-list">
                <li>{intl.formatMessage(messages['footer.poweredby.text'])}</li>
                <li>
                  <a href="https://docs.tutor.overhang.io" rel="noreferrer" target="_blank">
                    <Image
                      src={`${config.LMS_BASE_URL}/static/indigo/images/tutor-logo.png`}
                      alt={intl.formatMessage(messages['footer.tutorlogo.altText'])}
                      width="57"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://open.edx.org" rel="noreferrer" target="_blank">
                    <Image
                      src={logo || `${config.LMS_BASE_URL}/static/indigo/images/openedx-logo.png`}
                      alt={intl.formatMessage(messages['footer.logo.altText'])}
                      width="79"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span className="copyright-site">{intl.formatMessage(messages['footer.copyright.text'])}</span>
          {showLanguageSelector && (
            <LanguageSelector
              options={supportedLanguages}
              onSubmit={onLanguageSelected}
            />
          )}
        </footer>
      </div>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
