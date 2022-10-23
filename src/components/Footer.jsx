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

  getLocalePrefix(locale) {
    const twoLetterPrefix = locale.substring(0, 2).toLowerCase();
    if (twoLetterPrefix === 'en') {
      return '';
    }
    return `/${twoLetterPrefix}`;
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
        className="footer border-top py-3 px-4"
      >
        

          <div class="container">
          <div class="row">
          <div class="col text-center">
          <a>
                <img
                    style={{ maxHeight: 45 }}
                    src={logo || config.LOGO_TRADEMARK_URL}
                    alt={intl.formatMessage(messages['footer.logo.altText'])}
                  />
              </a>
          </div>
            
            </div>
            <div class="row mt-2">
                
                <div class="col-sm container">  
                            
                  <div class="row p-2 upper-menu"> 

                    {/* <div class="col text-center text-color-white"><a class="boder-right" href='https://www.gift-ed.com/about-us' target="_blank">About</a></div>
                    <div class="col text-center"><a class="boder-right" href='#' target="_blank">Blog</a></div>
                    <div class="col text-center"><a  href='https://www.gift-ed.com/about-us' target="_blank">Media</a></div> */}

                    <ul class="bottom-menu">
                      <li><a class="boder-right" href="https://www.gift-ed.com/terms-and-conditions" target="_blank">About</a></li>
                      <li><a class="boder-right" href='https://www.gift-ed.com/privacy-policy' target="_blank"> Media</a></li>
                      <li><a class="" href='https://www.gift-ed.com/privacy-policy'>Contact</a></li>
                  </ul>
                  </div> 
                </div>
               
            </div>
            <div class="row p-2 mt-2">
                <div class="col-sm">                
                </div>
                <div class="col-sm container">              
                  <div class="row"> 
                  <div class="col text-right"> 
                      <a id="" href="https://www.linkedin.com/company/gift-ed/" target="_blank" class="social-icon linkedin text-white"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>    
                  </div>
                  <div class="col text-left">
                      <a id="" href="https://twitter.com/Global_Inst_FT" target="_blank" class="social-icon twitter text-white"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                  </div>                 
                  <div class="col text-left">
                      <a id="" href="https://www.youtube.com/channel/UCtA4q3RUyUgEmXgmN74w2Pw" target="_blank" class="social-icon twitter text-white"><i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>
                  </div>                 
                  </div> 
                </div>
                <div class="col-sm">                
                </div>
            </div>
            <div class="row p-2 mt-2 mb-5">
                <div class="col text-center">
                  <ul class="bottom-menu">
                      <li><a class="boder-right" href="https://www.gift-ed.com/terms-and-conditions" target="_blank">Terms of use</a></li>
                      <li><a class="boder-right" href='https://www.gift-ed.com/privacy-policy' target="_blank"> Privacy policy</a></li>
                      <li><a class="isDisabled" href='https://www.gift-ed.com/privacy-policy'> &copy; 2022 All rights reserved.</a></li>
                  </ul>
                </div>
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

