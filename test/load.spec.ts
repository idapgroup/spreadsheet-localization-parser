import {testDoc} from './test-doc.spec';
import {testCredentials} from './test-credentials.spec';
import {expect} from 'chai';
import {describe, it} from 'mocha';
import {loadSheets} from "../src";

describe('Fetching operations', () => {
  before(async () => {
    await testDoc.useServiceAccountAuth(testCredentials)
  });

  it('can fetch by names', async () => {
   const sheets = await loadSheets(testDoc, {sheetNames: ['Test']});
    expect(sheets.length).to.be.gt(0);
  });
  it('can fetch by ids', async () => {
   const sheets = await loadSheets(testDoc, {sheetIds: [1,2]});
    expect(sheets.length).to.be.gt(0);
  });
  it('can fetch by indexes', async () => {
   const sheets = await loadSheets(testDoc, {sheetIds: [0]});
    expect(sheets.length).to.be.gt(0);
  });
  it('can fetch by indexes', async () => {
   const sheets = await loadSheets(testDoc);
    expect(sheets.length).to.be.gt(0);
  });
});
