import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import HelpContent from '../../components/studio-footer/help-components/HelpContent';

const StudioFooterHelpContentSlot = () => (
  <PluginSlot
    id="org.openedx.frontend.layout.studio_footer.help-content.v1"
    idAliases={['studio_footer_help_content_slot']}
  >
    <HelpContent />
  </PluginSlot>
);

export default StudioFooterHelpContentSlot;
