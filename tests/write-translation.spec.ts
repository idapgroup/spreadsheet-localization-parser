import {describe, it} from 'mocha';
import {TEST_SHEET_NAMES, TEST_SPREADSHEET} from './static/test-spreadsheet';
import {
  loadSheets,
  ParsedTranslations,
  parseSpreadsheets,
  writeTranslations,
} from '../src';
import {expect} from 'chai';

let translations: ParsedTranslations;
const languages = ['EN', 'DE'];
const keyColumnName = 'Android';
describe('Write file operations', () => {
  before(async () => {
    const sheets = await loadSheets(TEST_SPREADSHEET, {
      sheetNames: TEST_SHEET_NAMES,
    });
    translations = await parseSpreadsheets(sheets, {
      languages,
      keyColumnName,
    });
  });

  it('can save files', () => {
    const path = 'tests/i18n';
    const res = writeTranslations(path, translations);
    expect(res).to.be.true;
  });
});
