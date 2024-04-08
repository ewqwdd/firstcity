import { google, sheets_v4 } from "googleapis";

interface Success {
    data: sheets_v4.Schema$ValueRange,
    status: 200
}

interface Error {
    data: unknown,
    status: 500
}

export async function getSheetValues(): Promise<Success | Error> {
  try {
    // Initialize the Google Sheets API authorization
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL!,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      'https://www.googleapis.com/auth/spreadsheets'
    );

    // Create a Google Sheets instance
    const sheets = google.sheets({
      version: 'v4',
      auth
    });

    // Specify the spreadsheet ID and range you want to retrieve values from
    const spreadsheetId = process.env.GOOGLE_SHEET_ID_TESTIMONIALS;
    const range = 'A2:D'; // Adjust the range according to your needs

    // Fetch the values from the specified range in the spreadsheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // Return the fetched values
    return {
      status: 200,
      data: response.data
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      data: err
    };
  }
}