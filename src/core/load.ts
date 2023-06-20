import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet,
} from 'google-spreadsheet';

import { LoadSheetOptions } from '../types/load';

export const loadSheets = async (
  doc: Readonly<GoogleSpreadsheet>,
  options?: Readonly<LoadSheetOptions>
): Promise<GoogleSpreadsheetWorksheet[]> => {
  await doc.loadInfo();
  const { sheetIds, sheetsIndexes, sheetNames } = options || {};
  if (sheetsIndexes) {
    return await Promise.all(
      sheetsIndexes.map(async (index) => {
        return doc.sheetsByIndex[index];
      })
    );
  }
  if (sheetNames) {
    return await Promise.all(
      sheetNames.map(async (name) => {
        return doc.sheetsByTitle[name];
      })
    );
  }
  if (sheetIds) {
    return await Promise.all(
      sheetIds.map(async (id) => {
        return doc.sheetsById[id];
      })
    );
  }
  const count = doc.sheetCount;
  return await Promise.all(
    Array.from({ length: count }, (_, index) => index).map(async (index) => {
      return doc.sheetsByIndex[index];
    })
  );
};
