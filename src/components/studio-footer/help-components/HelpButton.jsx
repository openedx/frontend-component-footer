import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Button,
} from '@openedx/paragon';
import { ExpandLess, ExpandMore, Help } from '@openedx/paragon/icons';
import PropTypes from 'prop-types';
import messages from '../messages';

const HelpButton = ({ isOpen, setIsOpen }) => {
  const intl = useIntl();
  return (
    <Button
      data-testid="helpToggleButton"
      variant="outline-primary"
      onClick={() => setIsOpen(!isOpen)}
      iconBefore={Help}
      iconAfter={isOpen ? ExpandLess : ExpandMore}
      size="sm"
    >
      {isOpen ? intl.formatMessage(messages.closeHelpButtonLabel)
        : intl.formatMessage(messages.openHelpButtonLabel)}
    </Button>
  );
};

HelpButton.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default HelpButton;
