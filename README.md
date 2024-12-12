# Google spreadsheet localization parser [![NPM Module](https://img.shields.io/npm/v/@idapgroup/spreadsheet-localization-parser.svg)](https://www.npmjs.com/package/@idapgroup/spreadsheet-localization-parser)

Parse google spreadsheet to json i18n localization files.

> For auth and load sheets use [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet) package

## Installation
With npm:
``` sh
npm install @idapgroup/spreadsheet-localization-parser
``` 
or with yarn:s
```sh
yarn add @idapgroup/spreadsheet-localization-parser
```

## Example
> **IMPORTANT NOTE** - If you need to call await in a script at the root level, you must instead wrap it in an async function like so:

```typescript
(async function() {
  await someAsyncFunction();
}());
````
### Basic usage

```typescript
import {GoogleSpreadsheet} from "google-spreadsheet";
import { JWT } from 'google-auth-library';

import {
  loadSheets,
  normalizeDynamicValue,
  parseSpreadsheets,
  writeTranslations
} from "@idapgroup/spreadsheet-localization-parser";

import creds from './config/myapp-1dd646d7c2af.json'; // the file saved above

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: SCOPES,
});
const doc = new GoogleSpreadsheet('<YOUR-DOC-ID>', jwt);

/**
  * load all sheets or specific
  * @param {GoogleSpreadsheet} doc - initialized GoogleSpreadsheet instance 
  * @param {LoadSheetOptions} options - optional options for filter sheets by title, id or index
*/
const sheets = await loadSheets(doc)

// parser options
const parseOptions: ParseOptions = {
  keyColumnName: 'key', // key column name for parse(column name must be equal to this key)
  languages: ['en', 'de'], // languages for parse(column name must be equal to language)
  normalizeValue: normalizeDynamicValue, // optional callback for normalize dynamic value by you i18n lib rules
  keepEmpty: false, // optional keep empty values
}
/**
 * parse sheets
 * @param {GoogleSpreadsheetWorksheet[]} sheets - array of GoogleSpreadsheetWorksheet instances
 * @param {ParseOptions} options - parser options 
*/
const translations = await parseSpreadsheets(sheets, parseOptions);

/**
 * write translations to files
 * @param {string} path - path to directory for write files
 * @param {ParsedTranslations} translations - translations object
*/
writeTranslations(path, translations)


```

More info about GoogleSpreadsheet and GoogleSpreadsheetWorksheet:
- [GoogleSpreadsheet](https://theoephraim.github.io/node-google-spreadsheet/#/classes/google-spreadsheet)
- [GoogleSpreadsheetWorksheet](https://theoephraim.github.io/node-google-spreadsheet/#/classes/google-spreadsheet-worksheet)
- [Authentication](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication)

### Normalize dynamic value

Transform string value with regexp pattern to dynamic value
You can write your own normalize function for your i18n lib

```typescript
import {normalizeDynamicValue} from "@idapgroup/spreadsheet-localization-parser";

normalizeDynamicValue('First %d days free') // output - First {{value}} days free

// use for parser with options
const options = {
  prefix: '{{',
  suffix: '}}',
  dynamicValueName: 'value',
}
parseSpreadsheets(sheets, {languages, keyColumnName, normalizeValue: (value) =>  normalizeDynamicValue(value, options)})
````

