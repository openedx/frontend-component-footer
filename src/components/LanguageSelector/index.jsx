import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { publish } from '@edx/frontend-platform';
import {
  injectIntl, LOCALE_CHANGED, getLocale, handleRtl, getPrimaryLanguageSubtag,
} from '@edx/frontend-platform/i18n';
import { logError } from '@edx/frontend-platform/logging';
import { Dropdown, useWindowSize } from '@openedx/paragon';
import { Language } from '@openedx/paragon/icons';
import { getCookies } from '@edx/frontend-platform/i18n/lib';
import { patchPreferences, postSetLang } from './data';

const onLanguageSelected = async ({ langCookieName, username, selectedLlocale }) => {
  try {
    if (username) {
      await patchPreferences(username, { prefLang: selectedLlocale });
      await postSetLang(selectedLlocale);
    } else {
      getCookies().set(langCookieName, selectedLlocale);
    }
    publish(LOCALE_CHANGED, getLocale());
    handleRtl();
  } catch (error) {
    logError(error);
  }
};
const getLocaleName = (locale) => {
  const langName = new Intl.DisplayNames([locale], { type: 'language', languageDisplay: 'standard' }).of(locale);
  return langName.replace(/^\w/, (c) => c.toUpperCase());
};

const LanguageSelector = ({
  langCookieName, options, username,
}) => {
  const [currentLocale, setLocale] = useState(getLocale());
  const { width } = useWindowSize();

  const handleSelect = (selectedLlocale) => {
    if (currentLocale !== selectedLlocale) {
      onLanguageSelected({ langCookieName, username, selectedLlocale });
    }
    setLocale(selectedLlocale);
  };

  const currentLocaleLabel = useMemo(() => {
    if (width < 576) {
      return '';
    }
    if (width < 768) {
      return getPrimaryLanguageSubtag(currentLocale).toUpperCase();
    }
    return getLocaleName(currentLocale);
  }, [currentLocale, width]);

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle
        id="lang-selector-dropdown"
        iconBefore={Language}
        variant="outline-primary"
        size="sm"
      >
        {currentLocaleLabel}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((locale) => (
          <Dropdown.Item key={`lang-selector-${locale}`} eventKey={locale}>
            {getLocaleName(locale)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

LanguageSelector.propTypes = {
  langCookieName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  username: PropTypes.string,
};

export default injectIntl(LanguageSelector);
