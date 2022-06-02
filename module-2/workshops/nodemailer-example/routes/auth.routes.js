const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const updloader = require('../config/cloudinary.config');
const transporter = require("../config/nodemailer.config");
const welcomeTemplate = require("../templates/welcome.template");
const SALT_FACTOR = 12;

const router = require("express").Router();

router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
})

router.post('/signup', updloader.single('profilePic'), async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.file);

  if (!email || !password) {
    return res.render('auth/signup', {
      errorMessage: "Credentials are mondatory!"
    })
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
  if (!regex.test(password)) {
    return res.render('auth/signup', {
      errorMessage: "Password needs to have 8 char, including lower/upper case and a digit"
    })
  }

  try {
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return res.render('auth/signup', {
        errorMessage: "Email already in use"
      })
    } else {
      const hashedPassword = bcrypt.hashSync(password, SALT_FACTOR);
      await User.create({
        email,
        password: hashedPassword,
        profilePic: req.file.path
      })

      await transporter.sendMail({
        from: "Book App <ironhacknodemailer@gmail.com>",
        to: email,
        subject: "Welcome to Book App",
        html: welcomeTemplate(email)
      })

      res.redirect('/auth/login');
    }

  } catch (error) {
    next(error);
  }
})

router.get('/login', (req, res, next) => {
  res.render('auth/login');
})

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.render('auth/login', {
      errorMessage: "Credentials are mondatory!"
    })
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
  if (!regex.test(password)) {
    return res.render('auth/login', {
      errorMessage: "Password needs to have 8 char, including lower/upper case and a digit"
    })
  }

  try {
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.render('auth/login', {
        errorMessage: "Wrong credentials"
      })
    }

    const checkPassword = bcrypt.compareSync(password, foundUser.password);
    if (!checkPassword) {
      return res.render('auth/login', {
        errorMessage: "Wrong credentials"
      })
    }

    const objectUser = foundUser.toObject();
    delete objectUser.password;
    req.session.currentUser = objectUser;

    return res.redirect('/');
  } catch (error) {

  }
})

module.exports = router;