import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import HelpSection from '../../components/studio-footer/help-components/HelpSection';

const StudioFooterHelpSectionSlot = () => (
  <PluginSlot id="org.openedx.frontend.layout.studio_footer_help_section.v1" idAliases={['studio_footer_help_section_slot']}>
    <HelpSection />
  </PluginSlot>
);

export default StudioFooterHelpSectionSlot;
