import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from '@edx/frontend-i18n';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LanguageSelector = ({
  intl, options, onSubmit, ...props
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const languageCode = e.target.elements['site-footer-language-select'].value;
    onSubmit(languageCode);
  };

  return (
    <form
      className="d-flex align-items-start"
      onSubmit={handleSubmit}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor="site-footer-language-select">
        <FontAwesomeIcon icon={faLanguage} size="2x" className="text-primary" />
        <div className="sr-only">
          <FormattedMessage
            id="footer.languageForm.select.label"
            defaultMessage="Choose Language"
            description="The label for the laguage select part of the language selection form."
          />
        </div>
      </label>
      <select
        id="site-footer-language-select"
        className="mx-2 mt-1"
        name="site-footer-language-select"
        defaultValue={intl.locale}
      >
        {options.map(({ value, label }) =>
          <option key={value} value={value}>{label}</option>)}
      </select>
      <button className="mt-1" type="submit">
        <FormattedMessage
          id="footer.languageForm.submit.label"
          defaultMessage="Apply"
          description="The label for button to submit the language selection form."
        />
      </button>
    </form>
  );
};

LanguageSelector.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
};

export default injectIntl(LanguageSelector);
