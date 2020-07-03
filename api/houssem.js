const express = require("express");
const router = express.Router();
const Data = require("../model/basic");
const Education = require("../model/education");
const Mail = require("../model/mail");
const Project = require("../model/Project");
const Admin = require("../model/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();
const auth = require("../auth");
router.post("/basic", auth, async (req, res) => {
  try {
    let {
      id,
      homeImage,
      homeParagraph,
      homeFacebook,
      homeGithub,
      aboutParagraph,
      aboutCv,
      aboutSkill1,
      aboutSkill2,
      aboutSkill3,
      contactPhone,
      contactAdress,
      contactEmail,
      skills,
      age,
      aboutImage,
    } = req.body;
    skills = skills.split(",");

    const data = await Data.findByIdAndUpdate(id, {
      homeImage,
      homeParagraph,
      homeFacebook,
      homeGithub,
      aboutParagraph,
      aboutCv,
      aboutSkill1,
      aboutSkill2,
      aboutSkill3,
      contactPhone,
      contactAdress,
      contactEmail,
      skills,
      age,
      aboutImage,
    });
    res.json("sucess");
  } catch (error) {
    res.json(error);
  }
});
router.get("/basic", async (req, res) => {
  try {
    const data = await Data.find();

    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
router.post("/education", auth, async (req, res) => {
  try {
    const add = new Education(req.body);
    await add.save();
    res.json("sucess");
  } catch (error) {}
});
router.get("/education", async (req, res) => {
  try {
    const add = await Education.find();

    res.json(add);
  } catch (error) {}
});
router.post("/educationdelete", auth, async (req, res) => {
  try {
    const id = req.body.id.trim();
    const add = await Education.findByIdAndDelete(id);

    res.json("sucees");
  } catch (error) {
    console.log(error);
  }
});
router.post("/mail", async (req, res) => {
  try {
    const mail = new Mail(req.body);
    await mail.save();
    res.json("Email send with success");
  } catch (error) {
    res.json("something went wrong");
  }
});
router.post("/project", auth, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json("project added success");
  } catch (error) {
    res.json("something went wrong");
  }
});
router.get("/project", async (req, res) => {
  try {
    const project = await Project.find().sort({ order: -1 });

    res.json(project);
  } catch (error) {
    res.json("something went wrong");
  }
});
router.post("/projectdelete", auth, async (req, res) => {
  try {
    const id = req.body.id.trim();
    const add = await Project.findByIdAndDelete(id);

    res.json("sucees");
  } catch (error) {
    console.log(error);
  }
});
router.post("/admin", async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await Admin.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "invalid credentails" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "invalid credentails" });
    }
    const payload = {
      user: user.id,
    };
    jwt.sign(
      payload,
      process.env.secret,
      { expiresIn: 36000 },
      (error, token) => {
        if (error) {
          throw error;
        } else {
          res.json({ token });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
});
router.post("/loggin", async (req, res) => {
  const token = req.body.token;

  try {
    if (!token) {
      return res.status(401).json({ msg: "no token authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.secret);
    if (!decoded) {
      return res.status(400);
    }
    res.json("succes");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
