import { css } from 'styled-components';

// 'auto', '10%', '12px', '10em' or other string => string as is
// any numbers (0, 1, 0.1) => number with dimension like '1px'
export function cssValueConvert(value, dim = 'px') {
  return typeof value === 'string' ? value : `${value}${dim}`;
}

// accept single value or array of 1..4 items
// 1 => 1px
// ['none'] => 'none'
// [0, 'auto'] => '0px auto'
// ['1px', '2%', 3] => '1px 2% 3px'
export function cssInvariant(variant, dim = 'px') {
  if (Array.isArray(variant)) {
    return variant.map((item) => cssValueConvert(item, dim)).join(' ');
  }

  // single value
  return cssValueConvert(variant, dim);
}

export const cssFlipHorizontal = css`
  transform: scaleX(-1);
`;

export const cssCursorPointer = css`
  cursor: pointer;
`;

export const cssFullHeight = css`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
`;
