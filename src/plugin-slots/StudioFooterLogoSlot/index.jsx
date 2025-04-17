import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { Hyperlink, Image } from '@openedx/paragon';

const StudioFooterLogoSlot = () => (
  <PluginSlot id="studio_footer_logo_slot">
    <Hyperlink destination="https://openedx.org" className="float-right">
      <Image
        width="120px"
        alt="Powered by Open edX"
        src="https://logos.openedx.org/open-edx-logo-tag.png"
      />
    </Hyperlink>
  </PluginSlot>
);

export default StudioFooterLogoSlot;
