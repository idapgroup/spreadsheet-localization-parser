import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';

import { ParsedTranslations, ParserOptions } from '../types/parser';

const parseSpreadsheet = async (
  sheet: Readonly<GoogleSpreadsheetWorksheet>,
  {
    keyColumnName,
    languages,
    normalizeValue,
    keepEmpty,
  }: Readonly<ParserOptions>,
): Promise<ParsedTranslations> => {
  const rows = await sheet.getRows();

  return languages.reduce((accumulator: ParsedTranslations, lang) => {
    const data = rows.reduce((acc: Record<string, string>, curr) => {
      const key = curr?.get(keyColumnName);
      const value = curr?.get(lang);
      if (!key) {
        return acc;
      }
      if (!value && !keepEmpty) {
        return acc;
      }
      const normalized = normalizeValue ? normalizeValue(value) : value;
      return { ...acc, [key]: normalized };
    }, {});

    return { ...accumulator, [lang]: data };
  }, {});
};

export const parseSpreadsheets = async (
  sheets: Readonly<GoogleSpreadsheetWorksheet[]>,
  options: Readonly<ParserOptions>,
): Promise<ParsedTranslations> => {
  const parsedSheets = await Promise.all(
    sheets.map((sheet) => parseSpreadsheet(sheet, options)),
  );

  return parsedSheets.reduce((acc, curr) => {
    const keys = Object.keys(curr);

    keys.forEach((key) => {
      acc = { ...acc, [key]: { ...acc[key], ...curr[key] } };
    });
    return acc;
  }, {});
};
