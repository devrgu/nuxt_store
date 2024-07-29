const User = require("./models/User");
const Role = require("./models/Role");
const Card = require("./models/Card");
const Title = require("./models/Title");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("./config");

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authController {
  async registration(req, res) {
    try {
      const { username, password, email, phone } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        username,
        password: hashPassword,
        email,
        phone,
        roles: [userRole.value],
      });
      await user.save();
      return res.json({ message: "Пользователь успешно зарегистрирован" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь ${email} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Введен неверный пароль` });
      }
      const token = generateAccessToken(user._id, user.roles);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
      res.json("server work");
    } catch (e) {
      console.log(e);
    }
  }
  async cards(req, res) {
    try {
      const modelCard = new Card(req.body);
      const saveCardDB = await modelCard.save()
      console.log(saveCardDB)

      res.status(201).json(saveCardDB);
    } catch (err) {
      console.error("Error saving data:", err); // Логирование ошибки
      res.status(400).json({ message: err.message });
    }
  }
  async titles(req, res) {
    try {
      const modelTitle = new Title(req.body);
      const saveTitleDB = await modelTitle.save();
      console.log(saveTitleDB)

      res.status(201).json(saveTitleDB);
    } catch (e) {
      console.log(e);
    }
  }
  async cardsGet(req, res) {
    try {
      const cards = await Card.find()
      res.status(200).json(cards)

    } catch (err) {
      console.error("Error saving data:", err); // Логирование ошибки
      res.status(400).json({ message: err.message });
    }
  }
  async titlesGet(req, res) {
    try {
      const titles = await Title.find()
      res.status(200).json(titles)
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new authController();
