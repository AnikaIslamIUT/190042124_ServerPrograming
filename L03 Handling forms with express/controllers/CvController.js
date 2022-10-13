const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));
  experiences = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experiences = JSON.parse(String(experiences));
  skills = fs.readFileSync("data/skill", { encoding: "utf-8" });
  skills = JSON.parse(String(skills));
  languages = fs.readFileSync("data/language", { encoding: "utf-8" });
  languages = JSON.parse(String(languages));


  edus = [];
  exp = [];
  ski = [];
  lan = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }
  for (let key in experiences) {
    exp.push(experiences[key]);
  }
  for (let key in skills) {
    ski.push(skills[key]);
  }

  for (let key in languages) {
    lan.push(languages[key]);
  }

  const username= req.body.username;
  const email = req.body.email;
  const profession = req.body.profession;
  const address = req.body.address;
  const phonenumber = req.body.phonenumber;

  res.render("cv", { name: username,email: email,profession:profession,address:address,phonenumber:phonenumber, educations: edus,experiences: exp,skills: ski, languages: lan });
};



module.exports = { getCV: getCV };
