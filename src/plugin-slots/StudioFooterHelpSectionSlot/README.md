# StudioFooterLogoSlot

### Slot ID: `org.openedx.frontend.layout.studio_footer.help_section.v1`

### Slot ID Aliases
* `studio_footer_help_section_slot`

## Description

This slot is used to repace/modify/hide the help section to the studio footer.

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
    'org.openedx.frontend.layout.studio_footer.help_section.v1': {
      keepDefault: true,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'studio_footer_helpsection_addition',
            type: DIRECT_PLUGIN,
            priority: 40,
            RenderWidget: () => {
              return (
                <p> 
                  Custom Help Section custizable as needed 
                  <Button className="button button1">Go to home</button>
                  <Hyperlink destination="https://example.com/">About</Hyperlink>
                  <Hyperlink destination="https://example.com/">Info</Hyperlink>
                </p>
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
