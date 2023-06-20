import {expect} from "chai";
import {describe, it} from "mocha";
import {normalizeDynamicValue} from "../src";

const testValues: Record<string,string> = {
  info: 'Info',
  trial_plan: 'First %d days free',
  app_version: 'App Version %s',
  full_name: '%1s %2s',
  price_format: '$%.2f',
  subs_free_months: "12 months at %s /mo SAVE 55\\%%",
}
describe('Normalize value', () => {

  it('correct normalize value', async () => {
    const value = normalizeDynamicValue(testValues.info);
    expect(value).to.equal('Info');
    const value1 = normalizeDynamicValue(testValues.trial_plan);
    expect(value1).to.equal('First {{value}} days free');
    const value2 = normalizeDynamicValue(testValues.app_version);
    expect(value2).to.equal('App Version {{value}}');
    const value3 = normalizeDynamicValue(testValues.full_name);
    expect(value3).to.equal('{{value1}} {{value2}}');
    const value4 = normalizeDynamicValue(testValues.price_format);
    expect(value4).to.equal('${{value}}');
    const value5 = normalizeDynamicValue(testValues.subs_free_months);
    expect(value5).to.equal('12 months at {{value}} /mo SAVE 55\\%%');
  });
  it('normalize with options', async () => {
    const value1 = normalizeDynamicValue(testValues.trial_plan, {dynamicValueName: 'arg', prefix: '{', suffix: '}'});
    expect(value1).to.equal('First {arg} days free');
  });
});
