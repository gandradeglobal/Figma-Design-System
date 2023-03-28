/* eslint-disable */
import { LIBProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * LIB
 * Function for dynamically creating and auto-completing
 * LIB design system files.
 * @param {DSysProp} dsysStyles
 * @param {Object} CSS.Properties
 * @return {CSS.Properties}
 */
export default function lib(
  dsysStyles: LIBProp,
  otherStyles: CSS.Properties = {},
) : CSS.Properties {
  const dsysStylesObj: {[key:`--LIB-${string}`]: string} = {};
  Object.entries(dsysStyles).map((entry) => {
    if (entry[1] === true) {
      dsysStylesObj[`--lib-${entry[0]}`] = '1';
    }else{
      dsysStylesObj[`--lib-${entry[0]}`] = `var( --lib-${entry[1]} )`;
    }
  });
  return {
    ...dsysStylesObj,
    ...otherStyles,
  };
}
