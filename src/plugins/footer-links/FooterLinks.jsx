import React from 'react';

import useFooterLinks from '@edx/frontend-component-footer/components/data/fetchFooterLinks';
import { PluginSlot } from '@openedx/frontend-plugin-framework';

import { LinkComponent } from './LinkComponent';

const FooterLinks = () => {
  const { data, loading } = useFooterLinks();

  if (loading) { return (<div>Loading...</div>); }

  return (
    <div className="footer-links-container">
      <div className="footer-navigation-container">
        <PluginSlot id="footer-links">
          <LinkComponent data={data} />
        </PluginSlot>
      </div>
    </div>
  );
};

export default FooterLinks;
