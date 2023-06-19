import {mkdirSync, writeFileSync} from 'fs';

import {ParsedTranslations} from '../types/parser';

export const writeTranslations = (
  path: string,
  translations: ParsedTranslations
) => {
  mkdirSync(path, { recursive: true });

  Object.keys(translations).forEach((language) => {
    writeFileSync(
      `${path}/${language}.json`,
      JSON.stringify(translations[language], null, 2),
      {}
    );
  });
};
