const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");

function calculateTargetPosition(targetPosition, boxToMove) {
  const boxToMoveTargetLeft = targetPosition.x - parseInt(boxToMove.style.left);
  const boxToMoveTargetTop = targetPosition.y - parseInt(boxToMove.style.top);
  return { x: boxToMoveTargetLeft, y: boxToMoveTargetTop };
}

async function translateOneByOne() {
  try {
    await moveElement(
      redBox,
      calculateTargetPosition({ x: 20, y: 300 }, redBox)
    );
    console.log("Red target element has been moved");

    await moveElement(
      blueBox,
      calculateTargetPosition({ x: 400, y: 300 }, blueBox)
    );
    console.log("Blue target element has been moved");

    await moveElement(
      greenBox,
      calculateTargetPosition({ x: 400, y: 20 }, greenBox)
    );
    console.log("Green target element has been moved");
  } catch (err) {
    console.error(err);
  }
}
translateOneByOne();

async function translateAllAtOnce() {
  try {
    await Promise.all([
      moveElement(redBox, calculateTargetPosition({ x: 20, y: 300 }, redBox)),
      moveElement(
        blueBox,
        calculateTargetPosition({ x: 400, y: 300 }, blueBox)
      ),
      moveElement(
        greenBox,
        calculateTargetPosition({ x: 400, y: 20 }, greenBox)
      ),
    ]);
    console.log("All three color element have been moved");
  } catch (err) {
    console.error(err);
  }
}
translateAllAtOnce();
