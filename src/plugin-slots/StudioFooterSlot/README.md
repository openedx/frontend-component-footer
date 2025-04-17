# StudioFooterSlot

### Slot ID: `org.openedx.frontend.layout.studio_footer.v1`

### Slot ID Aliases
* `studio_footer_slot`

## Description

This slot is used to repace/modify/hide the entire studio footer.

## Example

The following `env.config.jsx` will replace the default studio footer.

![Screenshot of default studio footer](./images/default_studio_footer.png)

with a simple custom footer

![Screenshot of custom footer](./images/custom_footer.png)

```jsx
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    'org.openedx.frontend.layout.studio_footer.v1': {
      plugins: [
        {
          // Hide the default footer
          op: PLUGIN_OPERATIONS.Hide,
          widgetId: 'default_contents',
        },
        {
          // Insert a custom footer
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_footer',
            type: DIRECT_PLUGIN,
            RenderWidget: () => (
              <h1 style={{textAlign: 'center'}}>🦶</h1>
            ),
          },
        },
      ]
    }
  },
}

export default config;
```
