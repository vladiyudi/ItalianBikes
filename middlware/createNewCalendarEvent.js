const { authGoogleCalendar } = require("../models/authGoogleCalendar");
const calendar = authGoogleCalendar();


async function createNewCalendarEvent(req, res, next) {
    const event = req.body.event;

    try {
        const response = await calendar.events.insert({
          calendarId: 'vladiyuditech@gmail.com', 
          resource: event,
        });
        req.body.eventCreated = response.data;
        next();
      } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).send('Error adding event');
      }
}


module.exports = { createNewCalendarEvent };