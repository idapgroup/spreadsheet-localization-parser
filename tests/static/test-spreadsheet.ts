import {JWT} from "google-auth-library";
import {GoogleSpreadsheet} from "google-spreadsheet";
import credentials from '../../spreadsheet-creds.json'

const testCredentials = {
  client_email: credentials.client_email,
  private_key: credentials.private_key,
}


const jwt = new JWT({
  email: testCredentials.client_email,
  key: testCredentials.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const TEST_SPREADSHEET = new GoogleSpreadsheet('1M6KRycmM-8NGdlhYMidLVbvQyfh5AZn_6eW7cGT2-Vw', jwt);

export const TEST_SHEET_NAMES = ['Test', 'Test2'];
