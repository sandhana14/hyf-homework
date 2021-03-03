const express = require("express");
const app = express();
const router = express.Router();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use("/calculator", router);

//GET REQUEST
router.get("/:mathoperator", (request, response) => {
  let mathOperator = request.params.mathoperator.toLowerCase();
  function calculator(MathOperation) {
    const firstParameter = request.query.firstParam;
    let totalOfFirstParameters;
    if (typeof firstParameter === "string" && firstParameter !== "") {
      totalOfFirstParameters = Number(firstParameter);
    } else if (
      typeof firstParameter === "object" &&
      !firstParameter.includes("") &&
      firstParameter !== null
    ) {
      totalOfFirstParameters = firstParameter
        .map(Number)
        .reduce((current_value, accumalator) =>
          MathOperation(current_value, accumalator)
        );
    }

    const secondParameter = request.query.secondParam;
    let totalOfSecondParameters;
    if (typeof secondParameter === "string" && secondParameter !== "") {
      totalOfSecondParameters = Number(secondParameter);
    } else if (
      typeof secondParameter === "object" &&
      !secondParameter.includes("") &&
      secondParameter !== null
    ) {
      totalOfSecondParameters = secondParameter
        .map(Number)
        .reduce((current_value, accumalator) =>
          MathOperation(current_value, accumalator)
        );
    }
    if (!isNaN(totalOfFirstParameters) && !isNaN(totalOfSecondParameters)) {
      return response.send(
        `Addition of two parameters ${totalOfFirstParameters} and ${totalOfSecondParameters} is ${MathOperation(
          totalOfFirstParameters,
          totalOfSecondParameters
        )}`
      );
    } else {
      return response
        .status(400)
        .send("Please enter the integers in the parameters");
    }
  }

  if (mathOperator === "add") {
    calculator((a, b) => a + b);
  } else if (mathOperator === "multiply") {
    calculator((a, b) => a * b);
  } else if (mathOperator === "subtract") {
    calculator((a, b) => a - b);
  } else if (mathOperator === "division") {
    calculator((a, b) => a / b);
  }
});

////POST REQUEST
router.post("/:mathoperator", (request, response) => {
  let mathOperator = request.params.mathoperator.toLowerCase();
  function calculator(MathOperation) {
    const firstParameter = request.body.firstParam;
    let totalOfFirstParameters;
    if (typeof firstParameter === "string" && firstParameter !== "") {
      totalOfFirstParameters = Number(firstParameter);
    } else if (
      typeof firstParameter === "object" &&
      !firstParameter.includes("") &&
      firstParameter !== null
    ) {
      totalOfFirstParameters = firstParameter
        .map(Number)
        .reduce((current_value, accumalator) =>
          MathOperation(current_value, accumalator)
        );
    }

    const secondParameter = request.body.secondParam;
    let totalOfSecondParameters;
    if (typeof secondParameter === "string" && secondParameter !== "") {
      totalOfSecondParameters = Number(secondParameter);
    } else if (
      typeof secondParameter === "object" &&
      !secondParameter.includes("") &&
      secondParameter !== null
    ) {
      totalOfSecondParameters = secondParameter
        .map(Number)
        .reduce((current_value, accumalator) =>
          MathOperation(current_value, accumalator)
        );
    }
    if (!isNaN(totalOfFirstParameters) && !isNaN(totalOfSecondParameters)) {
      return response.send(
        `Addition of two parameters ${totalOfFirstParameters} and ${totalOfSecondParameters} is ${MathOperation(
          totalOfFirstParameters,
          totalOfSecondParameters
        )}`
      );
    } else {
      return response
        .status(400)
        .send("Please enter the integers in the parameters");
    }
  }

  if (mathOperator === "add") {
    calculator((a, b) => a + b);
  } else if (mathOperator === "multiply") {
    calculator((a, b) => a * b);
  } else if (mathOperator === "subtract") {
    calculator((a, b) => a - b);
  } else if (mathOperator === "division") {
    calculator((a, b) => a / b);
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
