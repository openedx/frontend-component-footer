import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import PropTypes from 'prop-types';
import {
  Container,
} from '@openedx/paragon';
import HelpSection from '../../components/studio-footer/help-components/HelpSection';

const StudioFooterHelpSectionSlot = ({ containerProps }) => (
  <PluginSlot id="org.openedx.frontend.layout.studio_footer_help_section.v1" pluginProps={{ containerProps }}>
    <HelpSection containerProps={containerProps} />
  </PluginSlot>
);

StudioFooterHelpSectionSlot.propTypes = {
  containerProps: PropTypes.shape(Container.propTypes),
};

export default StudioFooterHelpSectionSlot;
