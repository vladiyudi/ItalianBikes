
const { authGoogleCalendar } = require("../models/authGoogleCalendar");
const calendar = authGoogleCalendar();

async function getCalendarEvents(req, res, next) {
  try {
    const response = await calendar.events.list({
      calendarId: "vladiyuditech@gmail.com",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });
    const events = response.data.items;
    if (events.length) {
        console.log("EVENTS", events)
        req.body.events = events;
    } else {
      res.send("No upcoming events found.");
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Error fetching events");
  }

  next();
}


module.exports = { getCalendarEvents };
