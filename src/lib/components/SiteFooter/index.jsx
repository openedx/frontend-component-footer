import React from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

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

  formatUrl(linkData) {
    const {
      queryParams,
      url,
    } = linkData;
    return queryParams ? `${url}/?${qs.stringify(queryParams)}` : url;
  }

  renderLinkList({ title, linkList }) {
    if (linkList.length > 0) {
      return (
        <React.Fragment>
          <h2>{title}</h2>
          <ul className="list-unstyled p-0 m-0">
            {linkList.map(link => (
              <li key={link.url}>
                <a href={this.formatUrl(link)}>{link.title}</a>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }

    return null;
  }

  renderMobileLinks() {
    const {
      showMobileLinks,
      appleAppStore,
      googlePlay,
    } = this.props;

    if (showMobileLinks) {
      return (
        <ul className="d-flex flex-row justify-content-between list-unstyled max-width-264 p-0 mb-5">
          <li>
            <a href={appleAppStore.url} rel="noopener noreferrer" target="_blank" onClick={this.externalLinkClickHandler}>
              <img
                className="max-height-39"
                alt={appleAppStore.altText}
                src="https://prod-edxapp.edx-cdn.org/static/images/app/app_store_badge_135x40.d0558d910630.svg"
              />
            </a>
          </li>
          <li>
            <a href={googlePlay.url} rel="noopener noreferrer" target="_blank" onClick={this.externalLinkClickHandler}>
              <img
                className="max-height-39"
                alt={googlePlay.altText}
                src="https://prod-edxapp.edx-cdn.org/static/images/app/google_play_badge_45.6ea466e328da.png"
              />
            </a>
          </li>
        </ul>
      );
    }

    return null;
  }

  render() {
    const {
      ariaLabel,
      linkSectionOne,
      linkSectionTwo,
      linkSectionThree,
      siteLogo,
      socialLinks,
      supportedLanguages,
      languageForm,
      marketingSiteBaseUrl,
      copyright,
      trademark,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 &&
                                 languageForm;
    return (
      <footer
        role="contentinfo"
        aria-label={ariaLabel}
        className="footer d-flex justify-content-center border-top py-3 px-4"
      >
        <div className="max-width-1180 d-grid">
          <div className="area-1">
            <a
              href={marketingSiteBaseUrl}
              aria-label={siteLogo.ariaLabel}
            >
              <img src={siteLogo.src} alt={siteLogo.altText} />
            </a>
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
          <div className="area-2">{this.renderLinkList(linkSectionOne)}</div>
          <div className="area-3">{this.renderLinkList(linkSectionTwo)}</div>
          <div className="area-4">{this.renderLinkList(linkSectionThree)}</div>
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
              {copyright}
              <br />
              {trademark}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

const linkSectionShape = PropTypes.shape({
  title: PropTypes.string,
  linkList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    queryParams: PropTypes.shape({}),
  })),
});

SiteFooter.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  siteLogo: PropTypes.shape({
    src: PropTypes.node,
    altText: PropTypes.string,
    ariaLabel: PropTypes.string,
  }),
  marketingSiteBaseUrl: PropTypes.string,
  linkSectionOne: linkSectionShape,
  linkSectionTwo: linkSectionShape,
  linkSectionThree: linkSectionShape,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    screenReaderText: PropTypes.string.isRequired,
  })),
  showMobileLinks: PropTypes.bool,
  appleAppStore: PropTypes.shape({
    url: PropTypes.string,
    altText: PropTypes.string,
  }),
  googlePlay: PropTypes.shape({
    url: PropTypes.string,
    altText: PropTypes.string,
  }),
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
  copyright: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  trademark: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  handleAllTrackEvents: PropTypes.func.isRequired,
};

const linkSectionDefault = {
  title: null,
  linkList: [],
};

SiteFooter.defaultProps = {
  siteLogo: null,
  marketingSiteBaseUrl: null,
  linkSectionOne: linkSectionDefault,
  linkSectionTwo: linkSectionDefault,
  linkSectionThree: linkSectionDefault,
  socialLinks: [],
  showMobileLinks: true,
  appleAppStore: null,
  googlePlay: null,
  supportedLanguages: [],
  languageForm: null,
  copyright: null,
  trademark: null,
};

export default SiteFooter;
export { EVENT_NAMES };
