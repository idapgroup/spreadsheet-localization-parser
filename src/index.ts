export {GoogleSpreadsheet}  from 'google-spreadsheet';
export {loadSheets} from './core/load';
export {parseSpreadsheets} from './core/parser';
export {writeTranslations} from './core/write-translations';

export * from './types/load';
export * from './types/parser';

// const worksheets = ['Test'];
//
// const languages = ['EN', 'PT', 'DE'];
//
// const columnKeyName = 'Android';
//
// const normalizeValue = (value: string) => {
//   return value
//     .replace(/%newline%/gi, '\\n')
//     .replace(/"/gi, '\\"')
//     .replace(/%([@dfs])/gi, '{{value}}');
// };
//
// const GOOGLE_SERVICE_ACCOUNT_EMAIL =
//   'test-472@test-parser-390310.iam.gserviceaccount.com';
// const GOOGLE_PRIVATE_KEY =
//   '-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC1sGTDpwyFhtDN\\n8/Yd87Q95IwqCd4+9Ky7JYVkqaYgqtX7pQa6hJB/Qor+B7o73vBny37nTfvLrmEy\\n8ERiE3IbJE/Uf59XhKhVkXwNujhO1LP1wOqmY3Pk4AqWZ/CsD0HmIopkKTI2nLQy\\nKQWBtokJde37KPcvNqD8K1dxGRcus0DadNgbCbOly7mcCOsXC1EK5C4uJvrgZUb9\\n2B/YXTpiNqW0OmkrzDCMgjMLisdzmG++FSkqsx4Y92PTnYF5wJSIVMG5/gueH0CD\\n0Lvk5jf2QZG0mIuPlj50piIUoTWFgW9hPOtDmMz3DutHK5x4lRvyOpyzm1UKf/Z5\\nCOxvQgx1AgMBAAECggEAAofQoJwgzOAnv1oFS5kSas6NKqRwZn6AVs/NVFIXJVIL\\nzn8Xs68yjgRXmoe64Tpzdk17oe3Qe+ivEXUOhHt2/uNaFZLO5tYUPCDdZIdEhe5E\\nnojYrhmW7yN+RIsD63mSEcD+HgW6Sz1t7Vt+eqPzRfM+wBQioTfIx4E0dhMnmgD1\\nhj1swe4yURdeZaOyAlNwn02XSQa84Btgn7rcCSZvjkrOBVBQhdlM+JHcX/hUlLOd\\nvFmu07+0I67pSzV7DlNnw7sIsmrV8Rug85lb4s2s1ITbIuFnGOTTm3tVg8j7ws2c\\nrH7XS4w0CvxA1K4R/6260d5jhn2j+oxBi+8GvU9KnwKBgQDve0wOmMS1RZM7M3rA\\n1xHtdUPP22yVG8GL5mNOiwYojlrv9OqYenbrI10TTtNpb9ZmYE74fxVJ+nsc5UYs\\nANfhZ0h6ddZ3zhrk1f/P5rxCYo/83GWG4rPw1NvsY1cyqjr85ONuC/9WV2xMg08p\\npB017+IgZoKoaFCvRjrUUi29/wKBgQDCOJw8vQntco8PH6E8F9zWLzf+EolN89ii\\nClwFw/Z0Fb7QnkOAMeS3iMOUVfhhMOB2y5O81uYeVR7zTNbec4LOp/xaQEJSGbz7\\n/4sSSkqs8YP2jwIf0RrQywRn+0+gopkHdcZOaVyO3tsk9sW4ooCc+1XzeGvHfB3S\\nsbZ8qhodiwKBgQC9/HriOaAUjxW2qaiAxB6c26Loi5Mg19w8OJIgBXrlQcozA4H5\\nZW5iLLPyVV6zDt5waYc87NTe07BHxDxfPGwHjgCZ5lI2yXPch0lijhJcOAUy/UYu\\nNDu8m6G9bzIGJ7aUWqFy9GGlBcYNDT8IMgJaf+xM+AY/xEH+SyDwwCE50QKBgQCn\\nc5eA5puAlZyyNVsWLJzCLcPg0qp/AxZr3vKoJeR/AaCazVj1Vg8UDl5Rri2P3kwp\\nICwoTD/rNwiQTFeVQ5IsCrmQNob3sik2O4T0KAlqQnC8S2BRfj/YdLE/1XU50faO\\ncASh5kVfCNV4cSrXnYO11Ryt5c1HGMO9vGrR4PbTMQKBgQCu4ShIVvAxny2VVwQ/\\nRO0bcv1Ro+5qpLDfxL9Ltcesjx08gXGHGU9WOzWRHkukUXG8telPSau5LZmArXtq\\nYruX8R95BR4ZQhqAPjkigD/wI5H/w3frwF6zO9Fv/F7SeaYYKgC4RKknhbKb4iOv\\nKawFxIjcK7YsJ1pOvXv8H0h4QQ==\\n-----END PRIVATE KEY-----\\n';
// const GOOGLE_SPREADSHEET_ID = '1M6KRycmM-8NGdlhYMidLVbvQyfh5AZn_6eW7cGT2-Vw';
//
// (async function () {
//   const doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID);
//
//   await doc.useServiceAccountAuth({
//     client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
//     private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//   });
//
//   const sheets = await loadSheets(doc, { sheetNames: worksheets });
//
//   const translations = await parseSpreadsheets(sheets, {
//     languages,
//     keyColumnName: columnKeyName,
//   });
//
//   writeTranslations('./src/i18n', translations);
//
//   console.log('Done!');
// })();
