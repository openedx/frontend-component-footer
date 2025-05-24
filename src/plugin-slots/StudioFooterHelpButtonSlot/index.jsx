import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import PropTypes from 'prop-types';
import HelpButton from '../../components/studio-footer/help-components/HelpButton';

const StudioFooterHelpButtonSlot = ({ isOpen, setIsOpen }) => (
  <PluginSlot id="org.openedx.frontend.layout.studio_footer_help_button.v1" idAliases={['studio_footer_help_button_slot']} pluginProps={{ isOpen, setIsOpen }}>
    <HelpButton isOpen={isOpen} setIsOpen={setIsOpen} />
  </PluginSlot>
);

StudioFooterHelpButtonSlot.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default StudioFooterHelpButtonSlot;
