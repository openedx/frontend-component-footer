import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import HelpContent from '../../components/studio-footer/help-components/HelpContent';

const HelpContentSlot = () => (
  <PluginSlot
    id="org.openedx.frontend.layout.footer.helpcontent.v1"
    idAliases={['footer_help_content_slot', 'footer_help_content_plugin_slot']}
  >
    <HelpContent />
  </PluginSlot>
);

export default HelpContentSlot;
