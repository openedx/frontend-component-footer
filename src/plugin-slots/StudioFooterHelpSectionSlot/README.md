# StudioFooterLogoSlot

### Slot ID: `org.openedx.frontend.layout.studio_footer_help_section.v1`

## Description

This slot is used to repace/modify/hide the help section to the studio footer.

![Screenshot of modified help section](./images/custom_help_section.png)

## Examples

### Customize help section.

The following `env.config.jsx` will add a custom help section to the studio footer.

```jsx
import { PLUGIN_OPERATIONS, DIRECT_PLUGIN } from '@openedx/frontend-plugin-framework';
import {
  Hyperlink,
  Button,
} from '@openedx/paragon';

const config = {
  pluginSlots: {
    'org.openedx.frontend.layout.studio_footer_help_section.v1': {
      keepDefault: false,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'studio_footer_helpsection_addition',
            type: DIRECT_PLUGIN,
            priority: 40,
            RenderWidget: () => {
              return (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px 5px' }}> 
                  <p>Custom Help Section custizable as needed </p>
                  <Button className="button button1">Go to home</Button>
                  <Hyperlink destination="https://example.com/">About</Hyperlink>
                  <Hyperlink destination="https://example.com/">Info</Hyperlink>
                </div>
              )
            }
          }
        },
      ],
    }
  },
};

export default config;
```
