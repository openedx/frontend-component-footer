import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { AppContext } from '@edx/frontend-platform/react';
import {
  APP_CONFIG_INITIALIZED,
  ensureConfig,
  getConfig,
  mergeConfig,
  subscribe,
} from '@edx/frontend-platform';

import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

subscribe(APP_CONFIG_INITIALIZED, () => {
  mergeConfig({
    ABOUT_US_URL: process.env.ABOUT_US_URL,
    ACCESSIBILITY_URL: process.env.ACCESSIBILITY_URL,
    CONTACT_URL: process.env.CONTACT_URL,
    HONOR_CODE_URL: process.env.HONOR_CODE_URL,
    FOOTER_LOGO_ALT_TEXT: process.env.FOOTER_LOGO_ALT_TEXT,
    PRIVACY_POLICY_URL: process.env.PRIVACY_POLICY_URL,
    SHOW_FOOTER_LOGO: process.env.SHOW_FOOTER_LOGO,
    SUPPORT_CENTER_TEXT: process.env.SUPPORT_CENTER_TEXT,
    SUPPORT_CENTER_URL: process.env.SUPPORT_CENTER_URL,
    TERMS_OF_SERVICE_URL: process.env.TERMS_OF_SERVICE_URL,
    TRADEMARK_TEXT: process.env.TRADEMARK_TEXT,
  }, 'Footer additional config');
});

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

  renderLinkIfExists(value, text) {
    return !_.isEmpty(value) && <li><a href={value}>{text}</a></li>;
  }

  render() {
    const {
      supportedLanguages,
      onLanguageSelected,
      logo,
      intl,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
    const { config } = this.context;
    return (
      <footer
        role="contentinfo"
        className="footer d-flex border-top py-3 px-4"
      >
        <div className="container-fluid d-flex">
          { getConfig().SHOW_FOOTER_LOGO
          && (
          <a
            className="d-block"
            href={config.LMS_BASE_URL}
            aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
          >
            <img
              style={{ maxHeight: 45 }}
              src={logo || config.LOGO_TRADEMARK_URL}
              alt={getConfig().FOOTER_LOGO_ALT_TEXT || intl.formatMessage(messages['footer.logo.altText'])}
            />
          </a>
          )}
          <div className="copyright-col">
            {getConfig().TRADEMARK_TEXT
            && (
            <div className="trademark-text">
                {getConfig().TRADEMARK_TEXT}
            </div>
            )}
            <div>
              <ul className="footer-sub-nav">
                {
                  this.renderLinkIfExists(getConfig().ABOUT_US_URL, intl.formatMessage(messages['footer.edxLinks.aboutUs']))
                }
                {
                  this.renderLinkIfExists(getConfig().TERMS_OF_SERVICE_URL, intl.formatMessage(messages['footer.legalLinks.termsOfService']))
                }
                {
                  this.renderLinkIfExists(getConfig().PRIVACY_POLICY_URL, intl.formatMessage(messages['footer.legalLinks.privacyPolicy']))
                }
                {
                  this.renderLinkIfExists(getConfig().HONOR_CODE_URL, intl.formatMessage(messages['footer.legalLinks.honorCode']))
                }
                {
                  this.renderLinkIfExists(getConfig().CONTACT_URL, intl.formatMessage(messages['footer.connectLinks.contact']))
                }
                {
                  this.renderLinkIfExists(getConfig().ACCESSIBILITY_URL, intl.formatMessage(messages['footer.legalLinks.a11yPolicy']))
                }
                {
                  this.renderLinkIfExists(getConfig().SUPPORT_CENTER_URL, getConfig().SUPPORT_CENTER_TEXT || intl.formatMessage(messages['footer.connectLinks.help']))
                }
              </ul>
            </div>
          </div>
          <div className="flex-grow-1" />
          {showLanguageSelector && (
            <LanguageSelector
              options={supportedLanguages}
              onSubmit={onLanguageSelected}
            />
          )}
        </div>
      </footer>
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
