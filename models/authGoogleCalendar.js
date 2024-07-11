const { google } = require("googleapis");
const serviceAccount = require('../italian-bikes-1696133fc301.json')

function authGoogleCalendar() {
  const primaryKey = serviceAccount.private_key;
  const clientEmail = serviceAccount.client_email;

  const jwtClient = new google.auth.JWT(clientEmail, null, primaryKey, [
    "https://www.googleapis.com/auth/calendar",
  ]);

  const calendar = google.calendar({ version: "v3", auth: jwtClient });

  return calendar;
}

module.exports = { authGoogleCalendar };
