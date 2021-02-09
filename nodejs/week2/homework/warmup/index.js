const express = require("express");
const app = express();
const router = express.Router();

app.use("/numbers", router);

router.get("/add", (req, res) => {
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const sumOfTwoNumbers = firstNumber + secondNumber;
  res.send(
    `Addition of ${firstNumber} and ${secondNumber} is ${sumOfTwoNumbers}`
  );
});

router.get("/multiply/:firstnumber/:secondnumber", (req, res) => {
  const firstNumber = parseInt(req.params.firstnumber);
  const secondNumber = parseInt(req.params.secondnumber);
  const multiplicationOfTwoNumbers = firstNumber * secondNumber;
  res.send(
    `Multiplication of ${firstNumber} and ${secondNumber} is ${multiplicationOfTwoNumbers}`
  );
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
