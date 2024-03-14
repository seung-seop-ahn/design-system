import type { Preview } from "@storybook/react";
import '../src/index.css'
import "@fontsource/noto-sans/400.css"; // Specify weight
import "@fontsource/noto-sans/700.css"; // Specify weight

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
