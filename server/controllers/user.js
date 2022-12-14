const bcrypt = require("bcrypt");

const User = require("../models/User");
const Session = require("../models/Session");
// const Habit = require("../models/Habit");

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const user = await User.getOneById(id);
    // console.log(user);
     res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function habitsShow(req, res) {
  try {
    const id = parseInt(req.params.id);
    const habit = await User.habits(id);
     res.status(200).json(habit);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function datesShow(req, res) {
  try {
    const id = parseInt(req.params.id);
    const dates = await User.dates(id);
     res.status(200).json(dates);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function register(req, res) {
  try {
    const data = req.body;

    // Generate a salt with a set time cost
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));

    //   Hash the password
    data["password"] = await bcrypt.hash(data["password"], salt);
    // data = {...data, dark_mode: "Default", avatar: ""};
    console.log(data);
    //   Send the username and password off to make a new user
    const result = await User.create(data);

    //   Send it back
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    // Try and get that user
    // console.log(username, password);
    const user = await User.getOneByUsername(username);
    // Check if the password submitted is the correct one
    const authenticated = await bcrypt.compare(password, user.password);
    if (authenticated) {
      // If password correct

      // Generate a session for user when they log in
      const newSession = await Session.create(user.id);
      res.status(200).json({
        authenticated: true,
        session: newSession.session_token,
        account_id: user.id,
      });
    } else {
      // If password is incorrect
      throw new Error("Incorrect credentials");
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: err });
  }
}

async function logout(req, res) {
  try {
    const session = await Session.getOneByAccountId(req.params.id);
    const user = await User.getOneById(req.params.id);
    const resp = await session.destroy();
    res.status(200).json({ username: user.username });
  } catch (err) {
    console.log(err);
    res.status(404).json({ err });
  }
}

async function destroy(req, res) {
  try {
    const user = await User.getOneById(req.params.id);
    const resp = await user.destroy();
    res.status(204).json(resp);
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function update(req, res) {
  try {
    const newUser = req.body;
    // console.log("newUser",newUser)
    const id = req.params.id;
    const user = await User.getOneById(id);
    // console.log("User",user)
    if (user.password != newUser.password) {
      const salt = await bcrypt.genSalt(
        parseInt(process.env.BCRYPT_SALT_ROUNDS)
      );
      //   Hash the password
      newUser["password"] = await bcrypt.hash(newUser["password"], salt);
    }
    // console.log(newUser);
    const changedUser = await User.update(newUser);
    // console.log("changedUser",changedUser)
    res.status(200).json(changedUser);
  } catch (err) {
    res.status(417).send({ err });
  }
}

module.exports = { show, register, login, logout, destroy, update, habitsShow,datesShow  };
