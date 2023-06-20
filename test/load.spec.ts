import {TEST_SHEET_NAMES, TEST_SPREADSHEET} from './static/test-doc.spec';
import {testCredentials} from './static/test-credentials.spec';
import {expect} from 'chai';
import {describe, it} from 'mocha';
import {loadSheets} from "../src";

describe('Fetching operations', () => {
  before(async () => {
    await TEST_SPREADSHEET.useServiceAccountAuth(testCredentials)
  });

  it('can fetch by names', async () => {
   const sheets = await loadSheets(TEST_SPREADSHEET, {sheetNames: TEST_SHEET_NAMES});
    expect(sheets.length).to.be.equal(2);
  });
  it('can fetch by ids', async () => {
   const sheets = await loadSheets(TEST_SPREADSHEET, {sheetIds: [1,2]});
    expect(sheets.length).to.be.equal(2);
  });
  it('can fetch by indexes', async () => {
   const sheets = await loadSheets(TEST_SPREADSHEET, {sheetsIndexes: [0]});
    expect(sheets.length).to.be.equal(1);
  });
  it('can fetch all sheets', async () => {
   const sheets = await loadSheets(TEST_SPREADSHEET);
    expect(sheets.length).to.be.gt(0);
  });
});
