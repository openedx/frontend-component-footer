import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import HelpContent from '../../components/studio-footer/help-components/HelpContent';

const StudioFooterHelpContentSlot = () => (
  <PluginSlot
    id="org.openedx.frontend.layout.studio_footer_help-content.v1"
  >
    <HelpContent />
  </PluginSlot>
);

export default StudioFooterHelpContentSlot;
