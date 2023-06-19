import {expect} from "chai";
import {GoogleSpreadsheetWorksheet} from "google-spreadsheet";
import {describe, it} from "mocha";
import {loadSheets, parseSpreadsheets} from "../src";
import {testCredentials} from "./static/test-credentials.spec";
import {TEST_SHEET_NAMES, TEST_SPREADSHEET} from "./static/test-doc.spec";

let sheets: GoogleSpreadsheetWorksheet[] = [];
const languages = ['EN', 'DE'];
const keyColumnName = 'Android';
describe('Parser operations', () => {
  before(async () => {
    await TEST_SPREADSHEET.useServiceAccountAuth(testCredentials)
    sheets = await loadSheets(TEST_SPREADSHEET, { sheetNames: TEST_SHEET_NAMES });
  });

  it('can fetch by names', async () => {
    const translations = await parseSpreadsheets(sheets, {languages, keyColumnName});
    expect(Object.keys(translations).length).to.equal(languages.length);
    expect(Object.keys(translations[languages[0]]).length).to.gt(0);
  });

  it('can correct parse sheets', async () => {
    const translations = await parseSpreadsheets(sheets, {languages, keyColumnName});
    const translationByLang = translations[languages[0]];
    expect(translationByLang['register']).to.equal('Register');
    expect(translationByLang['intro_message']).to.equal('You’re not alone');
  });

  it('keep empty value', async () => {
    const translations = await parseSpreadsheets(sheets, {languages, keyColumnName, keepEmpty: true});
    const translationByLang = translations[languages[0]];
    expect('keep_empty' in translationByLang).to.not.be.undefined;
  });

  it('normalize value', async () => {
    const translations = await parseSpreadsheets(sheets, {languages, keyColumnName, normalizeValue: (value) => value.toLowerCase()});
    const translationByLang = translations[languages[0]];
    expect(translationByLang['register']).to.equal('register');
  });
});
