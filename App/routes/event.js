const express = require("express");
const router = express.Router();

const Action = require("../models/Event");

router.post("/register", async (req, res) => {
  try {
    const {
      name,
      description,
      location,
      date,
      time,
      organizer,
      registrations,
    } = req.body;
    const event = new Action({
      name: name,
      description: description,
      location: location,
      date: date,
      time: time,
      organiser: organizer,
      registrations: registrations,
    });
    console.log(event);
    const savedEvent = await event.save();
    res.json(savedEvent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/get-event", async (req, res) => {
  const eve = await Action.find({});
  return res.send(eve);
});

module.exports = router;
