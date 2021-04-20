const express = require("express");
const router = express.Router();
const fs = require("fs");
const datafolderPath = `${__dirname}/data`;
/**
 * This makes  post request from client side and get response body
 * Then we write this response in json file 
 * use url : http://localhost:3000/student/add
 * Method:POST
 */
router.post("/add", (req, res) => {
  const clientData = req.body;
  fs.writeFile(
    `${datafolderPath}/studentsData.json`,
    JSON.stringify(clientData),
    (err) => {
      if (err) {
        console.log("Error creating user:", err);
      } else {
        console.log("User created successfully");
        res.send({ result: "Success" });
      }
    }
  );
});
/**
 * This function takes data from student.json file and displays it in the body 
 * use URL: http://localhost:3000/student/getData
 * method: GET
 */
router.get("/getData", (req, res) => {
  fs.readFile(`${datafolderPath}/studentsData.json`, (err, data) => {
    const readDataJson = JSON.parse(data);
    err
      ? console.log("you Got the error mission failed", err)
      : res.send(readDataJson);
  });
});
module.exports = router;
