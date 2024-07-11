const express = require('express');
const serverless = require('serverless-http');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const {getCalendarEvents} = require('../middlware/getCalendarEvents.js');
const {createNewCalendarEvent} = require('../middlware/createNewCalendarEvent.js');

app.use(cors());
app.use(express.json());

app.get('/.netlify/functions/api/getAllCaleendarEvents', getCalendarEvents, (req, res) => {
  res.send({
    events: req.body.events
  });
}) 

app.post('/.netlify/functions/api/createNewEvent', createNewCalendarEvent, (req, res) => {

  console.log('req.body', req.body)

  res.send({
    eventCreated: req.body.eventCreated
  });
})

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  return await handler(event, context);
}