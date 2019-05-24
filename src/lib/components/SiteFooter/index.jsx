import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-i18n';
import { Hyperlink } from '@edx/paragon';
import qs from 'query-string';

import messages from './SiteFooter.messages';

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};


class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
    this.applyLanguageSelection = this.applyLanguageSelection.bind(this);
  }

  applyLanguageSelection(event) {
    event.preventDefault();
    const languageCode = event.target.elements['site-footer-language-select'].value;
    const { languageForm: { onLanguageSelected } } = this.props;
    onLanguageSelected(languageCode);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    this.props.handleAllTrackEvents(eventName, properties);
  }

  renderSiteLogo() {
    return (
      <img
        src={this.props.siteLogo}
        alt={this.props.intl.formatMessage(
          messages['footer.site-footer.site-logo.alt-text'],
          { siteName: this.props.siteName },
        )}
      />
    );
  }

  renderMarketingSiteUrl(path) {
    return `${this.props.marketingSiteBaseUrl}${path}`;
  }

  renderEnterpriseMarketingSiteUrl(enterpriseLinkData) {
    const {
      queryParams,
      url,
    } = enterpriseLinkData;
    return queryParams ? `${url}/?${qs.stringify(queryParams)}` : url;
  }

  renderMobileLinks() {
    const {
      intl,
      siteName,
      showMobileLinks,
      appleAppStoreUrl,
      googlePlayUrl,
    } = this.props;
    let mobileLinks = null;
    if (showMobileLinks) {
      mobileLinks = (
        <ul className="d-flex flex-row justify-content-between list-unstyled max-width-264 p-0 mb-5">
          <li>
            <a href={appleAppStoreUrl} rel="noopener noreferrer" target="_blank" onClick={this.externalLinkClickHandler}>
              <img
                className="max-height-39"
                alt={intl.formatMessage(
                  messages['footer.site-footer.apple-app-store.alt-text'],
                  { siteName },
                )}
                src="https://prod-edxapp.edx-cdn.org/static/images/app/app_store_badge_135x40.d0558d910630.svg"
              />
            </a>
          </li>
          <li>
            <a href={googlePlayUrl} rel="noopener noreferrer" target="_blank" onClick={this.externalLinkClickHandler}>
              <img
                className="max-height-39"
                alt={intl.formatMessage(
                  messages['footer.site-footer.google-play.alt-text'],
                  { siteName },
                )}
                src="https://prod-edxapp.edx-cdn.org/static/images/app/google_play_badge_45.6ea466e328da.png"
              />
            </a>
          </li>
        </ul>
      );
    }
    return mobileLinks;
  }

  renderBusinessMarketingListItem() {
    const { siteName, enterpriseMarketingLink } = this.props;
    return enterpriseMarketingLink && (
      <li>
        <a href={this.renderEnterpriseMarketingSiteUrl(enterpriseMarketingLink)}>
          <FormattedMessage
            id="footer.site-footer.link.business"
            defaultMessage="{siteName} for Business"
            description="A link that points to a business marketing page for a specified website"
            values={{ siteName }}
          />
        </a>
      </li>
    );
  }

  render() {
    const {
      intl,
      siteName,
      openSourceUrl,
      termsOfServiceUrl,
      privacyPolicyUrl,
      contactUrl,
      supportUrl,
      socialLinks,
      supportedLanguages,
      languageForm,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 &&
                                 languageForm;
    return (
      <footer
        role="contentinfo"
        aria-label={intl.formatMessage(messages['footer.site-footer.footer.aria-label'])}
        className="footer d-flex justify-content-center border-top py-3 px-4"
      >
        <div className="max-width-1180 d-grid">
          <div className="area-1">
            <Hyperlink
              destination={this.renderMarketingSiteUrl('/')}
              content={this.renderSiteLogo()}
              aria-label={intl.formatMessage(
                messages['footer.site-footer.site-logo.aria-label'],
                { siteName },
              )}
            />
            {showLanguageSelector &&
              <div className="i18n d-flex mt-2">
                <form
                  className="d-flex align-items-start"
                  onSubmit={this.applyLanguageSelection}
                >
                  {/* eslint-disable-next-line jsx-a11y/label-has-for */}
                  <label htmlFor="site-footer-language-select">
                    {languageForm.icon}
                    <div className="sr-only">{languageForm.screenReaderLabel}</div>
                  </label>
                  <select
                    id="site-footer-language-select"
                    className="mx-2 mt-1"
                    name="site-footer-language-select"
                    defaultValue={languageForm.activeLanguage}
                  >
                    {supportedLanguages.map(({ value, label }) =>
                      <option key={value} value={value}>{label}</option>)}
                  </select>
                  <button className="mt-1" type="submit">{languageForm.submitLabel}</button>
                </form>
              </div>
            }
          </div>
          <div className="area-2">
            <h2>{siteName}</h2>
            <ul className="list-unstyled p-0 m-0">
              <li>
                <a href={this.renderMarketingSiteUrl('/about-us')}>
                  <FormattedMessage
                    id="footer.site-footer.link.about"
                    defaultMessage="About"
                  />
                </a>
              </li>
              {this.renderBusinessMarketingListItem()}
              <li>
                <a href={this.renderMarketingSiteUrl('/affiliate-program')}>
                  <FormattedMessage
                    id="footer.site-footer.link.affiliates"
                    defaultMessage="Affiliates"
                  />
                </a>
              </li>
              <li>
                <a href={openSourceUrl}>
                  <FormattedMessage
                    id="footer.site-footer.link.open-source"
                    defaultMessage="Open {siteName}"
                    values={{ siteName }}
                    description="Open Source link text"
                  />
                </a>
              </li>
              <li>
                <a href={this.renderMarketingSiteUrl('/careers')}>
                  <FormattedMessage
                    id="footer.site-footer.link.careers"
                    defaultMessage="Careers"
                  />
                </a>
              </li>
              <li>
                <a href={this.renderMarketingSiteUrl('/news-announcements')}>
                  <FormattedMessage
                    id="footer.site-footer.link.news"
                    defaultMessage="News"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="area-3">
            <h2>
              <FormattedMessage
                id="footer.site-footer.link.header.legal"
                defaultMessage="Legal"
                description="Header for legal links"
              />
            </h2>
            <ul className="list-unstyled p-0 m-0">
              <li>
                <a href={termsOfServiceUrl}>
                  <FormattedMessage
                    id="footer.site-footer.link.terms-of-service"
                    defaultMessage="Terms of Service & Honor Code"
                  />
                </a>
              </li>
              <li>
                <a href={privacyPolicyUrl}>
                  <FormattedMessage
                    id="footer.site-footer.link.privacy"
                    defaultMessage="Privacy Policy"
                  />
                </a>
              </li>
              <li>
                <a href={this.renderMarketingSiteUrl('/accessibility')}>
                  <FormattedMessage
                    id="footer.site-footer.link.accessibility"
                    defaultMessage="Accessibility Policy"
                  />
                </a>
              </li>
              <li>
                <a href={this.renderMarketingSiteUrl('/trademarks')}>
                  <FormattedMessage
                    id="footer.site-footer.link.trademark"
                    defaultMessage="Trademark Policy"
                  />
                </a>
              </li>
              <li>
                <a href={this.renderMarketingSiteUrl('/sitemap')}>
                  <FormattedMessage
                    id="footer.site-footer.link.sitemap"
                    defaultMessage="Sitemap"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="area-4">
            <h2>
              <FormattedMessage
                id="footer.site-footer.link.header.connect"
                defaultMessage="Connect"
                description="Header for connect links"
              />
            </h2>
            <ul className="list-unstyled p-0 m-0">
              <li>
                <a href={this.renderMarketingSiteUrl('/blog')}>
                  <FormattedMessage
                    id="footer.site-footer.link.blog"
                    defaultMessage="Blog"
                  />
                </a>
              </li>
              <li>
                <a href={contactUrl}>
                  <FormattedMessage
                    id="footer.site-footer.link.contact-us"
                    defaultMessage="Contact Us"
                  />
                </a>
              </li>
              <li>
                <a href={supportUrl}>
                  <FormattedMessage
                    id="footer.site-footer.link.help-center"
                    defaultMessage="Help Center"
                  />
                </a>
              </li>
              <li>
                <a href={this.renderMarketingSiteUrl('/media-kit')}>
                  <FormattedMessage
                    id="footer.site-footer.link.media-kit"
                    defaultMessage="Media Kit"
                  />
                </a>
              </li>
              <li>
                <a href={this.renderMarketingSiteUrl('/donate')}>
                  <FormattedMessage
                    id="footer.site-footer.link.donate"
                    defaultMessage="Donate"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="area-5">
            {socialLinks.length > 0 &&
              <ul className="d-flex flex-row justify-content-between list-unstyled max-width-222 p-0 mb-4">
                {socialLinks.map(link => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      title={link.title}
                      rel="noopener noreferrer"
                      target="_blank"
                      onClick={this.externalLinkClickHandler}
                    >
                      {link.icon}
                      <span className="sr-only">{link.screenReaderText}</span>
                    </a>
                  </li>
                ))}
              </ul>
            }
            {this.renderMobileLinks()}
            <p>
              <FormattedMessage
                id="footer.site-footer.copyright-text"
                defaultMessage="{copyrightSymbol} {startDate}–{endDate} {siteName} Inc."
                values={{
                  copyrightSymbol: '©',
                  startDate: '2012',
                  endDate: `${new Date().getFullYear()}`,
                  siteName,
                }}
                description="Footer copyright text with copyright symbol and dates"
              />
              <br />
              <FormattedMessage
                id="footer.site-footer.trademark-text"
                defaultMessage="EdX, Open edX, and MicroMasters are registered trademarks of edX Inc. | 深圳市恒宇博科技有限公司 {icpLicense}"
                values={{ icpLicense: <a href="http://www.beian.miit.gov.cn">粤ICP备17044299号-2</a> }}
                description="Footer trademark text"
              />
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

SiteFooter.propTypes = {
  siteName: PropTypes.string,
  siteLogo: PropTypes.node,
  marketingSiteBaseUrl: PropTypes.string,
  enterpriseMarketingLink: PropTypes.shape({
    url: PropTypes.string,
    queryParams: PropTypes.shape({}),
  }),
  supportUrl: PropTypes.string,
  contactUrl: PropTypes.string,
  openSourceUrl: PropTypes.string,
  termsOfServiceUrl: PropTypes.string,
  privacyPolicyUrl: PropTypes.string,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    screenReaderText: PropTypes.string.isRequired,
  })),
  showMobileLinks: PropTypes.bool,
  appleAppStoreUrl: PropTypes.string,
  googlePlayUrl: PropTypes.string,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  languageForm: PropTypes.shape({
    screenReaderLabel: PropTypes.string.isRequired,
    submitLabel: PropTypes.string.isRequired,
    onLanguageSelected: PropTypes.func.isRequired,
    icon: PropTypes.node.isRequired,
    activeLanguage: PropTypes.string,
  }),
  handleAllTrackEvents: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

SiteFooter.defaultProps = {
  siteName: null,
  siteLogo: null,
  marketingSiteBaseUrl: null,
  enterpriseMarketingLink: null,
  supportUrl: null,
  contactUrl: null,
  openSourceUrl: null,
  termsOfServiceUrl: null,
  privacyPolicyUrl: null,
  socialLinks: [],
  showMobileLinks: true,
  appleAppStoreUrl: null,
  googlePlayUrl: null,
  supportedLanguages: [],
  languageForm: null,
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
