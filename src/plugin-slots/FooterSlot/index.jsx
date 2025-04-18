import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import Footer from '../../components/Footer';

const FooterSlot = () => (
  <PluginSlot id="org.openedx.frontend.layout.footer.v1" idAliases={['footer_slot']}>
    <Footer />
  </PluginSlot>
);

export default FooterSlot;
