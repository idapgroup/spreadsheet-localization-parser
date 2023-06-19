import { mkdirSync, writeFileSync } from 'fs';

import { ParsedTranslations } from '../types/parser';

export const writeTranslations = (
  path: string,
  translations: ParsedTranslations
): boolean => {
  try {
    const __dirname = `${process.cwd()}/${path}`;
    mkdirSync(__dirname, { recursive: true });

    Object.keys(translations).forEach((language) => {
      writeFileSync(
        `${__dirname}/${language}.json`,
        JSON.stringify(translations[language], null, 2)
      );
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
