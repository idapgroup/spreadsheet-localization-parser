// function for transform regex to interpolation for i18n
import {NormalizeDynamicValueOptions} from "../types/normalize-dynamic-value";

const defaultOptions: NormalizeDynamicValueOptions = {
  prefix: '{{',
  suffix: '}}',
  dynamicValueName: 'value',
}

export const normalizeDynamicValue = (value: string, options?: Readonly<NormalizeDynamicValueOptions> ) => {

  const { prefix, suffix, dynamicValueName } = { ...defaultOptions, ...options || {} };

  const regex = /(%\d*(?:\.\d*)?[sdf])/g;
  const matches = value.match(regex);
  if (!matches) {
    return value;
  }

  return matches.reduce((acc, curr, index) => {
    const interpolationValue = matches.length > 1 ? `${prefix}${dynamicValueName}${index + 1}${suffix}` : `${prefix}${dynamicValueName}${suffix}`;
    return acc.replace(curr, interpolationValue);
  }, value);

}
