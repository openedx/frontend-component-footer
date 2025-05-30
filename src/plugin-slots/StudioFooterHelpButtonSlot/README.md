# StudioFooterLogoSlot

### Slot ID: `org.openedx.frontend.layout.studio_footer_help_button.v1`

## Description

This slot is used to repace/modify/hide the help button to the studio footer.

## Examples

### Add your custom button.

The following `env.config.jsx` will add a custom help button to the studio footer.

![Screenshot of modified help button](./images/custom_help_button.png)

```jsx
import { PLUGIN_OPERATIONS, DIRECT_PLUGIN } from '@openedx/frontend-plugin-framework';
import {
  Button,
} from '@openedx/paragon';

const config = {
  pluginSlots: {
    'org.openedx.frontend.layout.studio_footer_help_button.v1': {
      keepDefault: false,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'studio_footer_helpbutton_addition',
            type: DIRECT_PLUGIN,
            priority: 40,
            RenderWidget: ({isOpen, setIsOpen}) => {
              return (
                <Button className="button button1" onClick={() => setIsOpen(!isOpen)}>Custom Help Button</Button>
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
