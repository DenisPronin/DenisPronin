import { hex2Rgba } from '../helpers/color';

export const Colors = {
  WHITE: '#FFFFFF',
  GREY: '#e2e8f0',
  GREY2: '#7f97bf',
  MINT: '#5eead4',
  MINT2: '#2DD4BF',
};

export const ColorsOpacity = {
  MINT2_10: hex2Rgba(Colors.MINT2, 0.1),
};
