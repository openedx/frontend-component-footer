import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Hyperlink, Icon } from '@edx/paragon';
import messages from './SiteFooter.messages';

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

  renderSocialLinks() {
    const {
      intl,
      siteName,
      showSocialLinks,
      facebookUrl,
      twitterUrl,
      youTubeUrl,
      linkedInUrl,
      googlePlusUrl,
      redditUrl,
    } = this.props;
    let socialLinks = null;
    if (showSocialLinks) {
      socialLinks = (
        <ul
          className="d-flex flex-row justify-content-between list-unstyled max-width-222 p-0 mb-4"
        >
          {/* TODO: Use Paragon HyperLink with Icon. */}
          {/*  Would need to add rel to paragon if we still need it. */}
          <li>
            <a
              href={facebookUrl}
              title={intl.formatMessage(messages['footer.site-footer.facebook.title'])}
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon
                id="edx-footer-icon-facebook"
                className={['fa', 'fa-facebook-square', 'fa-2x']}
                screenReaderText={intl.formatMessage(
                  messages['footer.site-footer.facebook.screen-reader-text'],
                  { siteName },
                )}
              />
            </a>
          </li>
          <li>
            <a
              href={twitterUrl}
              title={intl.formatMessage(messages['footer.site-footer.twitter.title'])}
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon
                id="edx-footer-icon-twitter"
                className={['fa', 'fa-twitter-square', 'fa-2x']}
                screenReaderText={intl.formatMessage(
                  messages['footer.site-footer.twitter.screen-reader-text'],
                  { siteName },
                )}
              />
            </a>
          </li>
          <li>
            <a
              href={youTubeUrl}
              title={intl.formatMessage(messages['footer.site-footer.youtube.title'])}
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon
                id="edx-footer-icon-youtube"
                className={['fa', 'fa-youtube-square', 'fa-2x']}
                screenReaderText={intl.formatMessage(
                  messages['footer.site-footer.youtube.screen-reader-text'],
                  { siteName },
                )}
              />
            </a>
          </li>
          <li>
            <a
              href={linkedInUrl}
              title={intl.formatMessage(messages['footer.site-footer.linkedin.title'])}
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon
                id="edx-footer-icon-linkedin"
                className={['fa', 'fa-linkedin-square', 'fa-2x']}
                screenReaderText={intl.formatMessage(
                  messages['footer.site-footer.linkedin.screen-reader-text'],
                  { siteName },
                )}
              />
            </a>
          </li>
          <li>
            <a
              href={googlePlusUrl}
              title={intl.formatMessage(messages['footer.site-footer.google-plus.title'])}
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon
                id="edx-footer-icon-google"
                className={['fa', 'fa-google-plus-square', 'fa-2x']}
                screenReaderText={intl.formatMessage(
                  messages['footer.site-footer.google-plus.screen-reader-text'],
                  { siteName },
                )}
              />
            </a>
          </li>
          <li>
            <a
              href={redditUrl}
              title={intl.formatMessage(messages['footer.site-footer.reddit.title'])}
              rel="noopener noreferrer"
              target="_blank"
              onClick={this.externalLinkClickHandler}
            >
              <Icon
                id="edx-footer-icon-reddit"
                className={['fa', 'fa-reddit-square', 'fa-2x']}
                screenReaderText={intl.formatMessage(
                  messages['footer.site-footer.reddit.screen-reader-text'],
                  { siteName },
                )}
              />
            </a>
          </li>
        </ul>
      );
    }
    return socialLinks;
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

  render() {
    const {
      intl,
      siteName,
      openSourceUrl,
      termsOfServiceUrl,
      privacyPolicyUrl,
      contactUrl,
      supportUrl,
    } = this.props;
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
              <li>
                <a href={this.renderMarketingSiteUrl('/enterprise')}>
                  <FormattedMessage
                    id="footer.site-footer.link.business"
                    defaultMessage="{siteName} for Business"
                    values={{ siteName }}
                  />
                </a>
              </li>
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
            {this.renderSocialLinks()}
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
                defaultMessage="EdX, Open edX, and MicroMasters are registered trademarks of edX Inc. | {icpLicense}"
                values={{ icpLicense: '粤ICP备17044299号-2' }}
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
  supportUrl: PropTypes.string,
  contactUrl: PropTypes.string,
  openSourceUrl: PropTypes.string,
  termsOfServiceUrl: PropTypes.string,
  privacyPolicyUrl: PropTypes.string,
  showSocialLinks: PropTypes.bool,
  facebookUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  youTubeUrl: PropTypes.string,
  linkedInUrl: PropTypes.string,
  googlePlusUrl: PropTypes.string,
  redditUrl: PropTypes.string,
  showMobileLinks: PropTypes.bool,
  appleAppStoreUrl: PropTypes.string,
  googlePlayUrl: PropTypes.string,
  handleAllTrackEvents: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

SiteFooter.defaultProps = {
  siteName: null,
  siteLogo: null,
  marketingSiteBaseUrl: null,
  supportUrl: null,
  contactUrl: null,
  openSourceUrl: null,
  termsOfServiceUrl: null,
  privacyPolicyUrl: null,
  showSocialLinks: true,
  facebookUrl: null,
  twitterUrl: null,
  youTubeUrl: null,
  linkedInUrl: null,
  googlePlusUrl: null,
  redditUrl: null,
  showMobileLinks: true,
  appleAppStoreUrl: null,
  googlePlayUrl: null,
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
