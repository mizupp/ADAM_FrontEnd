const Habit = require("../models/Habit");

async function index(req, res) {
  try {
    const habits = await Habit.getAll();
    res.status(200).json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    const result = await Habit.create(data);
    res.status(201).send(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const habit = await Habit.getOneById(id);
    res.json(habit);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const habit = await Habit.update(req.body);
    res.status(200).json(habit);
  } catch (err) {
    res.status(417).json({ err });
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(req.params.id);
    const habit = await Habit.getOneById(id);
    const result = await habit.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
