import { css } from 'styled-components';
import { BREAKPOINTS } from '../constants';

const media = Object.keys(BREAKPOINTS).reduce((acc, breakpoint) => {
  acc[breakpoint] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[breakpoint]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default {
  media,
};

export {
  media,
};
