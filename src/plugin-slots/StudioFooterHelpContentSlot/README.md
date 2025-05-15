# StudioFooterLogoSlot

### Slot ID: `org.openedx.frontend.layout.studio_footer.help-content.v1`

### Slot ID Aliases
* `studio_footer_help_content_slot`

## Description

This slot is used to repace/modify/hide the help content to the studio footer.

## Examples

### Add a custom help content.

The following `env.config.jsx` will add a custom help content to the studio footer.

```jsx
import { PLUGIN_OPERATIONS, DIRECT_PLUGIN } from '@openedx/frontend-plugin-framework';
import {
  Hyperlink,
} from '@openedx/paragon';

const config = {
  pluginSlots: {
    'org.openedx.frontend.layout.studio_footer.help-content.v1': {
      keepDefault: true,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'studio_footer_helpcontent_addition',
            type: DIRECT_PLUGIN,
            priority: 40,
            RenderWidget: () => {
              return (
                <p> 
                  Custom Help content 
                  <Hyperlink destination="https://example.com/">more help</Hyperlink>
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
