import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  changeUserSessionLanguage, getPrimaryLanguageSubtag, getSupportedLocaleList, getLocale,
} from '@edx/frontend-platform/i18n';
import { Dropdown, Scrollable, useWindowSize } from '@openedx/paragon';
import { Language } from '@openedx/paragon/icons';

const getLocaleName = (locale) => {
  const langName = new Intl.DisplayNames([locale], { type: 'language', languageDisplay: 'standard' }).of(locale);
  return langName.replace(/^\w/, (c) => c.toUpperCase());
};

const LanguageSelector = ({
  supportedLanguages = [],
}) => {
  const [currentLocale, setLocale] = useState(getLocale());
  const { width } = useWindowSize();
  const options = supportedLanguages.length > 0 ? supportedLanguages : getSupportedLocaleList();

  const handleSelect = async (selectedLocale) => {
    if (currentLocale !== selectedLocale) {
      await changeUserSessionLanguage(selectedLocale);
    }
    setLocale(selectedLocale);
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
        <Scrollable style={{ maxHeight: '40vh' }}>
          {options.map((locale) => (
            <Dropdown.Item key={`lang-selector-${locale}`} eventKey={locale}>
              {getLocaleName(locale)}
            </Dropdown.Item>
          ))}
        </Scrollable>
      </Dropdown.Menu>
    </Dropdown>
  );
};

LanguageSelector.propTypes = {
  supportedLanguages: PropTypes.arrayOf(PropTypes.string),
};

export default LanguageSelector;
