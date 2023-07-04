import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';

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
    const { config } = this.context;
    return (
      <footer
        role="contentinfo"
        className={`footer d-flex border-top py-3 px-4 ${config.FOOTER_CUSTOM_CLASSNAMES || ''}`}
        style={config.FOOTER_CUSTOM_STYLE}
      >
        <a
          className="d-block"
          href={config.LMS_BASE_URL}
          aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
        >
          <img
            style={{ maxHeight: 45, ...config.FOOTER_LOGO_STYLE }}
            src={logo || config.LOGO_TRADEMARK_URL}
            alt={intl.formatMessage(messages['footer.logo.altText'])}
          />
        </a>
        <div className="flex-grow-1" />
        {Array.isArray(config.FOOTER_LINKS) && (
          <div className={`d-flex align-items-center justify-content-center ${config.FOOTER_LINKS_CONTAINER_CLASSNAMES || ''}`}>
            {config.FOOTER_LINKS.map(element => (
              <a
                key={element.url}
                className={`px-3 ${config.FOOTER_LINKS_CLASSNAMES}`}
                href={element.url}
                target={element.target || 'blank'}
              >
                {element.text}
              </a>
            )).reduce((prev, curr) => [prev, '|', curr])}
          </div>
        )}
        {showLanguageSelector && (
          <LanguageSelector
            options={supportedLanguages}
            onSubmit={onLanguageSelected}
          />
        )}

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
