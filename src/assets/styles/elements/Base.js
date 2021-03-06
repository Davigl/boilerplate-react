import { createGlobalStyle } from 'styled-components';

import NeurialGroteskMedium from '~/assets/fonts/NeurialGrotesk-Medium.otf';
import NeurialGroteskRegular from '~/assets/fonts/NeurialGrotesk-Regular.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NeurialGrotesk-Regular';
    src: url(${NeurialGroteskRegular});
  }

  @font-face {
    font-family: 'NeurialGrotesk-Medium';
    src: url(${NeurialGroteskMedium});
  }

  body { }
`;

export default GlobalStyle;
